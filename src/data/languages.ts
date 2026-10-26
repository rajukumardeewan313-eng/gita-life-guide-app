export type LanguageCode = 'en' | 'sd' | 'ur' | 'hi' | 'ta' | 'gu';

export interface LanguageConfig {
  code: LanguageCode;
  name: string;
  nativeName: string;
  speechLocale: string;
  direction: 'ltr' | 'rtl';
  placeholder: string;
  badge: string;
  testSentence: string;
  quickPrompts: {
    label: string;
    prompt: string;
  }[];
}

export const SUPPORTED_LANGUAGES: Record<LanguageCode, LanguageConfig> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    speechLocale: 'en-US',
    direction: 'ltr',
    placeholder: 'Ask anything about life or the Bhagavad Gita…',
    badge: 'English',
    testSentence: 'Om Namo Bhagavate Vasudevaya. Welcome to Gita Life Guide.',
    quickPrompts: [
      {
        label: 'Overcoming Stress & Anxiety',
        prompt: 'How do I overcome intense work anxiety and fear of failure according to the Bhagavad Gita?',
      },
      {
        label: 'Conquering Anger',
        prompt: 'What does the Gita teach about controlling sudden anger before it ruins my relationships?',
      },
      {
        label: 'Disciplining a Distracted Mind',
        prompt: 'My mind constantly wanders and procrastinates. What did Krishna advise Arjuna about mastering the restless mind?',
      },
      {
        label: 'Finding Peace in Relationships',
        prompt: 'How to practice forgiveness and maintain equanimity when someone close to me hurts me?',
      },
    ],
  },
  sd: {
    code: 'sd',
    name: 'Sindhi',
    nativeName: 'سنڌي',
    speechLocale: 'sd-PK',
    direction: 'rtl',
    placeholder: 'زندگي يا ڀڳوت گيتا بابت ڪجھ به پڇو...',
    badge: 'سنڌي',
    testSentence: 'اوم نمو ڀڳوتي واسوديوايه. گيتا لائف گائيڊ ۾ ڀلي ڪري آيا.',
    quickPrompts: [
      {
        label: 'ذهني دٻاءُ ۽ پريشاني کان نجات',
        prompt: 'ڀڳوت گيتا جي مطابق ڪم جي دٻاءُ ۽ ناڪاميءَ جي خوف تي ڪيئن ضابطو آڻجي؟',
      },
      {
        label: 'ڪاوڙ تي ضابطو',
        prompt: 'گيتا جي تعليمات موجب اوچتو ايندڙ ڪاوڙ کي ڪيئن قابو ڪجي ته جيئن رشتا خراب نه ٿين؟',
      },
      {
        label: 'بي چين ذهن تي ضابطو',
        prompt: 'منهنجو ذهن هر وقت ڀٽڪندو رهي ٿو. ڪرشن ارجن کي بي چين من قابو ڪرڻ بابت ڪهڙي نصيحت ڪئي؟',
      },
      {
        label: 'رشتن ۾ معافي ۽ سڪون',
        prompt: 'جڏهن ڪو ويجهو ماڻهو دل ڏکائي ته معافي ۽ ذهن جو توازن ڪيئن برقرار رکجي؟',
      },
    ],
  },
  ur: {
    code: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    speechLocale: 'ur-PK',
    direction: 'rtl',
    placeholder: 'زندگی یا بھگود گیتا کے بارے میں کچھ بھی پوچھیں...',
    badge: 'اردو',
    testSentence: 'اوم نمو بھگوتے واسودیواے۔ گیتا لائف گائیڈ میں خوش آمدید۔',
    quickPrompts: [
      {
        label: 'ذہنی دباؤ اور خوف پر قابو',
        prompt: 'بھگود گیتا کے مطابق کام کے شدید دباؤ اور ناکامی کے خوف پر کیسے قابو پایا جائے؟',
      },
      {
        label: 'غصے پر قابو پانا',
        prompt: 'گیتا کی تعلیمات کے مطابق اچانک غصے کو کیسے قابو کیا جائے تاکہ تعلقات متاثر نہ ہوں؟',
      },
      {
        label: 'بے چین ذہن کا ضبط',
        prompt: 'میرا ذہن مسلسل بھٹکتا رہتا ہے۔ کرشن نے ارجن کو بے چین ذہن کو قابو کرنے کی کیا نصیحت کی؟',
      },
      {
        label: 'تعلقات میں معافی اور سکون',
        prompt: 'جب کوئی قریبی شخص دکھ پہنچائے تو معافی اور ذہنی سکون کیسے قائم رکھیں؟',
      },
    ],
  },
  hi: {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    speechLocale: 'hi-IN',
    direction: 'ltr',
    placeholder: 'जीवन या श्रीमद्भगवद्गीता के विषय में कुछ भी पूछें...',
    badge: 'हिन्दी',
    testSentence: 'ॐ नमो भगवते वासुदेवाय। गीता जीवन मार्गदर्शिका में आपका स्वागत है।',
    quickPrompts: [
      {
        label: 'तनाव और चिंता से मुक्ति',
        prompt: 'भगवद्गीता के अनुसार कार्यस्थल के तनाव और असफलता के भय से कैसे मुक्ति पाएं?',
      },
      {
        label: 'क्रोध पर नियंत्रण',
        prompt: 'गीता के अनुसार अचानक आने वाले क्रोध पर कैसे नियंत्रण रखें जिससे संबंध न बिगड़ें?',
      },
      {
        label: 'चंचल मन की एकाग्रता',
        prompt: 'मेरा मन बहुत भटकता है। श्रीकृष्ण ने अर्जुन को चंचल मन वश में करने का क्या उपाय बताया?',
      },
      {
        label: 'संबंधों में क्षमा और शांति',
        prompt: 'जब कोई अपना आहत करे तो क्षमा भाव और मन की समता कैसे बनाए रखें?',
      },
    ],
  },
  ta: {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    speechLocale: 'ta-IN',
    direction: 'ltr',
    placeholder: 'வாழ்க்கை அல்லது பகவத் கீதை பற்றி எதையும் கேளுங்கள்...',
    badge: 'தமிழ்',
    testSentence: 'ஓம் நமோ பகவதே வாசுதேவாய. கீதா லைஃப் கைடிற்கு உங்களை வரவேற்கிறோம்.',
    quickPrompts: [
      {
        label: 'மன அழுத்தம் மற்றும் பயத்தை வெல்லுதல்',
        prompt: 'பகவத் கீதையின்படி பணி அழுத்தம் மற்றும் தோல்வி பயத்தை எவ்வாறு சமாளிப்பது?',
      },
      {
        label: 'கோபத்தை கட்டுப்படுத்துதல்',
        prompt: 'உறவுகள் கெடாமல் திடீர் கோபத்தை கட்டுப்படுத்த கீதை என்ன வழிகாட்டுகிறது?',
      },
      {
        label: 'அலைபாயும் மனதை ஒருமுகப்படுத்துதல்',
        prompt: 'அலைபாயும் மனதை கட்டுப்படுத்த அர்ஜுனனுக்கு ஸ்ரீகிருஷ்ணர் கூறிய அறிவுரை என்ன?',
      },
      {
        label: 'மன்னிப்பு மற்றும் மன அமைதி',
        prompt: 'மற்றவர்கள் புண்படுத்தும் போது மன்னிப்பு மற்றும் சமநிலையான மனநிலையை எவ்வாறு பேணுவது?',
      },
    ],
  },
  gu: {
    code: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    speechLocale: 'gu-IN',
    direction: 'ltr',
    placeholder: 'જીવન અથવા ભગવદ્ ગીતા વિશે કંઈપણ પૂછો...',
    badge: 'ગુજરાતી',
    testSentence: 'ઓમ નમો ભગવતે વાસુદેવાય. ગીતા લાઇફ ગાઇડમાં આપનું સ્વાગત છે.',
    quickPrompts: [
      {
        label: 'તણાવ અને ચિંતા પર વિજય',
        prompt: 'ભગવદ્ ગીતા અનુસાર કામના તણાવ અને નિષ્ફળતાના ડરને કેવી રીતે દૂર કરવો?',
      },
      {
        label: 'ક્રોધ પર નિયંત્રણ',
        prompt: 'સંબંધો બગડે તે પહેલાં અચાનક આવતા ક્રોધને કાબૂમાં રાખવા ગીતા શું શીખવે છે?',
      },
      {
        label: 'ચંચળ મનની એકાગ્રતા',
        prompt: 'મારું મન ખૂબ ભટકે છે. શ્રીકૃષ્ણએ અર્જુનને ચંચળ મનને વશ કરવાનો કયો ઉપાય આપ્યો હતો?',
      },
      {
        label: 'સંબંધોમાં ક્ષમા અને શાંતિ',
        prompt: 'જ્યારે કોઈ સ્વજન દુઃખ પહોંચાડે ત્યારે ક્ષમાભાવ અને સમત્વ કેવી રીતે જાળવવું?',
      },
    ],
  },
};

export const LANGUAGE_STORAGE_KEY = 'gita_life_guide_language';

export function getStoredLanguage(): LanguageCode {
  if (typeof window === 'undefined') return 'en';
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved && saved in SUPPORTED_LANGUAGES) {
      return saved as LanguageCode;
    }
  } catch (e) {
    console.warn('Error reading language from localStorage', e);
  }
  return 'en';
}

export function saveStoredLanguage(lang: LanguageCode): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch (e) {
    console.warn('Error saving language to localStorage', e);
  }
}
