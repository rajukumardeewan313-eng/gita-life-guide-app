import { Verse } from '../types';
import { LanguageCode } from './languages';

export const VERIFIED_VERSES: Verse[] = [
  {
    id: 'bg-2-47',
    chapter: 2,
    verse: 47,
    chapterTitleSanskrit: 'साङ्ख्ययोग (Sankhya Yoga)',
    chapterTitleEnglish: 'Yoga of Knowledge & Action',
    sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
    transliteration: "karmaṇy-evādhikāras te mā phaleṣhu kadāchana\nmā karma-phala-hetur bhūr mā te saṅgo 'stvakarmaṇi",
    wordMeanings: 'karmaṇi = in prescribed work; eva = only; adhikāraḥ = right; te = your; mā = not; phaleṣhu = in the fruits; kadāchana = at any time; mā = never; karma-phala-hetuḥ = cause of results; bhūḥ = be; mā = nor; te = your; saṅgaḥ = attachment; astu = let there be; akarmaṇi = to inaction.',
    englishTranslation: 'You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction.',
    context: 'Lord Krishna speaks to Arjuna on the battlefield of Kurukshetra when Arjuna is paralyzed by dread over outcomes, victories, and losses.',
    commentary: 'This is the foundational cornerstone of Karma Yoga (selfless action). Anxiety and stress arise when the mind obsessively fastens itself to an imagined future outcome that is never fully under our control. By pouring 100% of your energy into the craft and the present duty without mental obsession over praise, profit, or failure, your intellect remains peaceful and your efficiency maximizes.',
    practicalLesson: 'When overwhelmed by a deadline, exam, or career result: dedicate your effort completely to today’s task with deep craftsmanship. Consciously surrender the eventual outcome and let go of obsessive scorekeeping.',
    topics: ['stress', 'anxiety', 'work', 'duty', 'attachment', 'burnout', 'focus'],
    translations: {
      hi: {
        translation: 'तुम्हारा अधिकार केवल कर्म करने में है, उसके फलों में कभी नहीं। इसलिए तुम कर्मों के फल के हेतु मत बनो और तुम्हारी अकर्मण्यता (कर्म न करने) में भी आसक्ति न हो।',
        commentary: 'यह श्लोक निष्काम कर्मयोग का प्राण है। जब हम भविष्य के परिणाम की चिंता छोड़कर वर्तमान कार्य में पूर्ण मनोयोग लगाते हैं, तो मानसिक तनाव समाप्त हो जाता है और दक्षता चरम पर होती है।',
        practicalLesson: 'परीक्षा, काम या व्यवसाय के परिणाम की चिंता छोड़ें। आज के काम को पूरी ईमानदारी और लगन से करें। परिणाम का तनाव त्याग दें।',
        context: 'कुरुक्षेत्र के युद्धक्षेत्र में जब अर्जुन भविष्य के परिणामों से भयभीत होकर शस्त्र रख देते हैं, तब श्रीकृष्ण यह उपदेश देते हैं।',
      },
      ur: {
        translation: 'تمہیں صرف اپنے فرائض ادا کرنے کا حق ہے، ان کے ثمرات پر تمہارا کوئی اختیار نہیں۔ اپنے اعمال کے نتیجے کی نیت نہ رکھو، اور نہ ہی بے عملی کی طرف مائل ہو۔',
        commentary: 'یہ اشلوک بے غرض عمل کی بنیاد ہے۔ مستقبل کے انجانے نتائج کا خوف ذہن کو مفلوج کر دیتا ہے۔ جب انسان نتائج کی فکر چھوڑ کر موجودہ ذمہ داری کو پوری تندہی سے نبھاتا ہے تو باطنی سکون خود بخود ملتا ہے۔',
        practicalLesson: 'ملازمت، امتحان یا کاروبار میں نتائج کے بوجھ کو اپنے اعصاب پر سوار نہ کریں۔ آج کے کام کو پوری دیانت اور مہارت سے مکمل کریں۔',
        context: 'میدان کروکشیتر میں جب ارجن نتائج کے خوف سے بے بس ہو گیا تھا تب شری کرشن نے یہ لازوال سبق دیا۔',
      },
      sd: {
        translation: 'تنهنجو حق رڳو پنهنجو فرض نڀائڻ تي آهي، انهن جي نتيجن تي ڪڏهن به نه. ان ڪري نتيجن جي لالچ نه رک ۽ نه ئي وري بيڪار ويهڻ ۾ لڳاءُ ڪر.',
        commentary: 'هي اشلوڪ بي لوث خدمت ۽ ڪم جو سڀ کان وڏو راز آهي. اڻ ڏٺل نتيجن جو فڪر ذهن کي پريشان ڪندو آهي. بنا لالچ محنت سان ذهن کي سلامتي ملندي آهي.',
        practicalLesson: 'امتحان يا نوڪري جي نتيجن جو دٻاءُ ڇڏي اڄوڪي ڏينهن جي ڪم کي پنهنجي پوري ايمانداري سان پورو ڪريو.',
        context: 'ڪروڪشيتر جي ميدان تي ارجن جي فڪرمنديءَ کي ڏسي شري ڪرشن کيس هي پيغام ڏنو.',
      },
      ta: {
        translation: 'கடமையைச் செய்வதில் மட்டுமே உனக்கு உரிமை உண்டு; அதன் பலன்களில் ஒருபோதும் இல்லை. செயலின் பலனுக்கு நீ காரணமாகிவிடாதே; செயலின்மையிலும் பற்று கொள்ளாதே.',
        commentary: 'இது கர்ம யோகத்தின் மிக முக்கிய தத்துவம். எதிர்கால பலனைப் பற்றிய வீண் கவலை மன அமைதியைக் குலைக்கும். பலனில் பற்றின்றி கடமையை நேர்த்தியாக செய்வதே உயர்ந்த அமைதி தரும்.',
        practicalLesson: 'தேர்வு, வேலை அல்லது எதிர்காலம் குறித்த அச்சத்தை விட்டுவிட்டு, இன்றைய பணியில் முழு கவனத்தையும் அர்ப்பணியுங்கள்.',
        context: 'போர்க்களத்தில் எதிர்கால விளைவுகளை எண்ணி அர்ஜுனன் சோர்ந்து நின்றபோது ஸ்ரீகிருஷ்ணர் அருளிய உபதேசம்.',
      },
      gu: {
        translation: 'તમારો અધિકાર માત્ર કર્મ કરવામાં જ છે, તેના ફળમાં ક્યારેય નહીં. માટે તમે કર્મના ફળની આશા રાખનારા ન બનો અને કર્મ ન કરવામાં પણ આસક્તિ ન રાખો.',
        commentary: 'આ શ્લોક નિષ્કામ કર્મયોગનો મૂળ આધાર છે. જ્યારે મન પરિણામની ચિંતા છોડીને વર્તમાન કર્તવ્યમાં લીન થાય છે ત્યારે ચિંતા આપોઆપ શાંત થાય છે.',
        practicalLesson: 'પરીક્ષા કે નોકરીના પરિણામની વધુ પડતી ચિંતા છોડી, આજના કાર્યમાં સંપૂર્ણ એકાગ્રતા અને શ્રેષ્ઠતા દાખવો.',
        context: 'કુરુક્ષેત્રના રણમેદાનમાં અર્જુનની હતાશા દૂર કરવા શ્રીકૃષ્ણ ભગવાને આ ઉપદેશ આપ્યો.',
      },
    },
  },
  {
    id: 'bg-2-48',
    chapter: 2,
    verse: 48,
    chapterTitleSanskrit: 'साङ्ख्ययोग (Sankhya Yoga)',
    chapterTitleEnglish: 'Yoga of Knowledge & Action',
    sanskrit: 'योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥',
    transliteration: "yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya\nsiddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga uchyate",
    englishTranslation: 'Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure. Such equanimity of mind is called Yoga.',
    context: 'Defining true yoga not as bodily postures alone, but as mental poise amid life’s oscillating waves of victory and defeat.',
    commentary: 'Equanimity (samatvam) is defined as the authentic state of Yoga. A mind tossed by ecstasy at small wins and crushed by despair at temporary setbacks lives in constant volatility. True strength lies in remaining centered, observing both success and failure as passing teachers.',
    practicalLesson: 'Practice emotional stability: when something goes unexpectedly well today, remain humble; when an obstacle arrives, remain calm and ask "What does this teach me?" rather than spiraling.',
    topics: ['equanimity', 'balance', 'emotional-resilience', 'success', 'failure', 'stress'],
    translations: {
      hi: {
        translation: 'हे धनंजय! आसक्ति को त्यागकर, सिद्धि और असिद्धि (सफलता और असफलता) में समान भाव रखकर कर्तव्य कर्म करो। समता का यह भाव ही योग कहलाता है।',
        commentary: 'सच्चा योग केवल शारीरिक आसनों तक सीमित नहीं है, बल्कि जीवन के उतार-चढ़ाव में मन को स्थिर रखना ही समत्व योग है।',
        practicalLesson: 'जब सफलता मिले तो अहंकार न करें, और जब कोई बाधा आए तो विचलित न हों। मन की शांति को किसी भी परिस्थिति में न खोएं।',
        context: 'श्रीकृष्ण अर्जुन को समत्व योग की परिभाषा बताते हैं।',
      },
      ur: {
        translation: 'اے ارجن! کامیابی اور ناکامی کی ترغیب چھوڑ کر متوازن دل کے ساتھ اپنے فرائض انجام دو۔ اس ذہنی توازن اور برابری کو ہی یوگ کہتے ہیں۔',
        commentary: 'سچا توازن یہ ہے کہ کامیابی ملنے پر غرور نہ ہو اور ناکامی پر مایوسی نہ ہو۔ زندگی کے دونوں رخ انسان کے لیے سبق آموز ہیں۔',
        practicalLesson: 'جب کام اچھا ہو تو عاجزی اپنائیں، جب رکاوٹ آئے تو گھبرانے کے بجائے سوچیں کہ اس سے کیا سیکھنا ہے۔',
        context: 'شری کرشن ارجن کو ذہنی توازن کی اصل تعریف سمجھاتے ہیں۔',
      },
      sd: {
        translation: 'اي ارجن! ڪاميابي ۽ ناڪاميءَ جي ڳڻتي ڇڏي سڌي من سان پنهنجو ڪم ڪر. انهيءَ ذهني برابريءَ کي ئي يوگ چئبو آهي.',
        commentary: 'خوشي ۽ غم ۾ ساڳيو رهڻ سچي اندروني طاقت آهي. ننڍين خوشين تي آڪڙجڻ ۽ تڪليفن تي روئڻ مان نڪرڻ جو دڳ هي آهي.',
        practicalLesson: 'ڪم سٺو ٿئي ته نهٺائي رکو، رڪاوٽ اچي ته صبر سان منهن ڏيو.',
        context: 'شري ڪرشن ارجن کي ذهني سانت جو گر سيکاري ٿو.',
      },
      ta: {
        translation: 'அர்ஜுனா! பற்றினைத் துறந்து, வெற்றி தோல்விகளில் சமநிலை கொண்டு உன் கடமைகளைச் செய். இத்தகைய மன சமநிலையே யோகம் எனப்படுகிறது.',
        commentary: 'வெற்றியில் களிப்படையாமல், தோல்வியில் துவளாமல் உள்ளத்தை நடுநிலையாக வைப்பதே உண்மையான ஆன்மீக வலிமை.',
        practicalLesson: 'வாழ்வின் இன்ப துன்பங்களை சமமாக ஏற்றுக்கொள்ளும் மனப்பக்குவத்தை அன்றாடம் பழகுங்கள்.',
        context: 'சமநிலை கொண்ட மனமே யோகம் என்று கிருஷ்ணர் விளக்குகிறார்.',
      },
      gu: {
        translation: 'હે ધનંજય! આસક્તિ ત્યજીને, સફળતા અને નિષ્ફળતામાં સમભાવ રાખીને કર્તવ્ય કર્મ કર. આ સમત્વભાવ જ યોગ કહેવાય છે.',
        commentary: 'સાચો યોગ જીવનના સુખ-દુઃખમાં મનની સ્થિરતા જાળવવામાં છે. સમત્વથી જીવનમાં અખંડ શાંતિ રહે છે.',
        practicalLesson: 'સફળતા મળે ત્યારે નમ્ર રહો અને નિષ્ફળતામાં નિરાશ થયા વિના નવો માર્ગ શોધો.',
        context: 'શ્રીકૃષ્ણ અર્જુનને સમત્વ યોગની વ્યાખ્યા સમજાવે છે.',
      },
    },
  },
  {
    id: 'bg-2-62',
    chapter: 2,
    verse: 62,
    chapterTitleSanskrit: 'साङ्ख्ययोग (Sankhya Yoga)',
    chapterTitleEnglish: 'Yoga of Knowledge & Action',
    sanskrit: 'ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते।\nसङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते॥',
    transliteration: "dhyāyato viṣhayān puṁsaḥ saṅgas teṣhūpajāyate\nsaṅgāt sañjāyate kāmaḥ kāmāt krodho 'bhijāyate",
    englishTranslation: 'While contemplating the objects of the senses, a person develops attachment to them. From attachment desire arises, and from thwarted desire, anger blossoms forth.',
    context: 'Krishna maps out the step-by-step psychological cascade through which calm individuals lose control and succumb to rage.',
    commentary: 'Anger does not suddenly appear out of vacuum. It begins with idle dwelling of thought upon an external expectation or object. Constant replay turns into clinging attachment. When that expectation meets friction or obstruction, it instantly transforms into fiery anger.',
    practicalLesson: 'Catch irritation at its root: before anger explodes, notice what rigid expectation or attachment was challenged. Loosen the grip on needing everything to go exactly your way.',
    topics: ['anger', 'frustration', 'desire', 'triggers', 'mindfulness', 'psychology'],
    translations: {
      hi: {
        translation: 'इन्द्रियों के विषयों का बार-बार चिंतन करने वाले पुरुष की उनमें आसक्ति हो जाती है। आसक्ति से कामना (इच्छा) उत्पन्न होती है, और कामना में बाधा आने पर क्रोध उत्पन्न होता है।',
        commentary: 'क्रोध अचानक नहीं आता। जब हम किसी वस्तु या अपेक्षा पर बार-बार विचार करते हैं, तो उससे मोह बन जाता है। अपेक्षा पूरी न होने पर वह ज्वाला बनकर क्रोध का रूप ले लेती है।',
        practicalLesson: 'जब भी गुस्सा आने लगे, खुद से पूछें: मेरी किस जिद या अपेक्षा को ठेस लगी है? अपेक्षाओं का बोझ हल्का करें।',
        context: 'श्रीकृष्ण मानव मन में क्रोध के उत्पन्न होने की मनोवैज्ञानिक प्रक्रिया स्पष्ट करते हैं।',
      },
      ur: {
        translation: 'خواہشات اور لذتوں کا مسلسل دھیان انسان میں وابستگی پیدا کرتا ہے۔ وابستگی سے شدید چاہت جنم لیتی ہے، اور چاہت میں رکاوٹ پڑنے پر غصہ بھڑک اٹھتا ہے۔',
        commentary: 'غصہ اچانک نہیں آتا۔ کسی بات کی بار بار تکرار اور توقعات کا پورا نہ ہونا اندرونی طیش کا سبب بنتا ہے۔',
        practicalLesson: 'غصے کے پھٹنے سے پہلے جائزہ لیں کہ میری کس ضدی خواہش میں رکاوٹ آئی ہے۔ نرمی کا دامن تھامیں۔',
        context: 'شری کرشن غصے کی نفسیاتی ابتدا اور اس کے اسباب پر روشنی ڈالتے ہیں۔',
      },
      sd: {
        translation: 'شين ۽ خواهشن جو هر وقت سوچڻ سان لڳاءُ پيدا ٿئي ٿو، لڳاءُ مان اڻ کٽ خواهش ۽ اها پوري نه ٿيڻ تي ڪاوڙ ڀڙڪي اٿندي آهي.',
        commentary: 'ڪاوڙ اوچتو ناهي ايندي، اها ضدي خواهشن ۽ اميدن جي ٽٽڻ جو نتيجو هوندي آهي.',
        practicalLesson: 'ڪاوڙ اچڻ وقت پنهنجي ضد کي پرکيو ۽ صبر سان پنهنجي ذهن کي ٿڌو ڪريو.',
        context: 'ڪاوڙ پيدا ٿيڻ جي اندروني وجوهات جو بيان.',
      },
      ta: {
        translation: 'புலன் நுகர்வுப் பொருட்களைப் பற்றி தொடர்ந்து சிந்திப்பவனுக்கு அவற்றில் பற்று உண்டாகிறது; பற்றிலிருந்து ஆசை பிறக்கிறது; ஆசை தடைபடும் போது கோபம் எழுகிறது.',
        commentary: 'கோபம் திடீரென தோன்றுவதில்லை. நிறைவேறாத ஆசைகளும் பிடிவாதங்களுமே கோபமாக மாறுகின்றன.',
        practicalLesson: 'கோபம் தலைதூக்கும் போதே, உங்கள் பிடிவாதமான எதிர்பார்ப்பை தளர்த்திக் கொள்ளுங்கள்.',
        context: 'மனித உள்ளத்தில் கோபம் பிறக்கும் உளவியல் வழியை பகவான் எடுத்துரைக்கிறார்.',
      },
      gu: {
        translation: 'વિષયોનું સતત ચિંતન કરવાથી તેમાં આસક્તિ જન્મે છે. આસક્તિમાંથી કામના પ્રગટે છે અને કામનામાં અડચણ આવતાં ક્રોધ પેદા થાય છે.',
        commentary: 'ક્રોધ અચાનક નથી આવતો. કોઈ અપેક્ષા કે જીદ જ્યારે તૂટે છે ત્યારે તે ક્રોધ બનીને ફૂટી નીકળે છે.',
        practicalLesson: 'ગુસ્સો આવે તે પહેલાં મનની જીદને ઓળખીને અપેક્ષાઓ હળવી કરો.',
        context: 'શ્રીકૃષ્ણ મનમાં ક્રોધ ઉત્પન્ન થવાની મનોવૈજ્ઞાનિક પ્રક્રિયા સમજાવે છે.',
      },
    },
  },
  {
    id: 'bg-2-63',
    chapter: 2,
    verse: 63,
    chapterTitleSanskrit: 'साङ्ख्ययोग (Sankhya Yoga)',
    chapterTitleEnglish: 'Yoga of Knowledge & Action',
    sanskrit: 'क्रोधाद्भवति संमोहः संमोहात्स्मृतिविभ्रमः।\nस्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥',
    transliteration: "krodhād bhavati sammohaḥ sammohāt smṛiti-vibhramaḥ\nsmṛiti-bhraṁśhād buddhi-nāśho buddhi-nāśhāt praṇaśhyati",
    englishTranslation: 'From anger arises delusion; from delusion comes confusion of memory; from confusion of memory comes loss of intellect (reason); and from loss of intellect, a person is ruined.',
    context: 'The sequential anatomy of self-destruction that follows uncontrolled wrath.',
    commentary: 'When anger strikes, perceptual delusion sets in: right and wrong blur. Past lessons, core values, and gratitude are forgotten in the heat of the moment. The reasoning intellect (buddhi) shuts down, leading to regretful words or destructive acts.',
    practicalLesson: 'Never send an email, speak harsh words, or make an important life decision while angry. Institute a mandatory 15-minute cooling pause: breathe deeply and let your higher intellect reboot.',
    topics: ['anger', 'regret', 'decision-making', 'clarity', 'self-control', 'arguments'],
    translations: {
      hi: {
        translation: 'क्रोध से सम्मोह (मूढ़ता) उत्पन्न होता है, सम्मोह से स्मृति भ्रमित होती है, स्मृति के भ्रम से बुद्धि (विवेक) नष्ट हो जाती है, और बुद्धि नष्ट होने से मनुष्य का सर्वनाश हो जाता है।',
        commentary: 'क्रोध मनुष्य के सोचने-समझने की शक्ति को अंधा कर देता है। क्रोध में बोले गए कटु वचन और लिए गए निर्णय जीवनभर के पश्चाताप का कारण बनते हैं।',
        practicalLesson: 'क्रोध की स्थिति में कभी कोई महत्वपूर्ण निर्णय न लें, न ही कटु शब्द बोलें। शांत होकर १५ मिनट का विराम लें।',
        context: 'क्रोध से होने वाले नैतिक और मानसिक पतन की शृंखला का निरूपण।',
      },
      ur: {
        translation: 'غصے سے عقل پر پردہ پڑ جاتا ہے، بے خبری سے یادداشت معطل ہو جاتی ہے، یادداشت کھو جانے سے بصیرت تباہ ہو جاتی ہے، اور بصیرت کے خاتمے سے انسان برباد ہو جاتا ہے۔',
        commentary: 'غصے کے زیر اثر انسان اپنے پیاروں کی عزت اور پرانے احسانات بھول کر خود اپنے تعلقات برباد کر بیٹھتا ہے۔',
        practicalLesson: 'غصے کی حالت میں فوری جواب نہ دیں اور نہ ہی کوئی بڑا فیصلہ کریں۔ چند لمحے گہرے سانس لیں اور سکوت اختیار کریں۔',
        context: 'غصے کے نتیجے میں عقل کے زوال کی سیڑھی کا بیان۔',
      },
      sd: {
        translation: 'ڪاوڙ مان عقل کي انڌو لڳندو آهي، جنهن سان چڱي مٺي جي سڃاڻپ ختم ٿي وڃي ٿي ۽ انسان پنهنجو پاڻ تباهه ڪري ويهندو آهي.',
        commentary: 'ڪاوڙ عقل جي سمجهه ختم ڪري ڇڏيندي آهي، جنهن سان سڀ پيارا رشتا تڪليف ڏسندا آهن.',
        practicalLesson: 'ڪاوڙ ۾ ڪو فيصلو نه ڪريو، ٿڌا پاڻي جو ڍڪ ڀري خاموشي اختيار ڪريو.',
        context: 'ڪاوڙ جا نقصان ۽ تباهيءَ کان بچڻ جو نصيحت.',
      },
      ta: {
        translation: 'கோபத்தால் மதிமயக்கம் உண்டாகிறது; மதிமயக்கத்தால் நினைவாற்றல் குழம்புகிறது; நினைவாற்றல் அழிவதால் புத்தி அழிகிறது; புத்தி அழிவால் மனிதன் முற்றிலும் அழிகிறான்.',
        commentary: 'கோபத்தில் சிந்தனை திறன் முற்றிலும் மறைந்துவிடுகிறது. அத்தருணத்தில் எடுக்கப்படும் முடிவுகள் பெருந்துன்பத்தை விளைவிக்கும்.',
        practicalLesson: 'கோபம் வரும் போது எவரிடமும் கடுமையான சொற்களைப் பேசாதீர்கள்; 15 நிமிடம் அமைதியாக இருங்கள்.',
        context: 'கோபத்தினால் ஏற்படும் பேரழிவின் படிநிலைகள்.',
      },
      gu: {
        translation: 'ક્રોધથી મોહ પેદા થાય છે, મોહથી સ્મૃતિ ભ્રષ્ટ થાય છે, સ્મૃતિ ભ્રષ્ટ થતાં બુદ્ધિનો નાશ થાય છે અને બુદ્ધિનો નાશ થતાં મનુષ્ય નષ્ટ થઈ જાય છે.',
        commentary: 'ક્રોધના આવેશમાં સારા-નરસાનો વિવેક નાશ પામે છે. ક્રોધમાં બોલાયેલા શબ્દો સંબંધોમાં કાયમી તિરાડ પાડે છે.',
        practicalLesson: 'ગુસ્સામાં કોઈ મોટો નિર્ણય ન લો. થોડી મિનિટો મૌન રહી મનને શાંત થવા દો.',
        context: 'ક્રોધથી થતા વિનાશનું સ્પષ્ટ વર્ણન.',
      },
    },
  },
  {
    id: 'bg-6-5',
    chapter: 6,
    verse: 5,
    chapterTitleSanskrit: 'ध्यानयोग (Dhyana Yoga)',
    chapterTitleEnglish: 'Yoga of Meditation',
    sanskrit: 'उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥',
    transliteration: "uddhared ātmanātmānaṁ nātmānam avasādayet\nātmaiva hyātmano bandhur ātmaiva ripur ātmanaḥ",
    englishTranslation: 'Elevate yourself through the power of your own mind, and do not degrade yourself. For the mind alone is one’s friend, and the mind alone is one’s enemy.',
    context: 'Krishna reveals that our own psyche can either be our greatest ally or our harshest adversary.',
    commentary: 'No external person can harm us as severely as an undisciplined, self-sabotaging mind filled with doubt, negative self-talk, and fear. Equally, a trained, uplifted mind becomes our most steadfast protector and creative guide.',
    practicalLesson: 'Become conscious of your internal dialogue today. Stop self-berating thoughts; speak to yourself with patient discipline, like a compassionate coach.',
    topics: ['mindset', 'self-love', 'mental-health', 'discipline', 'negative-thoughts', 'confidence'],
    translations: {
      hi: {
        translation: 'अपने द्वारा अपना उद्धार करे, अपना पतन न होने दे; क्योंकि यह मन ही अपना मित्र है और यह मन ही अपना शत्रु है।',
        commentary: 'कोई दूसरा व्यक्ति हमें उतना नुकसान नहीं पहुंचा सकता जितना हमारा अनियंत्रित मन। जब मन वश में होता है तो सबसे सच्चा मित्र बन जाता है।',
        practicalLesson: 'नकारात्मक विचारों से बचें। खुद को कोसने के बजाय एक अच्छे मार्गदर्शक की तरह धैर्यपूर्वक आगे बढ़ें।',
        context: 'श्रीकृष्ण मन की शक्ति और आत्म-उत्थान का मार्ग बताते हैं।',
      },
      ur: {
        translation: 'اپنے ذہن کی طاقت سے خود کو بلندی پر لے جاؤ اور کبھی خود کو ذلیل نہ کرو، کیونکہ ذہن ہی انسان کا بہترین دوست ہے اور ذہن ہی بدترین دشمن ہے۔',
        commentary: 'منفی خیالات اور خود پر شک کرنا انسان کو اندر سے کھوکھلا کر دیتا ہے۔ تربیت یافتہ ذہن زندگی کا سب سے بڑا سہارا ہے۔',
        practicalLesson: 'اپنے اندر کی منفی گفتگو پر نظر رکھیں۔ خود کو حوصلہ دیں اور پرامید رہیں۔',
        context: 'شری کرشن خود اعتمادی اور باطنی ترقی کا گر سکھاتے ہیں۔',
      },
      sd: {
        translation: 'پنهنجي ذهن جي وسيلي پنهنجو پاڻ سنواريو ۽ پاڻ کي هيٺ نه ڪيرايو، ڇو ته من ئي سڀ کان وڏو دوست ۽ من ئي بدترين دشمن آهي.',
        commentary: 'انسان جو پنهنجو من ئي کيس اونچائي يا تباهيءَ طرف وٺي ويندو آهي.',
        practicalLesson: 'پنهنجي ذهن کي همٿ ۽ سٺي فڪر سان ڀريو ۽ مايوسيءَ کي ويجهو نه اچڻ ڏيو.',
        context: 'من جي قابو ۽ سچي طاقت جو بيان.',
      },
      ta: {
        translation: 'தன்னைத்தானே உயர்த்திக் கொள்ள வேண்டும்; தன்னைத் தாழ்த்திக் கொள்ளக் கூடாது. ஏனென்றால் மனம் மட்டுமே ஒருவனுக்கு உற்ற நண்பன், மனமே அவனுக்குப் பரம எதிரி.',
        commentary: 'நமது எதிர்மறை எண்ணங்களே நமக்கு பெரும் துன்பத்தைத் தருகின்றன. கட்டுப்படுத்தப்பட்ட மனமே வாழ்வின் சிறந்த வழிகாட்டி.',
        practicalLesson: 'சுயநம்பிக்கையை வளர்த்துக் கொள்ளுங்கள். உங்கள் மனதை ஆக்கப்பூர்வமான நற்பணிகளில் திருப்புங்கள்.',
        context: 'மனதின் சக்தியால் தன்னை உயர்த்திக் கொள்ளும் வழியை கிருஷ்ணர் போதிக்கிறார்.',
      },
      gu: {
        translation: 'પોતાના દ્વારા પોતાનો ઉદ્ધાર કરવો, પોતાનું પતન ન થવા દેવું; કારણ કે મન જ પોતાનો મિત્ર છે અને મન જ પોતાનો શત્રુ છે.',
        commentary: 'સંયમિત મન જીવનમાં સફળતા અપાવે છે, જ્યારે અસંયમિત મન વિપત્તિનું કારણ બને છે.',
        practicalLesson: 'નકારાત્મક વિચારોથી દૂર રહો અને મનને મિત્ર બનાવી જીવનને પ્રગતિના પંથે વાળો.',
        context: 'શ્રીકૃષ્ણ મનની શક્તિ અને આત્મ-ઉદ્ધારનો માર્ગ બતાવે છે.',
      },
    },
  },
  {
    id: 'bg-6-35',
    chapter: 6,
    verse: 35,
    chapterTitleSanskrit: 'ध्यानयोग (Dhyana Yoga)',
    chapterTitleEnglish: 'Yoga of Meditation',
    sanskrit: 'असंशयं महाबाहो मनो दुर्निग्रहं चलम्।\nअभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते॥',
    transliteration: "asaṁśhayaṁ mahā-bāho mano durnigrahaṁ chalam\nabhyāsena tu kaunteya vairāgyeṇa cha gṛihyate",
    englishTranslation: 'Lord Krishna said: Without doubt, O mighty-armed one, the mind is fickle and hard to restrain. But by persistent practice (abhyasa) and detachment (vairagya), it can be brought under control.',
    context: 'Krishna’s twin formula for psychological mastery and peace.',
    commentary: 'Krishna validates Arjuna’s dilemma but provides the solution: Abhyasa (repeated positive practice) and Vairagya (dispassion/letting go of fleeting trivialities). You train the mind like training a muscle through consistent reps and pruning away mental clutter.',
    practicalLesson: 'Commit to twin daily practices: 1) Five minutes of quiet breath contemplation (Abhyasa), and 2) Consciously saying no to one needless distraction (Vairagya).',
    topics: ['discipline', 'practice', 'detachment', 'consistency', 'mental-mastery'],
    translations: {
      hi: {
        translation: 'श्री भगवान बोले: हे महाबाहो! इसमें तनिक भी संदेह नहीं कि मन चंचल और कठिनता से वश में होने वाला है, परंतु हे कुन्तीपुत्र! अभ्यास और वैराग्य से इसे वश में किया जा सकता है।',
        commentary: 'मन की चंचलता स्वाभाविक है। अभ्यास (लगातार प्रयास) और वैराग्य (व्यर्थ बातों से विरक्ति) ये दो चाबियां हैं जिनसे मन शांत होता है।',
        practicalLesson: 'मन भटके तो निराश न हों। प्रतिदिन ५ मिनट ध्यान का अभ्यास करें और व्यर्थ की चिंताओं से मन हटाएं।',
        context: 'अर्जुन द्वारा मन को वश में करने की कठिनाई व्यक्त करने पर श्रीकृष्ण का समाधान।',
      },
      ur: {
        translation: 'شری بھگوان نے فرمایا: اے ارجن! بیشک ذہن چنچل اور قابو میں لانے میں بے حد مشکل ہے، مگر مسلسل ریاضت اور بے رغبتی سے اسے قابو کیا جا سکتا ہے۔',
        commentary: 'بے چین ذہن کو تربیت دینا ورزش کی طرح ہے۔ روزانہ کی ریاضت اور فضول باتوں سے پرہیز ذہن کو پرسکون بنا دیتا ہے۔',
        practicalLesson: 'روزانہ چند منٹ پرسکون مراقبہ کریں اور ایک غیر ضروری دباؤ کو شعوری طور پر خود سے دور کریں۔',
        context: 'شری کرشن بے چین ذہن پر قابو پانے کا دوہرا طریقہ بتاتے ہیں۔',
      },
      sd: {
        translation: 'شري ڪرشن فرمايو: اي ارجن! بنا شڪ جي من چنچل ۽ قابو ڪرڻ ڏکيو آهي، پر لڳاتار مشق ۽ فڪرن کي ڇڏڻ سان هي ضابطي ۾ اچي سگهي ٿو.',
        commentary: 'مسلسل مشق ۽ بي فائدو ڳالهين کان پري رهڻ سان ئي من سڌي رستي تي هلندو آهي.',
        practicalLesson: 'روزانو خاموش ويهي ساهه کڻڻ جي مشق ڪريو ۽ گهڻي فڪر کان پاسو ڪريو.',
        context: 'شري ڪرشن بي چين من تي ضابطي جو نسخو پيش ڪري ٿو.',
      },
      ta: {
        translation: 'பகவான் கூறினார்: அர்ஜுனா! மனம் சஞ்சலமானது, அடக்கக் கடினமானது என்பதில் ஐயமில்லை; ஆனால் பயிற்சியினாலும் பற்றின்மையினாலும் அதை அடக்க முடியும்.',
        commentary: 'தொடர் பயிற்சியும் (அப்பியாசம்) தேவையற்ற ஆசைகளை விடுதலும் (வைராக்கியம்) மனதை வசப்படுத்தும் எளிய வழிகள்.',
        practicalLesson: 'தினமும் சிறிது நேரம் அமைதியாக அமர்ந்து சுவாசத்தை கவனியுங்கள்; கவனச்சிதறல்களை தவிருங்கள்.',
        context: 'அலைபாயும் மனதை அடக்க கிருஷ்ணர் காட்டும் இரட்டை உபாயம்.',
      },
      gu: {
        translation: 'શ્રી ભગવાને કહ્યું: હે મહાબાહો! નિઃસંદેહ મન ચંચળ અને વશમાં કરવું કઠિન છે, પરંતુ હે કૌંતેય! અભ્યાસ અને વૈરાગ્યથી તેને વશ કરી શકાય છે.',
        commentary: 'મનનું ભટકવું સ્વાભાવિક છે. સતત અભ્યાસ અને નકામી બાબતો પ્રત્યે અનાસક્તિથી મન સ્થિર બને છે.',
        practicalLesson: 'દરરોજ થોડો સમય મનને શાંત રાખવાનો અભ્યાસ કરો અને બિનજરૂરી ચિંતાઓ છોડો.',
        context: 'શ્રીકૃષ્ણ ચંચળ મનને વશ કરવાનો ઉપાય જણાવે છે.',
      },
    },
  },
  {
    id: 'bg-12-13',
    chapter: 12,
    verse: 13,
    chapterTitleSanskrit: 'भक्तियोग (Bhakti Yoga)',
    chapterTitleEnglish: 'Yoga of Devotion',
    sanskrit: 'अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च।\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी॥',
    transliteration: "adveṣhṭā sarva-bhūtānāṁ maitraḥ karuṇa eva cha\nnirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣhamī",
    englishTranslation: 'One who does not hate any living being, who is friendly and compassionate, free from possessiveness and false ego, equal in sorrow and joy, and forgiving — such a devotee is very dear to Me.',
    context: 'The divine qualities that foster deep inner harmony and beloved relationships.',
    commentary: 'Spiritual maturity shines through interpersonal kindness. Hatred burns the vessel in which it is stored first. Approaching all beings with compassion (karuna), goodwill (maitra), and a forgiving heart (kshami) dissolves resentment.',
    practicalLesson: 'Let go of a lingering grudge today. Forgive someone who may have spoken thoughtlessly, not because they necessarily deserve it, but because your inner peace deserves freedom.',
    topics: ['forgiveness', 'relationships', 'compassion', 'kindness', 'ego', 'peace'],
    translations: {
      hi: {
        translation: 'जो किसी भी प्राणी से द्वेष नहीं करता, जो सबका मित्र और दयालु है, जो ममता और अहंकार से मुक्त है, सुख-दुःख में सम रहता है और क्षमाशील है — वह मुझे अति प्रिय है।',
        commentary: 'द्वेष मनुष्य को भीतर से जलाता है। सभी जीवों के प्रति दया, विनम्रता और क्षमा भाव ही व्यक्ति को सच्चा शांतिदूत बनाता है।',
        practicalLesson: 'आज किसी पुराने गिले-शिकवे को भुला दें। किसी को दिल से क्षमा करें ताकि आपका अपना हृदय हल्का हो सके।',
        context: 'श्रीकृष्ण अपने प्रिय भक्त के सद्गुणों का वर्णन करते हैं।',
      },
      ur: {
        translation: 'جو کسی جاندار سے کینہ نہیں رکھتا، سب کا دوست اور رحمدل ہے، خود غرضی اور تکبر سے پاک ہے، رنج و راحت میں برابر رہتا ہے اور معاف کرنے والا ہے — وہ مجھے بے حد پیارا ہے۔',
        commentary: 'نفرت سب سے پہلے خود انسان کے سکون کو نگل جاتی ہے۔ معاف کرنا اور رحم دلی اپنانا روح کو آزاد کر دیتا ہے۔',
        practicalLesson: 'کسی پرانی رنجش کو آج دل سے مٹا دیں۔ معاف کر دیں تاکہ آپ کا دل ہلکا اور مطمئن ہو جائے۔',
        context: 'شری کرشن خدا کے محبوب بندے کی صفات بیان فرماتے ہیں۔',
      },
      sd: {
        translation: 'جيڪو ڪنهن سان دشمني نه ٿو رکي، سڀني جو سڄڻ ۽ ٻاجهارو آهي، هٺ ۽ وڏائي کان پاڪ آهي، ڏک سک ۾ هڪجهڙو ۽ معاف ڪندڙ آهي — اهو مون کي تمام پيارو آهي.',
        commentary: 'ٻين لاءِ پيار ۽ رحم دلي ئي انسان کي خدا جو پيارو بڻائيندي آهي.',
        practicalLesson: 'اڄ ڪنهن پراني ناراضپي کي وساري ڇڏيو ۽ دل سان معافي ڏيو.',
        context: 'سچا انسان جا پاڪ گڻ ۽ رشتن ۾ پيار جو درس.',
      },
      ta: {
        translation: 'எந்த உயிரையும் வெறுக்காதவன், அனைவரிடமும் நட்பும் கருணையும் கொண்டவன், ‘எனது’ என்ற பற்றும் அகந்தையும் அற்றவன், இன்ப துன்பங்களில் சமநிலை வகிப்பவன், மன்னிக்கும் குணம் கொண்டவன் எனக்கு மிகவும் பிரியமானவன்.',
        commentary: 'பகைமையும் வெறுப்பும் நம் மன அமைதியைத் தாக்கும் நஞ்சாகும். மன்னிக்கும் பண்பே ஆன்மாவின் அழகு.',
        practicalLesson: 'மனதில் உள்ள பழைய மனக்கசப்புகளை அகற்றுங்கள்; பிறரை மன்னித்து அமைதி பெறுங்கள்.',
        context: 'இறைவனுக்குப் பிரியமான பக்தனின் தெய்வீக குணங்கள்.',
      },
      gu: {
        translation: 'જે કોઈ જીવ પ્રત્યે દ્વેષ રાખતો નથી, સૌનો મિત્ર અને દયાળુ છે, મમતા અને અહંકારથી રહિત છે, સુખ-દુઃખમાં સમાન અને ક્ષમાશીલ છે — તે મને અતિ પ્રિય છે.',
        commentary: 'દ્વેષ રહિત જીવન જ સાચી શાંતિનું મૂળ છે. ક્ષમાભાવથી સંબંધો મધુર બને છે.',
        practicalLesson: 'કોઈની ભૂલને ક્ષમા કરી મનનો ભાર હળવો કરો.',
        context: 'શ્રીકૃષ્ણ પ્રભુના પ્રિય ભક્તનાં ઉત્તમ લક્ષણો જણાવે છે.',
      },
    },
  },
  {
    id: 'bg-18-65',
    chapter: 18,
    verse: 65,
    chapterTitleSanskrit: 'मोक्षसंन्यासयोग (Moksha Sannyasa Yoga)',
    chapterTitleEnglish: 'Yoga of Liberation by Renunciation',
    sanskrit: 'मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।\nमामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे॥',
    transliteration: "man-manā bhava mad-bhakto mad-yājī māṁ namaskuru\nmām evaiṣhyasi satyaṁ te pratijāne priyo 'si me",
    englishTranslation: 'Always fix your mind on Me, become My devotee, worship Me, and offer your homage unto Me. Thus you will come to Me without fail. Truly do I promise you, for you are dearly loved by Me.',
    context: 'The ultimate comforting proclamation of love and refuge at the conclusion of the Gita.',
    commentary: 'Sri Krishna offers the deepest consolation to the human soul: you are never alone or forsaken. You are dearly cherished by the Divine. Living life with reverent remembrance transforms every task into a sacred celebration.',
    practicalLesson: 'Begin and end your day taking a minute to remember that you are held in divine care. Let that assurance melt loneliness and ground your self-worth.',
    topics: ['love', 'devotion', 'comfort', 'loneliness', 'peace', 'refuge'],
    translations: {
      hi: {
        translation: 'मुझमें मन लगाओ, मेरे भक्त बनो, मेरा पूजन करो और मुझे प्रणाम करो। ऐसा करने से तुम मुझे ही प्राप्त होओगे — यह मैं तुमसे सत्य प्रतिज्ञा करता हूँ, क्योंकि तुम मुझे अति प्रिय हो।',
        commentary: 'यह गीता का सबसे आश्वस्तकारी वचन है। हम कभी अकेले नहीं हैं। परमात्मा का प्रेम और संरक्षण सदा हमारे साथ है।',
        practicalLesson: 'दिन की शुरुआत और अंत में एक क्षण याद रखें कि आप ईश्वरीय कृपा के साए में हैं। अकेलापन मिट जाएगा।',
        context: 'गीता के उपसंहार में श्रीकृष्ण का परम प्रेम और आश्वासन।',
      },
      ur: {
        translation: 'اپنے ذہن کو مجھ سے وابستہ رکھو، میری عقیدت اختیار کرو اور عاجزی سے جھکو؛ تم یقیناً مجھ تک پہنچو گے، یہ میرا سچا وعدہ ہے کیونکہ تم مجھے بہت عزیز ہو۔',
        commentary: 'یہ کلام انسان کی تنہائی اور خوف کا مداوا ہے۔ خالق کی محبت اور پناہ ہر مایوسی پر فتح حاصل کر لیتی ہے۔',
        practicalLesson: 'جب بھی خود کو تنہا محسوس کریں تو یاد رکھیں کہ آپ کبھی تنہا نہیں ہیں۔ مالک کی محبت آپ کے ساتھ ہے۔',
        context: 'گیتا کے اختتام پر شری کرشن کا محبت اور تحفظ کا سچا وعدہ۔',
      },
      sd: {
        translation: 'پنهنجو من مون سان لڳاءِ، منهنجو پيارو بن ۽ عاجزي اختيار ڪر؛ تون سچ پچ مون کي ماڻيندين، هي منهنجو پڪو واعدو آهي ڇو ته تون مون کي تمام پيارو آهين.',
        commentary: 'هي لفظ انسان جي اندروني اڪيلائي ۽ فڪرن کي ختم ڪن ٿا.',
        practicalLesson: 'خدا جي پيار کي دل ۾ ياد رکو ۽ سدائين مثبت رهو.',
        context: 'گيتا جي پڄاڻي تي سچي پيار ۽ تسليم جو سڏ.',
      },
      ta: {
        translation: 'உன் மனதை என்னிடம் நிலைநிறுத்து, என் பக்தனாக இரு, என்னை வழிபடு, என்னை வணங்கு; நீ நிச்சயமாக என்னை அடைவாய். இது உனக்கு என் சத்திய வாக்கு; ஏனெனில் நீ எனக்கு மிகவும் அன்பானவன்.',
        commentary: 'கீதையின் முடிவில் இறைவன் தரும் மாபெரும் ஆறுதல் இதுவே. நாம் ஒருபோதும் அனாதைகள் அல்ல; அவனது கருணை நம்மை காக்கிறது.',
        practicalLesson: 'தனிமையை உணரும் தருணங்களில் இறைவனின் பேரன்பை நினைத்து தைரியம் கொள்ளுங்கள்.',
        context: 'கீதையின் முடிவில் கிருஷ்ணர் தரும் பாசமிகு வாக்குறுதி.',
      },
      gu: {
        translation: 'મારામાં મન પરોવો, મારા ભક્ત બનો, મારું પૂજન કરો અને મને પ્રણામ કરો. આમ કરવાથી તમે મને જ પ્રાપ્ત થશો — આ હું સત્ય પ્રતિજ્ઞા કરું છું, કારણ કે તમે મને અતિ પ્રિય છો.',
        commentary: 'આ ગીતાનું સૌથી હૂંફાળું આશ્વાસન છે કે પરમાત્માનો પ્રેમ સદાય આપણી સાથે છે.',
        practicalLesson: 'રોજ સવારે અને રાત્રે ઈશ્વરનું સ્મરણ કરી મનમાં નવી શ્રદ્ધા અને શાંતિ અનુભવો.',
        context: 'ગીતાના ઉપસંહારમાં શ્રીકૃષ્ણનો સ્નેહ અને વચન.',
      },
    },
  },
];

export const TOPIC_CATEGORIES = [
  { id: 'all', label: 'All Verses', icon: 'Sparkles' },
  { id: 'stress', label: 'Stress & Anxiety', icon: 'CloudRain' },
  { id: 'anger', label: 'Anger & Frustration', icon: 'Flame' },
  { id: 'discipline', label: 'Focus & Self-Control', icon: 'Target' },
  { id: 'duty', label: 'Work & Purpose', icon: 'Briefcase' },
  { id: 'relationships', label: 'Kindness & Forgiveness', icon: 'Heart' },
  { id: 'resilience', label: 'Courage & Faith', icon: 'Shield' },
];

export function getVerseOfTheDay(): Verse {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime() + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const index = Math.abs(dayOfYear) % VERIFIED_VERSES.length;
  return VERIFIED_VERSES[index];
}

export function getVerseByChapterAndVerse(chapter: number, verse: number): Verse | undefined {
  return VERIFIED_VERSES.find((v) => v.chapter === chapter && v.verse === verse);
}

export function searchVerifiedVerses(query: string, category: string = 'all', lang: LanguageCode = 'en'): Verse[] {
  let filtered = VERIFIED_VERSES;

  if (category !== 'all') {
    filtered = filtered.filter(
      (v) =>
        v.topics.includes(category) ||
        (category === 'resilience' &&
          (v.topics.includes('courage') || v.topics.includes('faith') || v.topics.includes('overcoming-adversity'))) ||
        (category === 'relationships' &&
          (v.topics.includes('forgiveness') || v.topics.includes('relationships') || v.topics.includes('compassion')))
    );
  }

  if (!query.trim()) return filtered;

  const q = query.toLowerCase();
  return filtered.filter((v) => {
    const langTrans = v.translations?.[lang];
    return (
      v.chapter.toString().includes(q) ||
      v.verse.toString().includes(q) ||
      `chapter ${v.chapter}`.includes(q) ||
      `verse ${v.verse}`.includes(q) ||
      v.sanskrit.toLowerCase().includes(q) ||
      v.transliteration.toLowerCase().includes(q) ||
      v.englishTranslation.toLowerCase().includes(q) ||
      v.commentary.toLowerCase().includes(q) ||
      v.practicalLesson.toLowerCase().includes(q) ||
      (langTrans && (
        langTrans.translation.toLowerCase().includes(q) ||
        (langTrans.commentary && langTrans.commentary.toLowerCase().includes(q)) ||
        (langTrans.practicalLesson && langTrans.practicalLesson.toLowerCase().includes(q))
      )) ||
      v.topics.some((t) => t.toLowerCase().includes(q))
    );
  });
}
