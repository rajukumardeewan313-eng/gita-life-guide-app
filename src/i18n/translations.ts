import { LanguageCode } from '../data/languages';

export interface TranslationDictionary {
  // Brand & App
  appTitle: string;
  appSubtitle: string;
  verifiedBadge: string;

  // Navigation
  navHome: string;
  navDaily: string;
  navAssistant: string;
  navExplorer: string;
  navBookmarks: string;

  // Header & Actions
  audioPlaying: string;
  installApp: string;
  testVoice: string;
  aboutScripture: string;
  openChapterSelector: string;

  // Chapter & Verse Selector
  chapterVerseSelectorTitle: string;
  chapterVerseSelectorSubtitle: string;
  selectChapter: string;
  selectVerse: string;
  jumpToVerse: string;
  chapterLabel: string;
  verseLabel: string;
  versesCountSuffix: string;
  searchChaptersPlaceholder: string;
  allChaptersHeader: string;
  versesInChapterHeader: string;
  goToVerseButton: string;
  previousVerseButton: string;
  nextVerseButton: string;
  invalidVerseMessage: string;
  viewVerseDetails: string;

  // Audio Controls
  listenButton: string;
  pauseButton: string;
  resumeButton: string;
  stopButton: string;
  audioLoading: string;
  audioPlayingStatus: string;
  audioPausedStatus: string;
  voiceBrowserBadge: string;
  voiceServerBadge: string;

  // Scripture Card Labels
  sanskritOriginal: string;
  transliterationLabel: string;
  translationLabel: string;
  practicalLessonLabel: string;
  commentaryLabel: string;
  wordMeaningsLabel: string;
  bookmarkAction: string;
  bookmarkedAction: string;
  shareAction: string;
  askAboutThisVerse: string;

  // Home View
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroAskBtn: string;
  heroDailyBtn: string;
  heroBrowseBtn: string;
  lifePillarsTitle: string;
  lifePillarsSubtitle: string;
  pillarAnger: string;
  pillarAnxiety: string;
  pillarFear: string;
  pillarDiscipline: string;
  pillarRelationships: string;
  pillarPurpose: string;
  dailyFeatureHeader: string;

  // Daily Wisdom View
  dailyWisdomTitle: string;
  dailyWisdomSubtitle: string;
  refreshRandomVerse: string;
  todayVerseBadge: string;

  // AI Assistant View
  assistantTitle: string;
  assistantSubtitle: string;
  clearHistory: string;
  inputPlaceholder: string;
  sendButton: string;
  listeningSpeech: string;
  speechNotSupported: string;
  speechMicStart: string;
  speechMicStop: string;
  suggestedQuestionsTitle: string;
  disclaimerText: string;
  aiThinking: string;
  scriptureReferencesHeader: string;
  krishnaGuidanceHeader: string;
  krishnaGuidanceSub: string;
  relatedShlokaHeader: string;
  practicalLessonHeader: string;
  relevanceExplanationLabel: string;
  retryQuestionButton: string;
  chatErrorMessage: string;

  // Explorer View
  explorerTitle: string;
  explorerSubtitle: string;
  searchVersesPlaceholder: string;
  filterByTopic: string;
  allTopics: string;
  totalVersesFound: string;
  noVersesFound: string;

  // Bookmarks View
  bookmarksTitle: string;
  bookmarksSubtitle: string;
  clearAllBookmarks: string;
  noBookmarksTitle: string;
  noBookmarksMessage: string;
  exploreVersesNow: string;
  savedItemVerse: string;
  savedItemAnswer: string;

  // Common / Modals
  closeModal: string;
  languageSelectLabel: string;
  offlineNotice: string;
  onlineRestoredNotice: string;
  copySuccess: string;
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  en: {
    appTitle: 'Gita Life Guide',
    appSubtitle: 'Ancient Wisdom. Everyday Solutions.',
    verifiedBadge: 'Verified Scripture',

    navHome: 'Home',
    navDaily: 'Daily Wisdom',
    navAssistant: 'Ask Gita AI',
    navExplorer: 'Scriptures',
    navBookmarks: 'Saved',

    audioPlaying: 'Playing Audio',
    installApp: 'Install App',
    testVoice: 'Voice Settings',
    aboutScripture: 'Scriptural Integrity',
    openChapterSelector: 'All 18 Chapters & 700 Verses',

    chapterVerseSelectorTitle: 'Bhagavad Gita Chapters & Verses',
    chapterVerseSelectorSubtitle: 'Complete 18 Chapters • 700 Sacred Verses Catalog',
    selectChapter: 'Select Chapter',
    selectVerse: 'Select Verse',
    jumpToVerse: 'Jump to Verse',
    chapterLabel: 'Chapter',
    verseLabel: 'Verse',
    versesCountSuffix: 'Verses',
    searchChaptersPlaceholder: 'Search chapters by name or theme...',
    allChaptersHeader: 'All 18 Chapters of Bhagavad Gita',
    versesInChapterHeader: 'Verses in',
    goToVerseButton: 'Go to Verse',
    previousVerseButton: 'Previous Verse',
    nextVerseButton: 'Next Verse',
    invalidVerseMessage: 'Please enter a valid chapter (1–18) and verse number.',
    viewVerseDetails: 'Open Verse in Reader',

    listenButton: 'Listen',
    pauseButton: 'Pause',
    resumeButton: 'Resume',
    stopButton: 'Stop',
    audioLoading: 'Synthesizing voice...',
    audioPlayingStatus: 'Playing audio',
    audioPausedStatus: 'Audio paused',
    voiceBrowserBadge: 'Browser Voice',
    voiceServerBadge: 'AI Neural Voice',

    sanskritOriginal: 'Sacred Sanskrit Shloka',
    transliterationLabel: 'Roman Transliteration',
    translationLabel: 'Translation & Core Meaning',
    practicalLessonLabel: 'Everyday Practical Life Lesson',
    commentaryLabel: 'Spiritual Commentary',
    wordMeaningsLabel: 'Word by Word Meanings',
    bookmarkAction: 'Save Verse',
    bookmarkedAction: 'Saved',
    shareAction: 'Share',
    askAboutThisVerse: 'Ask AI about this verse',

    heroTitle: 'Timeless Wisdom for',
    heroHighlight: 'Modern Everyday Life',
    heroDescription:
      'Grounded strictly in verified Bhagavad Gita verses (700 shlokas across 18 chapters). Overcome stress, conquer anger, and discover purposeful calm.',
    heroAskBtn: 'Ask Krishna’s Wisdom',
    heroDailyBtn: 'Today’s Verse',
    heroBrowseBtn: '18 Chapters Catalog',
    lifePillarsTitle: 'Timeless Guidance for Life Challenges',
    lifePillarsSubtitle: 'Choose any modern struggle to discover Sri Krishna’s psychological insights:',
    pillarAnger: 'Mastering Anger & Reactions',
    pillarAnxiety: 'Overcoming Stress & Burnout',
    pillarFear: 'Dissolving Fear & Uncertainty',
    pillarDiscipline: 'Focus, Willpower & Habit',
    pillarRelationships: 'Forgiveness & Equanimity',
    pillarPurpose: 'Duty, Dharma & Life Purpose',
    dailyFeatureHeader: 'Featured Verse of the Day',

    dailyWisdomTitle: 'Daily Bhagavad Gita Wisdom',
    dailyWisdomSubtitle: 'Ancient scripture illuminated for modern clarity. One sacred verse at a time.',
    refreshRandomVerse: 'New Verse',
    todayVerseBadge: 'Daily Contemplation',

    assistantTitle: 'Gita Life Assistant',
    assistantSubtitle: 'Ask real-life questions. Receive scripture-grounded lessons in your language.',
    clearHistory: 'Clear Chat',
    inputPlaceholder: 'Ask anything about life or the Bhagavad Gita…',
    sendButton: 'Send',
    listeningSpeech: 'Listening... speak now',
    speechNotSupported: 'Speech recognition is not supported in this browser. Please type your question.',
    speechMicStart: 'Speak your question',
    speechMicStop: 'Stop listening',
    suggestedQuestionsTitle: 'Frequently Asked Life Inquiries',
    disclaimerText: 'Responses are grounded in verified Bhagavad Gita verses. Explanations are educational and not direct quotations.',
    aiThinking: 'Krishna’s teachings are reflecting...',
    scriptureReferencesHeader: '2. Related Bhagavad Gita Shloka',
    krishnaGuidanceHeader: "1. Shri Krishna's Guidance",
    krishnaGuidanceSub: 'Inspired by Shri Krishna’s teachings in the Bhagavad Gita',
    relatedShlokaHeader: '2. Related Bhagavad Gita Shloka',
    practicalLessonHeader: '3. Practical Life Lesson',
    relevanceExplanationLabel: 'Relevance to your situation:',
    retryQuestionButton: 'Retry Question',
    chatErrorMessage: 'Unable to connect to the guidance service. Please check your network or try again.',

    explorerTitle: 'Scripture Explorer',
    explorerSubtitle: 'Search authentic verses across all 18 chapters and core life themes.',
    searchVersesPlaceholder: 'Search by topic, keyword, or chapter...',
    filterByTopic: 'Filter by Life Topic',
    allTopics: 'All Teachings',
    totalVersesFound: 'verses displayed',
    noVersesFound: 'No verses match your search query. Try another term.',

    bookmarksTitle: 'Saved Verses & Guidance',
    bookmarksSubtitle: 'Your personal collection of Bhagavad Gita teachings for quick meditation.',
    clearAllBookmarks: 'Clear All',
    noBookmarksTitle: 'No Bookmarks Yet',
    noBookmarksMessage: 'Tap the bookmark icon on any verse or AI guidance to save it here for offline reflection.',
    exploreVersesNow: 'Explore Verses',
    savedItemVerse: 'Verse',
    savedItemAnswer: 'Life Guidance',

    closeModal: 'Close',
    languageSelectLabel: 'Choose Language',
    offlineNotice: 'You are currently offline. Cached scriptures and saved bookmarks remain fully accessible.',
    onlineRestoredNotice: 'Internet connection restored.',
    copySuccess: 'Copied to clipboard!',
  },

  hi: {
    appTitle: 'गीता जीवन मार्गदर्शिका',
    appSubtitle: 'प्राचीन विवेक। व्यावहारिक समाधान।',
    verifiedBadge: 'प्रमाणित शास्त्र',

    navHome: 'होम',
    navDaily: 'दैनिक ज्ञान',
    navAssistant: 'गीता एआई से पूछें',
    navExplorer: 'शास्त्र',
    navBookmarks: 'सहेजे गए',

    audioPlaying: 'ध्वनि चल रही है',
    installApp: 'ऐप इंस्टॉल करें',
    testVoice: 'आवाज़ सेटिंग्स',
    aboutScripture: 'शास्त्र प्रामाणिकता',
    openChapterSelector: 'सभी १८ अध्याय और ७०० श्लोक',

    chapterVerseSelectorTitle: 'श्रीमद्भगवद्गीता अध्याय और श्लोक',
    chapterVerseSelectorSubtitle: 'सम्पूर्ण १८ अध्याय • ७०० पावन श्लोकों की सूची',
    selectChapter: 'अध्याय चुनें',
    selectVerse: 'श्लोक चुनें',
    jumpToVerse: 'श्लोक पर जाएं',
    chapterLabel: 'अध्याय',
    verseLabel: 'श्लोक',
    versesCountSuffix: 'श्लोक',
    searchChaptersPlaceholder: 'अध्याय का नाम या विषय खोजें...',
    allChaptersHeader: 'भगवद्गीता के सभी १८ अध्याय',
    versesInChapterHeader: 'में उपलब्ध श्लोक',
    goToVerseButton: 'श्लोक खोलें',
    previousVerseButton: 'पिछला श्लोक',
    nextVerseButton: 'अगला श्लोक',
    invalidVerseMessage: 'कृपया एक मान्य अध्याय (१–१८) और श्लोक संख्या दर्ज करें।',
    viewVerseDetails: 'अध्ययन कक्ष में पढ़ें',

    listenButton: 'सुनें',
    pauseButton: 'रोकें',
    resumeButton: 'पुनः चलाएं',
    stopButton: 'बंद करें',
    audioLoading: 'ध्वनि तैयार हो रही है...',
    audioPlayingStatus: 'ध्वनि चल रही है',
    audioPausedStatus: 'ध्वनि रोकी गई',
    voiceBrowserBadge: 'ब्राउज़र आवाज़',
    voiceServerBadge: 'एआई न्यूरल आवाज़',

    sanskritOriginal: 'पवित्र संस्कृत श्लोक',
    transliterationLabel: 'रोमन लिप्यंतरण',
    translationLabel: 'अनुवाद और मूल भावार्थ',
    practicalLessonLabel: 'दैनिक जीवन में व्यावहारिक सीख',
    commentaryLabel: 'आध्यात्मिक व्याख्या',
    wordMeaningsLabel: 'शब्दार्थ',
    bookmarkAction: 'सहेजें',
    bookmarkedAction: 'सहेजा गया',
    shareAction: 'साझा करें',
    askAboutThisVerse: 'इस श्लोक पर एआई से पूछें',

    heroTitle: 'सदाबहार विवेक',
    heroHighlight: 'आज के दैनिक जीवन के लिए',
    heroDescription:
      'श्रीमद्भगवद्गीता के १८ अध्यायों के ७०० प्रामाणिक श्लोकों पर आधारित। तनाव से मुक्ति, क्रोध पर विजय और मन की शांति पाएं।',
    heroAskBtn: 'श्रीकृष्ण की सीख पूछें',
    heroDailyBtn: 'आज का श्लोक',
    heroBrowseBtn: '१८ अध्याय सूची',
    lifePillarsTitle: 'जीवन की चुनौतियों के लिए मार्गदर्शन',
    lifePillarsSubtitle: 'किसी भी उलझन का समाधान जानने के लिए विषय चुनें:',
    pillarAnger: 'क्रोध और आवेग पर नियंत्रण',
    pillarAnxiety: 'तनाव और चिंता से मुक्ति',
    pillarFear: 'भय और अनिश्चितता का अंत',
    pillarDiscipline: 'मन की एकाग्रता और संकल्प',
    pillarRelationships: 'संबंधों में क्षमा और समता',
    pillarPurpose: 'कर्तव्य, धर्म और जीवन लक्ष्य',
    dailyFeatureHeader: 'आज का विशेष श्लोक',

    dailyWisdomTitle: 'दैनिक भगवद्गीता विवेक',
    dailyWisdomSubtitle: 'प्राचीन पावन श्लोकों की आधुनिक जीवन में स्पष्ट समझ। एक-एक श्लोक के साथ मन शांत करें।',
    refreshRandomVerse: 'नया श्लोक',
    todayVerseBadge: 'दैनिक मनन',

    assistantTitle: 'गीता जीवन सहायक',
    assistantSubtitle: 'अपने जीवन के प्रश्न पूछें। गीता पर आधारित प्रमाणिक उत्तर अपनी भाषा में प्राप्त करें।',
    clearHistory: 'इतिहास हटाएं',
    inputPlaceholder: 'जीवन या श्रीमद्भगवद्गीता के विषय में कुछ भी पूछें...',
    sendButton: 'भेजें',
    listeningSpeech: 'सुन रहे हैं... कृपया बोलें',
    speechNotSupported: 'इस ब्राउज़र में आवाज़ पहचान उपलब्ध नहीं है। कृपया लिखकर प्रश्न पूछें।',
    speechMicStart: 'बोलकर पूछें',
    speechMicStop: 'सुनना बंद करें',
    suggestedQuestionsTitle: 'सामान्य जीवन प्रश्न',
    disclaimerText: 'सभी उत्तर भगवद्गीता के प्रमाणिक श्लोकों पर आधारित हैं। व्याख्याएं शैक्षणिक हैं, साक्षात् श्रीकृष्ण की वाणी नहीं।',
    aiThinking: 'श्रीकृष्ण की शिक्षाओं से चिंतन जारी है...',
    scriptureReferencesHeader: '२. संबंधित भगवद्गीता श्लोक',
    krishnaGuidanceHeader: '१. श्रीकृष्ण का मार्गदर्शन',
    krishnaGuidanceSub: 'भगवद्गीता में श्रीकृष्ण की पावन शिक्षाओं से प्रेरित',
    relatedShlokaHeader: '२. संबंधित भगवद्गीता श्लोक',
    practicalLessonHeader: '३. व्यावहारिक जीवन पाठ',
    relevanceExplanationLabel: 'आपकी परिस्थिति से संबंध:',
    retryQuestionButton: 'पुनः प्रयास करें',
    chatErrorMessage: 'मार्गदर्शन सेवा से संपर्क नहीं हो सका। कृपया पुनः प्रयास करें।',

    explorerTitle: 'शास्त्र अन्वेषण',
    explorerSubtitle: 'सभी १८ अध्यायों और जीवन के मुख्य विषयों के अनुसार श्लोक खोजें।',
    searchVersesPlaceholder: 'विषय, शब्द या अध्याय से खोजें...',
    filterByTopic: 'विषयानुसार चुनें',
    allTopics: 'सभी उपदेश',
    totalVersesFound: 'श्लोक मिले',
    noVersesFound: 'खोज के अनुरूप कोई श्लोक नहीं मिला। अन्य शब्द खोजें।',

    bookmarksTitle: 'सहेजे गए श्लोक और मार्गदर्शन',
    bookmarksSubtitle: 'प्रतिदिन मनन और स्वाध्याय के लिए आपके पसंदीदा उपदेश।',
    clearAllBookmarks: 'सभी हटाएं',
    noBookmarksTitle: 'कोई श्लोक सहेजा नहीं गया',
    noBookmarksMessage: 'किसी भी श्लोक या उत्तर पर बुकमार्क आइकन दबाकर उसे यहां सहेजें।',
    exploreVersesNow: 'श्लोक देखें',
    savedItemVerse: 'श्लोक',
    savedItemAnswer: 'मार्गदर्शन',

    closeModal: 'बंद करें',
    languageSelectLabel: 'भाषा चुनें',
    offlineNotice: 'आप ऑफ़लाइन हैं। सहेजे गए श्लोक और शास्त्र अब भी उपलब्ध हैं।',
    onlineRestoredNotice: 'इंटरनेट संपर्क पुनः स्थापित हो गया है।',
    copySuccess: 'कॉपी कर लिया गया!',
  },

  ur: {
    appTitle: 'گیتا لائف گائیڈ',
    appSubtitle: 'قدیم حکمت۔ روزمرہ حل۔',
    verifiedBadge: 'مستند صحائف',

    navHome: 'ہوم',
    navDaily: 'روزانہ حکمت',
    navAssistant: 'گیتا اے آئی سے پوچھیں',
    navExplorer: 'صحائف',
    navBookmarks: 'محفوظ شدہ',

    audioPlaying: 'آواز جاری ہے',
    installApp: 'ایپ انسٹال کریں',
    testVoice: 'آواز کی ترتیبات',
    aboutScripture: 'صداقت صحائف',
    openChapterSelector: 'تمام ۱۸ ابواب اور ۷۰۰ اشلوک',

    chapterVerseSelectorTitle: 'بھگود گیتا کے ابواب اور اشلوک',
    chapterVerseSelectorSubtitle: 'مکمل ۱۸ ابواب • ۷۰۰ مقدس اشلوک کی جامع فہرست',
    selectChapter: 'باب کا انتخاب کریں',
    selectVerse: 'اشلوک کا انتخاب کریں',
    jumpToVerse: 'اشلوک پر جائیں',
    chapterLabel: 'باب',
    verseLabel: 'اشلوک',
    versesCountSuffix: 'اشلوک',
    searchChaptersPlaceholder: 'باب کا نام یا موضوع تلاش کریں...',
    allChaptersHeader: 'بھگود گیتا کے تمام ۱۸ ابواب',
    versesInChapterHeader: 'میں موجود اشلوک',
    goToVerseButton: 'اشلوک کھولیں',
    previousVerseButton: 'پچھلا اشلوک',
    nextVerseButton: 'اگلا اشلوک',
    invalidVerseMessage: 'براہ کرم درست باب (۱–۱۸) اور اشلوک نمبر درج کریں۔',
    viewVerseDetails: 'مطالعہ کے صفحے پر پڑھیں',

    listenButton: 'سنیں',
    pauseButton: 'وقفہ',
    resumeButton: 'دوبارہ چلائیں',
    stopButton: 'روکیں',
    audioLoading: 'آواز تیار کی جا رہی ہے...',
    audioPlayingStatus: 'آواز جاری ہے',
    audioPausedStatus: 'آواز روکی گئی',
    voiceBrowserBadge: 'براؤزر آواز',
    voiceServerBadge: 'اے آئی نیورل آواز',

    sanskritOriginal: 'مقدس سنسکرت اشلوک',
    transliterationLabel: 'رومن تلفظ',
    translationLabel: 'ترجمہ اور بنیادی مفہوم',
    practicalLessonLabel: 'روزمرہ زندگی کا عملی سبق',
    commentaryLabel: 'روحانی تشریح',
    wordMeaningsLabel: 'لفظ بہ لفظ معانی',
    bookmarkAction: 'محفوظ کریں',
    bookmarkedAction: 'محفوظ شدہ',
    shareAction: 'شیئر کریں',
    askAboutThisVerse: 'اس اشلوک پر اے آئی سے پوچھیں',

    heroTitle: 'لازوال دانش و بصیرت',
    heroHighlight: 'آج کی عملی زندگی کے لیے',
    heroDescription:
      'بھگود گیتا کے ۱۸ ابواب اور ۷۰۰ مستند اشلوک پر مبنی۔ ذہنی دباؤ سے نجات، غصے پر قابو اور باطنی سکون کا راستہ پائیں۔',
    heroAskBtn: 'شری کرشن کی حکمت پوچھیں',
    heroDailyBtn: 'آج کا اشلوک',
    heroBrowseBtn: '۱۸ ابواب کی فہرست',
    lifePillarsTitle: 'زندگی کی آزمائشوں کے لیے رہنمائی',
    lifePillarsSubtitle: 'روزمرہ کی پریشانیوں کے حل کے لیے کوئی موضوع منتخب کریں:',
    pillarAnger: 'غصے اور جذباتی ردعمل پر قابو',
    pillarAnxiety: 'ذہنی تناؤ اور بے چینی سے نجات',
    pillarFear: 'خوف اور غیر یقینی کا خاتمہ',
    pillarDiscipline: 'توجہ، قوت ارادی اور ضبط نفس',
    pillarRelationships: 'تعلقات میں معافی اور اعتدال',
    pillarPurpose: 'فرض، اخلاق اور زندگی کا مقصد',
    dailyFeatureHeader: 'آج کا منتخب مقدس اشلوک',

    dailyWisdomTitle: 'روزانہ بھگود گیتا حکمت',
    dailyWisdomSubtitle: 'قدیم تعلیمات جدید زندگی کے لیے واضح رہنمائی۔ ہر روز ایک مقدس اشلوک کے ساتھ ذہنی سکون حاصل کریں۔',
    refreshRandomVerse: 'نیا اشلوک',
    todayVerseBadge: 'روزانہ غور و فکر',

    assistantTitle: 'گیتا لائف اسسٹنٹ',
    assistantSubtitle: 'زندگی کے حقیقی مسائل پوچھیں۔ اپنی مادری زبان میں مستند اشلوک پر مبنی جوابات پائیں۔',
    clearHistory: 'تاریخ صاف کریں',
    inputPlaceholder: 'زندگی یا بھگود گیتا کے بارے میں کچھ بھی پوچھیں...',
    sendButton: 'ارسال کریں',
    listeningSpeech: 'سن رہا ہے... براہ کرم بولیں',
    speechNotSupported: 'اس براؤزر میں آواز کی شناخت کی سہولت نہیں۔ براہ کرم سوال ٹائپ کریں۔',
    speechMicStart: 'بول کر پوچھیں',
    speechMicStop: 'سننا بند کریں',
    suggestedQuestionsTitle: 'عام طور پر پوچھے جانے والے سوالات',
    disclaimerText: 'تمام جوابات بھگود گیتا کے مستند اشلوک پر مبنی ہیں۔ یہ تشریحات تعلیمی مقاصد کے لیے ہیں، شری کرشن کے براہ راست الفاظ نہیں۔',
    aiThinking: 'شری کرشن کی تعلیمات سے غور و فکر جاری ہے...',
    scriptureReferencesHeader: '۲. متعلقہ بھگود گیتا اشلوک',
    krishnaGuidanceHeader: '۱. شری کرشن کی رہنمائی',
    krishnaGuidanceSub: 'بھگود گیتا میں شری کرشن کی آفاقی تعلیمات سے ماخوذ',
    relatedShlokaHeader: '۲. متعلقہ بھگود گیتا اشلوک',
    practicalLessonHeader: '۳. روزمرہ زندگی کا عملی سبق',
    relevanceExplanationLabel: 'آپ کے مسئلے سے تعلق:',
    retryQuestionButton: 'دوبارہ کوشش کریں',
    chatErrorMessage: 'رہنمائی سروس سے رابطہ نہیں ہو سکا۔ براہ کرم دوبارہ کوشش کریں۔',

    explorerTitle: 'تلاش صحائف',
    explorerSubtitle: 'تمام ۱۸ ابواب اور اہم موضوعات کے مطابق اشلوک تلاش کریں۔',
    searchVersesPlaceholder: 'موضوع، لفظ یا باب سے تلاش کریں...',
    filterByTopic: 'موضوع کے لحاظ سے فلٹر کریں',
    allTopics: 'تمام تعلیمات',
    totalVersesFound: 'اشلوک دستیاب ہیں',
    noVersesFound: 'آپ کی تلاش کے مطابق کوئی اشلوک نہیں ملا۔ دوسرے الفاظ آزمائیں۔',

    bookmarksTitle: 'محفوظ شدہ اشلوک اور رہنمائی',
    bookmarksSubtitle: 'روزانہ مطالعے اور یاد دہانی کے لیے آپ کے منتخب کردہ ارشادات۔',
    clearAllBookmarks: 'سب حذف کریں',
    noBookmarksTitle: 'ابھی کوئی اشلوک محفوظ نہیں',
    noBookmarksMessage: 'کسی بھی اشلوک یا جواب کے محفوظ کرنے والے نشان پر کلک کریں تاکہ وہ یہاں ظاہر ہو۔',
    exploreVersesNow: 'اشلوک دیکھیں',
    savedItemVerse: 'اشلوک',
    savedItemAnswer: 'رہنمائی',

    closeModal: 'بند کریں',
    languageSelectLabel: 'زبان منتخب کریں',
    offlineNotice: 'آپ آف لائن ہیں۔ محفوظ شدہ صحائف اب بھی دستیاب ہیں۔',
    onlineRestoredNotice: 'انٹرنیٹ کنکشن بحال ہو گیا ہے۔',
    copySuccess: 'کاپی ہو گیا!',
  },

  sd: {
    appTitle: 'گيتا لائف گائيڊ',
    appSubtitle: 'قديم حڪمت. روزمره جو حل.',
    verifiedBadge: 'تصديق ٿيل گرنٿ',

    navHome: 'هوم',
    navDaily: 'روزاني حڪمت',
    navAssistant: 'گيتا اي آءِ کان پڇو',
    navExplorer: 'گرنٿ',
    navBookmarks: 'سانڍيل',

    audioPlaying: 'آواز هلي رهيو آهي',
    installApp: 'ايپ انسٽال ڪريو',
    testVoice: 'آواز جون سيٽنگون',
    aboutScripture: 'صحيحن جو سچ',
    openChapterSelector: 'سمورا ۱۸ باب ۽ ۷۰۰ اشلوڪ',

    chapterVerseSelectorTitle: 'ڀڳوت گيتا جا باب ۽ اشلوڪ',
    chapterVerseSelectorSubtitle: 'سمورا ۱۸ باب • ۷۰۰ پاڪ اشلوڪن جو مڪمل مجموعو',
    selectChapter: 'باب چونڊيو',
    selectVerse: 'اشلوڪ چونڊيو',
    jumpToVerse: 'اشلوڪ ڏانهن وڃو',
    chapterLabel: 'باب',
    verseLabel: 'اشلوڪ',
    versesCountSuffix: 'اشلوڪ',
    searchChaptersPlaceholder: 'باب جو نالو يا موضوع ڳولهيو...',
    allChaptersHeader: 'ڀڳوت گيتا جا سمورا ۱۸ باب',
    versesInChapterHeader: '۾ موجود اشلوڪ',
    goToVerseButton: 'اشلوڪ کوليو',
    previousVerseButton: 'پوئين اشلوڪ',
    nextVerseButton: 'ايندڙ اشلوڪ',
    invalidVerseMessage: 'مهرباني ڪري صحيح باب (۱–۱۸) ۽ اشلوڪ نمبر لکو.',
    viewVerseDetails: 'پڙهڻ واري صفحي تي کولي پڙهو',

    listenButton: 'ٻڌو',
    pauseButton: 'بيهاريو',
    resumeButton: 'ٻيهر هلايو',
    stopButton: 'بند ڪريو',
    audioLoading: 'آواز تيار ٿي رهيو آهي...',
    audioPlayingStatus: 'آواز جاري آهي',
    audioPausedStatus: 'آواز بيٺل آهي',
    voiceBrowserBadge: 'برائوزر آواز',
    voiceServerBadge: 'اي آءِ نيورل آواز',

    sanskritOriginal: 'پاڪ سنسڪرت اشلوڪ',
    transliterationLabel: 'رومن لکت',
    translationLabel: 'ترجمو ۽ بنيادي معنيٰ',
    practicalLessonLabel: 'روزمره زندگي جو عملي سبق',
    commentaryLabel: 'روحاني تشريح',
    wordMeaningsLabel: 'لفظ بہ لفظ معنيٰ',
    bookmarkAction: 'سانڍيو',
    bookmarkedAction: 'سانڍيل',
    shareAction: 'شيئر ڪريو',
    askAboutThisVerse: 'هن اشلوڪ بابت پڇو',

    heroTitle: 'امر ۽ لازوال حڪمت',
    heroHighlight: 'اڄوڪي روزاني زندگيءَ لاءِ',
    heroDescription:
      'ڀڳوت گيتا جي ۱۸ بابن ۽ ۷۰۰ تصديق ٿيل اشلوڪن تي ٻڌل. پريشاني مان ڇوٽڪارو، ڪاوڙ تي ضابطو ۽ روحاني سڪون حاصل ڪريو.',
    heroAskBtn: 'ڪرشن جي دانائي پڇو',
    heroDailyBtn: 'اڄ جو اشلوڪ',
    heroBrowseBtn: '۱۸ بابن جي فهرست',
    lifePillarsTitle: 'زندگيءَ جي ڏکين گهڙين لاءِ رهنمائي',
    lifePillarsSubtitle: 'روزمره جي مونجهارن جي نبيري لاءِ ڪو موضوع چونڊيو:',
    pillarAnger: 'ڪاوڙ ۽ جذبات تي ڪنٽرول',
    pillarAnxiety: 'دماغي دٻاءُ ۽ فڪرن مان نجات',
    pillarFear: 'خوف ۽ بي چيني جو خاتمو',
    pillarDiscipline: 'من جو ضابطو ۽ پڪو عزم',
    pillarRelationships: 'رشتن ۾ معافي ۽ برابري',
    pillarPurpose: 'فرض، اخلاق ۽ زندگيءَ جو مقصد',
    dailyFeatureHeader: 'اڄ جو خاص چونڊيل اشلوڪ',

    dailyWisdomTitle: 'روزاني ڀڳوت گيتا حڪمت',
    dailyWisdomSubtitle: 'قديم نصيحتون نئين دور لاءِ صاف روشني. هر روز هڪ پاڪ اشلوڪ پڙهي من کي سڪون ڏيو.',
    refreshRandomVerse: 'نئون اشلوڪ',
    todayVerseBadge: 'روزاني فڪر',

    assistantTitle: 'گيتا لائف اسسٽنٽ',
    assistantSubtitle: 'زندگيءَ جا حقيقي مسئلا پڇو. پنهنجي سنڌي ٻوليءَ ۾ گيتا تي ٻڌل حل ماڻيو.',
    clearHistory: 'سڀ ڪجهه مٽايو',
    inputPlaceholder: 'زندگي يا ڀڳوت گيتا بابت ڪجھ به پڇو...',
    sendButton: 'موڪليو',
    listeningSpeech: 'ٻڌي رهيو آهي... مهرباني ڪري ڳالهايو',
    speechNotSupported: 'هن برائوزر ۾ آواز جي سڃاڻپ موجود ناهي. سوال لکي پڇو.',
    speechMicStart: 'ڳالهائي پڇو',
    speechMicStop: 'ٻڌڻ بند ڪريو',
    suggestedQuestionsTitle: 'عام طور پڇيا ويندڙ سوال',
    disclaimerText: 'سڀئي جواب ڀڳوت گيتا جي تصديق ٿيل اشلوڪن تي ٻڌل آهن. هي وضاحتون سکيا لاءِ آهن.',
    aiThinking: 'شري ڪرشن جي هدايتن تي ويچار هلي رهيو آهي...',
    scriptureReferencesHeader: '۲. لاڳاپيل ڀڳوت گيتا اشلوڪ',
    krishnaGuidanceHeader: '۱. شري ڪرشن جي رهنمائي',
    krishnaGuidanceSub: 'ڀڳوت گيتا ۾ شري ڪرشن جي پاڪ سچائيءَ مان ورتل',
    relatedShlokaHeader: '۲. لاڳاپيل ڀڳوت گيتا اشلوڪ',
    practicalLessonHeader: '۳. روزاني زندگيءَ جو عملي سبق',
    relevanceExplanationLabel: 'توهان جي سوال سان لاڳاپو:',
    retryQuestionButton: 'ٻيهر ڪوشش ڪريو',
    chatErrorMessage: 'رهنمائي سروس سان ڳانڍاپو نه ٿي سگهيو. مهرباني ڪري ٻيهر ڪوشش ڪريو.',

    explorerTitle: 'گرنٿ جي ڳولا',
    explorerSubtitle: 'سمورن ۱۸ بابن ۽ اهم موضوعن مان اشلوڪ ڳولهيو.',
    searchVersesPlaceholder: 'موضوع يا باب جي نالي سان ڳولهيو...',
    filterByTopic: 'موضوع موجب فلٽر',
    allTopics: 'سموريون تعليمات',
    totalVersesFound: 'اشلوڪ مليا',
    noVersesFound: 'ڪوبه اشلوڪ نه مليو. ڪو ٻيو لفظ لکو.',

    bookmarksTitle: 'سانڍيل اشلوڪ ۽ هدايتون',
    bookmarksSubtitle: 'روزاني غور ۽ فڪر لاءِ توهان جا پسنديده اشلوڪ.',
    clearAllBookmarks: 'سڀ ختم ڪريو',
    noBookmarksTitle: 'ڪوبه اشلوڪ محفوظ ناهي',
    noBookmarksMessage: 'ڪنهن به اشلوڪ يا جواب جي ن نشان تي ٽيپ ڪري ان کي هتي محفوظ ڪريو.',
    exploreVersesNow: 'اشلوڪ ڏسو',
    savedItemVerse: 'اشلوڪ',
    savedItemAnswer: 'رهنمائي',

    closeModal: 'بند ڪريو',
    languageSelectLabel: 'ٻولي چونڊيو',
    offlineNotice: 'توهان آف لائن آهيو. سانڍيل اشلوڪ اڃا به پڙهي سگهجن ٿا.',
    onlineRestoredNotice: 'انٽرنيٽ واپس ڳنڍجي ويو آهي.',
    copySuccess: 'ڪاپي ٿي ويو!',
  },

  ta: {
    appTitle: 'கீதா லைஃப் கைடு',
    appSubtitle: 'பண்டைய ஞானம். அன்றாட தீர்வுகள்.',
    verifiedBadge: 'சரிபார்க்கப்பட்ட சாஸ்திரம்',

    navHome: 'முகப்பு',
    navDaily: 'தினசரி ஞானம்',
    navAssistant: 'கீதை ஏஐ கேளுங்கள்',
    navExplorer: 'சாஸ்திரங்கள்',
    navBookmarks: 'சேமிக்கப்பட்டவை',

    audioPlaying: 'ஒலி இயங்குகிறது',
    installApp: 'செயலி நிறுவு',
    testVoice: 'குரல் அமைப்புகள்',
    aboutScripture: 'சாஸ்திர உண்மைத்தன்மை',
    openChapterSelector: 'அனைத்து 18 அத்தியாயங்கள் & 700 சுலோகங்கள்',

    chapterVerseSelectorTitle: 'பகவத் கீதை அத்தியாயங்கள் & சுலோகங்கள்',
    chapterVerseSelectorSubtitle: 'முழுமையான 18 அத்தியாயங்கள் • 700 புனித சுலோகங்களின் பட்டியல்',
    selectChapter: 'அத்தியாயம் தேர்வு செய்க',
    selectVerse: 'சுலோகம் தேர்வு செய்க',
    jumpToVerse: 'சுலோகத்திற்கு செல்லவும்',
    chapterLabel: 'அத்தியாயம்',
    verseLabel: 'சுலோகம்',
    versesCountSuffix: 'சுலோகங்கள்',
    searchChaptersPlaceholder: 'அத்தியாயம் அல்லது கருத்தை தேடவும்...',
    allChaptersHeader: 'பகவத் கீதையின் 18 அத்தியாயங்கள்',
    versesInChapterHeader: 'உள்ள சுலோகங்கள்',
    goToVerseButton: 'சுலோகத்தை வாசிக்க',
    previousVerseButton: 'முந்தைய சுலோகம்',
    nextVerseButton: 'அடுத்த சுலோகம்',
    invalidVerseMessage: 'சரியான அத்தியாயம் (1–18) மற்றும் சுலோக எண்ணை உள்ளிடவும்.',
    viewVerseDetails: 'வாசிப்பு பக்கத்தில் திறக்கவும்',

    listenButton: 'கேளுங்கள்',
    pauseButton: 'இடைநிறுத்து',
    resumeButton: 'தொடரவும்',
    stopButton: 'நிறுத்து',
    audioLoading: 'குரல் தயாராகிறது...',
    audioPlayingStatus: 'ஒலி கேட்கிறது',
    audioPausedStatus: 'ஒலி இடைநிறுத்தப்பட்டது',
    voiceBrowserBadge: 'உலவி குரல்',
    voiceServerBadge: 'ஏஐ குரல்',

    sanskritOriginal: 'புனித சமஸ்கிருத சுலோகம்',
    transliterationLabel: 'ரோமன் உச்சரிப்பு',
    translationLabel: 'மொழிபெயர்ப்பு & முதன்மை பொருள்',
    practicalLessonLabel: 'அன்றாட வாழ்விற்கான நடைமுறை பாடம்',
    commentaryLabel: 'ஆன்மீக விளக்கம்',
    wordMeaningsLabel: 'சொல் பொருள்',
    bookmarkAction: 'சேமிக்க',
    bookmarkedAction: 'சேமிக்கப்பட்டது',
    shareAction: 'பகிர்',
    askAboutThisVerse: 'இந்த சுலோகம் பற்றி ஏஐயிடம் கேளுங்கள்',

    heroTitle: 'காலத்தால் அழியாத ஞானம்',
    heroHighlight: 'இன்றைய அன்றாட வாழ்விற்கு',
    heroDescription:
      'பகவத் கீதையின் 18 அத்தியாயங்களில் உள்ள 700 உண்மையான சுலோகங்களை அடிப்படையாகக் கொண்டது. மன அழுத்தத்தை வென்று அமைதி பெறுங்கள்.',
    heroAskBtn: 'கிருஷ்ணரின் ஞானத்தைக் கேளுங்கள்',
    heroDailyBtn: 'இன்றைய சுலோகம்',
    heroBrowseBtn: '18 அத்தியாய பட்டியல்',
    lifePillarsTitle: 'வாழ்க்கைப் போராட்டங்களுக்கான காலமற்ற வழிகாட்டுதல்',
    lifePillarsSubtitle: 'உங்கள் மனக்கவலைக்கு ஸ்ரீகிருஷ்ணரின் உளவியல் தீர்வுகளைக் காண ஒரு தலைப்பைத் தேர்வு செய்க:',
    pillarAnger: 'கோபத்தை கட்டுப்படுத்துதல்',
    pillarAnxiety: 'மன அழுத்தம் மற்றும் சோர்வை வெல்லுதல்',
    pillarFear: 'பயம் மற்றும் நிச்சயமற்ற தன்மையை போக்குதல்',
    pillarDiscipline: 'மன ஒருமைப்பாடு மற்றும் உறுதி',
    pillarRelationships: 'உறவுகளில் மன்னிப்பு மற்றும் சமநிலை',
    pillarPurpose: 'கடமை, தர்மம் மற்றும் வாழ்வின் நோக்கம்',
    dailyFeatureHeader: 'இன்றைய சிறப்பு சுலோகம்',

    dailyWisdomTitle: 'தினசரி பகவத் கீதை ஞானம்',
    dailyWisdomSubtitle: 'பண்டைய புனித சுலோகங்களின் நவீன விளக்கங்கள். ஒவ்வொரு நாளும் ஒரு சுலோகத்துடன் மன அமைதி பெறுங்கள்.',
    refreshRandomVerse: 'புதிய சுலோகம்',
    todayVerseBadge: 'தினசரி தியானம்',

    assistantTitle: 'கீதா லைஃப் உதவியாளர்',
    assistantSubtitle: 'வாழ்க்கை சிக்கல்களைக் கேளுங்கள். சாஸ்திர உண்மைத்தன்மையுடன் உங்கள் மொழியிலேயே பதில் பெறுங்கள்.',
    clearHistory: 'வரலாற்றை அழிக்கவும்',
    inputPlaceholder: 'வாழ்க்கை அல்லது பகவத் கீதை பற்றி எதையும் கேளுங்கள்...',
    sendButton: 'அனுப்புக',
    listeningSpeech: 'கேட்கிறது... தயவுசெய்து பேசுங்கள்',
    speechNotSupported: 'இந்த உலவியில் குரல் அறிதல் ஆதரிக்கப்படவில்லை. தயவுசெய்து தட்டச்சு செய்யவும்.',
    speechMicStart: 'பேசி கேட்கவும்',
    speechMicStop: 'பேசுவதை நிறுத்தவும்',
    suggestedQuestionsTitle: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
    disclaimerText: 'அனைத்து பதில்களும் பகவத் கீதையின் உண்மையான சுலோகங்களை அடிப்படையாகக் கொண்டவை.',
    aiThinking: 'ஸ்ரீகிருஷ்ணரின் உபதேசங்கள் சிந்திக்கப்படுகின்றன...',
    scriptureReferencesHeader: '2. தொடர்புடைய பகவத் கீதை சுலோகம்',
    krishnaGuidanceHeader: '1. ஸ்ரீகிருஷ்ணரின் வழிகாட்டல்',
    krishnaGuidanceSub: 'பகவத் கீதையில் ஸ்ரீகிருஷ்ணரின் புனித போதனைகளால் ஈர்க்கப்பட்டது',
    relatedShlokaHeader: '2. தொடர்புடைய பகவத் கீதை சுலோகம்',
    practicalLessonHeader: '3. நடைமுறை வாழ்வியல் பாடம்',
    relevanceExplanationLabel: 'உங்கள் சூழலுக்கான பொருத்தம்:',
    retryQuestionButton: 'மீண்டும் முயற்சிக்கவும்',
    chatErrorMessage: 'வழிகாட்டல் சேவையை இணைக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்.',

    explorerTitle: 'சாஸ்திர ஆய்வு',
    explorerSubtitle: '18 அத்தியாயங்கள் மற்றும் வாழ்க்கைத் தலைப்புகளில் சுலோகங்களை ஆராயுங்கள்.',
    searchVersesPlaceholder: 'தலைப்பு அல்லது சுலோகம் தேடவும்...',
    filterByTopic: 'தலைப்பு வாரியாக வடிகட்டு',
    allTopics: 'அனைத்து போதனைகளும்',
    totalVersesFound: 'சுலோகங்கள் உள்ளன',
    noVersesFound: 'பொருத்தமான சுலோகங்கள் எதுவும் கிடைக்கவில்லை.',

    bookmarksTitle: 'சேமிக்கப்பட்ட சுலோகங்கள் & வழிகாட்டல்கள்',
    bookmarksSubtitle: 'தினசரி வாசிப்பு மற்றும் சிந்தனைக்கு உங்கள் விருப்பமான போதனைகள்.',
    clearAllBookmarks: 'அனைத்தையும் அழிக்கவும்',
    noBookmarksTitle: 'சேமிக்கப்பட்டவை எதுவுமில்லை',
    noBookmarksMessage: 'எந்தவொரு சுலோகத்திலும் சேமிப்பு குறியீட்டை அழுத்தி இங்கு சேர்க்கலாம்.',
    exploreVersesNow: 'சுலோகங்களை காண்க',
    savedItemVerse: 'சுலோகம்',
    savedItemAnswer: 'வழிகாட்டல்',

    closeModal: 'மூடுக',
    languageSelectLabel: 'மொழியைத் தேர்ந்தெடுக்கவும்',
    offlineNotice: 'நீங்கள் ஆஃப்லைனில் உள்ளீர்கள். சேமிக்கப்பட்டவை எப்போதும் கிடைக்கும்.',
    onlineRestoredNotice: 'இணைய இணைப்பு மீண்டும் கிடைத்தது.',
    copySuccess: 'நகலெடுக்கப்பட்டது!',
  },

  gu: {
    appTitle: 'ગીતા લાઇફ ગાઇડ',
    appSubtitle: 'પ્રાચીન વિવેક. રોજિંદા સમાધાન.',
    verifiedBadge: 'પ્રમાણિત શાસ્ત્ર',

    navHome: 'હોમ',
    navDaily: 'દૈનિક જ્ઞાન',
    navAssistant: 'ગીતા એઆઈને પૂછો',
    navExplorer: 'શાસ્ત્રો',
    navBookmarks: 'સાચવેલા',

    audioPlaying: 'અવાજ ચાલુ છે',
    installApp: 'એપ ઇન્સ્ટોલ કરો',
    testVoice: 'અવાજ સેટિંગ્સ',
    aboutScripture: 'શાસ્ત્ર પ્રામાણિકતા',
    openChapterSelector: 'બધા ૧૮ અધ્યાય અને ૭૦૦ શ્લોક',

    chapterVerseSelectorTitle: 'શ્રીમદ્ભગવદ્ગીતા અધ્યાય અને શ્લોક',
    chapterVerseSelectorSubtitle: 'સંપૂર્ણ ૧૮ અધ્યાય • ૭૦૦ પવિત્ર શ્લોકની યાદી',
    selectChapter: 'અધ્યાય પસંદ કરો',
    selectVerse: 'શ્લોક પસંદ કરો',
    jumpToVerse: 'શ્લોક પર જાઓ',
    chapterLabel: 'અધ્યાય',
    verseLabel: 'શ્લોક',
    versesCountSuffix: 'શ્લોક',
    searchChaptersPlaceholder: 'અધ્યાયનું નામ અથવા વિષય શોધો...',
    allChaptersHeader: 'ભગવદ્ગીતાના તમામ ૧૮ અધ્યાય',
    versesInChapterHeader: 'ના ઉપલબ્ધ શ્લોક',
    goToVerseButton: 'શ્લોક ખોલો',
    previousVerseButton: 'પાછલો શ્લોક',
    nextVerseButton: 'આગળનો શ્લોક',
    invalidVerseMessage: 'કૃપા કરી માન્ય અધ્યાય (૧–૧૮) અને શ્લોક ક્રમાંક દાખલ કરો.',
    viewVerseDetails: 'વાંચન ખંડમાં વાંચો',

    listenButton: 'સાંભળો',
    pauseButton: 'અટકાવો',
    resumeButton: 'ફરી ચલાવો',
    stopButton: 'બંધ કરો',
    audioLoading: 'અવાજ તૈયાર થઈ રહ્યો છે...',
    audioPlayingStatus: 'અવાજ ચાલુ છે',
    audioPausedStatus: 'અવાજ અટકાવ્યો છે',
    voiceBrowserBadge: 'બ્રાઉઝર અવાજ',
    voiceServerBadge: 'એઆઈ ન્યુરલ અવાજ',

    sanskritOriginal: 'પવિત્ર સંસ્કૃત શ્લોક',
    transliterationLabel: 'રોમન લિપ્યંતરણ',
    translationLabel: 'અનુવાદ અને મૂળ અર્થ',
    practicalLessonLabel: 'રોજિંદા જીવન માટે વ્યવહારુ શીખ',
    commentaryLabel: 'આધ્યાત્મિક વિવેચન',
    wordMeaningsLabel: 'શબ્દાર્થ',
    bookmarkAction: 'સાચવો',
    bookmarkedAction: 'સાચવ્યું',
    shareAction: 'શેર કરો',
    askAboutThisVerse: 'આ શ્લોક પર એઆઈને પૂછો',

    heroTitle: 'શાશ્વત જીવન વિવેક',
    heroHighlight: 'આજના રોજિંદા જીવન માટે',
    heroDescription:
      'શ્રીમદ્ભગવદ્ગીતાના ૧૮ અધ્યાયના ૭૦૦ પ્રમાણિત શ્લોક પર આધારિત. તણાવ મુક્તિ, ક્રોધ પર વિજય અને મનની પરમ શાંતિ મેળવો.',
    heroAskBtn: 'શ્રીકૃષ્ણની શીખ પૂછો',
    heroDailyBtn: 'આજનો શ્લોક',
    heroBrowseBtn: '૧૮ અધ્યાય યાદી',
    lifePillarsTitle: 'જીવનના પડકારો માટે માર્ગદર્શન',
    lifePillarsSubtitle: 'કોઈપણ મૂંઝવણના નિવારણ માટે વિષય પસંદ કરો:',
    pillarAnger: 'ક્રોધ અને આવેગ પર નિયંત્રણ',
    pillarAnxiety: 'તણાવ અને ચિંતામાંથી મુક્તિ',
    pillarFear: 'ભય અને અનિશ્ચિતતાનો અંત',
    pillarDiscipline: 'મનની એકાગ્રતા અને સંકલ્પ',
    pillarRelationships: 'સંબંધોમાં ક્ષમા અને સમતા',
    pillarPurpose: 'કર્તવ્ય, ધર્મ અને જીવન લક્ષ્ય',
    dailyFeatureHeader: 'આજનો વિશેષ શ્લોક',

    dailyWisdomTitle: 'દૈનિક ભગવદ્ગીતા વિવેક',
    dailyWisdomSubtitle: 'પ્રાચીન પવિત્ર શ્લોકોની આધુનિક જીવનમાં સરળ સમજ. રોજેરોજ એક શ્લોક સાથે મન શાંત કરો.',
    refreshRandomVerse: 'નવો શ્લોક',
    todayVerseBadge: 'દૈનિક મનન',

    assistantTitle: 'ગીતા લાઇફ સહાયક',
    assistantSubtitle: 'જીવનના વાસ્તવિક પ્રશ્નો પૂછો. તમારી માતૃભાષામાં શાસ્ત્રોક્ત ઉત્તર મેળવો.',
    clearHistory: 'ઈતિહાસ સાફ કરો',
    inputPlaceholder: 'જીવન અથવા ભગવદ્ ગીતા વિશે કંઈપણ પૂછો...',
    sendButton: 'મોકલો',
    listeningSpeech: 'સાંભળી રહ્યું છે... બોલો',
    speechNotSupported: 'આ બ્રાઉઝરમાં અવાજ ઓળખવાની સુવિધા નથી. કૃપા કરી ટાઈપ કરો.',
    speechMicStart: 'બોલીને પૂછો',
    speechMicStop: 'સાંભળવું બંધ કરો',
    suggestedQuestionsTitle: 'વારંવાર પૂછાતા પ્રશ્નો',
    disclaimerText: 'તમામ ઉત્તરો ભગવદ્ગીતાના પ્રમાણિત શ્લોકો પર આધારિત છે. આ સમજૂતી શૈક્ષણિક છે.',
    aiThinking: 'શ્રીકૃષ્ણની શિક્ષાઓમાંથી વિચારણા ચાલુ છે...',
    scriptureReferencesHeader: '૨. સંબંધિત ભગવદ્ ગીતા શ્લોક',
    krishnaGuidanceHeader: '૧. શ્રીકૃષ્ણનું માર્ગદર્શન',
    krishnaGuidanceSub: 'ભગવદ્ ગીતામાં શ્રીકૃષ્ણના દિવ્ય ઉપદેશમાંથી પ્રેરિત',
    relatedShlokaHeader: '૨. સંબંધિત ભગવદ્ ગીતા શ્લોક',
    practicalLessonHeader: '૩. વ્યવહારુ જીવન પાઠ',
    relevanceExplanationLabel: 'તમારી પરિસ્થિતિ સાથે સંબંધ:',
    retryQuestionButton: 'ફરી પ્રયાસ કરો',
    chatErrorMessage: 'માર્ગદર્શન સેવા સાથે સંપર્ક થઈ શક્યો નથી. કૃપા કરીને ફરી પ્રયાસ કરો.',

    explorerTitle: 'શાસ્ત્ર સંશોધન',
    explorerSubtitle: 'તમામ ૧૮ અધ્યાય અને જીવનના વિષયો અનુસાર શ્લોક શોધો.',
    searchVersesPlaceholder: 'વિષય, શબ્દ કે અધ્યાયથી શોધો...',
    filterByTopic: 'વિષય મુજબ પસંદ કરો',
    allTopics: 'બધા ઉપદેશો',
    totalVersesFound: 'શ્લોક મળ્યા',
    noVersesFound: 'શોધ મુજબ કોઈ શ્લોક મળ્યો નથી. બીજો શબ્દ શોધો.',

    bookmarksTitle: 'સાચવેલા શ્લોક અને માર્ગદર્શન',
    bookmarksSubtitle: 'રોજિંદા મનન માટે તમારા મનગમતા ઉપદેશો.',
    clearAllBookmarks: 'બધા દૂર કરો',
    noBookmarksTitle: 'હજુ કોઈ શ્લોક સાચવ્યો નથી',
    noBookmarksMessage: 'કોઈપણ શ્લોક પર બુકમાર્ક આઇકન દબાવીને અહીં સાચવો.',
    exploreVersesNow: 'શ્લોક જુઓ',
    savedItemVerse: 'શ્લોક',
    savedItemAnswer: 'માર્ગદર્શન',

    closeModal: 'બંધ કરો',
    languageSelectLabel: 'ભાષા પસંદ કરો',
    offlineNotice: 'તમે ઑફલાઇન છો. સાચવેલા શ્લોકો ઉપલબ્ધ છે.',
    onlineRestoredNotice: 'ઇન્ટરનેટ કનેક્શન પુનઃ સ્થાપિત થયું.',
    copySuccess: 'કોપી થઈ ગયું!',
  },
};

export function getTranslation(lang: LanguageCode): TranslationDictionary {
  return TRANSLATIONS[lang] || TRANSLATIONS.en;
}
