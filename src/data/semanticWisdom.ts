import { LanguageCode } from './languages.js';
import { VERIFIED_VERSES } from './verifiedVerses.js';

export interface SemanticWisdomItem {
  topicId: string;
  keywords: string[];
  verseId: string; // references VERIFIED_VERSES
  guidanceByLang: Record<
    LanguageCode,
    {
      shriKrishnasGuidance: string;
      relevanceExplanation: string;
      practicalLifeLesson: string;
      suggestedFollowUps: string[];
    }
  >;
}

export const SEMANTIC_TOPICS: SemanticWisdomItem[] = [
  // 1. Anger, Frustration, Rage, Irritation
  {
    topicId: 'anger',
    keywords: [
      'anger', 'angry', 'rage', 'temper', 'krodh', 'ghussa', 'gussa', 'mad',
      'irritated', 'irritation', 'furious', 'annoyed', 'fight', 'argument',
      'shouting', 'yelling', 'calm down', 'control anger', 'manage anger',
      'ڪاوڙ', 'غصو', 'غصہ', 'غصے', 'طیش', 'क्रोध', 'गुस्सा', 'चिड़चिड़ा',
      'गोपम्', 'கோபம்', 'ஆத்திரம்', 'சீற்றம்', 'ક્રોધ', 'ગુસ્સો', 'ગુસ્સા'
    ],
    verseId: 'bg-2-63',
    guidanceByLang: {
      en: {
        shriKrishnasGuidance:
          "Inspired by Shri Krishna’s timeless teachings in the Bhagavad Gita: Anger is not an uncontrollable external force; it is an internal fire ignited when rigid expectations collide with reality. When an attachment or desire is obstructed, frustration quickly flares into wrath. Krishna warns that anger instantly clouds your intellect (buddhi), blinding you to past wisdom, empathy, and consequence. When reasoning is blinded, you utter words or take actions that damage relationships and your own inner serenity. To conquer anger, do not suppress it violently; instead, observe the unmet desire underneath it with compassion and create a deliberate space between the trigger and your response.",
        relevanceExplanation:
          'In Chapter 2, Verse 63, Shri Krishna charts the exact psychological cascade: anger produces delusion, delusion destroys memory of core values, and loss of intellect leads to personal ruin. Recognizing this spiral is the first step to mastering your temper.',
        practicalLifeLesson:
          'Institute a mandatory 15-minute cooling pause whenever you feel irritation rising. Do not speak, reply to a message, or make a decision until your breath has slowed and your higher reasoning intellect has regained control.',
        suggestedFollowUps: [
          'What root expectation or desire triggered my anger today?',
          'How can I respond firmly to injustice without losing my composure?',
          'What did Krishna advise Arjuna about overcoming personal resentment?'
        ]
      },
      hi: {
        shriKrishnasGuidance:
          'श्रीमद्भगवद्गीता में श्रीकृष्ण की शिक्षाओं से प्रेरित मार्गदर्शन: क्रोध कोई आकस्मिक तूफान नहीं है, बल्कि तब भड़कता है जब हमारी किसी अपेक्षा या इच्छा में बाधा आती है। श्रीकृष्ण चेतावनी देते हैं कि क्रोध मनुष्य के विवेक (बुद्धि) को अंधा कर देता है। जब विवेक नष्ट हो जाता है, तो व्यक्ति अपने प्रियजनों के प्रति कटु शब्द बोल बैठता है और अपने जीवन को संकट में डालता है। क्रोध पर विजय पाने के लिए उसे दबाने के बजाय, उसके पीछे छिपी अपनी जिद या अपेक्षा को पहचानें और प्रतिक्रिया देने से पहले मन को शांत करें।',
        relevanceExplanation:
          'अध्याय २, श्लोक ६३ में श्रीकृष्ण क्रोध के विनाशकारी मार्ग को दर्शाते हैं: क्रोध से सम्मोह, सम्मोह से स्मृति-भ्रम और स्मृति-भ्रम से बुद्धि का नाश होता है। इस प्रक्रिया को समझना ही क्रोध पर नियंत्रण की पहली सीढ़ी है।',
        practicalLifeLesson:
          'जब भी तीव्र गुस्सा आए, तुरंत उत्तर न दें। कम से कम १५ मिनट का मौन विराम लें, ५ बार गहरा श्वास लें और विवेक को पुनः सक्रिय होने दें।',
        suggestedFollowUps: [
          'क्रोध आने पर अपनी अपेक्षाओं को कैसे शांत करें?',
          'कटु वाणी के पश्चाताप से मुक्ति कैसे पाएं?',
          'गीता के अनुसार शांत और स्थिर बुद्धि कैसे विकसित करें?'
        ]
      },
      ur: {
        shriKrishnasGuidance:
          'بھگود گیتا کی ابدی حکمت سے ماخوذ رہنمائی: غصہ کوئی خارجی چیز نہیں بلکہ اندرونی آگ ہے جو اس وقت بھڑکتی ہے جب ہماری کسی شدید خواہش یا توقع میں رکاوٹ پیدا ہو۔ شری کرشن متنبہ فرماتے ہیں کہ غصہ انسان کی عقل اور بصیرت کو مفلوج کر دیتا ہے۔ جب سوچنے سمجھنے کی صلاحیت مٹ جاتی ہے تو انسان ایسے فیصلے اور کڑوے بول بولتا ہے جس پر عمر بھر پچھتانا پڑتا ہے۔ غصے پر قابو پانے کا راز یہ ہے کہ اشتعال کے لمحات میں فوراً ردعمل دینے کے بجائے خاموشی اور ضبط کا دامن تھامیں۔',
        relevanceExplanation:
          'باب ۲، اشلوک ۶۳ میں شری کرشن غصے کی نفسیاتی بربادی کا نقشہ کھینچتے ہیں کہ غصے سے عقل پر پردہ پڑتا ہے اور بصیرت کے زوال سے انسان کا سب کچھ برباد ہو جاتا ہے۔',
        practicalLifeLesson:
          'جب طیش آئے تو بولنے یا میسج کرنے سے پہلے ۱۵ منٹ کا لازمی وقفہ لیں۔ گہرے سانس لیں اور ذہن کو پرسکون ہونے کا وقت دیں۔',
        suggestedFollowUps: [
          'غصے کی حالت میں تعلقات کو نقصان سے کیسے بچائیں؟',
          'کیا غصے کے پیچھے چھپی توقعات کو پہچانا جا سکتا ہے؟',
          'شری کرشن کے مطابق اندرونی سکون کا مستقل ذریعہ کیا ہے؟'
        ]
      },
      sd: {
        shriKrishnasGuidance:
          'ڀڳوت گيتا ۾ شري ڪرشن جي پاڪ سچائيءَ مان ورتل رهنمائي: ڪاوڙ انسان جي عقل کي انڌو ڪري ڇڏيندي آهي. جڏهن اسان جي ڪنهن خواهش يا اميد کي ڌڪ لڳندو آهي ته ڪاوڙ جو باهه ڀڙڪي اٿندي آهي. شري ڪرشن خبردار ڪري ٿو ته ڪاوڙ ۾ چڱي مٺي جي تميز ختم ٿي ويندي آهي ۽ پوءِ پنهنجا ئي رستا تباهه ٿي ويندا آهن. ڪاوڙ تي ضابطو رکڻ جو گس هي آهي ته فوري تڪڙ ڪرڻ بدران صبر ۽ ماٺ اختيار ڪجي.',
        relevanceExplanation:
          'باب ۲، اشلوڪ ۶۳ ۾ سمجهايو ويو آهي ته ڪاوڙ مان سمجهه ختم ٿئي ٿي، جنهن سان انسان پنهنجو پاڻ تباهه ڪري وجهندو آهي.',
        practicalLifeLesson:
          'ڪاوڙ اچڻ وقت فوري جواب نه ڏيو. ۱۵ منٽ ماٺ رهي ٿڌو پاڻي پيئو ۽ من کي سانت ۾ آڻيو.',
        suggestedFollowUps: [
          'ڪاوڙ وقت ضد مان ڪيئن ڇوٽڪارو وٺجي؟',
          'گيتا اندروني سانت بابت ڇا ٻڌائي ٿي؟',
          'مشڪل وقت ۾ صبر ڪيئن اختيار ڪجي؟'
        ]
      },
      ta: {
        shriKrishnasGuidance:
          'பகவத் கீதையில் ஸ்ரீகிருஷ்ணரின் போதனைகளிலிருந்து பெறப்பட்ட வழிகாட்டல்: கோபம் என்பது வெளித் தாக்கம் அல்ல; நமது எதிர்பார்ப்பு பொய்க்கும் போது உள்ளத்தில் எழும் கொந்தளிப்பாகும். கோபம் மனிதனின் விவேகத்தை மழுங்கடித்து, சரியான தீர்ப்பு வழங்கும் புத்தியை அழிக்கிறது என்று கிருஷ்ணர் எச்சரிக்கிறார். புத்தி அழிந்தால் மனிதன் தன் சுயமதிப்பையும் உறவுகளையும் இழக்க நேரிடும். கோபத்தை அடக்க, உடனடியாக எதிர்வினை ஆற்றாமல் சில நொடிகள் அமைதி காத்து உள்ளுணர்வை கவனியுங்கள்.',
        relevanceExplanation:
          'அத்தியாயம் 2, சுலோகம் 63-ல் ஸ்ரீகிருஷ்ணர் கோபத்தால் உண்டாகும் வீழ்ச்சி நிலைகளைத் தெளிவாக விளக்குகிறார்: கோபம் மதிமயக்கத்தை தந்து புத்தியை அழித்து மனிதனை வீழ்த்துகிறது.',
        practicalLifeLesson:
          'கோபம் எழும்போது உடனடியாக பேசவோ முடிவெடுக்கவோ வேண்டாம். 15 நிமிடங்கள் ஆழ்ந்த சுவாசத்துடன் அமைதியாக இருந்து பிறகு சிந்தித்துப் பேசுங்கள்.',
        suggestedFollowUps: [
          'கோபத்தின் ஆணிவேரான எதிர்பார்ப்புகளை எவ்வாறு கையாள்வது?',
          'மன சமநிலையை தினசரி வாழ்க்கையில் எவ்வாறு காப்பது?',
          'கடுமையான சொற்கள் பேசிய பின் மன்னிப்பு கேட்பது எப்படி?'
        ]
      },
      gu: {
        shriKrishnasGuidance:
          'ભગવદ્ ગીતામાં શ્રીકૃષ્ણના દિવ્ય ઉપદેશમાંથી પ્રેરિત માર્ગદર્શન: ક્રોધ ત્યારે જ જન્મે છે જ્યારે આપણી મનપસંદ ઈચ્છા કે અપેક્ષામાં કોઈ અવરોધ આવે છે. શ્રીકૃષ્ણ ચેતવે છે કે ક્રોધના આવેશમાં મનુષ્યનો સદસદ્ વિવેક નષ્ટ થઈ જાય છે અને યાદશક્તિ ભ્રમિત થાય છે. વિવેક ગુમાવી બેઠેલો માનવી કટુ વચનો બોલીને પોતાના જ સંબંધો તોડી નાખે છે. ક્રોધને જીતવા માટે તાત્કાલિક પ્રતિક્રિયા ન આપીને મનમાં ક્ષમા અને શાંતિનો સંકલ્પ કરવો જોઈએ.',
        relevanceExplanation:
          'અધ્યાય ૨, શ્લોક ૬૩ માં શ્રીકૃષ્ણ ક્રોધથી થતા વિનાશનું પગથિયે-પગથિયે વર્ણન કરે છે: ક્રોધથી સ્મૃતિભ્રંશ અને બુદ્ધિનો નાશ થાય છે, જે સર્વનાશનું કારણ બને છે.',
        practicalLifeLesson:
          'જ્યારે પણ ગુસ્સો આવે ત્યારે તરત જ જવાબ ન આપો. ૧૫ મિનિટ માટે મૌન રહી ઊંડા શ્વાસ લો જેથી વિવેકબુદ્ધિ પુનઃ કાર્યરત થાય.',
        suggestedFollowUps: [
          'ક્રોધને શાંત કરવા ગીતા કયો સચોટ ઉપાય સૂચવે છે?',
          'સંબંધોમાં કટુતા આવતી અટકાવવા શું કરવું?',
          'શાંત અને એકાગ્ર મન કઈ રીતે કેળવવું?'
        ]
      }
    }
  },

  // 2. Exam Failure, Setbacks, Losing, Career Rejection
  {
    topicId: 'exam_failure',
    keywords: [
      'exam', 'fail', 'failed', 'failure', 'test', 'grades', 'score', 'marks',
      'interview', 'rejected', 'rejection', 'lost', 'losing', 'defeat', 'career setback',
      'studying', 'college', 'school', 'university', 'academic', 'flunked',
      'ناکام', 'ناکامی', 'امتحان', 'ناڪام', 'ناڪامي', 'असफलता', 'फेल', 'परीक्षा',
      'हार', 'தோல்வி', 'தேர்வு', 'பரீட்சை', 'પરીક્ષા', 'નિષ્ફળતા', 'હારી'
    ],
    verseId: 'bg-2-48',
    guidanceByLang: {
      en: {
        shriKrishnasGuidance:
          "Inspired by Shri Krishna’s timeless teachings in the Bhagavad Gita: An exam failure or career setback is an event in time, not the definition of your soul’s worth. In the battlefield of Kurukshetra, Arjuna was paralyzed by the dread of failure and defeat. Shri Krishna taught him that true mastery (Yoga) is equanimity of mind (samatvam) — remaining unshakeable in both victory and defeat. When you succeed, you celebrate humility; when you fail, you embrace wisdom and resilience. A setback reveals gaps in preparation, not lack of capacity. Release self-pity and shame, look at what the test revealed with a quiet heart, and pick up your tools with renewed dedication.",
        relevanceExplanation:
          'In Chapter 2, Verse 48, Shri Krishna proclaims: "Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure. Such equanimity of mind is called Yoga." This verse directly liberates you from the crippling fear of falling short.',
        practicalLifeLesson:
          'Conduct an objective post-mortem today without self-blame: write down 3 specific study concepts or skills to strengthen, forgive yourself for past mistakes, and take one focused 30-minute study session with a calm, renewed spirit.',
        suggestedFollowUps: [
          'How can I rebuild my confidence after a painful defeat?',
          'How does Krishna define true success in everyday duties?',
          'How can I study and work with deep focus rather than anxiety over marks?'
        ]
      },
      hi: {
        shriKrishnasGuidance:
          'श्रीमद्भगवद्गीता में श्रीकृष्ण की शिक्षाओं से प्रेरित मार्गदर्शन: परीक्षा या कार्यक्षेत्र में मिली असफलता आपके जीवन का अंतिम निर्णय नहीं है, बल्कि एक अनुभव मात्र है। श्रीकृष्ण अर्जुन को सिखाते हैं कि सफलता और असफलता दोनों में समभाव रखना ही सच्चा योग (समत्वं योग उच्यते) है। असफलता केवल यह बताती है कि तैयारी में क्या सुधार आवश्यक है, यह आपकी अंतरात्मा की क्षमता को नहीं घटाती। आत्म-ग्लानि और निराशा को त्यागें, असफलता को एक श्रेष्ठ शिक्षक मानें और शांत चित्त से पुनः कर्म में प्रवृत्त हों।',
        relevanceExplanation:
          'अध्याय २, श्लोक ४८ में भगवान श्रीकृष्ण समत्व योग का उपदेश देते हैं: "सिद्धि और असिद्धि में समान रहकर कर्तव्य कर्म करो; यह समता का भाव ही योग कहलाता है।" यह श्लोक परीक्षा के परिणाम के तनाव से मुक्ति दिलाता है।',
        practicalLifeLesson:
          'आज खुद को कोसने के बजाय एक शांत विश्लेषण करें: उन ३ कमजोर विषयों को लिखें जिन पर सुधार करना है, और आज से ही निष्काम भाव से पुनः परिश्रम आरंभ करें।',
        suggestedFollowUps: [
          'असफलता के बाद आत्म-विश्वास पुनः कैसे जगाएं?',
          'अध्ययन में मन की एकाग्रता कैसे बढ़ाएं?',
          'माता-पिता और समाज के दबाव को समभाव से कैसे संभालें?'
        ]
      },
      ur: {
        shriKrishnasGuidance:
          'بھگود گیتا کی ابدی حکمت سے ماخوذ رہنمائی: امتحان میں ناکامی یا کسی موقع کا ہاتھ سے نکل جانا زندگی کا خاتمہ نہیں بلکہ ایک نیا سبق ہے۔ شری کرشن ارجن کو سکھاتے ہیں کہ کامیابی اور ناکامی دونوں کو ایک جیسے وقار اور توازن کے ساتھ قبول کرنا ہی سچی روحانی طاقت اور یوگ ہے۔ ناکامی آپ کی قابلیت پر حرف نہیں لاتی بلکہ تیاری میں درکار محنت کا پتہ دیتی ہے۔ مایوسی اور پچھتاوے کو دل سے نکالیں اور نئے عزم کے ساتھ آگے بڑھیں۔',
        relevanceExplanation:
          'باب ۲، اشلوک ۴۸ میں شری کرشن فرماتے ہیں: "کامیابی اور ناکامی دونوں میں برابری اور توازن اختیار کرو، یہی ذہنی ہم آہنگی اصل یوگ ہے۔" یہ سبق امتحان میں ناکامی کے صدمے سے نجات دلاتا ہے۔',
        practicalLifeLesson:
          'آج خود پر افسوس کرنے کے بجائے تین وہ اہم نکات لکھیں جہاں مزید توجہ کی ضرورت ہے۔ دل سے پچھلا بوجھ اتاریں اور نئی شروعات کریں۔',
        suggestedFollowUps: [
          'ناکامی کے بعد دل کا حوصلہ کیسے بحال کریں؟',
          'امتحان کے خوف اور اعصابی دباؤ سے کیسے بچیں؟',
          'شری کرشن کے نزدیک اصل کامیابی کیا ہے؟'
        ]
      },
      sd: {
        shriKrishnasGuidance:
          'ڀڳوت گيتا ۾ شري ڪرشن جي پاڪ سچائيءَ مان ورتل رهنمائي: امتحان ۾ پاس نه ٿيڻ زندگيءَ جو خاتمو ناهي. شري ڪرشن سيکاري ٿو ته کٽڻ ۽ هارائڻ ٻنهي وقت من جو توازن قائم رکڻ سچي طاقت آهي. ناڪامي رڳو اها ڳالهه ٻڌائي ٿي ته اڃا ڪجهه سکن جي ضرورت آهي. پنهنجو پاڻ کي دک نه ڏيو ۽ اڳتي وڌڻ جو پڪو ارادو رکو.',
        relevanceExplanation:
          'باب ۲، اشلوڪ ۴۸ ۾ چيو ويو آهي ته ڪاميابي ۽ ناڪاميءَ کي هڪجهڙو سمجهي پنهنجو ڪم جاري رکو، ان کي ئي سمتا چئبو آهي.',
        practicalLifeLesson:
          'اڄ مايوسي ڇڏي اهو ڏسو ته ڪهڙي ڪم ۾ محنت جي گهرج هئي. ٻيهر نئين همٿ سان پنهنجي پڙهائيءَ جي شروعات ڪريو.',
        suggestedFollowUps: [
          'ناڪاميءَ مان سبق ڪيئن سکجي؟',
          'امتحان جو ڊپ من مان ڪيئن ڪڍجي؟',
          'گيتا محنت ۽ ايمانداريءَ بابت ڇا ٻڌائي ٿي؟'
        ]
      },
      ta: {
        shriKrishnasGuidance:
          'பகவத் கீதையில் ஸ்ரீகிருஷ்ணரின் போதனைகளிலிருந்து பெறப்பட்ட வழிகாட்டல்: தேர்வில் ஏற்படும் தோல்வி உங்கள் ஒட்டுமொத்த வாழ்வின் முடிவல்ல; அது ஒரு தற்காலிக அனுபவம் மட்டுமே. வெற்றி தோல்வி இரண்டையும் சமமாக ஏற்பதே உண்மையான யோகம் (சமத்வம்) என்று கிருஷ்ணர் அர்ஜுனனுக்கு போதிக்கிறார். தோல்வி உங்கள் திறமையைக் குறைக்காது, எங்கு அதிக கவனம் தேவை என்பதை மட்டுமே சுட்டிக்காட்டுகிறது. சுயபச்சாதாபத்தை விடுத்து, புத்துணர்ச்சியோடு மீண்டும் முயற்சியைத் தொடங்குங்கள்.',
        relevanceExplanation:
          'அத்தியாயம் 2, சுலோகம் 48-ல் கிருஷ்ணர் கூறுகிறார்: "வெற்றி தோல்விகளில் சமநிலை கொண்டு உன் கடமைகளைச் செய்; இந்த மன சமநிலையே யோகம் எனப்படும்." இது தோல்வியின் வலியைப் போக்கும் மாமருந்து.',
        practicalLifeLesson:
          'இன்று உங்களை நீங்களே தாழ்த்திக் கொள்ளாமல், முன்னேற்ற வேண்டிய 3 முக்கிய பகுதிகளைக் குறித்துக் கொண்டு, புத்துணர்வுடன் புதிய திட்டத்தை வகுத்துக் கொள்ளுங்கள்.',
        suggestedFollowUps: [
          'தோல்விக்குப் பின் தன்னம்பிக்கையை மீட்பது எப்படி?',
          'கவனம் சிதறாமல் தொடர்ந்து படிப்பது எப்படி?',
          'குடும்பத்தாரின் எதிர்பார்ப்புகளை எவ்வாறு கையாள்வது?'
        ]
      },
      gu: {
        shriKrishnasGuidance:
          'ભગવદ્ ગીતામાં શ્રીકૃષ્ણના દિવ્ય ઉપદેશમાંથી પ્રેરિત માર્ગદર્શન: પરીક્ષામાં નિષ્ફળતા એ તમારા જીવનની અંતિમ ક્ષણ નથી પણ એક શીખવાનો અવસર છે. શ્રીકૃષ્ણ કહે છે કે સફળતા અને નિષ્ફળતા બંનેમાં મનની સ્થિરતા જાળવવી એ જ સાચો યોગ છે. નિષ્ફળતા તમારી ક્ષમતા પર પૂર્ણવિરામ નથી મૂકતી પણ પૂરતી તૈયારી માટે નવો માર્ગ ખોલે છે. હતાશા ખંખેરીને આત્મવિશ્વાસ સાથે પુનઃ પ્રયત્ન કરો.',
        relevanceExplanation:
          'અધ્યાય ૨, શ્લોક ૪૮ માં શ્રીકૃષ્ણ સમત્વ યોગનો સંદેશ આપે છે: "સિદ્ધિ અને અસિદ્ધિમાં સમાન ભાવ રાખીને કર્મ કર; આ સમતા જ યોગ છે."',
        practicalLifeLesson:
          'આજે જાતને દોષ આપવાનું બંધ કરો. જે વિષયમાં કચાશ રહી ગઈ હોય તેની યાદી બનાવી નવા ઉત્સાહ સાથે અભ્યાસ શરૂ કરો.',
        suggestedFollowUps: [
          'નિષ્ફળતા પછી મનોબળ કેવી રીતે મજબૂત કરવું?',
          'પરિણામની ચિંતા વિના એકાગ્રતાથી કેવી રીતે વાંચવું?',
          'જીવનમાં સ્થિર મનોભાવ કેળવવાના ઉપાય કયા?'
        ]
      }
    }
  },

  // 3. Worry About Future, Anxiety, Overthinking, Uncertainty
  {
    topicId: 'future_worry',
    keywords: [
      'worry', 'worried', 'future', 'anxiety', 'anxious', 'fear', 'tension',
      'overthinking', 'career', 'stress', 'what will happen', 'panic', 'dread',
      'uncertain', 'nervous', 'scared', 'tomorrow', 'security',
      'فکر', 'پریشانی', 'پريشاني', 'مستقبل', 'اندیشہ', 'خوف', 'चिंता', 'भविष्य',
      'तनाव', 'घबराहट', 'कவலை', 'எதிர்காலம்', 'பயம்', 'பதற்றம்', 'ચિંતા', 'ભવિષ્ય', 'ગભરાટ'
    ],
    verseId: 'bg-2-47',
    guidanceByLang: {
      en: {
        shriKrishnasGuidance:
          "Inspired by Shri Krishna’s timeless teachings in the Bhagavad Gita: Anxiety about the future is born when the mind abandons today’s duty to fight imaginary battles in tomorrow. You cannot control what tomorrow holds, nor what results the world will return, but you hold complete sovereignty over your sincere effort right here, right now. Shri Krishna advises you to release your grip on obsessive scorekeeping. When you dedicate yourself fully to the present moment without mental fixation on fruits and outcomes, anxiety melts and deep inner clarity takes its place.",
        relevanceExplanation:
          'In Chapter 2, Verse 47, Shri Krishna imparts the master key of Karma Yoga: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions." This frees you from the paralyzing burden of overthinking the unknown future.',
        practicalLifeLesson:
          'Whenever worry about the future tightens your chest, bring your attention back to your senses. Ask yourself: "What is the single most useful thing I can do in the next 2 hours?" Pour yourself into that task and leave tomorrow to the universe.',
        suggestedFollowUps: [
          'How can I break the habit of chronic overthinking?',
          'What did Krishna teach about trusting divine providence?',
          'How can I plan for the future without becoming anxious about it?'
        ]
      },
      hi: {
        shriKrishnasGuidance:
          'श्रीमद्भगवद्गीता में श्रीकृष्ण की शिक्षाओं से प्रेरित मार्गदर्शन: भविष्य की चिंता तब उत्पन्न होती है जब मन वर्तमान के कर्तव्य को छोड़कर आने वाले कल की अनिश्चितताओं में भटकने लगता है। आने वाले कल का परिणाम आपके हाथ में नहीं है, किंतु आज का कर्म पूरी तरह आपके वश में है। श्रीकृष्ण निष्काम कर्म का संदेश देते हैं: परिणाम का मोह छोड़ें और अपना संपूर्ण सामर्थ्य वर्तमान कार्य में लगाएं। ऐसा करने से चिंता समाप्त हो जाती है और मन को गहरी शांति मिलती है।',
        relevanceExplanation:
          'अध्याय २, श्लोक ४७ कर्मयोग का प्राण है: "तुम्हारा अधिकार केवल कर्म करने में है, उसके फलों में कभी नहीं।" यह श्लोक भविष्य की व्यर्थ चिंता से मुक्ति दिलाने वाला सर्वोत्तम मंत्र है।',
        practicalLifeLesson:
          'जब भी भविष्य का भय सताए, गहरी सांस लें और खुद से पूछें: "इस अगले एक घंटे में मैं क्या सर्वोत्तम कर सकता हूँ?" उसी काम में पूरी लगन से जुट जाएं।',
        suggestedFollowUps: [
          'ओवरथिंकिंग (अति-विचार) के चक्रव्यूह से कैसे निकलें?',
          'कर्म करते हुए फल की इच्छा से मुक्त कैसे रहें?',
          'वर्तमान क्षण में जीने का अभ्यास कैसे करें?'
        ]
      },
      ur: {
        shriKrishnasGuidance:
          'بھگود گیتا کی ابدی حکمت سے ماخوذ رہنمائی: مستقبل کا خوف اور اضطراب اس وقت جنم لیتے ہیں جب ذہن آج کی ذمہ داری کو چھوڑ کر کل کے خیالی اندیشوں میں الجھ جاتا ہے۔ آنے والا کل آپ کے اختیار میں نہیں، مگر موجودہ لمحے کی مخلصانہ محنت پر آپ کو پورا اختیار ہے۔ شری کرشن نتائج کی بے جا فکر چھوڑنے کی تلقین فرماتے ہیں۔ جب آپ اپنے کام کو پوری دیانت سے سرانجام دیتے ہیں تو دل مطمئن ہو جاتا ہے۔',
        relevanceExplanation:
          'باب ۲، اشلوک ۴۷ بے لوث عمل کا روشن چراغ ہے: "تمہیں صرف عمل کرنے کا حق ہے، اس کے ثمرات پر نہیں۔" یہ کلام انسان کو مستقبل کی پریشانیوں سے آزاد کرتا ہے۔',
        practicalLifeLesson:
          'جب کل کی فکر پریشان کرے تو خود سے پوچھیں کہ اگلے ایک گھنٹے میں میں کون سا مفید کام کر سکتا ہوں۔ اس کام پر دھیان لگائیں اور باقی معاملہ خالق پر چھوڑ دیں۔',
        suggestedFollowUps: [
          'مسلسل پریشان رہنے کی عادت کو کیسے بدلیں؟',
          'کام میں دل لگانے کے لیے ذہنی سکون کیسے پائیں؟',
          'شری کرشن کے نزدیک بے لوث عمل کی کیا برکتیں ہیں؟'
        ]
      },
      sd: {
        shriKrishnasGuidance:
          'ڀڳوت گيتا ۾ شري ڪرشن جي پاڪ سچائيءَ مان ورتل رهنمائي: سڀاڻي جي ڳڻتي انسان کي اڄ جي سڪون کان محروم ڪندي آهي. نتيجا اسان جي وس ۾ ناهن، رڳو ايمانداريءَ سان ڪيل محنت ئي اسان جي هٿ ۾ آهي. شري ڪرشن نتيجن جي لالچ ڇڏڻ جو ڏس ڏئي ٿو. جڏهن اوهان اڄ جو ڪم سٺي نيت سان ڪندا ته پريشاني پاڻ ئي هلي ويندي.',
        relevanceExplanation:
          'باب ۲، اشلوڪ ۴۷ سيکاري ٿو ته رڳو فرض نڀائڻ تي پنهنجو حق آهي، ان جي نتيجن تي ناهي. هي فڪر سڀاڻي جي پريشانيءَ مان ڇوٽڪارو ڏياري ٿو.',
        practicalLifeLesson:
          'اڄ جي وقت کي غنيمت سمجهي پنهنجي اڳيان پيل ڪم کي پورو ڪريو ۽ اڻ ڏٺل سڀاڻي جو فڪر دل مان ڪڍي ڇڏيو.',
        suggestedFollowUps: [
          'بي چين من کي سانت ڪيئن ڏجي؟',
          'ڪم تي پورو ڌيان ڪيئن لڳائجي؟',
          'شري ڪرشن دل جي سڪون بابت ڇا فرمايو؟'
        ]
      },
      ta: {
        shriKrishnasGuidance:
          'பகவத் கீதையில் ஸ்ரீகிருஷ்ணரின் போதனைகளிலிருந்து பெறப்பட்ட வழிகாட்டல்: எதிர்காலத்தைப் பற்றிய பயம் நிகழ்காலத்தின் ஆற்றலை வீணடிக்கிறது. நாளைய நாளின் முடிவுகள் உங்கள் கைகளில் இல்லை, ஆனால் இன்றைய கடமையைச் செய்யும் முழு உரிமை உங்களுக்கு மட்டுமே உள்ளது. பலன்களைப் பற்றிய அதீத கவலையை விடுத்து, செய்கின்ற செயலில் முழு மனதையும் ஈடுபடுத்துமாறு கிருஷ்ணர் கூறுகிறார். இவ்வாறு செயல்படும் போது மனம் அமைதியடைந்து தெளிவு பிறக்கும்.',
        relevanceExplanation:
          'அத்தியாயம் 2, சுலோகம் 47-ல் ஸ்ரீகிருஷ்ணர் கூறுகிறார்: "கடமையைச் செய்வதில் மட்டுமே உனக்கு உரிமை உண்டு; அதன் பலன்களில் ஒருபோதும் இல்லை." இது எதிர்கால பயத்தை வேரறுக்கும் மகத்தான உபதேசம்.',
        practicalLifeLesson:
          'எதிர்காலம் குறித்த பயம் தோன்றும் போது, ஆழ்ந்த சுவாசத்தை மேற்கொண்டு, "அடுத்த ஒரு மணி நேரத்தில் நான் செய்ய வேண்டிய உருப்படியான வேலை என்ன?" என்று சிந்தித்து அதில் ஈடுபடுங்கள்.',
        suggestedFollowUps: [
          'அளவுக்கு அதிகமாக சிந்திக்கும் பழக்கத்தை நிறுத்துவது எப்படி?',
          'மனதை நிகழ்காலத்தில் நிலைநிறுத்துவது எப்படி?',
          'பயமின்றி எதிர்காலத்தை எதிர்கொள்ளும் வழி என்ன?'
        ]
      },
      gu: {
        shriKrishnasGuidance:
          'ભગવદ્ ગીતામાં શ્રીકૃષ્ણના દિવ્ય ઉપદેશમાંથી પ્રેરિત માર્ગદર્શન: ભવિષ્યની ચિંતા ત્યારે જ જન્મે છે જ્યારે મન આજના કર્તવ્યને વિસરીને કાલે શું થશે તેના ભ્રમમાં ફસાય છે. આવતીકાલનું પરિણામ તમારા હાથમાં નથી, પણ આજના કર્મની શ્રેષ્ઠતા તમારા જ હાથમાં છે. શ્રીકૃષ્ણ નિષ્કામ કર્મનો માર્ગ બતાવે છે: પરિણામની ચિંતા છોડીને આજના કાર્યમાં સંપૂર્ણ એકાગ્રતા દાખવો. તેનાથી મનની ચિંતાઓ શાંત થશે.',
        relevanceExplanation:
          'અધ્યાય ૨, શ્લોક ૪૭ નિષ્કામ કર્મયોગનો મૂળ મંત્ર છે: "તમારો અધિકાર માત્ર કર્મ કરવાનો છે, તેના ફળ પર ક્યારેય નહીં." આ શ્લોક ભવિષ્યના ભયમાંથી મુક્તિ અપાવે છે.',
        practicalLifeLesson:
          'જ્યારે પણ ભવિષ્યનો ડર સતાવે ત્યારે ઊંડો શ્વાસ લઈ આ ક્ષણે જે કામ હાથ પર હોય તેમાં જ સંપૂર્ણ ધ્યાન પરોવો.',
        suggestedFollowUps: [
          'ઓવરથિંકિંગમાંથી મુક્ત કેવી રીતે થવું?',
          'પરિણામની ચિંતા છોડીને કર્મ કરવાની સાચી રીત કઈ?',
          'ચિત્તને સદા શાંત રાખવા માટે ગીતાનો કયો ઉપદેશ છે?'
        ]
      }
    }
  },

  // 4. Mind Control, Discipline, Habits, Mental Health, Self-Doubt
  {
    topicId: 'mind_discipline',
    keywords: [
      'mind', 'control', 'restless', 'fickle', 'wandering', 'distract', 'distraction',
      'discipline', 'habit', 'lazy', 'laziness', 'procrastination', 'doubt',
      'self-doubt', 'negative thoughts', 'meditation', 'focus', 'willpower',
      'concentration', 'monkey mind', 'mental health',
      'من', 'ذهن', 'دماغ', 'سستی', 'وسوسے', 'منفي', 'मन', 'ध्यान', 'एकाग्रता',
      'आलस्य', 'संशय', 'மனம்', 'ஆழ்மனம்', 'கவனம்', 'சோம்பல்', 'மન', 'ધ્યાન', 'આળસ'
    ],
    verseId: 'bg-6-5',
    guidanceByLang: {
      en: {
        shriKrishnasGuidance:
          "Inspired by Shri Krishna’s timeless teachings in the Bhagavad Gita: The human mind is not fixed in stone; it is an instrument that becomes your greatest ally when trained, or your most punishing tormentor when neglected. No external critic can wound you as deeply as your own self-sabotaging thoughts. Shri Krishna urges you: elevate yourself through the mind, do not degrade yourself. When the mind wanders into distraction, laziness, or harsh self-judgment, do not punish yourself; like a gentle, patient teacher, guide it back with practice (abhyasa) and calm dispassion (vairagya).",
        relevanceExplanation:
          'In Chapter 6, Verse 5, Shri Krishna reveals: "Elevate yourself through the power of your own mind, and do not degrade yourself. For the mind alone is one’s friend, and the mind alone is one’s enemy."',
        practicalLifeLesson:
          'Audit your self-talk today. Whenever a harsh inner critic whispers that you are incapable or falling behind, consciously replace that thought with a patient, disciplined encouragement: "I am learning, and I take this step with steady focus."',
        suggestedFollowUps: [
          'How can I train my wandering mind through daily Abhyasa?',
          'What is the role of meditation in mastering restless impulses?',
          'How can I break cycles of procrastination and self-doubt?'
        ]
      },
      hi: {
        shriKrishnasGuidance:
          'श्रीमद्भगवद्गीता में श्रीकृष्ण की शिक्षाओं से प्रेरित मार्गदर्शन: मन को अपना सबसे बड़ा मित्र या सबसे बड़ा शत्रु बनाया जा सकता है। जब मन अनियंत्रित होता है, तो वह आलस्य, नकारात्मकता और आत्म-संदेह से भर जाता है। श्रीकृष्ण कहते हैं कि अपने मन द्वारा अपना उद्धार करो, स्वयं को नीचा मत दिखाओ। अभ्यास और वैराग्य के द्वारा चंचल मन को धीरे-धीरे स्थिर किया जा सकता है। खुद को कोसने के बजाय एक सच्चे मित्र की तरह अपने मन को सद्कर्म की ओर प्रेरित करें।',
        relevanceExplanation:
          'अध्याय ६, श्लोक ५ में श्रीकृष्ण कहते हैं: "अपने द्वारा अपना उद्धार करे, अपना पतन न होने दे; क्योंकि यह मन ही अपना मित्र है और यह मन ही अपना शत्रु है।"',
        practicalLifeLesson:
          'आज अपने विचारों पर ध्यान दें। जब भी नकारात्मक विचार आएं, तुरंत रुकें और सकारात्मक संकल्प के साथ अपने काम में जुट जाएं।',
        suggestedFollowUps: [
          'चंचल मन को एकाग्र करने के क्या नियम हैं?',
          'आलस्य और टालमटोल की आदत कैसे छोड़ें?',
          'आत्म-संदेह से मुक्ति पाने के लिए गीता का क्या उपदेश है?'
        ]
      },
      ur: {
        shriKrishnasGuidance:
          'بھگود گیتا کی ابدی حکمت سے ماخوذ رہنمائی: انسان کا ذہن اس کا سب سے بڑا ساتھی بھی بن سکتا ہے اور بدترین دشمن بھی۔ بے لگام ذہن انسان کو شک، سستی اور منفی سوچوں میں الجھا دیتا ہے۔ شری کرشن کا فرمان ہے کہ اپنے ذہن کی طاقت سے خود کو بلند کرو، خود کو ذلیل نہ کرو۔ مسلسل ریاضت اور فضول باتوں سے پرہیز کے ذریعے ذہن کو قابو میں لایا جا سکتا ہے۔ اپنے اندر ایک رحمدل استاد کی طرح نظم و ضبط پیدا کریں۔',
        relevanceExplanation:
          'باب ۶، اشلوک ۵ فرماتا ہے: "اپنے ذہن کی طاقت سے خود کو بلندی پر لے جاؤ اور کبھی خود کو ذلیل نہ کرو، کیونکہ ذہن ہی انسان کا دوست ہے اور ذہن ہی دشمن ہے۔"',
        practicalLifeLesson:
          'آج منفی خود کلامی سے پرہیز کریں۔ جب بھی مایوسی دل میں آئے تو خود کو حوصلہ دیں اور پختہ ارادے سے کام شروع کریں۔',
        suggestedFollowUps: [
          'بے چین ذہن کو پرسکون اور یکسو کیسے بنائیں؟',
          'سستی اور کام ٹالنے کی عادت پر قابو کیسے پائیں؟',
          'شری کرشن کے مطابق ریاضت اور پرہیز کا کیا مطلب ہے؟'
        ]
      },
      sd: {
        shriKrishnasGuidance:
          'ڀڳوت گيتا ۾ شري ڪرشن جي پاڪ سچائيءَ مان ورتل رهنمائي: من ئي انسان جو سڀ کان وڏو دوست ۽ من ئي دشمن آهي. جڏهن من تي ضابطو نه هوندو آهي ته انسان پاڻ کي مايوسيءَ ۾ ڌڪي ڇڏيندو آهي. شري ڪرشن سيکاري ٿو ته پنهنجو پاڻ کي من جي وسيلي مٿي کڻو ۽ مايوسيءَ کي پري رکو. مسلسل ڪوشش سان ئي چنچل من سڌي رستي تي ايندو آهي.',
        relevanceExplanation:
          'باب ۶، اشلوڪ ۵ ۾ فرمايو ويو آهي ته پنهنجي ذهن سان پنهنجو پاڻ سنواريو، ڇو ته من ئي دوست ۽ من ئي دشمن آهي.',
        practicalLifeLesson:
          'پنهنجي اندر همٿ پيدا ڪريو، منفي خيالن کي دل مان ڪڍي اڄ ئي پنهنجي مقصد تي ڌيان لڳايو.',
        suggestedFollowUps: [
          'بي چين من تي قبضو ڪيئن حاصل ڪجي؟',
          'پڙهائي ۽ ڪم ۾ توجهه ڪيئن آڻجي؟',
          'گيتا خود اعتماديءَ بابت ڇا ٻڌائي ٿي؟'
        ]
      },
      ta: {
        shriKrishnasGuidance:
          'பகவத் கீதையில் ஸ்ரீகிருஷ்ணரின் போதனைகளிலிருந்து பெறப்பட்ட வழிகாட்டல்: நமது மனமே நமது மிகச்சிறந்த நண்பன்; அதுவே கட்டுப்பாடற்ற போது பரம எதிரியாகிறது. தன்னைத்தானே தன் மனதின் பலத்தால் உயர்த்திக் கொள்ள வேண்டுமே தவிர ஒருபோதும் தாழ்த்திக் கொள்ளக் கூடாது என்று கிருஷ்ணர் பணிக்கிறார். அலைபாயும் மனதை பயிற்சியினாலும் (அப்பியாசம்) பற்றின்மையினாலும் (வைராக்கியம்) வசப்படுத்த முடியும். சுயவெறுப்பை கைவிட்டு அன்புடன் மனதை நற்பாதையில் செலுத்துங்கள்.',
        relevanceExplanation:
          'அத்தியாயம் 6, சுலோகம் 5-ல் கிருஷ்ணர் உரைக்கிறார்: "தன்னைத்தானே உயர்த்திக் கொள்ள வேண்டும்; தன்னைத் தாழ்த்திக் கொள்ளக் கூடாது. ஏனென்றால் மனம் மட்டுமே ஒருவனுக்கு உற்ற நண்பன், மனமே அவனுக்குப் பரம எதிரி."',
        practicalLifeLesson:
          'இன்று உங்கள் எதிர்மறை எண்ணங்களை விழிப்புணர்வுடன் கவனித்து, "நான் பொறுமையுடன் கற்றுக்கொண்டு முன்னேறுவேன்" என்ற நேர்மறை எண்ணத்தை விதைத்துக் கொள்ளுங்கள்.',
        suggestedFollowUps: [
          'சிதறும் கவனத்தை ஒருமுகப்படுத்துவது எப்படி?',
          'சோம்பேறித்தனத்தை போக்க கிருஷ்ணர் காட்டும் வழி என்ன?',
          'மன அழுத்தமில்லாத வாழ்விற்கு தியானத்தின் பங்கு என்ன?'
        ]
      },
      gu: {
        shriKrishnasGuidance:
          'ભગવદ્ ગીતામાં શ્રીકૃષ્ણના દિવ્ય ઉપદેશમાંથી પ્રેરિત માર્ગદર્શન: આપણું મન જો કેળવાયેલું હોય તો તે શ્રેષ્ઠ મિત્ર છે અને અસંયમિત હોય તો સૌથી મોટો શત્રુ છે. શ્રીકૃષ્ણ કહે છે કે પોતાના મન દ્વારા પોતાનો ઉદ્ધાર કરવો, ક્યારેય પોતાનું પતન ન થવા દેવું. સતત અભ્યાસ અને નકામી બાબતોથી વિરક્ત રહીને ચંચળ મનને વશમાં કરી શકાય છે. આત્મવિશ્વાસ રાખી મનને સદા શ્રેષ્ઠ કર્મો તરફ વાળો.',
        relevanceExplanation:
          'અધ્યાય ૬, શ્લોક ૫ નો દિવ્ય સંદેશ: "પોતાના દ્વારા પોતાનો ઉદ્ધાર કરવો, પોતાનું પતન ન થવા દેવું; કારણ કે મન જ પોતાનો મિત્ર છે અને મન જ પોતાનો શત્રુ છે."',
        practicalLifeLesson:
          'આજે નકારાત્મક વિચારોથી દૂર રહો. જ્યારે પણ આળસ આવે ત્યારે મનને દ્રઢ બનાવી પોતાના લક્ષ્ય પ્રત્યે વળગી રહો.',
        suggestedFollowUps: [
          'ચંચળ મનને એકાગ્ર કરવા માટે કયો અભ્યાસ કરવો?',
          'આળસ અને ટાળવાની વૃત્તિ કેવી રીતે દૂર કરવી?',
          'આત્મ-વિશ્વાસ વધારવા ગીતાનું શું માર્ગદર્શન છે?'
        ]
      }
    }
  },

  // 5. Relationships, Forgiveness, Grudges, Conflict, Kindness
  {
    topicId: 'relationships_forgiveness',
    keywords: [
      'relationship', 'friend', 'family', 'partner', 'husband', 'wife',
      'jealous', 'jealousy', 'envy', 'forgive', 'forgiveness', 'hate',
      'grudge', 'hurt', 'betrayal', 'kindness', 'love', 'quarrel', 'cheated',
      'تعلق', 'معاف', 'معافي', 'دوستی', 'نفرت', 'حسد', 'रिश्ते', 'क्षमा',
      'प्रेम', 'द्वेष', 'ईर्ष्या', 'कड़वाहट', 'மன்னிப்பு', 'உறவுகள்', 'அன்பு',
      'பகை', 'கருணை', 'સંબંધ', 'ક્ષમા', 'પ્રેમ', 'દ્વેષ', 'ઈર્ષ્યા'
    ],
    verseId: 'bg-12-13',
    guidanceByLang: {
      en: {
        shriKrishnasGuidance:
          "Inspired by Shri Krishna’s timeless teachings in the Bhagavad Gita: Resentment is a poison we drink while expecting another person to suffer. Holding onto grudges burns the heart in which it is harbored. Shri Krishna teaches that the highest spiritual nobility is to be free from malice toward any living being (adveṣṭā), to walk with genuine friendliness and compassion, and to possess a forgiving heart (kṣamī). Forgiving someone does not mean excusing wrongful actions; it means liberating your own soul from being chained to past betrayal. See the vulnerabilities in others, guard your own integrity, and choose freedom over bitterness.",
        relevanceExplanation:
          'In Chapter 12, Verse 13, Shri Krishna proclaims: "One who does not hate any living being, who is friendly and compassionate, free from possessiveness and false ego, equal in sorrow and joy, and forgiving — such a devotee is very dear to Me."',
        practicalLifeLesson:
          'Release one lingering resentment today. Silently wish peace to someone who disappointed you, and decide not to let their past behavior rent space in your mind any longer.',
        suggestedFollowUps: [
          'How can I forgive someone who showed no remorse?',
          'How do I maintain boundaries while practicing kindness?',
          'What did Krishna teach about seeing the divine in everyone?'
        ]
      },
      hi: {
        shriKrishnasGuidance:
          'श्रीमद्भगवद्गीता में श्रीकृष्ण की शिक्षाओं से प्रेरित मार्गदर्शन: द्वेष और ईर्ष्या वह विष हैं जो सबसे पहले उस पात्र को जलाते हैं जिसमें वे रखे जाते हैं। किसी के प्रति कड़वाहट पालना अपने ही मानसिक शांति को नष्ट करना है। श्रीकृष्ण बताते हैं कि जो किसी भी प्राणी से द्वेष नहीं करता, जो दयालु, निरहंकारी और क्षमाशील है, वही वास्तव में सुखी और परमात्मा का प्रिय है। क्षमा का अर्थ किसी के गलत आचरण को सही ठहराना नहीं, बल्कि अपने मन को उस दुख के बंधन से मुक्त करना है।',
        relevanceExplanation:
          'अध्याय १२, श्लोक १३ में श्रीकृष्ण अपने प्रिय भक्त के लक्षण बताते हैं: "जो किसी प्राणी से द्वेष नहीं करता, सबका मित्र और दयालु है, सुख-दुःख में सम और क्षमाशील है, वह मुझे अति प्रिय है।"',
        practicalLifeLesson:
          'आज किसी पुराने गिले-शिकवे को त्याग दें। मन ही मन उस व्यक्ति को क्षमा करें ताकि आपका हृदय हल्का और तनावमुक्त हो सके।',
        suggestedFollowUps: [
          'संबंधों में आई कड़वाहट को प्रेम में कैसे बदलें?',
          'अहंकार को त्यागकर क्षमाशील कैसे बनें?',
          'अपनों के विश्वासघात से उबरने के लिए गीता का क्या मार्ग है?'
        ]
      },
      ur: {
        shriKrishnasGuidance:
          'بھگود گیتا کی ابدی حکمت سے ماخوذ رہنمائی: کینہ اور بغض وہ زہر ہیں جو سب سے پہلے انسان کے اپنے سکون کو نگل جاتے ہیں۔ کسی سے بدلہ لینے کی آگ دل کو جلاتی رہتی ہے۔ شری کرشن سکھاتے ہیں کہ جو شخص تمام مخلوق کے لیے خیر خواہ، رحمدل اور معاف کرنے والا ہو، وہی اصل سکون پاتا ہے۔ معاف کر دینے کا مطلب ناانصافی کو تسلیم کرنا نہیں بلکہ اپنی روح کو نفرت کی زنجیروں سے آزاد کرانا ہے۔',
        relevanceExplanation:
          'باب ۱۲، اشلوک ۱۳ میں شری کرشن فرماتے ہیں: "جو کسی جاندار سے کینہ نہیں رکھتا، سب کا دوست اور رحمدل ہے، اور معاف کرنے والا ہے — وہ مجھے بے حد پیارا ہے۔"',
        practicalLifeLesson:
          'آج کسی پرانی رنجش کو دل سے مٹا دیں۔ کسی کو سچے دل سے معاف کر دیں تاکہ آپ کا دل ہلکا اور پرسکون ہو جائے۔',
        suggestedFollowUps: [
          'تلخ تعلقات میں صبر اور معافی کیسے اپنائیں؟',
          'نفرت اور حسد کے جذبات سے کیسے بچیں؟',
          'شری کرشن کے نزدیک سچی ہمدردی اور دوستی کیا ہے؟'
        ]
      },
      sd: {
        shriKrishnasGuidance:
          'ڀڳوت گيتا ۾ شري ڪرشن جي پاڪ سچائيءَ مان ورتل رهنمائي: دل ۾ دشمني ۽ ڪينو رکڻ پنهنجي ئي سڪون کي باهه ڏيڻ برابر آهي. شري ڪرشن فرمائي ٿو ته سڀني سان پيار، نرمي ۽ معافي اختيار ڪرڻ ئي سچي ماڻهپائي آهي. ڪنهن کي معاف ڪرڻ سان انسان پاڻ ئي دک مان آزاد ٿي ويندو آهي.',
        relevanceExplanation:
          'باب ۱۲، اشلوڪ ۱۳ ۾ فرمايو ويو آهي ته جيڪو ڪنهن سان دشمني نه ٿو رکي، سڀني سان ٻاجهارو ۽ معاف ڪندڙ آهي، اهو ئي خدا جو پيارو آهي.',
        practicalLifeLesson:
          'اڄ ڪنهن به ناراضپي کي دل مان ڪڍي ڇڏيو ۽ سڀني لاءِ پيار ۽ چڱائيءَ جو احساس رکو.',
        suggestedFollowUps: [
          'رشتن ۾ مٺاس ڪيئن پيدا ڪجي؟',
          'ڪنهن جي بي وفائيءَ کان پوءِ دل ڪيئن سنڀالجي؟',
          'گيتا محبت ۽ معافي بابت ڇا سيکاري ٿي؟'
        ]
      },
      ta: {
        shriKrishnasGuidance:
          'பகவத் கீதையில் ஸ்ரீகிருஷ்ணரின் போதனைகளிலிருந்து பெறப்பட்ட வழிகாட்டல்: பகைமையும் வெறுப்பும் நம் உள்ளத்தின் அமைதியைக் கெடுக்கும் நஞ்சாகும். யாரையும் வெறுக்காமல், அனைவரிடமும் நட்பும் கருணையும் கொண்டு, மன்னிக்கும் குணம் கொண்ட மனிதனே தனக்கும் பிறருக்கும் நலம் பயக்கிறான் என்று கிருஷ்ணர் கூறுகிறார். மன்னிப்பது என்பது பிறரின் தவறுகளை ஏற்பதல்ல; உங்கள் மனதை கடந்த கால கசப்புகளிலிருந்து விடுவித்து சுதந்திரமடைவதாகும்.',
        relevanceExplanation:
          'அத்தியாயம் 12, சுலோகம் 13-ல் கிருஷ்ணர் உரைக்கிறார்: "எந்த உயிரையும் வெறுக்காதவன், அனைவரிடமும் நட்பும் கருணையும் கொண்டவன், மன்னிக்கும் குணம் கொண்டவன் எனக்கு மிகவும் பிரியமானவன்."',
        practicalLifeLesson:
          'இன்று உங்கள் மனதில் உள்ள ஒரு பழைய மனக்கசப்பை அகற்றி, அந்த நபருக்கு மனதளவில் அமைதியை வேண்டி உங்கள் மனப்பாரத்தை இறக்கி வையுங்கள்.',
        suggestedFollowUps: [
          'மனக்கசப்பிலிருந்து விடுபட்டு உறவுகளை பேண வழி என்ன?',
          'சுயநலத்தை விடுத்து பிறருக்கு உதவும் மனப்பான்மை வளர்ப்பது எப்படி?',
          'ஸ்ரீகிருஷ்ணர் போதிக்கும் நிபந்தனையற்ற அன்பு என்றால் என்ன?'
        ]
      },
      gu: {
        shriKrishnasGuidance:
          'ભગવદ્ ગીતામાં શ્રીકૃષ્ણના દિવ્ય ઉપદેશમાંથી પ્રેરિત માર્ગદર્શન: ઈર્ષ્યા અને દ્વેષ એવું ઝેર છે જે મનુષ્યની પોતાની શાંતિને બાળી નાખે છે. કોઈના પ્રત્યે વેરભાવ રાખવાથી આપણું જ મન અશાંત બને છે. શ્રીકૃષ્ણ શીખવે છે કે જે સૌનો મિત્ર છે, દયાળુ છે અને ક્ષમાશીલ છે તે જ પરમ શાંતિ પામે છે. ક્ષમા આપવી એ નબળાઈ નથી પણ આંતરિક શક્તિની સૌથી મોટી ઓળખ છે.',
        relevanceExplanation:
          'અધ્યાય ૧૨, શ્લોક ૧૩ નો સંદેશ: "જે કોઈ જીવ પ્રત્યે દ્વેષ રાખતો નથી, સૌનો મિત્ર અને દયાળુ છે તથા ક્ષમાશીલ છે તે મને અતિ પ્રિય છે."',
        practicalLifeLesson:
          'આજે કોઈ જૂની કડવાશને મનમાંથી ભૂંસી નાખો. કોઈને ક્ષમા આપીને તમારા હૃદયને હળવું કરો.',
        suggestedFollowUps: [
          'સંબંધોમાં વિશ્વાસ અને સ્નેહ કેવી રીતે જાળવવો?',
          'ક્રોધ અને દ્વેષથી મુક્ત થવાનો માર્ગ કયો?',
          'ક્ષમાભાવથી જીવનમાં કયા લાભ થાય છે?'
        ]
      }
    }
  },

  // 6. Loneliness, Despair, Grief, Seeking Divine Refuge & Comfort
  {
    topicId: 'loneliness_refuge',
    keywords: [
      'alone', 'lonely', 'loneliness', 'god', 'krishna', 'faith', 'surrender',
      'hopeless', 'despair', 'empty', 'crying', 'grief', 'sad', 'sadness',
      'meaning of life', 'why me', 'nobody loves me', 'broken', 'heartbroken',
      'تنہائی', 'اڪيلائي', 'مایوسی', 'غم', 'خدا', 'अकेलापन', 'उदासी', 'शोक',
      'ईश्वर', 'भरोसा', 'தனிமை', 'துன்பம்', 'சோகம்', 'இறைவன்', 'અકેલાપણું', 'ઉદાસી', 'દુઃખ'
    ],
    verseId: 'bg-18-65',
    guidanceByLang: {
      en: {
        shriKrishnasGuidance:
          "Inspired by Shri Krishna’s timeless teachings in the Bhagavad Gita: In your darkest hours of loneliness and despair, know this eternal truth: you are never alone, never abandoned, and never unseen. The Divine presence dwells intimately in the chamber of your very heart (hṛd-deśe tiṣṭhati). When worldly relationships falter or life seems hollow, Shri Krishna makes this tender and unbreakable promise: you are dearly and unconditionally loved. Surrender the heavy burden of carrying the world on your solitary shoulders; rest your weary mind in divine grace, and let hope be rekindled in your spirit.",
        relevanceExplanation:
          'In Chapter 18, Verse 65, Shri Krishna declares: "Always fix your mind on Me, become My devotee, worship Me, and offer your homage unto Me. Thus you will come to Me without fail. Truly do I promise you, for you are dearly loved by Me."',
        practicalLifeLesson:
          'Sit quietly for 3 minutes right now with eyes closed. Place your hand on your heart, take three deep breaths, and remind yourself: "I am deeply loved, protected, and guided by a higher presence."',
        suggestedFollowUps: [
          'How can I feel connected to the Divine during painful moments?',
          'What did Krishna advise Arjuna when he felt completely broken?',
          'How do I find purpose when everything seems empty?'
        ]
      },
      hi: {
        shriKrishnasGuidance:
          'श्रीमद्भगवद्गीता में श्रीकृष्ण की शिक्षाओं से प्रेरित मार्गदर्शन: जीवन के सबसे गहरे अकेलेपन और निराशा में यह शाश्वत सत्य याद रखें कि आप कभी अकेले नहीं हैं। परमात्मा हर क्षण आपके हृदय में विराजमान हैं। जब संसार के सहारे छूटते प्रतीत हों, तब श्रीकृष्ण यह अभय वचन देते हैं: "तुम मुझे अति प्रिय हो।" अपने कष्टों का भारी बोझ ईश्वर के चरणों में समर्पित कर दें और मन में यह विश्वास जगाएं कि ईश्वरीय प्रेम सदा आपकी रक्षा कर रहा है।',
        relevanceExplanation:
          'अध्याय १८, श्लोक ६५ में श्रीकृष्ण का परम आश्वासन है: "मुझमें मन लगाओ, मेरे भक्त बनो... तुम मुझे ही प्राप्त होओगे, यह मेरी सत्य प्रतिज्ञा है क्योंकि तुम मुझे अति प्रिय हो।"',
        practicalLifeLesson:
          'अभी ३ मिनट शांत बैठें, अपने हृदय पर हाथ रखें और यह अनुभव करें कि आप ईश्वरीय कृपा के साए में हैं। अकेलापन मिट जाएगा।',
        suggestedFollowUps: [
          'अकेलेपन को एकांत साधना में कैसे बदलें?',
          'ईश्वर के प्रति सच्चा समर्पण कैसे करें?',
          'निराशा के क्षणों में आत्म-बल कैसे बढ़ाएं?'
        ]
      },
      ur: {
        shriKrishnasGuidance:
          'بھگود گیتا کی ابدی حکمت سے ماخوذ رہنمائی: مایوسی اور تنہائی کے اندھیروں میں یہ سچائی یاد رکھیں کہ آپ کبھی اکیلے نہیں ہیں۔ کائنات کا پروردگار آپ کے دل کی گہرائیوں میں موجود ہے۔ جب دنیا ساتھ چھوڑ دے تو شری کرشن کا یہ تسلی بخش وعدہ یاد کریں: "تم مجھے بہت عزیز ہو۔" اپنی تمام تر پریشانیاں اس مالک کے حوالے کر دیں جو دلوں کا حال جانتا ہے۔',
        relevanceExplanation:
          'باب ۱۸، اشلوک ۶۵ میں شری کرشن کا تسلی بخش وعدہ ہے کہ مجھ پر بھروسہ رکھو، تم یقیناً مجھے پا لو گے کیونکہ تم مجھے بے حد عزیز ہو۔',
        practicalLifeLesson:
          'چند لمحے آنکھیں بند کر کے سکون سے بیٹھیں اور یاد رکھیں کہ خالق کی رحمت آپ کے ساتھ ہے۔ تنہائی کے احساس کو یقین میں بدلیں۔',
        suggestedFollowUps: [
          'تنہائی اور مایوسی سے نجات پانے کا کیا راستہ ہے؟',
          'خدا کی رحمت پر کامل بھروسہ کیسے رکھیں؟',
          'شری کرشن کے نزدیک سچی دعا اور تسلیم کیا ہے؟'
        ]
      },
      sd: {
        shriKrishnasGuidance:
          'ڀڳوت گيتا ۾ شري ڪرشن جي پاڪ سچائيءَ مان ورتل رهنمائي: اڪيلائيءَ ۽ ڏک جي لمحن ۾ ياد رکو ته خدا ڪڏهن به پنهنجي بندي کي اڪيلو نٿو ڇڏي. شري ڪرشن فرمائي ٿو ته تون مون کي پيارو آهين، ان ڪري پنهنجا فڪر مون تي ڇڏي ڏي. ايمانداريءَ سان پنهنجو رستو جاري رکو.',
        relevanceExplanation:
          'باب ۱۸، اشلوڪ ۶۵ ۾ شري ڪرشن جو واعدو آهي ته من مون سان لڳاءِ، تون مون کي ضرور ماڻيندين، هي منهنجو سچو واعدو آهي ڇو ته تون مون کي تمام پيارو آهين.',
        practicalLifeLesson:
          'اڄ دل کي تسلي ڏيو ته اوهان اڪيلا ناهيو. خدا جي ياد ۾ من کي سانت ڏيو.',
        suggestedFollowUps: [
          'ڏکئي وقت ۾ دل کي آٿت ڪيئن ڏجي؟',
          'خدا جي محبت کي دل ۾ ڪيئن محسوس ڪجي؟',
          'گيتا اندروني اڪيلائيءَ بابت ڇا ٻڌائي ٿي؟'
        ]
      },
      ta: {
        shriKrishnasGuidance:
          'பகவத் கீதையில் ஸ்ரீகிருஷ்ணரின் போதனைகளிலிருந்து பெறப்பட்ட வழிகாட்டல்: தனிமையும் துயரமும் வாட்டும் தருணங்களில் ஒருபோதும் நீங்கள் கைவிடப்படவில்லை என்பதை உணருங்கள். இறைவன் உங்கள் இதயத்தின் ஆழத்தில் எப்போதும் வீற்றிருக்கிறார். உலகம் கைவிட்டாலும் ஸ்ரீகிருஷ்ணர் தருகின்ற உறுதியான வாக்குறுதி: "நீ எனக்கு மிகவும் அன்பானவன்." உங்கள் பாரங்களை இறைவனிடம் ஒப்படைத்து, நம்பிக்கையுடன் வாழுங்கள்.',
        relevanceExplanation:
          'அத்தியாயம் 18, சுலோகம் 65-ல் கிருஷ்ணர் கூறுகிறார்: "உன் மனதை என்னிடம் நிலைநிறுத்து... நீ நிச்சயமாக என்னை அடைவாய். இது சத்திய வாக்கு; ஏனெனில் நீ எனக்கு மிகவும் அன்பானவன்."',
        practicalLifeLesson:
          'இப்போது அமைதியாக கண்களை மூடி உங்கள் இதயத்தில் கையை வைத்து, "நான் இறைவனால் பாதுகாக்கப்படுகிறேன்" என்று உணருங்கள்.',
        suggestedFollowUps: [
          'சோகமான தருணங்களில் மன வலிமை பெறுவது எப்படி?',
          'இறை நம்பிக்கையை வளர்ப்பது எப்படி?',
          'வாழ்க்கையின் உண்மையான நோக்கத்தை அறிவது எப்படி?'
        ]
      },
      gu: {
        shriKrishnasGuidance:
          'ભગવદ્ ગીતામાં શ્રીકૃષ્ણના દિવ્ય ઉપદેશમાંથી પ્રેરિત માર્ગદર્શન: એકલતા અને નિરાશાની ક્ષણોમાં યાદ રાખો કે તમે ક્યારેય એકલા નથી. પરમાત્મા હંમેશાં તમારા હૃદયમાં બિરાજમાન છે. શ્રીકૃષ્ણ આશ્વાસન આપે છે કે તમે તેમને અતિ પ્રિય છો. સંસારની ચિંતાનો બોજ પ્રભુને અર્પણ કરી દઈ હૃદયમાં નવી આશા અને શાંતિ અનુભવો.',
        relevanceExplanation:
          'અધ્યાય ૧૮, શ્લોક ૬૫ નો પરમ પ્રેમભર્યો સંદેશ: "મારામાં મન પરોવો... તમે મને જ પ્રાપ્ત થશો, આ હું સત્ય પ્રતિજ્ઞા કરું છું કારણ કે તમે મને અતિ પ્રિય છો."',
        practicalLifeLesson:
          'થોડી ક્ષણો શાંતિથી બેસીને ઈશ્વરીય સ્નેહનું સ્મરણ કરો અને મનમાંથી અસહાયતાનો ભાવ દૂર કરો.',
        suggestedFollowUps: [
          'એકલતાને આધ્યાત્મિક શાંતિમાં કેવી રીતે બદલવી?',
          'ઈશ્વર પર અડગ શ્રદ્ધા કેવી રીતે કેળવવી?',
          'જીવનમાં પરમ શાંતિ પામવાનો માર્ગ કયો?'
        ]
      }
    }
  }
];

// Clarifying responses when question is too vague or just a greeting
export const CLARIFICATION_RESPONSES: Record<LanguageCode, {
  summary: string;
  teachingExplanation: string;
  practicalEverydayLesson: string;
  suggestedFollowUps: string[];
}> = {
  en: {
    summary:
      "Namaste, seeker. Shri Krishna’s wisdom in the Bhagavad Gita speaks directly to our specific daily life struggles — whether you are navigating anger, coping with an exam setback, worrying about an uncertain future, training a restless mind, or seeking peace in relationships. Could you share a few more details about what specific challenge or question is on your mind today?",
    teachingExplanation:
      "In the Gita, Arjuna’s profound transformation began only when he asked specific, vulnerable questions about his real dilemma on the battlefield. When you articulate your specific struggle, the wisdom becomes immensely practical and transformative.",
    practicalEverydayLesson:
      "Take a moment to name your exact emotion right now (e.g., 'I feel angry', 'I fear failure', 'I am stressed about tomorrow') and ask about that specific situation.",
    suggestedFollowUps: [
      "How can I control my anger when provoked?",
      "What should I do when I fail an exam or setback?",
      "How can I stop worrying about my future?"
    ]
  },
  hi: {
    summary:
      "नमस्ते साधक। भगवद्गीता में भगवान श्रीकृष्ण का ज्ञान जीवन की हर वास्तविक परिस्थिति के लिए समाधान देता है — चाहे वह क्रोध पर नियंत्रण हो, परीक्षा या असफलता का दुख, भविष्य की चिंता, या मन की एकाग्रता। कृपया बताएं कि आज आप किस विशेष प्रश्न या परिस्थिति पर मार्गदर्शन चाहते हैं?",
    teachingExplanation:
      "कुरुक्षेत्र में अर्जुन का मार्गदर्शन तभी संभव हुआ जब उन्होंने अपनी वास्तविक दुविधा और पीड़ा को खुलकर श्रीकृष्ण के समक्ष रखा। अपनी विशिष्ट समस्या बताने से गीता का ज्ञान सीधे आपके जीवन में फलित होता है।",
    practicalEverydayLesson:
      "वर्तमान में अपने मन की भावना को पहचानें (जैसे क्रोध, परीक्षा का भय, या तनाव) और उसी विषय पर प्रश्न पूछें।",
    suggestedFollowUps: [
      "क्रोध पर नियंत्रण कैसे प्राप्त करें?",
      "परीक्षा में असफलता मिलने पर क्या करना चाहिए?",
      "भविष्य की व्यर्थ चिंता कैसे बंद करें?"
    ]
  },
  ur: {
    summary:
      "خوش آمدید۔ بھگود گیتا کی ابدی حکمت زندگی کے ہر مسئلے کا حل پیش کرتی ہے — خواہ وہ غصے پر قابو پانا ہو، امتحان میں ناکامی کا صدمہ، مستقبل کی فکر، یا تعلقات میں توازن۔ آپ آج کس مخصوص مسئلے یا سوال پر رہنمائی چاہتے ہیں؟",
    teachingExplanation:
      "ارجن نے جب اپنے اندر کے حقیقی اضطراب اور شکوک کو شری کرشن کے سامنے بیان کیا تبھی حکمت کے دروازے کھلے۔ اپنے اصل مسئلے کو واضح کریں تاکہ موزوں ترین رہنمائی مل سکے۔",
    practicalEverydayLesson:
      "اپنے دلی جذبات کو پرکھیں اور بتائیں کہ اس وقت آپ کو کس معاملے میں رہنمائی درکار ہے۔",
    suggestedFollowUps: [
      "غصے پر قابو پانے کا کیا طریقہ ہے؟",
      "امتحان میں ناکامی پر دل کو کیسے سنبھالیں؟",
      "مستقبل کے اندیشوں سے کیسے نجات پائیں؟"
    ]
  },
  sd: {
    summary:
      "آڌار، پيارا دوست. ڀڳوت گيتا زندگيءَ جي هر مسئلي جو حل ٻڌائي ٿي — چاهي اها ڪاوڙ تي ضابطو هجي، امتحان ۾ ناڪامي، سڀاڻي جو فڪر، يا من جي سانت. مهرباني ڪري ٻڌايو ته اڄ اوهان ڪهڙي ڳالهه يا سوال تي رهنمائي چاهيو ٿا؟",
    teachingExplanation:
      "ارجن جڏهن پنهنجي پريشاني کلي بيان ڪئي ته کيس صحيح واٽ ملي. پنهنجو مخصوص سوال پڇو ته جيئن ڀڳوت گيتا مان سچو سبق ملي سگهي.",
    practicalEverydayLesson:
      "پنهنجي دلي حالت کي سڃاڻي ان بابت سوال لکو.",
    suggestedFollowUps: [
      "ڪاوڙ تي ضابطو ڪيئن رکجي؟",
      "امتحان ۾ ناڪاميءَ تي ڇا ڪجي؟",
      "سڀاڻي جي پريشانيءَ مان ڪيئن نڪرجي؟"
    ]
  },
  ta: {
    summary:
      "வணக்கம். பகவத் கீதையின் புனித ஞானம் நமது அன்றாட வாழ்க்கையின் ஒவ்வொரு சவாலுக்கும் தீர்வு வழங்குகிறது — கோபத்தை கட்டுப்படுத்துவது, தேர்வில் தோல்வி, எதிர்கால கவலை அல்லது மன அமைதி. இன்று நீங்கள் எந்த குறிப்பிட்ட சவாலுக்கு வழிகாட்டல் நாடுகிறீர்கள்?",
    teachingExplanation:
      "அர்ஜுனன் தன் உள்ளத்து துயரத்தை வெளிப்படையாகக் கேட்டபோதே கீதோபதேசம் பிறந்தது. உங்கள் சூழலைத் தெளிவாகக் கூறினால், தகுந்த ஞானத்தை எளிதாகப் பெறலாம்.",
    practicalEverydayLesson:
      "உங்கள் தற்போதைய மனநிலையைக் கவனித்து, உங்கள் குறிப்பிட்ட கேள்வியை எழுப்புங்கள்.",
    suggestedFollowUps: [
      "கோபத்தை எவ்வாறு கட்டுப்படுத்துவது?",
      "தேர்வில் தோல்வி அடைந்தால் என்ன செய்ய வேண்டும்?",
      "எதிர்காலம் குறித்த கவலையை போக்குவது எப்படி?"
    ]
  },
  gu: {
    summary:
      "નમસ્તે જિજ્ઞાસુ. ભગવદ્ ગીતાનું જ્ઞાન જીવનના દરેક પ્રશ્નનું સમાધાન આપે છે — ક્રોધ પર સંયમ, પરીક્ષામાં નિષ્ફળતા, ભવિષ્યની ચિંતા કે મનની એકાગ્રતા. કૃપા કરીને જણાવો કે આજે તમે કયા ચોક્કસ પ્રશ્ન કે સમસ્યા પર માર્ગદર્શન મેળવવા માંગો છો?",
    teachingExplanation:
      "અર્જુને જ્યારે પોતાની સાચી મનોવ્યથા શ્રીકૃષ્ણ સમક્ષ મૂકી ત્યારે જ દિવ્ય ગીતા પ્રગટ થઈ. તમારી મુશ્કેલી સ્પષ્ટ જણાવવાથી સચોટ માર્ગદર્શન મળશે.",
    practicalEverydayLesson:
      "તમારા મનની વર્તમાન સ્થિતિને ઓળખીને ચોક્કસ પ્રશ્ન પૂછો.",
    suggestedFollowUps: [
      "ક્રોધ પર નિયંત્રણ કેવી રીતે મેળવવું?",
      "પરીક્ષામાં નિષ્ફળતા આવે ત્યારે શું કરવું?",
      "ભવિષ્યની ચિંતામાંથી મુક્ત કેવી રીતે થવું?"
    ]
  }
};

// Intelligent semantic matcher function
export function getSemanticGuidance(question: string, lang: LanguageCode = 'en') {
  const qLower = question.toLowerCase().trim();

  // 1. Check for greeting / vague questions
  const vagueRegex = /^(hi|hello|hey|help|help me|namaste|salaam|guide me|who are you|gita|\?+)$/i;
  if (vagueRegex.test(qLower) || qLower.length < 4) {
    const clar = CLARIFICATION_RESPONSES[lang] || CLARIFICATION_RESPONSES.en;
    return {
      summary: clar.summary,
      scriptureReferences: [],
      teachingExplanation: clar.teachingExplanation,
      practicalEverydayLesson: clar.practicalEverydayLesson,
      suggestedFollowUps: clar.suggestedFollowUps,
      isAiGenerated: true,
      isClarification: true,
      language: lang,
    };
  }

  // 2. Score topics against keywords with priority for core emotional/domain nouns
  const DOMAIN_PRIORITY_KEYWORDS: Record<string, string[]> = {
    anger: [
      'anger', 'angry', 'rage', 'temper', 'krodh', 'ghussa', 'gussa', 'mad',
      'furious', 'irritat', 'ڪاوڙ', 'غص', 'غصہ', 'غصے', 'طیش', 'क्रोध', 'गुस्स',
      'गुस्सा', 'गुस्से', 'चिड़चिड़ा', 'கோப', 'கோபம்', 'ஆத்திரம்', 'ક્રોધ', 'ગુસ્સ', 'ગુસ્સો'
    ],
    exam_failure: [
      'exam', 'fail', 'failed', 'failure', 'flunk', 'test', 'grades', 'score',
      'marks', 'interview', 'rejected', 'rejection', 'defeat', 'lost',
      'ناکام', 'ناکامی', 'امتحان', 'ناڪام', 'ناڪامي', 'असफल', 'असफलता', 'फेल',
      'परीक्षा', 'परिक्षा', 'हार', 'தோல்வி', 'தேர்வு', 'பரீட்சை', 'નિષ્ફળ', 'નિષ્ફળતા', 'પરીક્ષા'
    ],
    future_worry: [
      'worry', 'worried', 'future', 'anxiety', 'anxious', 'overthinking', 'panic',
      'dread', 'uncertain', 'tomorrow', 'فکر', 'پریشان', 'پریشانی', 'پريشان',
      'پريشاني', 'مستقبل', 'चिंता', 'चिन्त', 'भविष्य', 'तनाव', 'घबराहट',
      'கவலை', 'எதிர்காலம்', 'பதற்றம்', 'ચિંતા', 'ભવિષ્ય', 'ગભરાટ'
    ],
    relationships_forgiveness: [
      'forgive', 'forgiveness', 'grudge', 'hate', 'relationship', 'partner',
      'husband', 'wife', 'betray', 'jealous', 'envy', 'friend', 'quarrel',
      'معاف', 'معافي', 'نفرت', 'حسد', 'تعلق', 'रिश्ते', 'क्षमा', 'ईर्ष्या', 'कड़वाहट',
      'द्वेष', 'மன்னிப்பு', 'உறவுகள்', 'பகை', 'கருணை', 'સંબંધ', 'ક્ષમા', 'દ્વેષ'
    ],
    loneliness_refuge: [
      'alone', 'lonely', 'loneliness', 'despair', 'hopeless', 'crying', 'grief',
      'nobody loves me', 'broken heart', 'تنہائی', 'اڪيلائي', 'مایوسی', 'غم',
      'خدا', 'अकेलापन', 'उदासी', 'शोक', 'ईश्वर', 'தனிமை', 'துன்பம்', 'சோகம்',
      'இறைவன்', 'અકેલાપણું', 'ઉદાસી', 'દુઃખ'
    ],
    mind_discipline: [
      'mind', 'restless', 'fickle', 'wandering', 'distract', 'distraction',
      'discipline', 'habit', 'lazy', 'laziness', 'procrastinat', 'meditat',
      'willpower', 'concentration', 'من', 'ذهن', 'دماغ', 'سستی', 'मन', 'ध्यान',
      'एकाग्रता', 'आलस्य', 'ஆழ்மனம்', 'மனம்', 'கவனம்', 'મન', 'ધ્યાન', 'આળસ'
    ],
  };

  let bestMatch: SemanticWisdomItem | null = null;
  let bestScore = 0;

  for (const topic of SEMANTIC_TOPICS) {
    let score = 0;
    const priorityList = DOMAIN_PRIORITY_KEYWORDS[topic.topicId] || [];

    // Check primary domain keywords (weight 20)
    for (const pkw of priorityList) {
      if (qLower.includes(pkw.toLowerCase())) {
        score += 20;
      }
    }

    // Check secondary keywords
    for (const kw of topic.keywords) {
      if (qLower.includes(kw.toLowerCase())) {
        score += 3;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = topic;
    }
  }

  let matchedTopic = bestMatch;
  if (!matchedTopic || bestScore === 0) {
    if (/duty|work|action|career|job|karma/i.test(qLower)) {
      matchedTopic = SEMANTIC_TOPICS.find((t) => t.topicId === 'future_worry') || SEMANTIC_TOPICS[0];
    } else {
      matchedTopic = SEMANTIC_TOPICS.find((t) => t.topicId === 'mind_discipline') || SEMANTIC_TOPICS[0];
    }
  }

  const selectedVerse = VERIFIED_VERSES.find((v) => v.id === matchedTopic!.verseId) || VERIFIED_VERSES[0];
  const guidance = matchedTopic.guidanceByLang[lang] || matchedTopic.guidanceByLang.en;
  const verseTrans = selectedVerse.translations?.[lang];

  const translation = verseTrans?.translation || selectedVerse.englishTranslation;

  return {
    summary: guidance.shriKrishnasGuidance,
    scriptureReferences: [
      {
        chapter: selectedVerse.chapter,
        verse: selectedVerse.verse,
        sanskrit: selectedVerse.sanskrit,
        transliteration: selectedVerse.transliteration,
        translation: translation,
        context: selectedVerse.context,
        relevanceExplanation: guidance.relevanceExplanation,
      },
    ],
    teachingExplanation: guidance.relevanceExplanation,
    practicalEverydayLesson: guidance.practicalLifeLesson,
    suggestedFollowUps: guidance.suggestedFollowUps,
    isAiGenerated: true,
    language: lang,
  };
}
