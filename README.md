# Gita Life Guide — Ancient Wisdom. Everyday Solutions.

A Bhagavad Gita educational companion that helps users explore verified Sanskrit scripture and apply timeless spiritual wisdom to everyday modern challenges (stress, anger, anxiety, restless thoughts, relationships, and duty).

---

## 🌟 Core Features

1. **Multilingual Support (6 Languages)**
   - **English (`en`)**: Default language.
   - **Sindhi (`sd` — سنڌي)**: Sindhi-Arabic script with Right-to-Left (RTL) layout.
   - **Urdu (`ur` — اردو)**: Urdu script with Right-to-Left (RTL) layout.
   - **Hindi (`hi` — हिन्दी)**: Devanagari script.
   - **Tamil (`ta` — தமிழ்)**: Tamil script.
   - **Gujarati (`gu` — ગુજરાતી)**: Gujarati script.
   - User language preference is remembered across sessions in `localStorage`.

2. **Multilingual Voice Input (Speech-to-Text)**
   - Recognizes speech in the selected language using appropriate locales:
     - English: `en-US`
     - Sindhi: `sd-PK`
     - Urdu: `ur-PK`
     - Hindi: `hi-IN`
     - Tamil: `ta-IN`
     - Gujarati: `gu-IN`
   - Spoken words convert into editable text in real-time, allowing users to review, correct, or add words before sending.
   - Honest fallback: If a browser/device does not support a specific speech locale, an informative alert is shown without silently falling back to English. Manual typing is never disabled.

3. **Multilingual AI Guidance**
   - Answers questions regarding anger, stress, fear, discipline, relationships, and purpose in the selected language.
   - Formulates responses in the natural writing system and grammatical conventions of the target language.
   - Preserves original Sanskrit shlokas in Devanagari along with romanized IAST transliteration, while presenting translations and practical life lessons in the user's selected language.
   - Grounded strictly in authentic Bhagavad Gita teachings with exact Chapter and Verse references.

4. **Multilingual Voice Output (Text-to-Speech)**
   - **Listen** and **Stop** buttons on all responses.
   - Discovers installed voices matching the target language (`en-US`, `sd-PK`, `ur-PK`, `hi-IN`, `ta-IN`, `gu-IN`).
   - Honest fallback: If a natural voice is not installed for a non-English language on the device, it displays a clear message and leaves the text answer intact instead of mispronouncing it with an English voice.

5. **Local Bookmarks & Chat History**
   - Save verses and AI insights directly to your device (`localStorage`).
   - Filter bookmarks by Shlokas or AI Guidance.
   - Complete chat history control with a clear confirmation dialog.

6. **Progressive Web App (PWA) & Mobile-First Design**
   - Deep cosmic navy aesthetic (`#070b19`) with radiant golden accents (`#f59e0b`).
   - Bottom mobile navigation bar tailored for Android and iOS touchscreens.
   - Web App Manifest and standard icons (192x192, 512x512, maskable safe-zone, Apple touch icon).
   - In-app install banner supporting Chromium `beforeinstallprompt` and guided iOS Safari instructions.
   - Offline detection banner informing users when cached scripture is being served.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm or bun

### 1. Environment Configuration
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Ensure your `.env` contains:
```env
# GEMINI_API_KEY: Provided automatically in AI Studio Secrets panel.
GEMINI_API_KEY="your-gemini-api-key"

# Port (defaults to 3000)
PORT=3000
```
*Note: If no API key is configured, the server seamlessly provides grounded local scripture wisdom in all 6 languages from our verified database.*

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 🧪 Testing Multilingual Voice & AI Features on Android

### How Speech Recognition & TTS Work on Android
Android devices utilize **Google Speech Services** for voice recognition and the **Speech Recognition & Synthesis engine** (Google TTS or Samsung TTS) for text-to-speech.

### 1. Testing Language Selection:
1. Open the **Ask Gita AI** tab or tap the globe icon in the top header.
2. Verify all six native language names are visible:
   - `English`
   - `سنڌي` (Sindhi)
   - `اردو` (Urdu)
   - `हिन्दी` (Hindi)
   - `தமிழ்` (Tamil)
   - `ગુજરાતી` (Gujarati)
3. Select a language (e.g. `اردو` or `سنڌي`).
4. Notice that:
   - The input box immediately applies RTL direction (`dir="rtl"`).
   - Quick prompt reflections change to the selected language.
   - Refresh the page and confirm the language selection is remembered from `localStorage`.

### 2. Testing Voice Input (Speech Recognition):
1. With your preferred language selected (e.g., `हिन्दी` or `English`), tap the microphone button beside the input box.
2. Grant microphone permissions if prompted by Android Chrome.
3. Speak your question.
4. The recognized speech will populate the input textarea in real-time.
5. Edit or append words using the keyboard, then tap **Send**.
6. *Locale fallback test*: On browsers that do not support certain locales (e.g., Sindhi `sd-PK`), the app displays a clear notice: *"Speech recognition for Sindhi (سنڌي - sd-PK) is not supported on this browser or device. Please type your question directly in the text box below."* The text input remains fully functional.

### 3. Testing Multilingual Voice Output (Text-to-Speech):
1. In the assistant response, tap the **Listen** button.
2. The browser speaks the response using the installed voice for that language.
3. Tap **Stop** to halt audio playback.
4. If your Android device does not have a language voice installed (e.g., Tamil or Urdu voice pack not yet downloaded in Android Settings > Accessibility > Text-to-speech output), the app displays: *"A natural speech voice for [Language] is not installed on this browser or device. The complete answer is displayed in text above."* The app strictly avoids reading non-English scripts with an English voice.

---

## 📱 Android Packaging & Deployment Guide

To package **Gita Life Guide** as an installable Android APK or Google Play Store application:

### Step 1: Deploy with HTTPS
Android requires Progressive Web Apps to be served over **HTTPS** with a valid SSL/TLS certificate.
- When running in Google Cloud Run or AI Studio, HTTPS is enabled by default on your assigned URL.

### Step 2: Validate PWA Manifest & Service Worker
The app includes a fully compliant manifest configured in `vite.config.ts`:
- Name: `Gita Life Guide — Ancient Wisdom`
- Short Name: `Gita Guide` (≤ 12 characters for mobile launchers)
- Display: `standalone`
- Theme & Background: `#070b19`
- Icons:
  - `/pwa-192x192.png` (Standard launcher)
  - `/pwa-512x512.png` (High-res splash)
  - `/pwa-maskable-512x512.png` (Adaptive Android squircle/circle safe-zone)

You can verify your live URL at [PWABuilder.com](https://www.pwabuilder.com).

### Step 3: Package into Android APK using PWABuilder (Recommended)
1. Navigate to [PWABuilder.com](https://www.pwabuilder.com).
2. Enter your live HTTPS URL (e.g. `https://your-domain.com`).
3. Click **Start**. The analyzer will check the manifest, service worker, and icons.
4. Click **Package for Store** -> Choose **Android**.
5. Customize your package settings:
   - Package ID: `com.gitalifeguide.app`
   - App Name: `Gita Life Guide`
6. Click **Generate APK / AAB**.
7. Download the signed Android App Bundle (`.aab`) for Google Play or test APK (`.apk`) for direct installation on your Android phone.
