// 6-sinf Tabiiy Fanlar - 25 ta Interaktiv Kengaytirilgan Mavzular Malumotlar Bazasi
const TOPICS_DATA = [
  {
    "id": 1,
    "num": 1,
    "title": "Ratsional ovqatlanish",
    "slug": "mavzu-1-ratsional-ovqatlanish.html",
    "cat": "Biologiya",
    "icon": "🥗",
    "duration": "15 daqiqa",
    "description": "To'g'ri va muvozanatli ovqatlanish qoidalari, oziq moddalar (oqsillar, yog'lar, uglevodlar, vitaminlar va minerallar) va sog'lom turmush tarzi.",
    "fullTheory": "Ratsional ovqatlanish (lotincha 'rationalis' — oqilona, hisoblangan) — bu inson organizmining yoshiga, jinsiga, jismoniy faolligiga va iqlim sharoitiga mos ravishda energiya va plastik ehtiyojlarini to'liq qondiradigan ovqatlanish tartibidir. Kunlik ratsionda oqsillar 15-20%, yog'lar 25-30% va uglevodlar 50-60% nisbatda bo'lishi tavsiya etiladi. Suv esa tana massasining 60-70% ini tashkil qiladi va barcha biokimyoviy jarayonlar aynan suvli muhitda sodir bo'ladi.",
    "keyPoints": [
      "Oqsillar — organizmning asosiy qurilish materiali (hujayra va to'qimalarni tiklaydi).",
      "Yog'lar — uzoq muddatli energiya zaxirasi va tana haroratini saqlovchi qatlam.",
      "Uglevodlar — miya va mushaklar uchun eng tezkor energiya manbai.",
      "Vitaminlar va minerallar — immunitetni kuchaytiruvchi va moddalar almashinuvini boshqaruvchi biologik moddalar.",
      "Kuniga kamida 1.5 - 2 litr toza suv ichish hayotiy zaruratdir."
    ],
    "funFacts": [
      "Inson miyasi tana vaznining atigi 2 foizini tashkil qilsa-da, iste'mol qilingan umumiy energiyaning (glyukozaning) salkam 20 foizini sarflaydi!",
      "Sabzi tarkibidagi A vitamini yog'da eriydi. Shuning uchun sabzini ozgina yog' yoki smetana bilan iste'mol qilsangiz, vitamin organizmga 5 baravar yaxshi so'riladi."
    ],
    "experiment": {
      "title": "Kraxmalni (uglevod) aniqlash tajribasi",
      "steps": "Xom kartoshka bo'lagiga 1 tomchi dorixona yodi tomizing. Kartoshka yuzasi bir zumda to'q ko'k-binafsha rangga kiradi. Bu oziq-ovqatda murakkab uglevod — kraxmal borligini isbotlaydi!"
    },
    "realLifeApp": "Sportchilar, kosmonavtlar va shifokorlar har bir inson uchun shaxsiy kaloriya me'yorini tuzishda aynan ratsional ovqatlanish qonuniyatlariga tayanadilar.",
    "audioScript": "Salom! 1-mavzuga xush kelibsiz. Ratsional ovqatlanish — bu organizmning energiya va plastik ehtiyojlarini to'liq qondiradigan to'g'ri taomlanish tartibidir. Oqsillar to'qimalarni quradi, uglevodlar energiya beradi, yog'lar esa tana haroratini saqlaydi.",
    "quiz": [
      {
        "q": "Oqsillarning organizmdagi asosiy vazifasi nima?",
        "options": [
          "Qurilish (hujayra va to'qimalarni tiklash)",
          "Faqat issiqlik ajratish",
          "Ko'rish qobiliyatini susaytirish",
          "Faqat shirinlik ta'mini berish"
        ],
        "answer": 0,
        "exp": "Oqsillar organizmning bosh qurilish materiali bo'lib, yangi hujayralar va to'qimalarni barpo etishda qatnashadi."
      },
      {
        "q": "Uglevodlar organizmga asosan nima beradi?",
        "options": [
          "Tezkor energiya",
          "Zaharlanish",
          "Suvsizlik",
          "Suyak mo'rtligi"
        ],
        "answer": 0,
        "exp": "Uglevodlar organizmning asosiy tezkor energiya manbai hisoblanadi."
      },
      {
        "q": "Ratsional ovqatlanish qoidasiga ko'ra kechki ovqat uyqudan necha soat oldin tanovul qilinishi lozim?",
        "options": [
          "2-3 soat oldin",
          "Uyqudan 5 daqiqa oldin",
          "Hech qanday farqi yo'q",
          "Faqat yarim tunda"
        ],
        "answer": 0,
        "exp": "Hazm qilish a'zolari dam olishi uchun kechki taom uyqudan 2-3 soat oldin iste'mol qilinishi tavsiya etiladi."
      }
    ]
  },
  {
    "id": 2,
    "num": 2,
    "title": "Ovqat hazm qilish sistemasi",
    "slug": "mavzu-2-ovqat-hazm-qilish.html",
    "cat": "Biologiya",
    "icon": "🧪",
    "duration": "18 daqiqa",
    "description": "Og'iz bo'shlig'i, qizilo'ngach, oshqozon, ichaklar, jigar va me'daosti bezining ishlash mexanizmi hamda ozuqa parchalanishi.",
    "fullTheory": "Ovqat hazm qilish sistemasi — murakkab organik oziq moddalarni qonga so'rilishi mumkin bo'lgan mayda oddiy monomerlarga (glyukoza, aminokislotalar, glitserin va yog' kislotalari) parchalovchi a'zolar majmuasidir. U og'iz bo'shlig'i, halqum, qizilo'ngach, oshqozon, o'n ikki barmoqli ichak, ingichka ichak, yo'g'on ichak va to'g'ri ichakdan tashkil topgan. Jigar va me'daosti bezi esa hazm qilish bezlari sifatida fermentlar va safro ishlab chiqaradi.",
    "keyPoints": [
      "Hazm jarayoni og'iz bo'shlig'ida so'lak fermenti (ptialin) ta'sirida boshlanadi.",
      "Oshqozon shirasidagi xlorid kislotasi (HCl) mikroblarni yo'qotadi va pepsin fermentini faollashtiradi.",
      "Jigar ishlab chiqaradigan o't suyuqligi (safro) yog'larni mayda tomchilarga parchalaydi (emulsiyalaydi).",
      "Oziq moddalarning 90 foizi ingichka ichakning millionlab vorsinkalari (tukchalari) orqali qonga so'riladi.",
      "Yo'g'on ichakda suv qayta so'riladi va qoldiqlar shakllanadi."
    ],
    "funFacts": [
      "Voyaga yetgan inson ingichka ichagining uzunligi taxminan 5-6 metr bo'lib, uning ichki so'rish yuzasi yoyilsa butun bir tennis korti maydoniga teng bo'ladi!",
      "Oshqozon devori o'zini o'zi eritib yubormasligi uchun har 3-4 kunda ichki shilliq qavatini to'liq yangilab turadi."
    ],
    "experiment": {
      "title": "Oqsillarning fermentativ parchalanishini kuzatish",
      "steps": "Qaynatilgan tuxum oqidan kichik bo'lak kesib oling. Uni idishga solib, ustiga ozroq yangi ananas sharbatidan quying (ananasda bromelayn oqsilli fermenti bor). Bir necha soatdan so'ng tuxum oqining chetlari erib yumshaganini ko'rasiz!"
    },
    "realLifeApp": "Gastroenterologiya fani oshqozon-ichak kasalliklarini davolashda, dorilarni oshqozonda emas, aynan ingichka ichakda erishi uchun maxsus kapsulalarni yaratishda ushbu bilimlardan foydalanadi.",
    "audioScript": "Ovqat hazm qilish sistemasi ozuqani maydalash, kimyoviy parchalash va qonga so'rish vazifasini bajaradi. Jarayon og'iz bo'shlig'ida boshlanib, qizilo'ngach, oshqozon, o'n ikki barmoqli ichak, ingichka va yo'g'on ichak orqali amalga oshadi.",
    "quiz": [
      {
        "q": "Oziq moddalar asosan qaysi organda qonga so'riladi?",
        "options": [
          "Ingichka ichakda",
          "Og'iz bo'shlig'ida",
          "Qizilo'ngachda",
          "O't pufagida"
        ],
        "answer": 0,
        "exp": "Ingichka ichakdagi vorsinkalar (tukchalar) orqali hazm bo'lgan moddalar qon va limfa tomirlariga so'riladi."
      },
      {
        "q": "Oshqozon shirasida qanday kuchli anorganik kislota mavjud?",
        "options": [
          "Xlorid kislotasi (HCl)",
          "Sulfat kislotasi",
          "Sirka kislotasi",
          "Azot kislotasi"
        ],
        "answer": 0,
        "exp": "Oshqozon shirasida xlorid kislotasi mavjud bo'lib, u mikroblarni o'ldiradi va fermentlarni faollashtiradi."
      },
      {
        "q": "O't suyuqligi (safro) qaysi organda ishlab chiqariladi?",
        "options": [
          "Jigarda",
          "Buyrakda",
          "Yurakda",
          "O'pkada"
        ],
        "answer": 0,
        "exp": "O't suyuqligi jigarda ishlab chiqariladi va yog'larni mayda tomchilarga parchalashga xizmat qiladi."
      }
    ]
  },
  {
    "id": 3,
    "num": 3,
    "title": "Nafas va qon aylanish",
    "slug": "mavzu-3-nafas-va-qon-aylanish.html",
    "cat": "Biologiya",
    "icon": "🫁",
    "duration": "16 daqiqa",
    "description": "Nafas olish mexanizmi, gazlar almashinuvi, o'pka pufakchalari va qon tizimi bilan o'zaro bog'liqlik.",
    "fullTheory": "Nafas olish va qon aylanish sistemalari organizmning har bir hujayrasini kislorod (O2) bilan ta'minlash va almashinuv mahsuloti bo'lgan karbonat angidrid (CO2) gazini chiqarib tashlash uchun birgalikda ishlaydi. Havodagi kislorod burun bo'shlig'i, tomoq, hiqildoq, traxeya va bronxlar orqali o'pka alveolalariga yetib boradi. Bu yerda qon kapillyarlari bilan tutashgan joyda gazlar diffuziya qonuni bo'yicha almashinadi.",
    "keyPoints": [
      "Inson o'pkasida 300 milliondan ortiq mayda pufakchalar — alveolalar mavjud.",
      "Qon o'pkadan o'tganda kislorodga to'yinib to'q qizil arterial qonga aylanadi.",
      "Diafragma mushagi qisqarganda ko'krak qafasi kengayib, o'pkaga havo kiradi (nafas olish).",
      "Hujayralarda kislorod ishtirokida glyukoza parchalanib, hayotiy energiya (ATF) hosil bo'ladi."
    ],
    "funFacts": [
      "Inson tinch holatda bir daqiqada o'rtacha 16-18 marta nafas oladi, og'ir sport mashg'ulotlarida esa bu ko'rsatkich 40-50 martagacha ortadi!",
      "O'pka inson organizmidagi suvda cho'kmaydigan yagona a'zodir, chunki uning ichida doimo ma'lum miqdorda havo saqlanadi."
    ],
    "experiment": {
      "title": "Ko'krak qafasi ekskursiyasini o'lchash tajribasi",
      "steps": "Santimetrli lenta bilan ko'krak qafasingiz aylanasi o'lchamini chuqur nafas olganda va to'liq nafas chiqarganda o'lchang. Ular orasidagi farq o'pkangizning hayotiy sig'imi va ko'krak qafasi rivojlanganligini ko'rsatadi!"
    },
    "realLifeApp": "Diverlar (g'avvoslar) akvalang apparatlarini yasashda va tibbiyotda sun'iy nafas berish (IVL) uskunalarini ishlab chiqishda alveolyar gaz bosimi qonuniyatlaridan foydalanadilar.",
    "audioScript": "Nafas olish va qon aylanish organizmning hayotiy jarayonlaridir. O'pka alveolalariga kelgan havodagi kislorod qondagi gemoglobin bilan birikadi va butun organizm to'qimalariga tarqaladi.",
    "quiz": [
      {
        "q": "O'pkada gazlar almashinuvi qayerda sodir bo'ladi?",
        "options": [
          "Alveolalarda (o'pka pufakchalarida)",
          "Qizilo'ngachda",
          "Hiqildoqda",
          "Traxeyaning tashqarisida"
        ],
        "answer": 0,
        "exp": "Alveolalar mayda pufakchalar bo'lib, ularning devori kapillyarlar bilan zich o'ralgan va gaz almashinuvi shu yerda kechadi."
      },
      {
        "q": "Kislorodni tashiydigan qon oqsili nima deb ataladi?",
        "options": [
          "Gemoglobin",
          "Xlorofill",
          "Keratin",
          "Fibrinogen"
        ],
        "answer": 0,
        "exp": "Gemoglobin eritrotsitlar ichidagi temir moddali oqsil bo'lib, kislorodni o'ziga biriktirib tashiydi."
      },
      {
        "q": "Nafas chiqarganda qanday gaz miqdori ko'proq bo'ladi?",
        "options": [
          "Karbonat angidrid (CO2)",
          "Ozon",
          "Vodorod",
          "Geliy"
        ],
        "answer": 0,
        "exp": "Hujayralarda kechgan moddalar almashinuvidan so'ng hosil bo'lgan karbonat angidrid nafas chiqarish orqali chiqarib tashlanadi."
      }
    ]
  },
  {
    "id": 4,
    "num": 4,
    "title": "Qon aylanish sistemasi",
    "slug": "mavzu-4-qon-aylanish-sistemasi.html",
    "cat": "Biologiya",
    "icon": "🫀",
    "duration": "20 daqiqa",
    "description": "Yurak tuzilishi, katta va kichik qon aylanish doiralari, arteriyalar, venalar va kapillyarlar.",
    "fullTheory": "Insonning qon aylanish sistemasi yopiq bo'lib, yurak va undan chiquvchi tomirlar to'ridan iborat. Yurak 4 kameradan iborat: o'ng bo'lmacha, o'ng qorincha, chap bo'lmacha va chap qorincha. Kichik qon aylanish doirasi yurak va o'pka o'rtasida qonni kislorod bilan to'yintirishga xizmat qilsa, katta qon aylanish doirasi chap qorinchadan boshlanib butun tana to'qimalariga ozuqa va kislorod yetkazadi.",
    "keyPoints": [
      "Yurak — bir umr tinimsiz ishlovchi mushakli biologik nasosdir.",
      "Arteriyalar qonni yurakdan organlarga olib ketadi, ularda bosim yuqori bo'ladi.",
      "Venalar qonni organlardan yurakka qaytaradi, ularda qon orqaga qaytib ketmasligi uchun klapanlar bor.",
      "Kapillyarlar — eng ingichka qon tomirlar bo'lib, ular orqali moddalar va gazlar to'qimalarga o'tadi."
    ],
    "funFacts": [
      "Inson tomirlarining umumiy uzunligi taxminan 100 000 kilometrni tashkil qiladi — bu Yer sharini ekvator bo'ylab ikki yarim marta o'rab chiqishga yetadi!",
      "Inson yuragi bir kunda o'rtacha 100 000 marta uradi va 7 000 litrdan ortiq qonni haydab beradi."
    ],
    "experiment": {
      "title": "Pulsni (yurak urishini) aniqlash va tekshirish",
      "steps": "Bilagingizning bosh barmog'i ostidagi radial arteriyaga ikki barmog'ingizni qo'ying. Tinch holatda 1 daqiqada necha marta urishini sanang (odatda 60-80). So'ng 20 marta o'tirib-turing va pulsni qayta sanang — yurak tezligi qanday oshganini solishtiring!"
    },
    "realLifeApp": "Kardiologiya sohasida EKG apparatlari, sun'iy yurak klapanlari va qon bosimini o'lchash moslamalari (tonometr) aynan gidravlik qon oqimi qonuniyatlariga tayanadi.",
    "audioScript": "Qon aylanish sistemasi yurak va qon tomirlaridan iborat. Inson yuragi nasos vazifasini o'tab, qonni katta va kichik doiralar bo'ylab tinimsiz harakatlantirib turadi.",
    "quiz": [
      {
        "q": "Inson yuragi necha kameradan iborat?",
        "options": [
          "4 ta (2 bo'lmacha, 2 qorincha)",
          "2 ta",
          "3 ta",
          "6 ta"
        ],
        "answer": 0,
        "exp": "Odam yuragi o'ng va chap bo'lmachalar hamda o'ng va chap qorinchalardan, jami 4 kameradan iborat."
      },
      {
        "q": "Qonni yurakdan a'zolarga olib ketuvchi tomirlar nima deyiladi?",
        "options": [
          "Arteriyalar",
          "Venalar",
          "Kapillyarlar",
          "Nerv tolalari"
        ],
        "answer": 0,
        "exp": "Yurakdan chiquvchi tomirlar arteriyalar, yurakka qon olib keluvchi tomirlar esa venalar deyiladi."
      },
      {
        "q": "Eng yirik qon tomir qaysi?",
        "options": [
          "Aorta",
          "O'pka venasi",
          "Son arteriyasi",
          "Jigar kapillyari"
        ],
        "answer": 0,
        "exp": "Aorta organizmdagi eng yo'g'on arteriya bo'lib, chap qorinchadan chiqadi."
      }
    ]
  },
  {
    "id": 5,
    "num": 5,
    "title": "Kasalliklar va ularning belgilari",
    "slug": "mavzu-5-kasalliklar.html",
    "cat": "Tibbiyot",
    "icon": "🦠",
    "duration": "14 daqiqa",
    "description": "Kasallik tushunchasi, yuqumli va yuqumsiz xastaliklar, ularning kelib chiqish sabablari va ilk alomatlari.",
    "fullTheory": "Kasallik — tashqi muhitning zararli omillari yoki ichki genetik buzilishlar natijasida organizmning normal hayot faoliyati, moslashuvchanligi va ichki muvozanatining (gomeostaz) buzilishidir. Kasalliklar kelib chiqishiga ko'ra irsiy, yuqumli (infeksion), allergik, avtoimmun va alimentor (noto'g'ri ovqatlanish sababli) turlarga bo'linadi. Har bir kasallik o'ziga xos subyektiv va obyektiv simptomlar bilan namoyon bo'ladi.",
    "keyPoints": [
      "Simptom — kasallik mavjudligidan dalolat beruvchi belgi (isitma, og'riq, holsizlik, toshma).",
      "Yuqumli kasalliklar qo'zg'atuvchi mikrob orqali bemordan sog'lom kishiga yuqadi.",
      "Yuqumsiz kasalliklar (yurak-qon tomir, qandli diabet) turmush tarzi va irsiyat bilan bog'liq.",
      "Kasallikni erta bosqichda aniqlash to'liq shifo topishning asosiy omilidir."
    ],
    "funFacts": [
      "Inson tana haroratining 37-38 darajagacha ko'tarilishi — bu kasallikning zarari emas, balki organizmning mikroblarni o'ldirish uchun yoqqan himoya pechkasi hisoblanadi!",
      "Qadimgi tabib Abu Ali ibn Sino kasalliklarni aniqlashda bemorning tomir urishi (puls), ko'z rangi va terisiga qarab 50 dan ortiq kasalliklarga aniq tashxis qo'ygan."
    ],
    "experiment": {
      "title": "Tana haroratini to'g'ri o'lchash qoidasi",
      "steps": "Elektron yoki simobsiz termometr bilan tana haroratini qo'ltiq ostida 5 daqiqa davomida o'lchang. Natijani yozib oling. Nega tinch holatda va yugurgandan so'ng harorat o'zgarishini tahlil qiling!"
    },
    "realLifeApp": "Zamonaviy tibbiyotda sun'iy intellekt va raqamli termovizorlar orqali odamlar gavjum joylarda (aeroport, maktab) tana harorati yuqori bo'lgan bemorlar darhol masofadan aniqlanadi.",
    "audioScript": "Kasalliklar inson hayotida uchraydigan noqulay holatdir. Ular viruslar, bakteriyalar yoki noto'g'ri turmush tarzi oqibatida yuzaga keladi. Belgilarni vaqtida aniqlash davolashni osonlashtiradi.",
    "quiz": [
      {
        "q": "Quyidagilardan qaysi biri yuqumsiz kasallikka misol bo'ladi?",
        "options": [
          "Qandli diabet",
          "Gripp",
          "Qizamiq",
          "Suvchechak"
        ],
        "answer": 0,
        "exp": "Qandli diabet moddalar almashinuvining buzilishi bo'lib, odamdan odamga yuqmaydi."
      },
      {
        "q": "Organizmda tana harorati ko'tarilishi nimani bildiradi?",
        "options": [
          "Immunitet mikrobga qarshi kurashayotganini",
          "Organizm soviganini",
          "To'g'ri dam olayotganini",
          "Oziq moddalar ko'payganini"
        ],
        "answer": 0,
        "exp": "Isitma organizmning mikroblarga qarshi faol himoya reaksiyasidir."
      },
      {
        "q": "Kasallikning birinchi alomatlari nima deyiladi?",
        "options": [
          "Simptomlar",
          "Retseptlar",
          "Diagnozlar",
          "Vaktsinalar"
        ],
        "answer": 0,
        "exp": "Kasallikning tashqi va ichki ko'rinishlari simptom yoki alomat deb ataladi."
      }
    ]
  },
  {
    "id": 6,
    "num": 6,
    "title": "Yuqumli kasalliklar",
    "slug": "mavzu-6-yuqumli-kasalliklar.html",
    "cat": "Tibbiyot",
    "icon": "⚠️",
    "duration": "15 daqiqa",
    "description": "Bakteriyalar, viruslar va zamburug'lar keltirib chiqaradigan infeksiyalar, ularning tarqalish yo'llari.",
    "fullTheory": "Yuqumli kasalliklar tirik patogen mikroorganizmlar — bakteriyalar, viruslar, bir hujayrali parazitlar va zamburug'lar tomonidan qo'zg'atiladi. Ularning asosiy xususiyati — inkubatsion davr (kasallik yuqqandan to dastlabki alomatlar paydo bo'lguncha o'tadigan yashirin davr) mavjudligi va o'ta tez tarqalish ehtimolidir. Tarqalish yo'llari: havo-tomchi, alimentar (suv va oziq-ovqat), muloqot-maishiy va transmissiv (hasharotlar chaqishi) orqali.",
    "keyPoints": [
      "Viruslar — o'z mustaqil hujayrasiga ega bo'lmagan, faqat boshqa tirik hujayra ichida ko'payuvchi zarrachalardir.",
      "Bakteriyalar — bir hujayrali organizmlar bo'lib, antibiotiklar yordamida yo'qotilishi mumkin.",
      "Inkubatsion davrda inson o'zini sog'lom his qilsa-da, boshqalarga kasallik yuqtiruvchi bo'lishi mumkin.",
      "Muntazam qo'l yuvish ko'plab xavfli ichak va nafas yo'li infeksiyalaridan asraydi."
    ],
    "funFacts": [
      "Bitta odam aksirganida uning og'zidan chiquvchi havo tezligi soatiga 160 kilometrga yetadi va 100 000 dan ortiq mikrob tomchilari havoga 3-5 metr masofaga sochiladi!",
      "Smartfon ekranlarida jamoat transportidagi tutqichlarga qaraganda 10 barobar ko'p bakteriyalar yashashi aniqlangan."
    ],
    "experiment": {
      "title": "Mikroblarning tarqalish modelini ko'rish",
      "steps": "Qo'lingizga ozgina kosmetik yaltiroq kukun (blestyashka) surting. Keyin do'stingiz bilan qo'l berib ko'rishing, daftar va eshik tutqichini ushlang. Yaltiroq kukunlar hamma joyga qanday tez tarqalganini ko'rib, viruslarning yuqish zanjirini tasavvur qilasiz!"
    },
    "realLifeApp": "Epidemiologiya xizmati va sanitariya-gigiyena laboratoriyalari maktablar va korxonalarda infeksiya tarqalishining oldini olish uchun suv va havo namunalarini tahlil qiladi.",
    "audioScript": "Yuqumli kasalliklar tirik qo'zg'atuvchilar — mikroblar tufayli vujudga keladi. Ular bir organizmdan boshqasiga tez yuqishi bilan xavflidir.",
    "quiz": [
      {
        "q": "Gripp kasalligi asosan qaysi yo'l orqali yuqadi?",
        "options": [
          "Havo-tomchi yo'li bilan (aksirish, yo'talish)",
          "Faqat hasharot chaqqanda",
          "Faqat yerda yurganda",
          "Radiatsiya nurlari orqali"
        ],
        "answer": 0,
        "exp": "Gripp virusi bemor aksirganda yoki gaplashganda havoga tarqalib, nafas yo'llari orqali yuqadi."
      },
      {
        "q": "Viruslar qanday tuzilishga ega?",
        "options": [
          "Hujayrasiz hayot shakli",
          "Ko'p hujayrali o'simlik",
          "Yadroga ega yirik hayvon",
          "Mineral tosh turi"
        ],
        "answer": 0,
        "exp": "Viruslar hujayrasiz tuzilishga ega bo'lib, faqat tirik hujayra ichida ko'payadi."
      },
      {
        "q": "Ichak infeksiyalari ko'pincha nima sababdan yuqadi?",
        "options": [
          "Yuvilmagan qo'l va mevalar orqali",
          "Toza havo nafas olganda",
          "Sport bilan shug'ullanganda",
          "Kitob o'qiganda"
        ],
        "answer": 0,
        "exp": "Ichak infeksiyalari ifloslangan oziq-ovqat, iflos suv va yuvilmagan qo'llar orqali yuqadi."
      }
    ]
  },
  {
    "id": 7,
    "num": 7,
    "title": "Kasallik tarqalishining oldini olish",
    "slug": "mavzu-7-kasallik-oldini-olish.html",
    "cat": "Tibbiyot",
    "icon": "🛡️",
    "duration": "15 daqiqa",
    "description": "Profilaktika choralari, gigiyena, emlash (vaksinatsiya), dezinfeksiya va karantin choralari.",
    "fullTheory": "Profilaktika — kasalliklar kelib chiqishining oldini olishga, ularning tarqalish zanjirini uzishga qaratilgan tibbiy-ijtimoiy tadbirlar majmuasidir. U birlamchi (kasallik paydo bo'lmasligi uchun gigiyena va vaksinatsiya) va ikkilamchi (erta aniqlash va karantin) bosqichlarga bo'linadi. Eduard Jenner va Lui Paster asos solgan vaksinatsiya tufayli insoniyat qora chechak, quturish va poliomiyelit kabi dahshatli epidemiyalarni yengishga muvaffaq bo'ldi.",
    "keyPoints": [
      "Vaksinatsiya organizmga susaytirilgan mikrobni kiritib, xavfsiz sun'iy immunitet hosil qiladi.",
      "Dezinfeksiya — tashqi muhitdagi patogen mikroorganizmlarni kimyoviy yoki fizik vositalar bilan yo'q qilishdir.",
      "Karantin va izolyatsiya — infeksiya manbayini sog'lom aholidan vaqtincha ajratish usulidir.",
      "Xonalarni har kuni shamollatish havoda to'plangan viruslar miqdorini 80-90% ga kamaytiradi."
    ],
    "funFacts": [
      "Dunyoda birinchi vaksina 1796-yilda sigir chechagidan foydalangan holda Eduard Jenner tomonidan yaratilgan bo'lib, 'vaksina' so'zi lotincha 'vacca' — sigir so'zidan kelib chiqqan!",
      "Sovun mikroblarni shunchaki yuvibgina qolmay, ularning yog'li tashqi qobig'ini parchalab yo'q qiladi."
    ],
    "experiment": {
      "title": "Sovunning yog'li qobiqqa ta'siri tajribasi",
      "steps": "Bir likopcha suvga ozroq qora murch (mikroblar timsolida) seping. Barmog'ingizni suyuq sovunga botirib, murchli suvning o'rtasiga tekkizing. Barcha murch zarralari bir zumda chetga qochib ketganini ko'rasiz — sovunning sirtiy taranglikni o'zgartirish qudrati mana shunday!"
    },
    "realLifeApp": "Jahon Sog'liqni Saqlash Tashkiloti (JSST) milliy emlash kalendari orqali har yili dunyo bo'yicha 3 milliondan ortiq bolalar hayotini saqlab qolmoqda.",
    "audioScript": "Kasallikni davolashdan ko'ra uning oldini olish ming chandon afzaldir. Gigiyena, to'g'ri ovqatlanish, jismoniy tarbiya va emlashlar bizni xavfli epidemiyalardan asraydi.",
    "quiz": [
      {
        "q": "Vaksina (emlash) nima uchun qilinadi?",
        "options": [
          "Kasallikka qarshi sun'iy immunitet hosil qilish uchun",
          "Tezroq uxlab qolish uchun",
          "Vaznni oshirish uchun",
          "Mushaklarni kuchaytirish uchun"
        ],
        "answer": 0,
        "exp": "Vaksina kiritilganda immunitet susaytirilgan mikrob bilan tanishadi va unga qarshi antitelolar ishlab chiqadi."
      },
      {
        "q": "Qo'llarni sovun bilan kamida necha soniya yuvish tavsiya etiladi?",
        "options": [
          "Kamida 20 soniya",
          "1 soniya",
          "10 daqiqa",
          "Faqat bir tomchi suv sepish yetarli"
        ],
        "answer": 0,
        "exp": "Mikroblarni to'liq bartaraf qilish uchun qo'llarni kamida 20 soniya yaxshilab sovunlash lozim."
      },
      {
        "q": "Bemorlarni sog'lom odamlardan vaqtincha ajratib qo'yish nima deyiladi?",
        "options": [
          "Karantin",
          "Immunitet",
          "Regeneratsiya",
          "Evolyutsiya"
        ],
        "answer": 0,
        "exp": "Karantin yuqumli kasallik tarqalishini cheklash maqsadida qo'llaniladigan izolyatsiya chorasidir."
      }
    ]
  },
  {
    "id": 8,
    "num": 8,
    "title": "Odam organizmining himoya mexanizmlari",
    "slug": "mavzu-8-himoya-mexanizmlari.html",
    "cat": "Biologiya",
    "icon": "🧬",
    "duration": "17 daqiqa",
    "description": "Teri, shilliq qavatlar, leykotsitlar, fagotsitoz, antitelolar va immunitet turlari.",
    "fullTheory": "Inson organizmi tashqi tajovuzlardan ko'p bosqichli mudofaa tizimi bilan himoyalangan. Birinchi to'siq — butun teri va shilliq qavatlar bo'lib, ulardagi ter, yog' va lizotsim fermenti mikroblarni o'ldiradi. Ikkinchi to'siq — qonning oq tanachalari (leykotsitlar va makrofaglar) begona zarrachalarni o'rab olib yutadi (fagotsitoz). Uchinchi to'siq — maxsus limfotsitlar (T va B hujayralar) bo'lib, ular mikrobga qarshi nishonli antitelolar (immunoglobulinlar) ishlab chiqaradi.",
    "keyPoints": [
      "Teri — organizmning mexanik va kimyoviy eng katta himoya qalqonidir.",
      "I.I. Mechnikov leykotsitlarning fagotsitoz xossasini ochib bergan.",
      "Antitelolar — begona oqsillarni (antigenlarni) tanib, ularni zararsizlantiruvchi maxsus oqsillar.",
      "Immunitet xotirasi tufayli inson suvchechak kabi kasalliklar bilan odatda umrida bir marta og'riydi."
    ],
    "funFacts": [
      "Bir tomchi qonda 25 000 dan 50 000 tagacha leykotsit jangchilari kechayu-kunduz patrul xizmatini o'taydi!",
      "Ko'z yoshida va so'lakda mavjud bo'lgan lizotsim fermenti bakteriyalarning mustahkam hujayra devorini bir necha soniyada eritib yuborishga qodir."
    ],
    "experiment": {
      "title": "Teri to'sig'ining ahamiyatini modellashtirish",
      "steps": "Ikkita olma oling: birining po'stlog'ini buzmasdan qoldiring, ikkinchisining po'stlog'ini ozgina tilib qo'ying. Bir necha kundan so'ng tilik joydan mikroblar kirib olma chiriy boshlaganini, butun olma esa sog'lom turganini ko'rasiz — terimiz xuddi olma po'sti kabi bizni himoya qiladi!"
    },
    "realLifeApp": "Immunoterapiya va zamonaviy onkologiyada olimlar insonning o'z leykotsitlarini saraton hujayralarini tanib yo'q qilishga o'rgatuvchi ilg'or bio-muolajalarni yaratmoqdalar.",
    "audioScript": "Organizmimiz kechayu-kunduz millionlab mikroblar hujumiga uchraydi. Biroq bizning terimiz, ko'z yoshimiz, limfotsitlarimiz va leykotsitlarimiz mustahkam himoya qalqonini yaratadi.",
    "quiz": [
      {
        "q": "Fagotsitoz hodisasini kim kashf etgan?",
        "options": [
          "I.I. Mechnikov",
          "Robert Guk",
          "Charlz Darvin",
          "Albert Eynshteyn"
        ],
        "answer": 0,
        "exp": "I.I. Mechnikov leykotsitlarning begona jismlarni yutib parchalashini kashf etib, Nobel mukofotiga sazovor bo'lgan."
      },
      {
        "q": "Qaysi qon hujayralari himoya vazifasini bajaradi?",
        "options": [
          "Leykotsitlar",
          "Eritrotsitlar",
          "Trombotsitlar",
          "Nefronlar"
        ],
        "answer": 0,
        "exp": "Leykotsitlar oq qon tanachalari bo'lib, infeksiyalarga qarshi kurashuvchi jangchilardir."
      },
      {
        "q": "Ko'z yoshi va so'lak tarkibidagi mikrob o'ldiruvchi modda nima?",
        "options": [
          "Lizotsim",
          "Xolesterin",
          "Glyukoza",
          "Insulin"
        ],
        "answer": 0,
        "exp": "Lizotsim fermenti mikroblarning qobig'ini parchalab, ularni zararsizlantiradi."
      }
    ]
  },
  {
    "id": 9,
    "num": 9,
    "title": "Oziq zanjirlari va oziq torlari",
    "slug": "mavzu-9-oziq-zanjirlari.html",
    "cat": "Ekologiya",
    "icon": "🌱",
    "duration": "16 daqiqa",
    "description": "Produtsentlar, konsumentlar, redutsentlar va ekotizimdagi oziqa munosabatlari zanjiri.",
    "fullTheory": "Tabiatda barcha organizmlar oziqa munosabatlari orqali bog'langan bo'lib, bir turning ikkinchi tur hisobiga yashashi oziq zanjirini hosil qiladi. Zanjir uchta trofik pog'onadan iborat: Produtsentlar (quyosh nuri va fotosintez hisobiga organik modda hosil qiluvchi o'simliklar), Konsumentlar (o'txo'r va yirtqich hayvonlar) hamda Redutsentlar (organik moddalarni parchalovchi tuproq bakteriyalari va zamburug'lar). Tabiatda bitta hayvon bir nechta turlar bilan oziqlangani sababli zanjirlar chigallashib murakkab oziq torlarini (ekologik tarmoqni) hosil qiladi.",
    "keyPoints": [
      "Oziq zanjiri quyosh nuri energiyasining jonzotdan jonzotga o'tish yo'lidir.",
      "Produtsentlar zanjir poydevorini tashkil qiladi.",
      "1-tartib konsumentlar — o'txo'rlar; 2- va 3-tartib konsumentlar — yirtqichlar.",
      "Ekotizimda turlar qanchalik xilma-xil bo'lsa, oziq tori shunchalik mustahkam bo'ladi."
    ],
    "funFacts": [
      "Dunyodagi eng katta hayvon — ko'k kit (og'irligi 150 tonnagacha) oziq zanjirining eng mayda bo'g'inlaridan biri bo'lgan mikroskopik qisqichbaqasimonlar (krill) bilan oziqlanadi!",
      "Agar o'rmondan bo'rilar yo'qolib ketsa, kiyiklar soni haddan tashqari ko'payib, barcha yosh daraxt novdalarini yeb bitiradi va o'rmon yo'q bo'lib ketishi mumkin (bu hodisa 'trofik kaskad' deyiladi)."
    ],
    "experiment": {
      "title": "Ekotizim oziq zanjiri kartochkalarini tuzish",
      "steps": "Qog'ozga quyosh, beda, chigirtka, baqa, ilon va burgut rasmini chizing. Ularni o'qlar orqali ketma-ket bog'lang. Zanjirdan baqani olib tashlasangiz, chigirtkalar va ilonlar soni qanday o'zgarishini modellashtiring!"
    },
    "realLifeApp": "Qishloq xo'jaligida zararli hasharotlarga qarshi kimyoviy zahar sepmay, balki ularning tabiiy kushandasi bo'lgan xonqizini (bojxona qo'ng'izini) ko'paytirish (biologik kurash usuli) aynan oziq zanjirlari asosida yo'lga qo'yilgan.",
    "audioScript": "Tabiatda barcha tirik mavjudotlar bir-biri bilan oziq munosabatlari orqali bog'langan. O'simliklar quyosh nuridan ozuqa yasaydi, ularni o'txo'rlar, ularni esa yirtqichlar yeydi.",
    "quiz": [
      {
        "q": "Oziq zanjirining boshida odatda nima turadi?",
        "options": [
          "Yashil o'simliklar (produtsentlar)",
          "Yirtqich qushlar",
          "Tuproqdagi chuvalchanglar",
          "Bo'rilar"
        ],
        "answer": 0,
        "exp": "Yashil o'simliklar fotosintez hisobiga quyosh energiyasini kimyoviy energiyaga aylantirib zanjirni boshlaydi."
      },
      {
        "q": "O'txo'r hayvonlar qaysi bo'g'inga kiradi?",
        "options": [
          "1-tartib konsumentlar",
          "Produtsentlar",
          "Redutsentlar",
          "Viruslar"
        ],
        "answer": 0,
        "exp": "O'simliklar bilan oziqlanuvchi hayvonlar 1-tartib konsumentlar hisoblanadi."
      },
      {
        "q": "O'lik organik moddalarni chirindi va anorganik birikmalarga aylantiruvchilar nima?",
        "options": [
          "Redutsentlar (parchalovchilar)",
          "Produtsentlar",
          "Yirtqichlar",
          "Parazitlar"
        ],
        "answer": 0,
        "exp": "Bakteriyalar va zamburug'lar redutsent vazifasini o'tab, moddalar aylanishini yakunlaydi."
      }
    ]
  },
  {
    "id": 10,
    "num": 10,
    "title": "Energiya va zaharli moddalar oqimi",
    "slug": "mavzu-10-energiya-oqimi.html",
    "cat": "Ekologiya",
    "icon": "⚡",
    "duration": "17 daqiqa",
    "description": "Ekologik piramida, 10% qoidasi va zaharli moddalarning zanjir bo'ylab to'planishi (biomagnifikatsiya).",
    "fullTheory": "Ekotizimda energiya oqimi bir tomonlama bo'lib, qaytarilmasdir. Raymon Lindeman ochgan 10 foiz qoidasiga ko'ra, har bir trofik pog'onadan keyingisiga energiyaning taxminan 10 foizigina o'tadi; qolgan 90 foizi nafas olish, harakat va issiqlik sifatida koinotga tarqaladi. Ammo sintetik zaharli kimyoviy moddalar (og'ir metallar, pestitsidlar) organizmdan chiqib ketmaydi va aksincha, oziq zanjirining yuqorisiga borgan sari to'planib (biomagnifikatsiya), cho'qqidagi yirtqichlar va inson uchun halokatli konsentratsiyaga yetadi.",
    "keyPoints": [
      "Lindeman qoidasi: energiyaning faqat 10% qismi keyingi pog'onaga uzatiladi.",
      "Energiya piramidasi har doim pastdan yuqoriga torayib boradi.",
      "Biomagnifikatsiya tufayli yirtqich baliq va qushlarda zahar miqdori suvdagiga nisbatan million barobar ko'p bo'lishi mumkin.",
      "Plastik va og'ir metallar tabiatda parchalanmay oziq zanjirini ifloslantiradi."
    ],
    "funFacts": [
      "1 kg bo'ri tana vaznini hosil qilish uchun 10 kg quyon go'shti, buning uchun esa 100 kg o'simlik biomassa talab etiladi!",
      "1960-yillarda qo'llanilgan DDT pestitsidi Antarktidadagi pingvinlar tanasida ham topilgan, garchi u yerda hech kim qishloq xo'jaligi bilan shug'ullanmagan bo'lsa ham."
    ],
    "experiment": {
      "title": "Zahar to'planishi (biomagnifikatsiyani) rang bilan ko'rish",
      "steps": "Besh stakanga suv quying. Birinchi stakanga 10 tomchi qizil bo'yoq soling (suvo't). Undan 1 qoshiq olib ikkinchisiga quying (mayda baliq), undan uchinchisiga va h.k. Oziqa bo'yicha to'planish qanday xavfli bo'lishini ko'rgazmali tushunib olasiz!"
    },
    "realLifeApp": "Ekologlar va dengiz mahsulotlari inspeksiyasi yirik akula va tunes balig'i go'shtidagi simob miqdorini doimiy nazorat qilib, bolalar va homilador ayollarga ularni me'yorida iste'mol qilishni tavsiya etadi.",
    "audioScript": "Ekotizimda energiya oqimi bir tomonlama yo'nalishga ega. Quyosh energiyasi zanjir bo'ylab kamayib borsa, zaharli moddalar aksincha oziq zanjirining cho'qqisida eng xavfli darajaga yetadi.",
    "quiz": [
      {
        "q": "Lindeman qoidasiga ko'ra oziq zanjirining keyingi bo'g'iniga qancha energiya o'tadi?",
        "options": [
          "Taxminan 10%",
          "Taxminan 90%",
          "100%",
          "Hech qancha o'tmaydi"
        ],
        "answer": 0,
        "exp": "Bir trofik pog'onadan ikkinchisiga energiyaning taxminan 10 foizigina o'tadi, qolgani tarqalib ketadi."
      },
      {
        "q": "Zaharli moddalarning zanjir cho'qqisidagi yirtqichlarda ko'p to'planishi nima deyiladi?",
        "options": [
          "Biomagnifikatsiya (bioto'planish)",
          "Fotosintez",
          "Diffuziya",
          "Sublimatsiya"
        ],
        "answer": 0,
        "exp": "Biomagnifikatsiya tufayli pestitsid va og'ir metallar yuqori yirtqichlarda juda yuqori dozada to'planadi."
      },
      {
        "q": "Ekologik piramida nega cho'qqiga qarab torayib boradi?",
        "options": [
          "Energiya va biomassa yuqoriga borgan sari kamaygani sababli",
          "Hayvonlar bo'yi qisqargani uchun",
          "Havo sovuqlashgani uchun",
          "Quyosh nuri yetmagani uchun"
        ],
        "answer": 0,
        "exp": "Har bir pog'onada energiya yo'qotilishi tufayli yuqori bo'g'indagi organizmlar soni va biomassasi kam bo'ladi."
      }
    ]
  },
  {
    "id": 11,
    "num": 11,
    "title": "Moddalarning xossalari",
    "slug": "mavzu-11-moddalarning-xossalari.html",
    "cat": "Kimyo",
    "icon": "🔬",
    "duration": "16 daqiqa",
    "description": "Fizikaviy va kimyoviy xossalar: zichlik, rang, qattiqlik, eruvchanlik, yonuvchanlik va elektr o'tkazuvchanlik.",
    "fullTheory": "Atrofimizdagi barcha narsalar fizik jismlar bo'lib, ular moddalardan tashkil topgan. Moddaning xususiyatlari fizikaviy (tarkib o'zgarmasdan namoyon bo'ladigan: rang, hid, ta'm, qattiqlik, zichlik, elektr va issiqlik o'tkazuvchanlik, erish harorati) va kimyoviy (boshqa yangi moddalarga aylanish qobiliyati: yonish, oksidlanish, kislotalar bilan reaksiyaga kirishish) guruhlarga bo'linadi. Zichlik formulasi: ρ = m / V bo'lib, uning yordamida moddaning qanday ekanligini aniqlash mumkin.",
    "keyPoints": [
      "Fizik xossalar modda tabiatini o'zgartirmasdan o'lchanadi.",
      "Zichlik moddaning hajm birligidagi massasidir (kg/m³ yoki g/sm³).",
      "Metallar plastik, yaltiroq va elektr tokini a'lo o'tkazadi.",
      "Nometallar ko'pincha mo'rt va dielektrik (izolyator) hisoblanadi."
    ],
    "funFacts": [
      "Oltin shu qadar egiluvchan va plastik moddaki, 1 dona gugurt qutisi kattaligidagi oltindan qalinligi inson sochidan 400 marta yupqa bo'lgan 9 kvadrat metrli yupqa zar varag'i yasash mumkin!",
      "Eng zich tabiiy metall osmiy bo'lib, uning 1 litrli idishdagi og'irligi 22.5 kilogrammni tashkil qiladi!"
    ],
    "experiment": {
      "title": "Noma'lum jism zichligini aniqlash tajribasi",
      "steps": "O'lchov silindriga (menzurkaga) ma'lum hajmda suv quying. Tarozida toshning massasini (m) torting. So'ng toshni suvga solib, ko'tarilgan suv hajmidan toshning hajmini (V) toping. ρ = m / V formulasi bilan toshning zichligini hisoblang!"
    },
    "realLifeApp": "Aviatsiya va avtomobilsozlikda muhandislar transport vositasi yengil, ammo juda mustahkam bo'lishi uchun zichligi past alyuminiy, titan va uglerod tolali kompozit moddalardan foydalanadilar.",
    "audioScript": "Atrofimizdagi barcha narsalar moddalardan tashkil topgan. Har bir modda o'ziga xos xususiyatlarga ega: qattiqligi, zichligi, elektr o'tkazishi yoki reaksiyaga kirishish qobiliyati bilan farqlanadi.",
    "quiz": [
      {
        "q": "Quyidagilardan qaysi biri moddaning fizikaviy xossasiga kirmaydi?",
        "options": [
          "Yonish va zanglash (kimyoviy o'zgarish)",
          "Erish harorati",
          "Zichligi",
          "Rangi va hidi"
        ],
        "answer": 0,
        "exp": "Yonish va zanglash yangi modda hosil bo'lishi bilan kechadigan kimyoviy xossadir."
      },
      {
        "q": "Moddaning zichligi qanday formula bilan hisoblanadi?",
        "options": [
          "rho = m / V (massa bo'lingan hajm)",
          "rho = m * V",
          "rho = V / m",
          "rho = m + V"
        ],
        "answer": 0,
        "exp": "Zichlik massa va hajm nisbatiga teng: rho = m / V."
      },
      {
        "q": "Elektr tokini yaxshi o'tkazuvchi moddalar nima deyiladi?",
        "options": [
          "O'tkazgichlar (masalan, mis, alyuminiy)",
          "Dielektriklar (izolyatorlar)",
          "Yarimo'tkazgichsiz shisha",
          "Plastmassalar"
        ],
        "answer": 0,
        "exp": "Metallar erkin elektronlari borligi sababli tokni a'lo darajada o'tkazadi."
      }
    ]
  },
  {
    "id": 12,
    "num": 12,
    "title": "Qaynash va bug‘lanish jarayonlari",
    "slug": "mavzu-12-qaynash-va-buglanish.html",
    "cat": "Fizika",
    "icon": "♨️",
    "duration": "18 daqiqa",
    "description": "Bug'lanish va qaynash farqi, qaynash harorati, atmosfera bosimining qaynashga ta'siri.",
    "fullTheory": "Suyuqlikning gaz holatiga o'tishi bug' hosil bo'lish jarayoni deb ataladi. U ikki turda kechadi: Bug'lanish — har qanday haroratda faqat suyuqlikning erkin sirtidan sodir bo'ladigan sokin jarayon (eng chaqqon kinetik energiyali molekulalar sirt tarangligini yengib uchib chiqadi). Qaynash esa butun suyuqlik hajmi bo'ylab pufakchalar hosil bo'lishi bilan faqat muayyan o'zgarmas qaynash haroratida kechadigan shiddatli jarayondir. Tashqi atmosfera bosimi qancha yuqori bo'lsa, qaynash harorati shuncha baland bo'ladi.",
    "keyPoints": [
      "Bug'lanish jarayonida suyuqlik soviydi, chunki eng issiq molekulalar uchib ketadi.",
      "Oddiy bosimda suv 100°C da qaynaydi va qaynash davomida harorat ko'tarilmaydi.",
      "Tog'da bosim past bo'lgani uchun suv 80-90°C da qaynab ketadi.",
      "Dudbo'ron va skorovarka (bosimli qozon) bosimni oshirib, suvni 120°C gacha qaynatadi va ovqat 3 baravar tez pishadi."
    ],
    "funFacts": [
      "Terlaganimizda tanamiz soviydi, chunki ter bug'lanayotganda terimizdan issiqlik energiyasini o'zi bilan olib ketadi!",
      "Everest tog'i cho'qqisida (8848 metr balandlikda) havo bosimi pastligi sababli suv atigi 68°C da qaynaydi, bunday haroratda tuxum pishirishning mutlaqo iloji yo'q."
    ],
    "experiment": {
      "title": "Bug'lanishda harorat pasayishini his qilish",
      "steps": "Bir qo'lingiz kaftiga oddiy suv, ikkinchisiga spirt (antiseptik) tomizing. Ikkala qo'lingizni bir xil silkiting. Spirt tomgan qo'lingiz ancha qattiq soviganini his qilasiz — spirt tez bug'lanib, issiqlikni shiddat bilan yutadi!"
    },
    "realLifeApp": "Muzlatgichlar va konditsionerlar aynan freon gazining siqilib suyuqlikka aylanishi va so'ng evaporator trubkalarida bug'lanib atrofidan issiqlikni yutishi hisobiga xonalarni muzdek saqlaydi.",
    "audioScript": "Suvning bug'lanishi har qanday haroratda sodir bo'ladi, ammo qaynash muayyan haroratda boshlanadi. Tog'larda atmosfera bosimi past bo'lgani uchun suv 100 darajaga yetmasdan qaynab ketadi.",
    "quiz": [
      {
        "q": "Normal atmosfera bosimida toza suv necha daraja Selsiyda qaynaydi?",
        "options": [
          "100 C",
          "0 C",
          "50 C",
          "200 C"
        ],
        "answer": 0,
        "exp": "Normal bosimda (101.3 kPa) suv aynan 100 daraja Selsiyda qaynaydi."
      },
      {
        "q": "Bug'lanish qaynashdan nima bilan farq qiladi?",
        "options": [
          "Bug'lanish har qanday haroratda faqat sirtda ro'y beradi",
          "Bug'lanish faqat 100 gradusda bo'ladi",
          "Bug'lanishda pufakchalar otilib chiqadi",
          "Bug'lanish hech qachon yuz bermaydi"
        ],
        "answer": 0,
        "exp": "Bug'lanish ixtiyoriy haroratda suyuqlik sirtidan uchib chiqadigan tez molekulalar hisobiga sodir bo'ladi."
      },
      {
        "q": "Tog' cho'qqisida suv nega tezroq (past haroratda) qaynaydi?",
        "options": [
          "Atmosfera bosimi past bo'lgani uchun",
          "Tog'da havo issiq bo'lgani uchun",
          "Gravitatsiya kuchi yo'qligi sababli",
          "Quyosh yaqin bo'lgani uchun"
        ],
        "answer": 0,
        "exp": "Tog'da atmosfera bosimi kamaygani sababli to'yingan bug' bosimi tashqi bosimga pastroq haroratdayoq tenglashadi."
      }
    ]
  },
  {
    "id": 13,
    "num": 13,
    "title": "Qaytar va qaytmas o‘zgarishlar",
    "slug": "mavzu-13-qaytar-qaytmas-ozgarishlar.html",
    "cat": "Kimyo",
    "icon": "🔄",
    "duration": "15 daqiqa",
    "description": "Fizikaviy qaytar jarayonlar (muzlash, erish) va kimyoviy qaytmas jarayonlar (kuyish, zanglash).",
    "fullTheory": "Tabiatda moddalar doimiy harakatda va o'zgarishda bo'ladi. Qaytar o'zgarishlarda yangi modda hosil bo'lmaydi, moddaning faqat agregat holati, harorati yoki shakli o'zgaradi va sharoit o'zgarganda u o'zining dastlabki holatiga to'liq qaytishi mumkin (masalan, muzning erishi, simning qizishi, eritmadan kristallanish). Qaytmas o'zgarishlarda esa kimyoviy bog'lar uzilib, butunlay yangi xossalarga ega bo'lgan yangi moddalar vujudga keladi (yonish, zanglash, qatiq ivishi, chirish).",
    "keyPoints": [
      "Qaytar jarayonlarda molekulyar tarkib saqlanadi.",
      "Qaytmas jarayonlarga kimyoviy reaksiyalar kiradi.",
      "Rang o'zgarishi, gaz pufakchalari chiqishi, cho'kma tushishi, issiqlik yoki yorug'lik ajralishi kimyoviy qaytmas o'zgarish belgilaridir.",
      "Inson tanasidagi oziq-ovqatning hazm bo'lishi ham qaytmas kimyoviy jarayondir."
    ],
    "funFacts": [
      "Temir zanglaganda uning massasi kamaymaydi, balki havodagi kislorod va suv molekulalarini o'ziga biriktirgani sababli zanglagan temir toza temirdan og'irroq bo'lib qoladi!",
      "Nikel-titan qotishmasidan (nitinol) yasalgan simlar 'shaklni eslab qolish' qobiliyatiga ega: uni qanchalik bukib ezmang, issiq suvga solishingiz bilan dastlabki to'g'ri shakliga bir soniyada qaytadi."
    ],
    "experiment": {
      "title": "Osh sodasi va sirka reaksiyasi (qaytmas o'zgarish)",
      "steps": "Bir stakanga 1 choy qoshiq osh sodasi soling va ustiga 2 osh qoshiq sirka quying. Kuchli shivirlash bilan karbonat angidrid gazi otilib chiqadi va idish soviydi. Bu yangi moddalar hosil bo'layotgan qaytmas kimyoviy reaksiyadir!"
    },
    "realLifeApp": "Metall konstruksiyalarni korroziyadan (zanglashdan) asrash uchun ularni galvanik usulda rux (tsink) yoki polimer bo'yoqlar bilan qoplab, qaytmas zanglash jarayonining oldi olinadi.",
    "audioScript": "Moddalar doim o'zgarib turadi. Muz erib suvga aylanadi va qayta muzlatilishi mumkin — bu qaytar jarayon. Ammo qog'oz yonib kulga aylangach, uni ortga qaytarib bo'lmaydi — bu qaytmas o'zgarishdir.",
    "quiz": [
      {
        "q": "Quyidagilardan qaysi biri qaytar o'zgarishga misol bo'ladi?",
        "options": [
          "Muzning erishi va suvning muzlashi",
          "Tuxumning pishishi",
          "Daraxt yog'ochining yonishi",
          "Temirning zanglashi"
        ],
        "answer": 0,
        "exp": "Muz erib suv bo'lgach, uni qayta sovutib yana muzga aylantirish mumkin."
      },
      {
        "q": "Qog'oz yonib kul bo'lganda qanday o'zgarish sodir bo'ladi?",
        "options": [
          "Qaytmas kimyoviy o'zgarish",
          "Qaytar fizik o'zgarish",
          "Mexanik o'zgarish",
          "Biologik ko'payish"
        ],
        "answer": 0,
        "exp": "Yonish natijasida qog'oz tarkibi parchalanib yangi moddalar (kul, gaz) hosil bo'ladi."
      },
      {
        "q": "Shakar suvda erishi qanday o'zgarish hisoblanadi?",
        "options": [
          "Fizikaviy qaytar jarayon (suv bug'lansa shakar qoladi)",
          "Qaytmas yadro reaksiyasi",
          "Zaharlanish jarayoni",
          "Muzlash hodisasi"
        ],
        "answer": 0,
        "exp": "Suvni bug'latish orqali shakarni yana qattiq holatda qaytarib olish mumkin."
      }
    ]
  },
  {
    "id": 14,
    "num": 14,
    "title": "Fizik o‘zgarishlar dunyosi",
    "slug": "mavzu-14-fizik-ozgarishlar.html",
    "cat": "Fizika",
    "icon": "🧊",
    "duration": "14 daqiqa",
    "description": "Shakl, hajm, agregat holat o'zgarishlari, sinish, egilish va mexanik deformatsiya hodisalari.",
    "fullTheory": "Fizik o'zgarishlar — bu moddaning kimyoviy tarkibi o'zgarmagan holda uning fazoviy joylashuvi, o'lchamlari, shakli, harorati yoki agregat holatining o'zgarishidir. Bunga misol qilib jismning sinishi, maydalanishi, magnitlanishi, elastik cho'zilishi yoki erishini keltirish mumkin. Moddani tashkil qiluvchi atomlar va molekulalar orasidagi kimyoviy bog'lar butun qoladi, faqat molekulalararo masofa va ularning tartibi o'zgaradi.",
    "keyPoints": [
      "Fizik hodisalarda yangi modda hosil bo'lmaydi.",
      "Deformatsiya (cho'zilish, siqilish, buralish) mexanik fizik o'zgarishdir.",
      "Moddaning qattiq, suyuq, gaz va plazma holatiga o'tishi fizik o'zgarishdir.",
      "Shisha maydalanganda uning har bir zarrasi shisha molekulasi bo'lib qolaveradi."
    ],
    "funFacts": [
      "Suv tabiatdagi yagona moddaki, u tabiiy sharoitda bir vaqtning o'zida uchala agregat holatda (muz, suv, bug') erkin uchraydi!",
      "Temir qizdirilganda hajmi kengayadi. Shu sababli Fransiyadagi Eyfel minorasi yoz oylarida qishdagiga qaraganda 15 santimetr balandroq bo'lib qoladi."
    ],
    "experiment": {
      "title": "Plastik va elastik deformatsiyani solishtirish",
      "steps": "Qo'lingizga rezinka tasma va bir bo'lak plastilin oling. Rezinkani cho'zib qo'yib yuboring — u dastlabki shakliga qaytadi (elastik fizik deformatsiya). Plastilinni esa ezsangiz, u ezilganicha qoladi (plastik deformatsiya)!"
    },
    "realLifeApp": "Temir yo'l relslari yotqizilganda temirning issiqda fizik kengayishini hisobga olib, relslar tutashgan joyda kichik oraliq tirqishlar qoldiriladi, aks holda yozda relslar qiyshayib ketadi.",
    "audioScript": "Fizik o'zgarishlarda yangi modda hosil bo'lmaydi. Faqat jismning shakli, o'lchami yoki agregat holati o'zgaradi. Masalan, shisha singanda u shishaligicha qoladi.",
    "quiz": [
      {
        "q": "Fizik o'zgarishning asosiy xususiyati nima?",
        "options": [
          "Yangi modda hosil bo'lmasligi",
          "Doimo portlash bo'lishi",
          "Yangi atomlar yaratilishi",
          "Doimo rang o'zgarishi"
        ],
        "answer": 0,
        "exp": "Fizik jarayonlarda molekula tarkibi saqlanadi, faqat fazoviy holati yoki jism shakli o'zgaradi."
      },
      {
        "q": "Muzning erib suvga, so'ng bug'ga aylanishida nima o'zgaradi?",
        "options": [
          "Moddaning agregat holati",
          "Kimyoviy formulasi",
          "Atomlarning soni",
          "Gravitatsiya kuchi"
        ],
        "answer": 0,
        "exp": "H2O molekulalari orasidagi masofa va harakat turi o'zgaradi, formula esa bir xil qoladi."
      },
      {
        "q": "Temir mixning bolg'a bilan egilishi qanday hodisa?",
        "options": [
          "Fizik deformatsiya",
          "Kimyoviy yonish",
          "Biologik sintez",
          "Optik qaytish"
        ],
        "answer": 0,
        "exp": "Shakl o'zgarishi mexanik fizik jarayondir."
      }
    ]
  },
  {
    "id": 15,
    "num": 15,
    "title": "Moddalarning erish jarayoni",
    "slug": "mavzu-15-moddalarning-erishi.html",
    "cat": "Kimyo",
    "icon": "💧",
    "duration": "17 daqiqa",
    "description": "Erituvchi va eruvchi modda, eritmalar turlari (to'yingan, to'yinmagan), harorat va aralashtirishning erishga ta'siri.",
    "fullTheory": "Erish — bu eruvchi modda zarrachalarining erituvchi molekulalari bilan o'zaro ta'sirlashib, bir jinsli (gomogen) tizim hosil qilishidan iborat fizik-kimyoviy jarayondir. Erituvchi — agregat holati o'zgarmagan yoki miqdori ko'p bo'lgan moddadir (ko'pincha suv). Eruvchi modda esa maydalanib eritmaga tarqaladi. Muayyan haroratda berilgan erituvchida ortiq eriy olmaydigan eritma to'yingan eritma deyiladi. Qattiq moddalarning eruvchanligi odatda harorat oshganda ortadi, gazlarning eruvchanligi esa aksincha pasayadi.",
    "keyPoints": [
      "Suv — tabiatdagi eng buyuk va universal erituvchidir.",
      "Diffuziya jarayoni tufayli eritma butun hajm bo'ylab bir xil konsentratsiyaga ega bo'ladi.",
      "Haroratni oshirish, maydalash va aralashtirish qattiq moddalarning erish tezligini oshiradi.",
      "Gazlangan ichimlik qizdirilganda gaz eruvchanligi pasayib, pufakchalar otilib chiqadi."
    ],
    "funFacts": [
      "O'lik dengiz suvida tuz konsentratsiyasi shu qadar yuqoriki (33 foizdan ortiq to'yingan eritma), uning zichligi inson tanasidan og'ir bo'lgani sababli odam suv yuzasida cho'kmasdan bemalol kitob o'qib yotishi mumkin!",
      "Dengiz suvida deyarli barcha Mendeleyev davriy jadvali elementlari, hatto millionlab tonna oltin va kumush ham erigan holda mavjud."
    ],
    "experiment": {
      "title": "Haroratning erish tezligiga ta'sirini solishtirish",
      "steps": "Bir stakanga muzdek sovuq suv, ikkinchisiga qaynoq suv quying. Ikkalasiga bir xil miqdorda 1 qoshiqdan shakar soling va aralashtirmay kuzating. Qaynoq suvdagi shakar molekulalarining harakati tezligi sababli bir necha baravar tez erib ketishini ko'rasiz!"
    },
    "realLifeApp": "Farmatsevtikada dorilarning qonga tez so'rilishi uchun tabletkalarni tez eruvchan mikrokristallar yoki tomchilar (eritma) shaklida ishlab chiqaradilar.",
    "audioScript": "Moddalarning erishi — hayotimizdagi eng ko'p uchraydigan fizik-kimyoviy jarayonlardan biridir. Bir stakan choyga solingan shakar suv molekulalari orasiga tarqalib, bir jinsli eritma hosil qiladi.",
    "quiz": [
      {
        "q": "Sho'r suvda erituvchi nima?",
        "options": [
          "Suv",
          "Tuz",
          "Idish",
          "Havo"
        ],
        "answer": 0,
        "exp": "Ko'p miqdorda bo'lgan va agregat holatini saqlab qolgan komponent erituvchi deyiladi — bu yerda suv."
      },
      {
        "q": "Qattiq moddalar (tuz, shakar) issiq suvda nega tez eriydi?",
        "options": [
          "Molekulalar issiqda tezroq harakatlanadi va diffuziya kuchayadi",
          "Molekulalar to'xtab qoladi",
          "Suv og'irlashadi",
          "Gravitatsiya yo'qoladi"
        ],
        "answer": 0,
        "exp": "Harorat ko'tarilganda suv molekulalarining kinetik energiyasi ortib, kristall panjarani tezroq buzadi."
      },
      {
        "q": "Erituvchida boshqa eri olmaydigan holatdagi eritma nima deyiladi?",
        "options": [
          "To'yingan eritma",
          "To'yinmagan eritma",
          "Suyultirilgan eritma",
          "Gazli eritma"
        ],
        "answer": 0,
        "exp": "Muayyan haroratda berilgan moddadan ortiq eri olmaydigan eritma to'yingan eritma deyiladi."
      }
    ]
  },
  {
    "id": 16,
    "num": 16,
    "title": "Massa, og‘irlik va gravitatsiya kuchi",
    "slug": "mavzu-16-massa-ogirlik-gravitatsiya.html",
    "cat": "Fizika",
    "icon": "⚖️",
    "duration": "19 daqiqa",
    "description": "Massa (skalyar inertlik o'lchovi) va og'irlik (kuch, vektor) tushunchalari, Nyutonning butun olam tortishish qonuni.",
    "fullTheory": "Kundalik hayotda 'massa' va 'og'irlik' so'zlari adashtiriladi, biroq fizikada ular mutlaqo boshqa tushunchalardir. Massa (m) — jismning inertlik va gravitatsion xossasini ifodalovchi skalyar kattalik bo'lib, uning qiymati koinotning hamma nuqtasida o'zgarmasdir (birligi: kilogramm, kg). Og'irlik (P) esa gravitatsiya ta'sirida jismning gorizontal tayanchga yoki vertikal osilmaga ko'rsatadigan kuchidir (birligi: Nyuton, N). Og'irlik kuchi formulasi: F = m · g, bu yerda g — erkin tushish tezlanishi (Yer sirtida g ≈ 9.8 N/kg).",
    "keyPoints": [
      "Massa — tarozi bilan o'lchanadi va hamma joyda bir xil (kg).",
      "Og'irlik — dinamometr bilan o'lchanadigan kuch (N).",
      "Oyda gravitatsiya kuchi Yerdagidan 6 barobar kichik, Yupiterda esa 2.5 barobar katta.",
      "Tayanch bo'lmagan erkin tushish holatida jism vaznsizlik holatiga tushadi."
    ],
    "funFacts": [
      "Agar siz Yerda 60 kg tosh bossangiz, Oyda sizning massangiz baribir 60 kg bo'lib qoladi, ammo og'irligingiz atigi 10 kg ga teng kuch hosil qiladi va siz 3 metr balandlikka bemalol sakray olasiz!",
      "Xalqaro Kosmik Stansiyadagi (XKS) kosmonavtlar yerga yaqin orbitada aylanayotgani uchun uzluksiz erkin tushish (vaznsizlik) holatida muallaq suzadilar."
    ],
    "experiment": {
      "title": "Suvli stakan bilan vaznsizlikni namoyish qilish",
      "steps": "Plastik stakan tubining yon tomonida kichik teshikcha oching. Barmog'ingiz bilan teshikni yopib, suv quying. Barmog'ingizni olsangiz, suv favvora bo'lib oqadi. Endi stakanni balanddan qo'yib yuboring: stakan havoda tushayotgan paytda teshikdan bir tomchi ham suv oqmaydi — chunki erkin tushishda suv vaznsizlik holatida bo'ladi!"
    },
    "realLifeApp": "Kosmik kemalarning trayektoriyasini hisoblash, sun'iy yo'ldoshlarni orbitaga chiqarish va baland kranlarning yuk ko'tarish me'yorini belgilash aynan gravitatsiya qonunlariga asoslanadi.",
    "audioScript": "Ko'pchilik massa va og'irlikni bir xil narsa deb o'ylaydi, ammo ular fizik jihatdan farq qiladi. Massa — jismning o'zgarmas inertlik o'lchovidir. Og'irlik esa gravitatsiya ta'sirida tayanchga ko'rsatilgan kuchdir.",
    "quiz": [
      {
        "q": "Xalqaro birliklar sistemasida massa qanday birlikda o'lchanadi?",
        "options": [
          "Kilogramm (kg)",
          "Nyuton (N)",
          "Metr (m)",
          "Joul (J)"
        ],
        "answer": 0,
        "exp": "Massaning SI tizimidagi asosiy birligi kilogrammdir."
      },
      {
        "q": "Odam Oyga borsa uning qaysi kattaligi o'zgaradi?",
        "options": [
          "Og'irligi kamayadi, massasi o'zgarmaydi",
          "Massasi kamayadi, og'irligi bir xil qoladi",
          "Ikkalasi ham nolga teng bo'ladi",
          "Ikkalasi ham 10 marta ortadi"
        ],
        "answer": 0,
        "exp": "Massa o'zgarmas qoladi, lekin Oyda erkin tushish tezlanishi kichik bo'lgani uchun og'irlik 6 marta kamayadi."
      },
      {
        "q": "Og'irlik kuchi formulasini ko'rsating:",
        "options": [
          "F = m * g",
          "F = m / g",
          "F = m + g",
          "F = v * t"
        ],
        "answer": 0,
        "exp": "Og'irlik kuchi massa bilan erkin tushish tezlanishining ko'paytmasiga teng: F = m*g."
      }
    ]
  },
  {
    "id": 17,
    "num": 17,
    "title": "Harakatlanayotgan jismlarga ta’sir qiluvchi kuchlar",
    "slug": "mavzu-17-tasir-qiluvchi-kuchlar.html",
    "cat": "Fizika",
    "icon": "🚀",
    "duration": "18 daqiqa",
    "description": "Ishqalanish kuchi, havoning qarshilik kuchi, tortish kuchi va ularning harakat tezligiga ta'siri.",
    "fullTheory": "Harakatlanayotgan har qanday real jismga bir vaqtning o'zida bir nechta kuchlar ta'sir ko'rsatadi. Dvigatelning tortish kuchi jismni oldinga siljitsa, yuzalar orasidagi ishqalanish kuchi (tinchlikdagi, sirpanishdagi va dumalanishdagi) hamda havo yoki suv muhitining qarshilik kuchi harakatga qarama-qarshi yo'naladi. Nyutonning birinchi qonuniga ko'ra, agar jismga ta'sir qiluvchi barcha kuchlar muvozanatlashsa (teng ta'sir etuvchi kuch nolga teng bo'lsa), jism to'g'ri chiziqli tekis harakatini davom ettiradi.",
    "keyPoints": [
      "Ishqalanish kuchi doimo nisbiy harakat yo'nalishiga teskari ta'sir etadi.",
      "Dumalanish ishqalanishi sirpanish ishqalanishidan o'nlab barobar kichik bo'ladi (g'ildirakning mo'jizasi).",
      "Moylash va podshipniklar orqali zararli ishqalanish keskin kamaytiriladi.",
      "Aerodinamik tomchisimon shakl havo qarshiligini kamaytirib, tezlikni oshirishga yordam beradi."
    ],
    "funFacts": [
      "Agar koinotda ishqalanish kuchi butunlay yo'qolib qolsa, biz bir qadam ham olg'a siljiy olmasdik, tugilgan iplar yechilib ketardi va hech bir mashina tormoz berib to'xtay olmasdi!",
      "Yaponiyaning tezyurar 'Shinkansen' poyezdlarining burni baliqchi qush tumshug'iga o'xshatib yasalgan bo'lib, bu havoning qarshilik kuchini 30 foizga kamaytiradi."
    ],
    "experiment": {
      "title": "Sirpanish va dumalanish ishqalanishini solishtirish",
      "steps": "Qalin kitobni stolda suring — biroz kuch talab qilinadi. Endi kitob ostiga 4 dona dumaloq qalam qo'yib suring — kitob bir barmog'ingiz teginishi bilan sirpanib ketadi. Dumalanish kuchining afzalligini amalda ko'rasiz!"
    },
    "realLifeApp": "Poyga avtomobillari (Formula 1), samolyotlar va tezyurar poyezdlar havoning qarshilik kuchini minimallashtirish uchun aerodinamik quvurlarda sinovdan o'tkaziladi.",
    "audioScript": "Har qanday harakatdagi jismga kuchlar ta'sir etadi. Avtomobil g'ildiraklari bilan yo'l o'rtasida ishqalanish kuchi, havoning qarshiligi va dvigatelning tortish kuchi mavjud.",
    "quiz": [
      {
        "q": "Ishqalanish kuchi qaysi tomonga yo'nalgan bo'ladi?",
        "options": [
          "Jism harakatiga qarama-qarshi tomonga",
          "Jism harakati yo'nalishida",
          "Doimo vertikal tepaga",
          "Doimo quyosh tomon"
        ],
        "answer": 0,
        "exp": "Ishqalanish kuchi doimo nisbiy harakatga to'sqinlik qiluvchi yo'nalishda ta'sir ko'rsatadi."
      },
      {
        "q": "Parashyutning yerga sekin tushishiga qaysi kuch yordam beradi?",
        "options": [
          "Havoning qarshilik kuchi",
          "Magnit kuchi",
          "Yadro kuchi",
          "Suvning siqib chiqarish kuchi"
        ],
        "answer": 0,
        "exp": "Parashyut gumbazining katta maydoni havoning qarshilik kuchini keskin oshirib, tushish tezligini sekinlashtiradi."
      },
      {
        "q": "Mashina detallarini moylashdan maqsad nima?",
        "options": [
          "Zararli ishqalanish va yeyilishni kamaytirish",
          "Mashinani og'irlashtirish",
          "Ovozni kuchaytirish",
          "Benziyn sarfini ko'paytirish"
        ],
        "answer": 0,
        "exp": "Moylash sirtlar orasida yupqa qatlam hosil qilib, quruq ishqalanishni suyuq ishqalanishga aylantiradi."
      }
    ]
  },
  {
    "id": 18,
    "num": 18,
    "title": "Yorug‘likning qaytishi",
    "slug": "mavzu-18-yoruglikning-qaytishi.html",
    "cat": "Fizika",
    "icon": "🪞",
    "duration": "16 daqiqa",
    "description": "Yorug'lik nurlari, tushish va qaytish burchaklari qonuni, yassi va sferik ko'zgular.",
    "fullTheory": "Biz o'zidan yorug'lik chiqarmaydigan jismlarni faqat ulardan yorug'lik qaytib ko'zimizga tushgani uchungina ko'ra olamiz. Yorug'likning qaytish qonuni ikki asosiy qoidaga bo'ysunadi: 1) Tushuvchi nur, qaytgan nur va nurning tushish nuqtasiga o'tkazilgan perpendikulyar bir tekislikda yotadi; 2) Tushish burchagi (α) qaytish burchagiga (β) har doim tengdir: α = β. Yassi ko'zguda hosil bo'lgan tasvir to'g'ri, xayoliy (ko'zgu ortida) va jism bilan aynan bir xil o'lchamda bo'ladi.",
    "keyPoints": [
      "Ko'zgu sirti silliq bo'lgani uchun yorug'likni ko'zguli (to'g'ri) qaytaradi.",
      "G'adir-budur yuzalar yorug'likni tarqoq (diffuz) qaytaradi — bu bizga buyumlarni har qanday tomondan ko'rish imkonini beradi.",
      "Botiq ko'zgular nurlarni bitta fokusga to'playdi (projektor va quyosh pechlari).",
      "Qabariq ko'zgular ko'rish maydonini kengaytiradi (avtomobil yon ko'zgulari)."
    ],
    "funFacts": [
      "Qadimgi yunon olimi Arximed Sirakuzani qamal qilgan Rim kemalariga askarlarning mis qalqonlarini botiq ko'zgu kabi yo'naltirib, quyosh nurlari fokusi bilan dushman flotini yondirib yuborgani haqida afsonalar bor!",
      "Oy o'zidan nur chiqarmaydi, u shunchaki o'ziga tushgan quyosh nurining atigi 12 foizini qaytaradi."
    ],
    "experiment": {
      "title": "Qaytish burchagini lazer ko'rsatgich bilan tekshirish",
      "steps": "Qorong'iroq xonada kichik oynani stolga qo'ying. Lazer ko'rsatgichni 45 gradus ostida oynaga yo'naltiring (ozroq kukun yoki tuman sepsangiz nur yaqqol ko'rinadi). Qaytgan nur xuddi shunday 45 gradus burchak ostida devorga tushganini ko'rib, α = β qonunini tasdiqlaysiz!"
    },
    "realLifeApp": "Periskoplar (suvosti kemalarida suv ustini ko'rish qurilmasi), teleskoplar, stomatologik ko'zgular va avtomobil faralari qaytish qonuniga asoslanib ishlaydi.",
    "audioScript": "Yorug'likning qaytishi tufayli biz atrofimizdagi narsalarni va ko'zgudagi o'z aksimizni ko'ramiz. Yorug'lik nuri oynaga qanday burchak ostida tushsa, xuddi shunday burchak ostida qaytadi.",
    "quiz": [
      {
        "q": "Yorug'likning qaytish qonuniga ko'ra tushish burchagi 30 gradus bo'lsa, qaytish burchagi necha gradus bo'ladi?",
        "options": [
          "30 gradus",
          "60 gradus",
          "90 gradus",
          "0 gradus"
        ],
        "answer": 0,
        "exp": "Qaytish qonuni bo'yicha tushish burchagi qaytish burchagiga doimo teng: alpha = beta."
      },
      {
        "q": "Yassi ko'zgudagi tasvir qanday xususiyatga ega?",
        "options": [
          "Xayoliy, to'g'ri va jism o'lchamiga teng",
          "Haqiqiy va teskari o'girilgan",
          "Kichraytirilgan",
          "Faqat qora va oq"
        ],
        "answer": 0,
        "exp": "Yassi ko'zguda hosil bo'ladigan tasvir xayoliy, tik va jism bilan bir xil o'lchamda bo'ladi."
      },
      {
        "q": "Notekis g'adir-budur sirtlardan yorug'lik qanday qaytadi?",
        "options": [
          "Tarqoq (diffuz) qaytadi",
          "Ko'zgu kabi to'g'ri qaytadi",
          "Umuman qaytmaydi",
          "Binafsha rangga aylanadi"
        ],
        "answer": 0,
        "exp": "G'adir-budur yuzalar yorug'likni har tarafga sochib tarqoq qaytaradi, shu sababli buyumlarni har qaysi burchakdan ko'ra olamiz."
      }
    ]
  },
  {
    "id": 19,
    "num": 19,
    "title": "Yorug‘likning sinishi",
    "slug": "mavzu-19-yoruglikning-sinishi.html",
    "cat": "Fizika",
    "icon": "🌈",
    "duration": "17 daqiqa",
    "description": "Optik zichlik, nur yo'nalishining ikki muhit chegarasida o'zgarishi, linzalar va kamalak hodisasi.",
    "fullTheory": "Yorug'lik nuri bir shaffof muhitdan boshqa optik zichlikdagi muhitga (masalan, havodan suvga yoki shishaga) o'tganda uning tarqalish tezligi o'zgaradi va natijada nurning yo'nalishi chegarada sinadi. Nurning vakuumdagi tezligi (300 000 km/s) suvda 225 000 km/s gacha, shishada 200 000 km/s gacha sekinlashadi. Isaak Nyuton oq quyosh nurining shisha prizmada turli burchaklarga sinishi tufayli 7 ta asosiy rangdan iborat kamalak spektriga ajralishini (yorug'lik dispersiyasini) isbotlagan.",
    "keyPoints": [
      "Sinish nurning turli muhitlardagi tezligi har xilligi sababli ro'y beradi.",
      "Optik zichroq muhitga kirganda nur perpendikulyarga qarab og'adi.",
      "Qabariq linzalar nurlarni fokusga to'playdi; botiq linzalar nurlarni sochadi.",
      "Kamalak — quyosh nurining osmondagi millionlab yomg'ir tomchilarida sinishi va qaytishi natijasidir."
    ],
    "funFacts": [
      "Cho'llarda va jazirama issiqda asfalt yo'llarda ko'rinadigan 'sarob' (miraj) — havo qatlamlarining harorati har xil bo'lgani sababli yorug'likning to'liq ichki qaytishi va sinishi natijasida hosil bo'ladi!",
      "Olmos toshining shunchalik jozibali porlashiga sabab uning favqulodda yuqori sinish ko'rsatkichidir: nur uning ichiga kirgach, qirralarida qayta-qayta to'liq qaytadi."
    ],
    "experiment": {
      "title": "Suvda singan qalam tajribasi",
      "steps": "Shaffof shisha stakanga yarim qilib suv quying. Unga oddiy qalamni qiya holda botiring. Yon tomondan qaraganingizda qalam suv chegarasida xuddi ikkiga singandek ko'rinadi — bu yorug'likning sinishi tufayli tasvirning surilishidir!"
    },
    "realLifeApp": "Ko'zoynaklar, mikroskoplar, teleskoplar, fotoapparat obyektivlari va tezkor internet tarmoqlarida ishlatiladigan optik tolali kabellar yorug'likning sinishi qonuniyatlariga tayanadi.",
    "audioScript": "Bir stakan suvga qalam solsangiz, u singandek ko'rinadi. Bu yorug'likning sinishi hodisasidir. Nur havodan suvga o'tganda tezligi sekinlashadi va yo'nalishini o'zgartiradi.",
    "quiz": [
      {
        "q": "Suvga botirilgan qoshiq nega singandek ko'rinadi?",
        "options": [
          "Yorug'lik havoga nisbatan suvda sinishi tufayli",
          "Qoshiq haqiqatda sinib qoladi",
          "Suv qorong'i bo'lgani uchun",
          "Ko'z charchagani uchun"
        ],
        "answer": 0,
        "exp": "Havo va suvning optik zichligi har xil bo'lgani sababli nurlar chegarada sinadi va ko'zimizga tasvir surilib ko'rinadi."
      },
      {
        "q": "Oq quyosh nurining prizmada 7 xil rangga ajralishi nima deyiladi?",
        "options": [
          "Yorug'lik dispersiyasi",
          "Magnitlanish",
          "Kondensatsiya",
          "Diffuziya"
        ],
        "answer": 0,
        "exp": "Nyuton ochgan yorug'lik dispersiyasi tufayli oq yorug'lik turli to'lqin uzunliklariga ajralib spektr hosil qiladi."
      },
      {
        "q": "Quyosh nurlarini bitta nuqtaga to'playdigan linza qaysi?",
        "options": [
          "Yig'uvchi (qabariq) linza",
          "Sochuvchi (botiq) linza",
          "Tekis oyna",
          "Qora qog'oz"
        ],
        "answer": 0,
        "exp": "Qabariq linza o'zidan o'tgan parallel nurlarni bitta fokus nuqtasiga to'playdi."
      }
    ]
  },
  {
    "id": 20,
    "num": 20,
    "title": "Elektr zanjir sxemalari",
    "slug": "mavzu-20-elektr-zanjir-sxemalari.html",
    "cat": "Fizika",
    "icon": "💡",
    "duration": "19 daqiqa",
    "description": "Elektr toki, tok manbayi, kalit, lampochka, o'tkazgich simlar, ketma-ket va parallel ulanishlar.",
    "fullTheory": "Elektr toki — erkin zaryadlangan zarralarning (metallarda elektronlarning) tartibli yo'nalgan harakatidir. Elektr zanjiri 4 ta asosiy qismdan iborat: tok manbayi (batareya, akkumulyator), iste'molchi (lampochka, motor), boshqaruvchi kalit va ulovchi simlar. Ulanish ikki xil bo'ladi: Ketma-ket ulanishda tok kuchi hamma joyda teng (I = const), lekin bitta lampochka kuyib uzilsa, butun zanjir o'chadi. Parallel ulanishda har bir tarmoqdagi kuchlanish teng bo'lib (U = const), bir jihoz uzilsa ham boshqalari mustaqil yonishda davom etadi.",
    "keyPoints": [
      "Tok oqishi uchun elektr zanjiri butun va yopiq bo'lishi shart.",
      "Uyimizdagi barcha rozetkalar va chiroqlar parallel ulanadi.",
      "Ketma-ket zanjirda umumiy qarshilik ortadi: R = R1 + R2.",
      "Qisqa tutashuv — qarshilik deyarli nolga tushib, tok kuchi xavfli darajada oshishi natijasida simlar qizib ketishi hodisasidir."
    ],
    "funFacts": [
      "Sim ichidagi alohida elektronlarning to'g'ri chiziqli harakat tezligi juda sekin (sekundiga atigi bir necha millimetr), ammo elektr maydonining tarqalish tezligi yorug'lik tezligiga (300 000 km/s ga) yaqin!",
      "Yangi yil archa chiroqlari qadimda ketma-ket ulangan — bitta lampochka kuysa, bolalar butun sim bo'ylab aynan qaysi lampochka kuyganini soatlab qidirishga majbur bo'lishgan."
    ],
    "experiment": {
      "title": "Limonli batareya yasash tajribasi",
      "steps": "Bitta suvli limonga bitta mis tanga va bitta ruxlangan temir mix tiqing. Multimetr simlarini ularga tekkizsangiz, limon sharbati elektrolit vazifasini bajarib, 0.9 Volt atrofida haqiqiy elektr toki hosil qilayotganini ko'rasiz!"
    },
    "realLifeApp": "Smartfonlar, robototexnika platalari va uylarning elektr ta'minoti xavfsiz avtomat saqlagichlar bilan jihozlangan parallel elektr zanjirlari asosida montaj qilinadi.",
    "audioScript": "Elektr toki bizning uylarimizni yoritadi va asboblarni harakatga keltiradi. Tok manbayi, o'tkazgich simlar, iste'molchi va kalit birgalikda elektr zanjirini hosil qiladi.",
    "quiz": [
      {
        "q": "Uylardagi barcha elektr jihozlari qaysi usulda ulanadi?",
        "options": [
          "Parallel usulda",
          "Ketma-ket usulda",
          "Tasodifiy usulda",
          "Faqat bir simli usulda"
        ],
        "answer": 0,
        "exp": "Parallel ulanishda bir xonadagi chiroq o'chsa ham, boshqa asboblar mustaqil ishlashda davom etadi."
      },
      {
        "q": "Elektr toki oqishi uchun zanjir qanday holatda bo'lishi shart?",
        "options": [
          "Zanjir yopiq (butun) bo'lishi",
          "Zanjir uzilgan bo'lishi",
          "Suvga botirilgan bo'lishi",
          "Faqat quyoshda turishi"
        ],
        "answer": 0,
        "exp": "Tok oqishi uchun tok manbayidan chiqqan zaryadlar manfiy qutbga erkin qayta oladigan yopiq halqa hosil bo'lishi lozim."
      },
      {
        "q": "Sxemada galvanik element (batareya) qanday belgilanadi?",
        "options": [
          "Biri uzun ingichka, biri kalta qalin parallel chiziqlar bilan",
          "Doira ichidagi krest bilan",
          "Faqat to'lqinli chiziq bilan",
          "Uchburchak bilan"
        ],
        "answer": 0,
        "exp": "Batareya sxemalarda uzun ingichka chiziq (+) va kalta qalinroq chiziq (-) ko'rinishida tasvirlanadi."
      }
    ]
  },
  {
    "id": 21,
    "num": 21,
    "title": "Tog‘ jinslarining turlari",
    "slug": "mavzu-21-tog-jinslarining-turlari.html",
    "cat": "Geologiya",
    "icon": "⛰️",
    "duration": "16 daqiqa",
    "description": "Magmatik (otqindi), cho'kindi va metamorfik tog' jinslari, ularning kelib chiqishi va xususiyatlari.",
    "fullTheory": "Yer qobig'i (litosfera) minerallarning tabiiy birikmasidan iborat bo'lgan tog' jinslaridan tashkil topgan. Ular kelib chiqishiga (genezisiga) qarab uchta katta guruhga bo'linadi: 1) Magmatik jinslar — yer qa'ridagi erigan qaynoq magmaning sovishi va kristallanishidan hosil bo'ladi (granit, bazalt, pemza); 2) Cho'kindi jinslar — suv, shamol va muzliklar ta'sirida to'plangan qatlamlar hamda o'lik jonzotlar qoldiqlaridan hosil bo'ladi (ohaktosh, qumtosh, bo'r, toshko'mir); 3) Metamorfik jinslar — dastlabki jinslarning chuqur qatlamlardagi ulkan bosim va yuqori harorat ostida tubdan qayta o'zgarishidan paydo bo'ladi (ohaktosh marmarga, granit gneysga aylanadi).",
    "keyPoints": [
      "Magmatik jinslar Yer po'stlog'i massasining 65 foizini tashkil qiladi.",
      "Cho'kindi jinslar qatlam-qatlam bo'lib joylashadi va ularda qazilma boyliklar ko'p bo'ladi.",
      "Metamorfizm toshlarning kristall tuzilishini mutlaqo o'zgartirib, ularni yanada mustahkam qiladi.",
      "Pemza (pemza toshi) — lava otilganda gaz pufakchalari ko'p bo'lgani sababli suvda cho'kmaydigan yagona toshdir."
    ],
    "funFacts": [
      "Marmar toshi qachonlardir qadimgi dengiz tubidagi mayda chig'anoqlar va ohaktosh qatlamlari bo'lgan bo'lib, million yillar davomida yer ostidagi vulqon issig'ida pishib, nafis marmarga aylangan!",
      "Dunyodagi eng qattiq tabiiy mineral — olmos va eng yumshoq yozuvchi mineral — grafit ikkalasi ham aynan bir xil kimyoviy element — toza ugleroddan (C) tashkil topgan."
    ],
    "experiment": {
      "title": "Ohaktoshni kislota bilan aniqlash tajribasi",
      "steps": "Bir bo'lak oddiy bo'r yoki ohaktosh toshiga bir tomchi sirka tomizing. Darhol pufakchalar chiqib 'qaynash' boshlanadi — bu ohaktosh tarkibidagi kalsiy karbonat (CaCO3) kislota bilan reaksiyaga kirishib karbonat angidrid ajratayotganini ko'rsatadi!"
    },
    "realLifeApp": "Geologlar foydali qazilmalarni, neft, gaz, oltin va binokorlikda ishlatiladigan granit va marmar konlarini qidirishda tog' jinslari qatlamlarining xaritasidan foydalanadilar.",
    "audioScript": "Yer qobig'i xilma-xil tog' jinslaridan tashkil topgan. Ular paydo bo'lishiga ko'ra uch guruhga bo'linadi: otqindi magma jinslari, suv va shamol cho'ktirgan cho'kindi jinslar hamda chuqurlikda o'zgargan metamorfik jinslar.",
    "quiz": [
      {
        "q": "Magmaning yer ostida sekin sovishidan qaysi qattiq jins hosil bo'ladi?",
        "options": [
          "Granit",
          "Ohaktosh",
          "Torfdosh",
          "Bo'r"
        ],
        "answer": 0,
        "exp": "Granit magmatik jins bo'lib, yer qa'rida asta-sekin kristallanib ulkan mustahkamlikka ega bo'ladi."
      },
      {
        "q": "Ohaktosh yuqori harorat va bosim ta'sirida qaysi nafis toshga aylanadi?",
        "options": [
          "Marmarga",
          "Qumtoshga",
          "Bazaltga",
          "Ko'mirga"
        ],
        "answer": 0,
        "exp": "Ohaktosh metamorfizm jarayonida qayta kristallanib, binokorlikda mashhur marmar toshini hosil qiladi."
      },
      {
        "q": "O'simlik qoldiqlarining million yillar davomida ko'milib qolishidan nima paydo bo'ladi?",
        "options": [
          "Toshko'mir",
          "Granit",
          "Olmos toshi",
          "Muzlik"
        ],
        "answer": 0,
        "exp": "Toshko'mir qadimgi paporotnik va daraxt qoldiqlarining havosiz cho'kishidan yuzaga kelgan organik cho'kindi jinsdir."
      }
    ]
  },
  {
    "id": 22,
    "num": 22,
    "title": "Togʻ jinslarining oʻzgarishi va toshqotgan qoldiqlar",
    "slug": "mavzu-22-tog-jinslari-va-toshqotganlar.html",
    "cat": "Geologiya",
    "icon": "🦴",
    "duration": "18 daqiqa",
    "description": "Nurash jarayonlari (fizik, kimyoviy, biologik), toshqotgan qoldiqlar (fossiliyalar) va paleontologiya fani.",
    "fullTheory": "Hatto eng mustahkam magmatik qoyalar ham abadiy emas. Ular nurash (yemirilish) jarayoniga uchraydi. Nurash uch turga bo'linadi: Fizik nurash (kunduzgi va tungi harorat keskin farqi, qoyalar yorig'idagi suvning muzlab toshni yorishi), Kimyoviy nurash (suv, kislorod va karbonat kislota ta'sirida erib o'zgarishi) va Biologik nurash (daraxt ildizlari va lishayniklar toshlarni parchalashi). Suv havzalari tubida tosh qatlamlari hosil bo'layotganda, u yerga ko'milib qolgan jonzot suyaklari minerallashib, toshqotgan qoldiqlarga (fossiliyalarga) aylanadi.",
    "keyPoints": [
      "Nurash tog'larni maydalab qum, gil va tuproqqa aylantiradi.",
      "Suv muzlaganda 9% ga kengayadi va qoyalarni portlovchi kuch bilan yoradi.",
      "Fossiliyalar — Yer yuzining million yillik tarixini so'zlovchi toshlangan hujjatlardir.",
      "Paleontologlar toshqotgan suyaklar va izlar orqali dinozavrlarning tuzilishi va yashash tarzini tiklaydilar."
    ],
    "funFacts": [
      "Dunyo bo'ylab topilgan eng qadimgi toshqotgan bakteriyalar izining (stromatolitlarning) yoshi 3.5 milliard yildan oshadi!",
      "Qadimgi qarag'ay daraxtlarining qotib qolgan yelim smolasi bo'lgan qahrabo (yantar) toshlari ichida 50 million yil oldingi pashsha va o'rgimchaklar tirikdek saqlanib qolgan."
    ],
    "experiment": {
      "title": "Gips yordamida sun'iy fossiliya nusxasini yasash",
      "steps": "Plastilin ustiga chig'anoq yoki daraxt bargini qattiq bosing va iz qoldirib oling. So'ng suv bilan aralashtirilgan gips eritmasini ushbu qolipga quying. 1 soatdan keyin qotgan gipsni olsangiz, xuddi haqiqiy qazilma toshqotgan qoldiq kabi relyefli nusxa hosil bo'ladi!"
    },
    "realLifeApp": "Geologik yoshni aniqlashda paleontologik fosiliyalar yo'l ko'rsatuvchi indikator vazifasini bajaradi va aynan qaysi qatlamda neft yoki ko'mir borligini aniqlashda asosiy omil hisoblanadi.",
    "audioScript": "Hatto eng mustahkam tog'lar ham abadiy emas. Harorat o'zgarishi va suv ta'sirida ular yemirilib qumga aylanadi. Tosh qatlamlari orasida esa qadimda yashagan jonzotlarning qoldiqlari qotib qoladi.",
    "quiz": [
      {
        "q": "Toshqotgan qoldiqlarni (fossiliyalarni) o'rganuvchi fan nima deyiladi?",
        "options": [
          "Paleontologiya",
          "Astronomiya",
          "Botanika",
          "Optika"
        ],
        "answer": 0,
        "exp": "Paleontologiya fani qadimgi o'tmishda yashagan hayvonlar va o'simliklarning toshqotgan qoldiqlarini o'rganadi."
      },
      {
        "q": "Qoya yoriqlariga kirgan suv muzlaganda nima sodir bo'ladi?",
        "options": [
          "Hajmi kengayib toshni yoradi (fizik nurash)",
          "Toshni eritiyub yo'q qiladi",
          "Toshni yumshatib yopishtiradi",
          "Hech qanday o'zgarish bo'lmaydi"
        ],
        "answer": 0,
        "exp": "Suv muzlaganda 9 foizga kengayadi va qoyalarni kuchli bosim bilan parchalab yuboradi."
      },
      {
        "q": "Fossiliyalar ko'pincha qaysi tog' jinslarida uchraydi?",
        "options": [
          "Cho'kindi jinslarda (ohaktosh, loytosh)",
          "Qaynoq lava va bazaltda",
          "Metamorfik gneysda",
          "Yerning yadrosida"
        ],
        "answer": 0,
        "exp": "Cho'kindi jinslar qatlam-qatlam bo'lib sokin cho'kkani sababli tirik mavjudot suyaklari va izlari chirimasdan saqlanib qoladi."
      }
    ]
  },
  {
    "id": 23,
    "num": 23,
    "title": "Tuproq turlari va xususiyatlari",
    "slug": "mavzu-23-tuproq-turlari.html",
    "cat": "Tuproqshunoslik",
    "icon": "🪴",
    "duration": "16 daqiqa",
    "description": "Qumli, gilli, qumloq, soz tuproqlar, qora tuproq, ularning suv o'tkazuvchanligi va unumdorligi.",
    "fullTheory": "Tuproq — litosferaning eng ustki yumshoq va unumdor qatlami bo'lib, u tog' jinslarining asrlar davomida nurashi hamda o'simlik va hayvon qoldiqlarining chirindisi (gumus) qo'shilishidan hosil bo'ladi. Zarrachalarning o'lchamiga qarab tuproqlar: Qumli tuproq (donador, suvni juda tez o'tkazadi, ozuqani ushlab turolmaydi), Gilli tuproq (juda mayda zarrachalar, suvni ushlab loyga aylanadi, quriganda toshdek yoriladi), Qumloq va soz tuproqlar (o'rtacha, dehqonchilik uchun qulay) hamda Qora tuproq (chernozyom — chirindiga boy, eng yuqori hosil beruvchi qatlam)ga bo'linadi.",
    "keyPoints": [
      "Tuproq hosil bo'lishi uchun 1 santimetr qatlamga 100 yildan 300 yilgacha vaqt kerak bo'ladi.",
      "Gumus (chirindi) miqdori tuproqning rangi to'qligini va hosildorligini belgilaydi.",
      "Tuproqning suv o'tkazuvchanligi va havo sig'imi uning mexanik tarkibiga bog'liq.",
      "Eroziya — shamol va suv toshqini ta'sirida unumdor tuproqning uchib yoki yuvilib ketishidir."
    ],
    "funFacts": [
      "Bir choy qoshiq unumdor bog' tuprog'ida Yer yuzidagi barcha insonlar sonidan ham ko'proq — 8 milliarddan ortiq foydali mikroorganizmlar yashaydi!",
      "Chernozyom (qora tuproq) qatlamining qalinligi ba'zi mintaqalarda 1.5 metrgacha yetadi va unda gumus miqdori 10-15 foizni tashkil qiladi."
    ],
    "experiment": {
      "title": "Qumli va gilli tuproqning suv o'tkazishini solishtirish",
      "steps": "Ikkita voronkaga doka qo'ying: biriga toza qum, ikkinchisiga quruq ezilgan gil soling. Ikkalasiga teng miqdorda (100 ml) suv quying. Qumdan suv bir necha soniyada oqib o'tishini, gildan esa suv juda sekin tomchilashini ko'rib, tuproq turlarining farqini aniqlaysiz!"
    },
    "realLifeApp": "Agronomlar ekin ekishdan oldin dalalarning tuproq tarkibini tahlil qilib, qaysi yerga ko'proq sug'orish kerakligi va qaysi yerga organik o'g'it zarurligini aniqlaydilar.",
    "audioScript": "Tuproq — yerning ustki hosildor qatlamidir. U o'simliklarga suv va ozuqa beradi. Qumli, gilli va bo'z tuproqlar o'zining tuzilishi hamda namlikni saqlashi bilan bir-biridan farq qiladi.",
    "quiz": [
      {
        "q": "Tuproq unumdorligini belgilovchi asosiy organik modda nima?",
        "options": [
          "Gumus (chirindi)",
          "Toza qum",
          "Daryo shag'ali",
          "Osh tuzi"
        ],
        "answer": 0,
        "exp": "Gumus o'simlik va hayvon qoldiqlarining mikroorganizmlar ta'sirida parchalanishidan hosil bo'lib, unumdorlik asosidir."
      },
      {
        "q": "Qaysi tuproq zarrachalari eng mayda va yopishqoq bo'ladi?",
        "options": [
          "Gilli tuproq",
          "Qumli tuproq",
          "Toshli shag'al",
          "Torfli tuproq"
        ],
        "answer": 0,
        "exp": "Gilli tuproq juda mayda zarrachalardan tuzilgan bo'lib, namlanganda loy bo'lib yopishadi va suvni sekin o'tkazadi."
      },
      {
        "q": "Qumli tuproqning asosiy kamchiligi nima?",
        "options": [
          "Suv va ozuqa moddalarni ushlab turolmay tez o'tkazib yuborishi",
          "Umuman qizimasligi",
          "Juda qattiq toshga aylanishi",
          "Havo o'tkazmasligi"
        ],
        "answer": 0,
        "exp": "Qum yirik donador bo'lgani uchun suv undan oqib ketadi va ozuqa yuvilib ketadi."
      }
    ]
  },
  {
    "id": 24,
    "num": 24,
    "title": "Tuproq tarkibi va o‘simliklarning o‘sishi",
    "slug": "mavzu-24-tuproq-tarkibi.html",
    "cat": "Tuproqshunoslik",
    "icon": "🌾",
    "duration": "17 daqiqa",
    "description": "Tuproqdagi havo, suv, mineral tuzlar, chirindi va tirik organizmlarning o'simlik ildizlari bilan aloqasi.",
    "fullTheory": "Tuproq — 4 fazali murakkab tabiiy tizimdir: 1) Qattiq faza (50%) — maydalangan minerallar va chirindi; 2) Suyuq faza (25%) — erigan mineral tuzlar va ozuqa saqlovchi tuproq eritmasi; 3) Gazsimon faza (25%) — o'simlik ildizlari va jonivorlar nafas oladigan tuproq havosi; 4) Tirik faza — chuvalchanglar, hasharotlar, zamburug' va bakteriyalar. O'simliklar o'sishi uchun tuproqdan suv bilan birga uchta asosiy mineral elementni so'rib oladi: Azot (N) — poya va barglarning yashil o'sishi uchun, Fosfor (P) — ildiz va gullash uchun, Kaliy (K) — mevalar pishishi va sovuqqa chidamlilik uchun.",
    "keyPoints": [
      "Tuproq g'ovaklarida suv va havo muvozanati saqlanishi kerak.",
      "Yomg'ir chuvalchanglari tuproqni yeb, uni o'z ichagida foydali gumusga boyitadi va tuproqni aeratsiyalaydi.",
      "Mineral o'g'itlar me'yoridan ortiq solinsa, tuproq sho'rlanib, foydali mikroblar o'lib ketishi mumkin.",
      "Almashlab ekish usuli tuproqning bir tomonlama holdan toyishini oldini oladi."
    ],
    "funFacts": [
      "1 gektar unumdor yerda yashaydigan yomg'ir chuvalchanglari bir yil davomida 50 tonnagacha tuproqni o'z tanasidan o'tkazib, mukammal biologik chirindiga aylantiradi!",
      "Dukkakli o'simliklar (mosh, no'xat, beda) ildizlarida tugunak bakteriyalari yashaydi — ular havodagi gazsimon azotni tutib olib, tuproqni tabiiy o'g'it bilan boyitadi."
    ],
    "experiment": {
      "title": "Tuproqda havo va suv borligini isbotlash",
      "steps": "1) Bir bo'lak quruq tuproqni bir stakan suvga tashlang — darhol pufakchalar otilib chiqadi (bu tuproq ichidagi havodir). 2) Bir hovuch tuproqni temir qopqoqqa solib, olov ustida qizdiring va tepasiga sovuq oyna tuting — oynada suv tomchilari paydo bo'ladi (bu tuproq namligidir)!"
    },
    "realLifeApp": "Issiqxonalarda va zamonaviy gidroponika texnologiyalarida o'simliklarga tuproqsiz suvda aynan NPK (Azot, Fosfor, Kaliy) proporsiyasidagi eritmalarni kompyuter nazoratida berish yo'lga qo'yilgan.",
    "audioScript": "Tuproq — tirik laboratoriyadir. Uning ichida havo, suv, ozuqa tuzlari va milliardlab foydali bakteriyalar yashaydi. O'simlik ildizlari aynan tuproq orqali oziqlanib osmonga bo'y cho'zadi.",
    "quiz": [
      {
        "q": "Tuproq tarkibida havo borligini qanday oddiy tajriba bilan isbotlash mumkin?",
        "options": [
          "Bir bo'lak tuproqni suvga tashlaganda pufakchalar chiqishi bilan",
          "Tuproqni muzlatish bilan",
          "Tuproqni qorong'iga qo'yish bilan",
          "Tuproq rangini tekshirish bilan"
        ],
        "answer": 0,
        "exp": "Tuproq suvga tashlanganda uning g'ovaklaridagi havo siqib chiqariladi va ko'zga ko'rinadigan pufakchalar hosil bo'ladi."
      },
      {
        "q": "O'simliklar o'sishi uchun qaysi uchta mineral element eng zarur hisoblanadi?",
        "options": [
          "Azot (N), Fosfor (P), Kaliy (K)",
          "Oltin, kumush, platina",
          "Geliy, neon, argon",
          "Simob, qo'rg'oshin, mishyak"
        ],
        "answer": 0,
        "exp": "Azot poya va barg o'sishiga, fosfor ildiz va mevalarga, kaliy esa hosildorlik va chidamlilikka javob beradi."
      },
      {
        "q": "Tuproqning tabiiy 'muhandislari' deb qaysi jonzotlar ataladi?",
        "options": [
          "Yomg'ir chuvalchanglari",
          "Chigirtkalar",
          "Kalamushlar",
          "Chivinlar"
        ],
        "answer": 0,
        "exp": "Yomg'ir chuvalchanglari yer ostida yo'lakchalar qazib tuproqni aeratsiyalaydi va chirindini boyitadi."
      }
    ]
  },
  {
    "id": 25,
    "num": 25,
    "title": "Quyosh sistemasi va sayyoralar",
    "slug": "mavzu-25-quyosh-sistemasi.html",
    "cat": "Astronomiya",
    "icon": "🪐",
    "duration": "22 daqiqa",
    "description": "Quyosh, 8 ta asosiy sayyora (ichki tosh sayyoralar va tashqi gaz gigantlari), oylar, asteroidlar va kometalar.",
    "fullTheory": "Quyosh sistemasi — markaziy yulduz bo'lgan Quyosh va uning gravitatsion maydonida aylanuvchi 8 ta yirik sayyora, mitti sayyoralar, asteroidlar kamari, kometalar va meteoritlardan iborat ulkan samoviy oiladir. Sayyoralar ikki guruhga bo'linadi: 1) Yer guruhi (ichki qattiq tosh sayyoralar): Merkuriy, Venera, Yer va Mars; 2) Gaz va muz gigantlari (tashqi ulkan sayyoralar): Yupiter, Saturn, Uran va Neptun. Quyosh butun tizim massasining 99.86% ini tashkil qiladi va uning markazidagi termoyadro reaksiyalari barcha sayyoralarga yorug'lik va issiqlik ulashadi.",
    "keyPoints": [
      "Merkuriy — Quyoshga eng yaqin va eng kichik sayyora.",
      "Venera — qalin karbonat angidrid atmosferasi sababli eng issiq sayyora (+465°C).",
      "Yer — suyuq suv va hayot mavjud bo'lgan yagona ma'lum sayyora.",
      "Mars — tuprog'idagi temir oksidi tufayli 'Qizil sayyora' deb ataladi.",
      "Yupiter — tizimdagi eng ulkan sayyora; Saturn — mashhur muzli halqalari bilan tanilgan.",
      "Mars va Yupiter orbitalari orasida millionlab tosh parchalaridan iborat Asteroidlar kamari joylashgan."
    ],
    "funFacts": [
      "Quyosh shunchalik ulkanki, uning ichiga 1 million 300 mingta Yer sayyorasi sig'ib ketishi mumkin!",
      "Saturn sayyorasining zichligi suv zichligidan ham past (0.69 g/sm³) — agar koinotda Saturn sig'adigan ulkan okean bo'lganida, Saturn cho'kmasdan suv ustida koptokdek suzib yurardi!"
    ],
    "experiment": {
      "title": "Sayyoralar masshtabli masofasini modellashtirish",
      "steps": "Quyoshni to'p deb tasavvur qiling. Undan 10 qadam narida no'xatdek Merkuriyni, 18 qadamda Venerani, 25 qadamda Yerni, 38 qadamda Marsni, 130 qadam narida esa apelsindek Yupiterni joylashtiring. Koinotning naqadar cheksiz va sayyoralar orasidagi bo'shliq ulkan ekanini his qilasiz!"
    },
    "realLifeApp": "Zamonaviy astrofizika va kosmonavtika (NASA, Roskosmos, JAXA) Marsga roverlar ('Perseverance', 'Curiosity') va Yupiter, Saturn yo'ldoshlariga kosmik zondlar yuborib, Yerdan tashqaridagi hayot izlarini o'rganmoqda.",
    "audioScript": "Koinotning sehrli maskani — Quyosh sistemasiga xush kelibsiz! Markazda Quyosh, uning atrofida aylanuvchi 8 ta ajoyib sayyora, yuzlab yo'ldoshlar va sirli asteroidlar kamarini birgalikda kashf etamiz.",
    "quiz": [
      {
        "q": "Quyosh sistemasidagi eng katta sayyora qaysi?",
        "options": [
          "Yupiter",
          "Saturn",
          "Yer",
          "Merkuriy"
        ],
        "answer": 0,
        "exp": "Yupiter Quyosh sistemasidagi eng yirik gaz giganti bo'lib, uning ichiga barcha boshqa sayyoralar sig'ib ketadi."
      },
      {
        "q": "Quyoshga eng yaqin sayyora qaysi?",
        "options": [
          "Merkuriy",
          "Venera",
          "Mars",
          "Neptun"
        ],
        "answer": 0,
        "exp": "Merkuriy Quyoshga eng yaqin sayyora bo'lib, uning yuzasida harorat kunduzi 430 gradusgacha ko'tariladi."
      },
      {
        "q": "Halqalari eng aniq va go'zal ko'rinadigan gigant sayyora qaysi?",
        "options": [
          "Saturn",
          "Mars",
          "Yer",
          "Venera"
        ],
        "answer": 0,
        "exp": "Saturn sayyorasi muz va tosh bo'laklaridan iborat ulkan va yorqin halqalari bilan mashhurdir."
      }
    ]
  }
];
