import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';
import { VERIFIED_VERSES } from './src/data/verifiedVerses.js';
import { getSemanticGuidance } from './src/data/semanticWisdom.js';

dotenv.config();
process.env.DISABLE_HMR = 'true';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json());

// Initialize Gemini SDK with User-Agent as required by AI Studio skill
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey) {
  aiClient = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Resilient API quota & rate limit tracker
let quotaCooldownUntil = 0;

function isQuotaError(err: any): boolean {
  if (!err) return false;
  const str = typeof err === 'string' ? err : `${err?.message || ''} ${JSON.stringify(err)}`;
  return (
    str.includes('429') ||
    str.includes('RESOURCE_EXHAUSTED') ||
    str.includes('Quota exceeded') ||
    str.includes('rate-limit') ||
    str.includes('FreeTier')
  );
}

// Language metadata guide for the AI prompt
const LANGUAGE_INSTRUCTIONS: Record<string, { name: string; nativeName: string; scriptGuide: string }> = {
  en: {
    name: 'English',
    nativeName: 'English',
    scriptGuide: 'Provide the response entirely in natural, clear, comforting English.',
  },
  sd: {
    name: 'Sindhi',
    nativeName: 'سنڌي',
    scriptGuide:
      'Provide the response entirely in authentic, natural Sindhi using the correct Sindhi-Arabic writing system (سنڌي الفابيٽ). Maintain natural Sindhi grammatical idioms and reverent vocabulary.',
  },
  ur: {
    name: 'Urdu',
    nativeName: 'اردو',
    scriptGuide:
      'Provide the response entirely in natural, respectful, and articulate Urdu using the standard Urdu script (اردو رسم الخط). Use elegant and compassionate phrasing.',
  },
  hi: {
    name: 'Hindi',
    nativeName: 'हिन्दी',
    scriptGuide:
      'Provide the response entirely in clear, natural Hindi using the Devanagari script (हिन्दी). Ensure respectful and uplifting phrasing.',
  },
  ta: {
    name: 'Tamil',
    nativeName: 'தமிழ்',
    scriptGuide:
      'Provide the response entirely in natural, authentic Tamil using the Tamil script (தமிழ்). Provide simple, meaningful, and heartfelt explanations.',
  },
  gu: {
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    scriptGuide:
      'Provide the response entirely in natural, authentic Gujarati using the Gujarati script (ગુજરાતી). Provide warm and encouraging everyday explanations.',
  },
};

// System instruction enforcing dynamic relevance, 3-part structure, and scriptural accuracy
const GITA_SYSTEM_INSTRUCTION = `
You are the "Gita Life Guide", a reverent educational and philosophical guide grounded in the Bhagavad Gita.
Your mission is to provide fresh, relevant, context-aware answers to every user question, followed by an authentic Bhagavad Gita shloka and a practical modern life lesson.

MANDATORY 3-PART RESPONSE STRUCTURE:
1. 'summary': Shri Krishna's Guidance.
   First, directly answer the user's specific situation in natural, compassionate language, inspired by Shri Krishna's teachings in the Bhagavad Gita.
   - Address the user's situation directly (anger, exam failure, future anxiety, discipline, relationships, grief, etc.).
   - Offer practical, understandable counsel.
   - Clearly label this as guidance inspired by Shri Krishna's teachings (never claim newly generated words are a literal quotation from Lord Krishna).

2. 'scriptureReferences': Related Bhagavad Gita Shloka.
   Provide an authentic, verified shloka that supports the guidance.
   - MUST select the verse based on the meaning of the question, NOT by defaulting to Chapter 2, Verse 47.
     * Duty and effort without anxiety over fruits: Chapter 2, Verse 47.
     * Equanimity in success and failure / exam setbacks: Chapter 2, Verse 48.
     * Anger, its root causes, and consequences: Chapter 2, Verses 62–63.
     * Mind, self-mastery, elevating oneself: Chapter 6, Verse 5.
     * Restless mind, persistent practice and detachment: Chapter 6, Verse 35.
     * Relationships, forgiveness, compassion, absence of malice: Chapter 12, Verse 13.
     * Divine comfort, loneliness, refuge, love: Chapter 18, Verse 65.
   - Original Sanskrit text in Devanagari script.
   - Accurate IAST transliteration.
   - Accurate translation in the user's TARGET LANGUAGE.
   - 'relevanceExplanation': A clear, simple explanation of how this verse directly connects to the user's question.

3. 'practicalEverydayLesson': Practical Life Lesson.
   Finish with one short, concrete, actionable micro-habit the user can apply today.

STRICT INTEGRITY RULES:
- Never fabricate Sanskrit shlokas, translations, or references.
- Never return the same generic response for every question.
- Never default to Chapter 2, Verse 47 unless the question is specifically about selfless action and detachment from fruits.
- Always formulate the entire response in the requested TARGET LANGUAGE and native script.
`;

// API Route: Ask Gita Guide
app.post('/api/gita-guide', async (req: Request, res: Response) => {
  try {
    const { question, conversationHistory, language } = req.body;

    if (!question || typeof question !== 'string' || !question.trim()) {
      return res.status(400).json({ error: 'Question is required.' });
    }

    const trimmedQuestion = question.trim().slice(0, 1000);
    const selectedLang = typeof language === 'string' && LANGUAGE_INSTRUCTIONS[language] ? language : 'en';
    const langInfo = LANGUAGE_INSTRUCTIONS[selectedLang];

    // Check for greeting or overly vague query (e.g. "hi", "help")
    const qLower = trimmedQuestion.toLowerCase();
    const isVague =
      /^(hi|hello|hey|help|help me|namaste|salaam|guide me|who are you|gita|\?+)$/i.test(qLower) ||
      trimmedQuestion.length < 4;

    if (isVague) {
      const clarifyingResponse = getSemanticGuidance(trimmedQuestion, selectedLang as any);
      return res.json(clarifyingResponse);
    }

    // Try Gemini if client is initialized and not in quota cooldown
    if (aiClient && Date.now() > quotaCooldownUntil) {
      try {
        const prompt = `
User question: "${trimmedQuestion}"
Target Language: ${langInfo.name} (${langInfo.nativeName} - code: ${selectedLang})

${langInfo.scriptGuide}

Recent context:
${
  Array.isArray(conversationHistory)
    ? conversationHistory.slice(-4).map((m: any) => `${m.role}: ${m.content}`).join('\n')
    : 'None'
}

Requirements:
1. 'summary': Shri Krishna's Guidance directly addressing "${trimmedQuestion}" in ${langInfo.name} (${langInfo.nativeName}).
2. 'scriptureReferences': Exactly ONE authentic Bhagavad Gita verse selected specifically for this topic (e.g. Chapter 2 Verse 63 for anger, Chapter 2 Verse 48 for failure/exam, Chapter 6 Verse 5 for mind/habits, Chapter 12 Verse 13 for forgiveness, etc. DO NOT default to 2.47). Sanskrit in Devanagari, accurate transliteration, and translation in ${langInfo.name}.
3. 'teachingExplanation': Simple explanation of how this verse connects to the user's specific question in ${langInfo.name}.
4. 'practicalEverydayLesson': One short, concrete modern action step the user can apply today in ${langInfo.name}.
5. 'suggestedFollowUps': 3 thoughtful follow-up questions in ${langInfo.name}.
`;

        const generatePromise = aiClient.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt,
          config: {
            systemInstruction: GITA_SYSTEM_INSTRUCTION,
            responseMimeType: 'application/json',
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                summary: {
                  type: Type.STRING,
                  description: `Shri Krishna's Guidance in ${langInfo.name}.`,
                },
                scriptureReferences: {
                  type: Type.ARRAY,
                  description: 'Authentic Bhagavad Gita verse chosen specifically for this question topic.',
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      chapter: { type: Type.INTEGER },
                      verse: { type: Type.INTEGER },
                      sanskrit: { type: Type.STRING },
                      transliteration: { type: Type.STRING },
                      translation: {
                        type: Type.STRING,
                        description: `Accurate translation of the verse in ${langInfo.name}.`,
                      },
                      context: { type: Type.STRING },
                      relevanceExplanation: {
                        type: Type.STRING,
                        description: `How the verse connects to the question in ${langInfo.name}.`,
                      },
                    },
                    required: ['chapter', 'verse', 'translation'],
                  },
                },
                teachingExplanation: {
                  type: Type.STRING,
                  description: `Connection explanation in ${langInfo.name}.`,
                },
                practicalEverydayLesson: {
                  type: Type.STRING,
                  description: `Actionable micro-practice for today in ${langInfo.name}.`,
                },
                suggestedFollowUps: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: `3 thoughtful follow-up questions in ${langInfo.name}.`,
                },
              },
              required: ['summary', 'scriptureReferences', 'teachingExplanation', 'practicalEverydayLesson'],
            },
          },
        });

        // 7-second timeout for model call
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('AI generation timeout')), 7000)
        );

        const response: any = await Promise.race([generatePromise, timeoutPromise]);
        const text = response?.text;
        if (text) {
          const parsedData = JSON.parse(text);
          parsedData.isAiGenerated = true;
          parsedData.language = selectedLang;
          return res.json(parsedData);
        }
      } catch (geminiErr: any) {
        if (isQuotaError(geminiErr)) {
          // Set cooldown so subsequent requests serve semantic wisdom immediately without quota errors
          quotaCooldownUntil = Date.now() + 5 * 60 * 1000;
          console.log('[Gita Guide] Model quota standby; seamlessly serving verified semantic scripture guidance.');
        } else {
          console.log('[Gita Guide] Switching to verified semantic scripture guidance.');
        }
      }
    }

    // Dynamic, Topic-Specific, Grounded Semantic Scripture Guidance
    const semanticResponse = getSemanticGuidance(trimmedQuestion, selectedLang as any);
    return res.json(semanticResponse);
  } catch (err: any) {
    console.log('[Gita Guide] Serving verified semantic scripture guidance.');
    const fallback = getSemanticGuidance(req.body?.question || 'life', (req.body?.language || 'en') as any);
    return res.json(fallback);
  }
});

// In-memory cache for generated TTS audio to optimize latency and prevent rate-limiting
const ttsCache = new Map<string, { audio: string; mimeType: string }>();

// API Route: Server-Side Multilingual Text-To-Speech
app.post('/api/tts', async (req: Request, res: Response) => {
  try {
    const { text, language } = req.body;

    if (!text || typeof text !== 'string' || !text.trim()) {
      return res.status(400).json({ error: 'Text is required for TTS generation.' });
    }

    const selectedLang = typeof language === 'string' && LANGUAGE_INSTRUCTIONS[language] ? language : 'en';
    const langInfo = LANGUAGE_INSTRUCTIONS[selectedLang];

    // Clean text: strip markdown bullets, hashes, brackets, and excessive whitespace
    const cleanedText = text
      .replace(/[*#_~`>]/g, '')
      .replace(/\[.*?\]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 450); // Keep focused for rapid speech synthesis

    if (!cleanedText) {
      return res.status(400).json({ error: 'Text content is empty after cleaning.' });
    }

    const cacheKey = `${selectedLang}:${cleanedText}`;
    if (ttsCache.has(cacheKey)) {
      const cached = ttsCache.get(cacheKey)!;
      return res.json({
        audio: cached.audio,
        mimeType: cached.mimeType,
        provider: 'server-cache',
        language: selectedLang,
      });
    }

    if (!aiClient || Date.now() < quotaCooldownUntil) {
      return res.status(200).json({
        audio: null,
        provider: 'browser-fallback',
        supported: false,
        message: 'Speech synthesis fell back to browser voice.',
        language: selectedLang,
      });
    }

    console.log(`[Server TTS] Generating speech for ${langInfo.name} (${selectedLang}): "${cleanedText.slice(0, 40)}..."`);

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash-lite-tts',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `Read this text aloud naturally with clear, compassionate, and reverent pronunciation in ${langInfo.name} (${langInfo.nativeName}): ${cleanedText}`,
            },
          ],
        },
      ],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    const mimeType = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.mimeType || 'audio/wav';

    if (!base64Audio) {
      throw new Error(`Model returned no audio payload for language ${langInfo.name}`);
    }

    // Cache the generated audio
    if (ttsCache.size > 200) {
      const firstKey = ttsCache.keys().next().value;
      if (firstKey) ttsCache.delete(firstKey);
    }
    ttsCache.set(cacheKey, { audio: base64Audio, mimeType });

    return res.json({
      audio: base64Audio,
      mimeType,
      provider: 'server',
      language: selectedLang,
    });
  } catch (err: any) {
    if (isQuotaError(err)) {
      quotaCooldownUntil = Date.now() + 5 * 60 * 1000;
    }
    console.log('[Server TTS] TTS service standby; client will use browser speech synthesis.');
    return res.status(200).json({
      audio: null,
      provider: 'browser-fallback',
      supported: false,
      message: 'Speech synthesis fell back to browser voice.',
      language: req.body?.language || 'en',
    });
  }
});

// API Route: TTS status & supported languages
app.get('/api/tts/status', (_req, res) => {
  res.json({
    provider: 'gemini-3.8-flash-lite-tts',
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
    supportedLanguages: ['en', 'hi', 'ur', 'sd', 'ta', 'gu'],
  });
});

// Health check endpoint
app.get('/api/health', (_req, res) => {
  const k = process.env.GEMINI_API_KEY || '';
  res.json({
    status: 'ok',
    hasApiKey: Boolean(k),
    keyPrefix: k.slice(0, 6),
    keyLength: k.length,
    timestamp: new Date().toISOString(),
  });
});

// Vite middleware in dev; static file server in production
async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
        ws: false,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Gita Life Guide server running on port ${port} (${isProd ? 'production' : 'development'})`);
  });
}

startServer();
