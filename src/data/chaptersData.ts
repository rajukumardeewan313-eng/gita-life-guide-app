import { LanguageCode } from './languages';

export interface ChapterInfo {
  number: number;
  verseCount: number;
  sanskritName: string;
  transliteration: string;
  slug: string;
  titles: Record<LanguageCode, string>;
  summaries: Record<LanguageCode, string>;
}

export const GITA_CHAPTERS: ChapterInfo[] = [
  {
    number: 1,
    verseCount: 47,
    sanskritName: 'अर्जुनविषादयोग',
    transliteration: 'Arjuna Viṣāda Yoga',
    slug: 'arjuna-vishada-yoga',
    titles: {
      en: 'The Despair of Arjuna',
      hi: 'अर्जुन विषाद योग (शोक और व्याकुलता)',
      ur: 'ارجن کا ملال اور اضطراب',
      sd: 'ارجن جو اضطراب ۽ غم',
      ta: 'அர்ஜுன விஷாத யோகம் (துயர யோகம்)',
      gu: 'અર્જુન વિષાદ યોગ (શોક અને વ્યાકુળતા)',
    },
    summaries: {
      en: 'Arjuna surveys the opposing armies at Kurukshetra, is overwhelmed by grief, moral paralysis, and attachment, and casts down his bow refusing to fight.',
      hi: 'कुरुक्षेत्र के मैदान में दोनों सेनाओं को देखकर अर्जुन मोह और विषाद से व्याकुल होकर धनुष-बाण त्याग देते हैं।',
      ur: 'میدان کروکشیتر میں دونوں فوجوں کو دیکھ کر ارجن غم، تردد اور کمزوری کا شکار ہو کر اپنے ہتھیار ڈال دیتا ہے۔',
      sd: 'ڪروڪشيتر جي ميدان تي ارجن مائٽن کي سامهون ڏسي ڏک ۽ فڪر ۾ پنهنجا هٿيار اڇلائي ڇڏي ٿو.',
      ta: 'போர்க்களத்தில் உற்றார் உறவினர்களைக் கண்டு மனம் உடைந்து அர்ஜுனன் போரிட மறுத்து வில்லை நழுவ விடுகிறார்.',
      gu: 'કુરુક્ષેત્રના મેદાનમાં સ્વજનોને જોઈ અર્જુન મોહ અને શોકમાં ડૂબી પોતાનું ધનુષ્ય મૂકી દે છે.',
    },
  },
  {
    number: 2,
    verseCount: 72,
    sanskritName: 'साङ्ख्ययोग',
    transliteration: 'Sāṅkhya Yoga',
    slug: 'sankhya-yoga',
    titles: {
      en: 'Yoga of Knowledge & Selfless Action',
      hi: 'साङ्ख्य योग (ज्ञान और निष्काम कर्म)',
      ur: 'سانکھیا یوگ (علم روح اور بے غرض عمل)',
      sd: 'سانکيه يوگ (روح جو علم ۽ فرض جو دڳ)',
      ta: 'சாங்கிய யோகம் (ஆத்ம ஞானம் மற்றும் கடமை)',
      gu: 'સાંખ્ય યોગ (આત્મજ્ઞાન અને નિષ્કામ કર્મ)',
    },
    summaries: {
      en: 'Krishna awakens Arjuna by revealing the eternal immortality of the soul (Atman), the duty of right action (Karma Yoga), and the peace of the steady-minded sage (Sthitaprajna).',
      hi: 'श्रीकृष्ण आत्मा की अमरता, कर्मण्येवाधिकारस्ते का निष्काम कर्म सिद्धांत और स्थितप्रज्ञ मुनि के लक्षण समझाते हैं।',
      ur: 'شری کرشن روح کی لافانی حقیقت، فرض کی بے لوث ادائیگی اور متوازن عقل والے دانا کے اوصاف بیان فرماتے ہیں۔',
      sd: 'شري ڪرشن روح جي امر هجڻ، بنا لالچ فرض پورو ڪرڻ ۽ ثابت قدم ماڻهو جا گڻ ٻڌائي ٿو.',
      ta: 'ஸ்ரீகிருஷ்ணர் ஆன்மாவின் அழியாத தன்மை, பலனை எதிர்பாராத கடமை மற்றும் நிலைத்த மனமுடைய முனிவரின் இயல்பை விளக்குகிறார்.',
      gu: 'શ્રીકૃષ્ણ આત્માની અમરતા, કર્મણ્યેવાધિકારસ્તેનો નિષ્કામ કર્મ સિદ્ધાંત અને સ્થિતપ્રજ્ઞનાં લક્ષણો સમજાવે છે.',
    },
  },
  {
    number: 3,
    verseCount: 43,
    sanskritName: 'कर्मयोग',
    transliteration: 'Karma Yoga',
    slug: 'karma-yoga',
    titles: {
      en: 'Yoga of Action',
      hi: 'कर्म योग (कर्तव्य पालन का मार्ग)',
      ur: 'کرم یوگ (عمل اور فرض کی راہ)',
      sd: 'ڪرم يوگ (عمل ۽ خدمت جو رستو)',
      ta: 'கர்ம யோகம் (செயல் யோகம்)',
      gu: 'કર્મ યોગ (કર્તવ્ય પાલનનો માર્ગ)',
    },
    summaries: {
      en: 'Why right action is superior to total renunciation. Performing duty without selfish desires cleanses the heart and sets an uplifting example for society.',
      hi: 'कर्म संन्यास से कर्मयोग श्रेष्ठ है। लोकसंग्रह और निःस्वार्थ भाव से किया गया कर्म ही परमात्मा तक ले जाता है।',
      ur: 'عمل ترک کرنے سے بہتر بے لوث عمل ہے۔ دوسروں کی بھلائی اور رضائے الٰہی کے لیے فرض پورا کرنا سچی عبادت ہے۔',
      sd: 'ڪم ڇڏڻ کان وڌيڪ اتم بنا لالچ خدمت ڪرڻ آهي، جيڪو سماج لاءِ سٺو مثال قائم ڪري ٿو.',
      ta: 'செயல்களைத் துறப்பதை விட தன்னலமற்ற கடமையாற்றுவதே சிறந்தது என்று பகவான் அருளுகிறார்.',
      gu: 'કર્મનો ત્યાગ કરવા કરતાં નિષ્કામ કર્મ શ્રેષ્ઠ છે. લોકસંગ્રહ અને નિઃસ્વાર્થ ભાવથી કર્તવ્ય કરવું એ સાચી પૂજા છે.',
    },
  },
  {
    number: 4,
    verseCount: 42,
    sanskritName: 'ज्ञानकर्मसंन्यासयोग',
    transliteration: 'Jñāna Karma Sanyāsa Yoga',
    slug: 'jnana-karma-sanyasa-yoga',
    titles: {
      en: 'Yoga of Wisdom & Renunciation of Action in Knowledge',
      hi: 'ज्ञानकर्मसंन्यास योग (दिव्य ज्ञान और कर्म)',
      ur: 'علم، عمل اور قربانی کا یوگ',
      sd: 'علم ۽ ڪرم جي تياڳ جو يوگ',
      ta: 'ஞான கர்ம சன்னியாச யோகம்',
      gu: 'જ્ઞાનકર્મસંન્યાસ યોગ (દિવ્ય જ્ઞાન અને કર્મ)',
    },
    summaries: {
      en: 'The descent of the Divine in every age to restore dharma, the fire of knowledge that burns all selfish karmas, and the supremacy of spiritual wisdom.',
      hi: 'धर्म संस्थापनार्थ अवतार का रहस्य, ज्ञान की अग्नि द्वारा कर्म बंधनों का भस्म होना और श्रद्धा से प्राप्त ज्ञान की महिमा।',
      ur: 'ہر دور میں سچائی کی بحالی، معرفت کی آگ سے گناہوں اور خواہشات کا خاتمہ اور علم کی برتری۔',
      sd: 'دھرم جي حفاظت لاءِ اوتار وٺڻ جو راز ۽ اها روشني جيڪا سڀني ڏکن کي ساڙي ڇڏي ٿي.',
      ta: 'தர்மத்தை நிலைநாட்ட அவதரிக்கும் ரகசியம் மற்றும் ஞானத் தீயினால் வினைகள் எரிக்கப்படும் விதம்.',
      gu: 'ધર્મ સ્થાપના માટે અવતારનું રહસ્ય, જ્ઞાનની અગ્નિથી કર્મોનું ભસ્મ થવું અને શ્રદ્ધાવાનને મળતું જ્ઞાન.',
    },
  },
  {
    number: 5,
    verseCount: 29,
    sanskritName: 'कर्मसंन्यासयोग',
    transliteration: 'Karma Sanyāsa Yoga',
    slug: 'karma-sanyasa-yoga',
    titles: {
      en: 'Yoga of True Renunciation',
      hi: 'कर्मसंन्यास योग (कर्म त्याग और समर्पण)',
      ur: 'ترک عمل اور باطنی تسلیم کا یوگ',
      sd: 'سچي تياڳ ۽ اندروني امن جو يوگ',
      ta: 'கர்ம சன்னியாச யோகம்',
      gu: 'કર્મસંન્યાસ યોગ (સાચો ત્યાગ અને સમર્પણ)',
    },
    summaries: {
      en: 'Harmonizing action with inner detachment. The enlightened practitioner acts in the world like a lotus leaf untouched by the water it rests upon.',
      hi: 'कमल के पत्ते की तरह जल में रहते हुए भी लिप्त न होना। अंतःकरण की शुद्धि और समभाव से परम शांति का अनुभव।',
      ur: 'دنیاوی ذمہ داریوں کو کنول کے پتے کی مانند انجام دینا جو پانی میں رہ کر بھی تر نہیں ہوتا۔',
      sd: 'ڪنول جي گل وانگر دنيا جي پاڻيءَ ۾ رهي به پاڪ صاف رهڻ ۽ اندروني سلامتي ماڻڻ.',
      ta: 'தாமரை இலை மேல் தண்ணீர் ஒட்டாதது போல, பற்றின்றி கடமைகளைச் செய்து அமைதி அடைதல்.',
      gu: 'કમળપત્રની જેમ સંસારમાં રહીને પણ અલિપ્ત રહેવું. સમત્વ ભાવથી પરમ શાંતિ પ્રાપ્ત થાય છે.',
    },
  },
  {
    number: 6,
    verseCount: 47,
    sanskritName: 'ध्यानयोग',
    transliteration: 'Dhyāna Yoga',
    slug: 'dhyana-yoga',
    titles: {
      en: 'Yoga of Meditation & Mind Mastery',
      hi: 'ध्यान योग (आत्मसंयम और मन की एकाग्रता)',
      ur: 'دھیان یوگ (مراقبہ اور ذہن کا ضبط)',
      sd: 'ڌيان يوگ (من جي ضابطي ۽ مراقبي جو رستو)',
      ta: 'தியான யோகம் (மனக்கட்டுப்பாடு)',
      gu: 'ધ્યાન યોગ (આત્મસંયમ અને મનની એકાગ્રતા)',
    },
    summaries: {
      en: 'The art of mastering the restless mind through consistent practice (Abhyasa) and detachment (Vairagya). The mind is one’s greatest friend or worst enemy.',
      hi: 'अभ्यास और वैराग्य से चंचल मन का संयम। मन ही मित्र है और मन ही शत्रु है। योगभ्रष्ट का कल्याण।',
      ur: 'مسلسل ریاضت اور بے رغبتی سے بے چین ذہن کو قابو کرنا۔ ذہن ہی انسان کا دوست اور ذہن ہی دشمن ہے۔',
      sd: 'مسلسل مشق ۽ صبر سان بي چين من کي پنهنجو سچو دوست بڻائڻ.',
      ta: 'பயிற்சி மற்றும் பற்றின்மையால் அலைபாயும் மனதை அடக்கி, தன்னைத்தானே உயர்த்திக்கொள்ளும் கலை.',
      gu: 'અભ્યાસ અને વૈરાગ્યથી ચંચળ મનને વશ કરવું. મન જ મિત્ર છે અને મન જ શત્રુ છે.',
    },
  },
  {
    number: 7,
    verseCount: 30,
    sanskritName: 'ज्ञानविज्ञानयोग',
    transliteration: 'Jñāna Vijñāna Yoga',
    slug: 'jnana-vijnana-yoga',
    titles: {
      en: 'Yoga of Knowledge and Realization',
      hi: 'ज्ञानविज्ञान योग (ईश्वरीय ज्ञान और अनुभव)',
      ur: 'عرفان و دانائی کا یوگ',
      sd: 'الهي علم ۽ مشاهدي جو يوگ',
      ta: 'ஞான விஞ்ஞான யோகம்',
      gu: 'જ્ઞાનવિજ્ઞાન યોગ (દિવ્ય અનુભૂતિ)',
    },
    summaries: {
      en: 'Krishna reveals His material and spiritual energies holding all existence like pearls on a string. Four types of virtuous seekers approach God.',
      hi: 'सृष्टि में परमात्मा की उपस्थिति माला में धागे की तरह है। चार प्रकार के भक्त (आर्त, अर्थार्थी, जिज्ञासु, ज्ञानी) भगवान की शरण लेते हैं।',
      ur: 'تمام کائنات خدا کے وجود میں یوں پروئی ہے جیسے موتی لڑی میں۔ چار قسم کے لوگ پروردگار کی پناہ لیتے ہیں۔',
      sd: 'سموري ڪائنات مالڪ جي نور ۾ پوتل موتين وانگر آهي. سچا ڳولائو خدا وٽ پناهه وٺن ٿا.',
      ta: 'முத்துமாலையில் நூல் போல அனைத்து உயிர்களிலும் இறைவனே வியாபித்திருக்கிறார் என்ற உண்மை.',
      gu: 'બ્રહ્માંડમાં પરમાત્મા માળામાં સૂતરના દોરાની જેમ વ્યાપ્ત છે. ચાર પ્રકારના ભક્તો શરણે આવે છે.',
    },
  },
  {
    number: 8,
    verseCount: 28,
    sanskritName: 'अक्षरब्रह्मयोग',
    transliteration: 'Akṣhara Brahma Yoga',
    slug: 'akshara-brahma-yoga',
    titles: {
      en: 'Yoga of the Imperishable Absolute',
      hi: 'अक्षरब्रह्म योग (अविनाशी परब्रह्म की प्राप्ति)',
      ur: 'ابد اور لافانی ذات کا یوگ',
      sd: 'امر پرماتما جي پراپتي جو يوگ',
      ta: 'அக்ஷர பிரம்ம யோகம்',
      gu: 'અક્ષરબ્રહ્મ યોગ (અવિનાશી પરબ્રહ્મ)',
    },
    summaries: {
      en: 'The mystery of the final moment of life: how continuous remembrance of the Supreme leads to liberation beyond the cycles of birth and death.',
      hi: 'अंतिम समय में परमात्मा का स्मरण और पुनर्जन्म के चक्र से मुक्ति का सनातन विधान।',
      ur: 'زندگی کے آخری لمحے میں سچی یاد اور دائمی نجات کا راستہ۔',
      sd: 'زندگي جي آخري پل ۾ مالڪ جو ذڪر ۽ جنم مرڻ جي چڪر مان ڇوٽڪارو.',
      ta: 'மரணத் தருவாயில் இறைவனை நினைத்து அழியாத பிரம்ம நிலையை அடையும் மார்க்கம்.',
      gu: 'અંતકાળે પરમાત્માનું સ્મરણ અને જન્મ-મરણના ચક્રમાંથી મુક્તિનું વિધાન.',
    },
  },
  {
    number: 9,
    verseCount: 34,
    sanskritName: 'राजविद्याराजगुह्ययोग',
    transliteration: 'Rāja Vidyā Rāja Guhya Yoga',
    slug: 'raja-vidya-raja-guhya-yoga',
    titles: {
      en: 'Yoga of Sovereign Knowledge & Sovereign Secret',
      hi: 'राजविद्याराजगुह्य योग (परम गोपनीय ज्ञान)',
      ur: 'اعلیٰ ترین حکمت اور شاہانہ راز کا یوگ',
      sd: 'سڀ کان اوچي ۽ ڳجهي علم جو يوگ',
      ta: 'ராஜவித்யா ராஜகுஹ்ய யோகம்',
      gu: 'રાજવિદ્યારાજગુહ્ય યોગ (પરમ ગુપ્ત જ્ઞાન)',
    },
    summaries: {
      en: 'The supreme secret of devotion: whoever offers with love a leaf, flower, fruit, or water, the Divine accepts that heartfelt offering.',
      hi: 'पत्रं पुष्पं फलं तोयं - प्रेमपूर्वक अर्पित की गई छोटी सी भेंट भी प्रभु स्वीकार करते हैं। अनन्य भाव से शरणागति।',
      ur: 'محبت سے پیش کی گئی معمولی سی پتی یا پانی کا گھونٹ بھی خدا کے ہاں قبول ہو جاتا ہے۔',
      sd: 'محبت مان پيش ڪيل پن يا گل به خدا قبول ڪري ٿو. اڻ کٽ پيار ئي سچي بندگي آهي.',
      ta: 'அன்புடன் சமர்ப்பிக்கப்படும் இலை, பூ, பழம் அல்லது நீரையும் இறைவன் மனமுவந்து ஏற்கிறார்.',
      gu: 'પત્રં પુષ્પં ફલં તોયં - પ્રેમપૂર્વક અર્પણ કરેલી નાની ભેટ પણ પ્રભુ સ્વીકારે છે.',
    },
  },
  {
    number: 10,
    verseCount: 42,
    sanskritName: 'विभूतियोग',
    transliteration: 'Vibhūti Yoga',
    slug: 'vibhuti-yoga',
    titles: {
      en: 'Yoga of Divine Splendors',
      hi: 'विभूति योग (ईश्वर की अनंत महिमा और वैभव)',
      ur: 'الٰہی جلال اور کائناتی عظمتوں کا یوگ',
      sd: 'مالڪ جي عظمت ۽ جلوائن جو يوگ',
      ta: 'விபூதி யோகம் (இறை மகிமை)',
      gu: 'વિભૂતિ યોગ (ઈશ્વરનો દિવ્ય વૈભવ)',
    },
    summaries: {
      en: 'Krishna recounts His divine manifestations throughout creation: among lights the Sun, among mountains the Himalayas, among waters the Ocean.',
      hi: 'सृष्टि में जो कुछ भी तेजस्वी, सुंदर और शक्तिशाली है, वह परमात्मा के तेज के एक अंश की ही अभिव्यक्ति है।',
      ur: 'کائنات کی ہر خوبصورت، طاقتور اور تابناک شے دراصل الٰہی حسن و جلال کی ایک جھلک ہے۔',
      sd: 'دنيا ۾ سڀ خوبصورت ۽ طاقتور شيون اصل ۾ خدا جي جلوئي جو هڪ حصو آهن.',
      ta: 'படைப்பில் உள்ள அனைத்து ஒளி, பெருமை மற்றும் சக்தியிலும் இறைவனின் பிரசன்னத்தை உணர்தல்.',
      gu: 'સૃષ્ટિમાં જે કાંઈ તેજસ્વી અને સુંદર છે, તે પરમાત્માના ઐશ્વર્યનો જ એક અંશ છે.',
    },
  },
  {
    number: 11,
    verseCount: 55,
    sanskritName: 'विश्वरूपदर्शनयोग',
    transliteration: 'Viśhvarūpa Darśhana Yoga',
    slug: 'vishwarupa-darshana-yoga',
    titles: {
      en: 'Yoga of the Cosmic Vision',
      hi: 'विश्वरूप दर्शन योग (विराट स्वरूप का दर्शन)',
      ur: 'کائناتی اور لامحدود روپ کا نظارہ',
      sd: 'سموري ڪائنات جي روپ جو ديدار',
      ta: 'விஸ்வரூப தரிசன யோகம்',
      gu: 'વિશ્વરૂપ દર્શન યોગ (વિરાટ સ્વરૂપ)',
    },
    summaries: {
      en: 'Granted divine eyes, Arjuna beholds Krishna’s infinite cosmic form spanning countless galaxies, dazzling as a thousand suns, containing all time and destruction.',
      hi: 'दिव्य दृष्टि पाकर अर्जुन भगवान के विराट स्वरूप का दर्शन करते हैं, जो सहस्र सूर्यों के समान दीप्तिमान और असीम है।',
      ur: 'ارجن کو وہ بینائی عطا ہوتی ہے جس سے وہ تمام کائناتوں اور زمان و مکان کو محیط عظیم الشان نظارہ دیکھتا ہے۔',
      sd: 'ارجن اها روحاني اک ماڻي ٿو جنهن مان هو خدا جو بي انت ۽ سڀني زمانن کي سمائيندڙ روپ ڏسي ٿو.',
      ta: 'ஆயிரம் சூரியன்களின் பிரகாசத்துடன் கூடிய பிரபஞ்சப் பேரொளி வடிவத்தை அர்ஜுனன் தரிசிக்கிறார்.',
      gu: 'દિવ્ય દૃષ્ટિથી અર્જુન ભગવાનના વિરાટ સ્વરૂપનાં દર્શન કરે છે, જે હજારો સૂર્યો જેવું તેજોમય છે.',
    },
  },
  {
    number: 12,
    verseCount: 20,
    sanskritName: 'भक्तियोग',
    transliteration: 'Bhakti Yoga',
    slug: 'bhakti-yoga',
    titles: {
      en: 'Yoga of Devotion & Love',
      hi: 'भक्ति योग (परम प्रेम और शरणागति)',
      ur: 'بھکتی یوگ (عشق اور والہانہ سپردگی)',
      sd: 'ڀڳتي يوگ (محبت ۽ تسليم جو سڀ کان مٺو دڳ)',
      ta: 'பக்தி யோகம் (அன்பு நெறி)',
      gu: 'ભક્તિ યોગ (સમર્પણ અને પ્રેમ)',
    },
    summaries: {
      en: 'The qualities of the beloved devotee: free from malice, friendly to all beings, compassionate, patient, forgiving, and undisturbed by pleasure and pain.',
      hi: 'प्रभु के प्रिय भक्त के लक्षण: द्वेषरहित, सबका मित्र, दयालु, क्षमाशील और सुख-दुःख में सम रहने वाला।',
      ur: 'خدا کے چہیتے بندے کے اوصاف: بغض سے پاک، سب کا غمگسار، رحمدل، درگزر کرنے والا اور رنج و خوشی میں مستحکم۔',
      sd: 'خدا جي پياري ٻانهي جا گڻ: ڪنهن سان وير نه رکڻ، سڀني لاءِ رحم، صبر ۽ سدائين شڪرگذار.',
      ta: 'பகைமை அற்ற, கருணை நிறைந்த, இன்ப துன்பங்களை சமமாக நோக்கும் அன்பான பக்தனின் பண்புகள்.',
      gu: 'પ્રભુના વહાલા ભક્તનાં લક્ષણ: દ્વેષરહિત, સૌનો મિત્ર, દયાળુ, ક્ષમાશીલ અને સુખ-દુઃખમાં સમ.',
    },
  },
  {
    number: 13,
    verseCount: 35,
    sanskritName: 'क्षेत्रक्षेत्रज्ञविभागयोग',
    transliteration: 'Kṣhetra Kṣhetrajña Vibhāga Yoga',
    slug: 'kshetra-kshetrajna-vibhaga-yoga',
    titles: {
      en: 'Yoga of the Field and the Knower of the Field',
      hi: 'क्षेत्रक्षेत्रज्ञविभाग योग (शरीर और आत्मा का विवेक)',
      ur: 'کھیت اور کسان (جسم اور روح کے امتیاز کا یوگ)',
      sd: 'جسم ۽ آتما جي فرق جي سڃاڻپ جو يوگ',
      ta: 'க்ஷேத்ர க்ஷேத்ரக்ஞ விபாக யோகம்',
      gu: 'ક્ષેત્રક્ષેત્રજ્ઞવિભાગ યોગ (શરીર અને આત્માનો ભેદ)',
    },
    summaries: {
      en: 'Distinguishing the perishable body (the field) from the immortal observer consciousness (the knower of the field) dwelling within all living beings.',
      hi: 'शरीर क्षेत्र (साधन) है और आत्मा क्षेत्रज्ञ (ज्ञाता)। दोनों के भेद को जानकर ही अज्ञान का अंत होता है।',
      ur: 'جسم ایک محدود میدان عمل ہے جبکہ باطنی روح اس کو جاننے والی لافانی آگاہی ہے۔',
      sd: 'جسم هڪ فاني برتن آهي ۽ روح ان جي اندر جي ابدي روشني آهي.',
      ta: 'அழியும் உடலுக்கும் (களம்), அதை அறியும் அழியாத ஆன்மாவிற்கும் உள்ள வேறுபாட்டை அறிதல்.',
      gu: 'શરીર ક્ષેત્ર છે અને આત્મા ક્ષેત્રજ્ઞ. બંનેનો ભેદ સમજવાથી અજ્ઞાન દૂર થાય છે.',
    },
  },
  {
    number: 14,
    verseCount: 27,
    sanskritName: 'गुणत्रयविभागयोग',
    transliteration: 'Guṇatraya Vibhāga Yoga',
    slug: 'gunatraya-vibhaga-yoga',
    titles: {
      en: 'Yoga of the Three Modes of Material Nature',
      hi: 'गुणत्रयविभाग योग (प्रकृति के तीन गुण - सत्व, रज, तम)',
      ur: 'فطرت کے تین اوصاف (نیکی، جوش اور سستی کا یوگ)',
      sd: 'قدرت جي ٽن خاصيتن (ستو، رجو، تمو) جو يوگ',
      ta: 'குணத்ரய விபாக யோகம் (முக்குணங்கள்)',
      gu: 'ગુણત્રયવિભાગ યોગ (સત્ત્વ, રજ અને તમ ગુણ)',
    },
    summaries: {
      en: 'How the three qualities of nature—Sattva (light/purity), Rajas (passion/craving), and Tamas (inertia/delusion)—bind the soul, and how to transcend them.',
      hi: 'सत्त्व, रज और तम - ये तीन गुण मनुष्य को बांधते हैं। गुणातीत होकर ही व्यक्ति परम शांति पाता है।',
      ur: 'روشنی، بے قابو خواہشات اور سستی کے تینوں جال کو پہچان کر ان سے بلند ہونے کا راستہ۔',
      sd: 'سچائي، خواهشن ۽ غفلت مان نڪري مالڪ سان ملڻ جو دڳ.',
      ta: 'சத்துவ, ரஜஸ், தமஸ் ஆகிய முக்குணங்களை கடந்து விடுபடும் உன்னத நிலை.',
      gu: 'સત્ત્વ, રજ અને તમ ગુણો મનુષ્યને બાંધે છે. ગુણાતીત થઈને પરમ શાંતિ પ્રાપ્ત થાય છે.',
    },
  },
  {
    number: 15,
    verseCount: 20,
    sanskritName: 'पुरुषोत्तमयोग',
    transliteration: 'Puruṣhottama Yoga',
    slug: 'purushottama-yoga',
    titles: {
      en: 'Yoga of the Supreme Divine Personality',
      hi: 'पुरुषोत्तम योग (संसार वृक्ष और परम पुरुष)',
      ur: 'اعلیٰ ترین ہستی اور کائناتی درخت کا یوگ',
      sd: 'سڀ کان اوچي هستي پرشوتم جو يوگ',
      ta: 'புருஷோத்தம யோகம் (உன்னத புருஷன்)',
      gu: 'પુરુષોત્તમ યોગ (સંસાર વૃક્ષ અને પરમ પુરુષ)',
    },
    summaries: {
      en: 'The metaphor of the cosmic Ashvattha tree with roots above and branches below, and the Supreme Person who transcends both the mortal and immortal realms.',
      hi: 'उर्ध्वमूलम् अधःशाखम् - संसार रूपी अश्वत्थ वृक्ष को असंग-शस्त्र से काटकर पुरुषोत्तम परमात्मा को प्राप्त करना।',
      ur: 'کائنات کا وہ درخت جس کی جڑیں آسمان پر ہیں؛ اسے بے لاگ عقل کی کلہاڑی سے تراش کر سچی منزل پانا۔',
      sd: 'سنسار جي واڌ ويجهه ۽ سڀني کان مٿانهين پرشوتم مالڪ جو ديدار.',
      ta: 'தலைகீழாக நிற்கும் சம்சார மரம் மற்றும் அழியாத உன்னத இறைவனின் பெருமை.',
      gu: 'ઊર્ધ્વમૂળ અશ્વત્થ વૃક્ષને વૈરાગ્યરૂપી શસ્ત્રથી છેદી પુરુષોત્તમ પરમાત્માને પામવા.',
    },
  },
  {
    number: 16,
    verseCount: 24,
    sanskritName: 'दैवासुरसम्पद्विभागयोग',
    transliteration: 'Daivāsura Sampad Vibhāga Yoga',
    slug: 'daivasura-sampad-vibhaga-yoga',
    titles: {
      en: 'Yoga of the Divine and Demonic Natures',
      hi: 'दैवासुरसम्पद्विभाग योग (दैवी और आसुरी प्रवृत्तियां)',
      ur: 'نیکی اور بدی کی خصوصیات کا یوگ',
      sd: 'نيڪ ۽ بد خصلتن جي فرق جو يوگ',
      ta: 'தைவாஸுர சம்பத் விபாக யோகம்',
      gu: 'દૈવાસુરસંપદ્વિભાગ યોગ (દૈવી અને આસુરી સંપત્તિ)',
    },
    summaries: {
      en: 'Contrast between noble virtues (fearlessness, compassion, humility) and toxic traits (pride, anger, cruelty). Lust, anger, and greed are the three gates to self-destruction.',
      hi: 'काम, क्रोध और लोभ - ये नर्क के तीन मुख्य द्वार हैं। निर्भयता, सत्य और अहिंसा मुक्ति का मार्ग प्रशस्त करते हैं।',
      ur: 'شہوت، غصہ اور لالچ تباہی کے تین دروازے ہیں۔ سچائی، بے خوفی اور درگزر روح کو آزاد کرتے ہیں۔',
      sd: 'لالچ، ڪاوڙ ۽ بي لگام خواهشون تباهيءَ جا ٽي دروازا آهن. سچائي ۽ نرمي آزادي ڏين ٿا.',
      ta: 'காமம், குரோதம், பேராசை ஆகியவை அழிவின் மூன்று வாசல்கள்; தெய்வீக குணங்கள் முக்தி தரும்.',
      gu: 'કામ, ક્રોધ અને લોભ એ નરકનાં ત્રણ દ્વાર છે. નિર્ભયતા, સત્ય અને અહિંસા મુક્તિનો માર્ગ છે.',
    },
  },
  {
    number: 17,
    verseCount: 28,
    sanskritName: 'श्रद्धात्रयविभागयोग',
    transliteration: 'Śhraddhātraya Vibhāga Yoga',
    slug: 'shraddhatraya-vibhaga-yoga',
    titles: {
      en: 'Yoga of the Threefold Division of Faith',
      hi: 'श्रद्धात्रयविभाग योग (आहार, यज्ञ, तप और श्रद्धा के तीन भेद)',
      ur: 'عقیدے، خوراک اور عبادت کی تین قسموں کا یوگ',
      sd: 'ايمان، خوراڪ ۽ عبادت جي ٽن قسمن جو يوگ',
      ta: 'ஸ்ரத்தாத்ரய விபாக யோகம் (மூவகை நம்பிக்கை)',
      gu: 'શ્રદ્ધાત્રયવિભાગ યોગ (શ્રદ્ધા અને આહારના ત્રણ ભેદ)',
    },
    summaries: {
      en: 'How faith, food, sacrifice, austerity, and charity align with nature’s three modes, and the sacred purifying mantra "Om Tat Sat".',
      hi: 'मनुष्य की श्रद्धा उसके स्वभाव के अनुसार होती है। भोजन, दान और तप के तीन रूप तथा ॐ तत्सत् का महत्व।',
      ur: 'انسان کا ایمان اس کی باطنی کیفیت کے مطابق ہوتا ہے۔ خوراک، صدقہ اور اخلاص کا اثر۔',
      sd: 'ماڻهو جو ايمان سندس اندروني حالت پٽاندڙ ٿئي ٿو. کاڌو، دان ۽ سچي پوڄا زندگي بدلائين ٿا.',
      ta: 'நம்பிக்கை, உணவு, தானம் ஆகியவற்றின் முப்பிரிவுகள் மற்றும் "ஓம் தத் சத்" என்ற புனித வாக்கு.',
      gu: 'મનુષ્યની શ્રદ્ધા તેના સ્વભાવ મુજબ હોય છે. આહાર, દાન, તપના ત્રણ ભેદ અને ૐ તત્સત્ નું મહત્વ.',
    },
  },
  {
    number: 18,
    verseCount: 78,
    sanskritName: 'मोक्षसंन्यासयोग',
    transliteration: 'Mokṣha Sanyāsa Yoga',
    slug: 'moksha-sanyasa-yoga',
    titles: {
      en: 'Yoga of Liberation Through Renunciation',
      hi: 'मोक्षसंन्यास योग (परम मुक्ति और अंतिम उपदेश)',
      ur: 'موکش سنیاس یوگ (حتمی نجات اور کلی سپردگی)',
      sd: 'موڪش سنڌيا يوگ (آخري آزادي ۽ سڀ ڪجهه مالڪ حوالي ڪرڻ)',
      ta: 'மோக்ஷ சன்னியாச யோகம் (முழு விடுதலை)',
      gu: 'મોક્ષસંન્યાસ યોગ (પરમ મુક્તિ અને અંતિમ ઉપદેશ)',
    },
    summaries: {
      en: 'The crown jewel of the Gita: synthesis of all spiritual paths. Abandoning all anxieties, Krishna promises: "Surrender completely unto Me, I shall deliver you from all distress, grieve not."',
      hi: 'गीता का सार: सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। संपूर्ण समर्पण करने पर भगवान स्वयं सब पापों और भयों से रक्षा करते हैं।',
      ur: 'گیتا کا حتمی نچوڑ: تمام فکریں چھوڑ کر خود کو مالک کے حوالے کر دو، وہ ہر دکھ اور خوف سے نجات دے گا۔',
      sd: 'سڀني فڪرن کي ڇڏي پاڻ کي سچي مالڪ حوالي ڪري ڇڏيو، هو اوهان کي سڀني ڏکن مان ڪڍندو.',
      ta: 'கீதையின் சாராம்சம்: அனைத்தையும் துறந்து இறைவனிடம் சரணடைந்தால் அவன் அனைத்து பாவங்களிலிருந்தும் காப்பான்.',
      gu: 'ગીતાનો સાર: સર્વધર્માન પરિત્યજ્ય મામેકં શરણં વ્રજ. સંપૂર્ણ સમર્પણ કરવાથી ભગવાન સર્વ ભયોથી મુક્ત કરે છે.',
    },
  },
];

export function getChapterByNumber(num: number): ChapterInfo | undefined {
  return GITA_CHAPTERS.find((ch) => ch.number === num);
}

export function isValidChapterAndVerse(chapter: number, verse: number): boolean {
  const ch = getChapterByNumber(chapter);
  if (!ch) return false;
  return verse >= 1 && verse <= ch.verseCount;
}

export function getChapterTitle(num: number, lang: LanguageCode): string {
  const ch = getChapterByNumber(num);
  if (!ch) return `Chapter ${num}`;
  return ch.titles[lang] || ch.titles.en;
}

export function getChapterSummary(num: number, lang: LanguageCode): string {
  const ch = getChapterByNumber(num);
  if (!ch) return '';
  return ch.summaries[lang] || ch.summaries.en;
}
