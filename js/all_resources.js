const allResourcesData = [{
    category: 'dictionaries',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/dictionary.cgi',
    imgUrl: '/refoyl/img/searchable-yiddish-english-dictionary.png',
    titleEn: 'Searchable Yiddish-English dictionary',
    titleYi: 'ייִדיש<wbr>־ענגליש װערטערבוך',
    comments: ''
},{
    category: 'dictionaries',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/searchOytser.cgi',
    imgUrl: '/refoyl/img/shutshkovs-oytser.png',
    titleEn: 'Stutshkov\'s Oytser',
    titleYi: 'סטוטשקאָװס אוצר',
    comments: 'Searchable, transliteration only'
},{
    category: 'dictionaries',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/harkavy/index.utf8.html',
    imgUrl: '/refoyl/img/harkavys-1910-bidirectional-dictionary.png',
    titleEn: 'Harkavy\'s 1910 bidirectional dictionary',
    titleYi: 'האַרקאַװיס ענגליש<wbr>־ייִדיש ייִדיש<wbr>־ענגליש װערטערבוך',
    comments: ''
},{
    category: 'dictionaries',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/searchGroys.cgi',
    imgUrl: '/refoyl/img/der-groyser-verterbukh-fun-der-yidisher-shprakh.png',
    titleEn: 'Der Groyser Verterbukh fun der Yidisher Shprakh',
    titleYi: 'דער גרױסער װערטערבוך פון דער ייִדישער שפּראַך',
    comments: 'Searchable, Yiddish letters only'
},{
    category: 'dictionaries',
    url: 'http://www.hebrewbooks.org/43653',
    imgUrl: '/refoyl/img/weinreichs-bidirectional-dictionary.png',
    titleEn: 'Weinreich\'s bidirectional dictionary ',
    titleYi: 'מאָדערן ענגליש<wbr>־ייִדיש ייִדיש<wbr>־ענגליש װערטערבוך',
    comments: 'Off-site. Searchable!'
},{
    category: 'dictionaries',
    url: 'http://www.hebrewbooks.org/43567',
    imgUrl: '/refoyl/img/harkavys-yiddish-english-hebrew-dictionary.png',
    titleEn: 'Harkavy\'s Yiddish-English-Hebrew dictionary',
    titleYi: 'האַרקאַװיס ייִדיש<wbr>־ענגליש<wbr>־העברעיִש װערטערבוך',
    comments: '1928 expanded 2nd edition. Off-site. Searchable!'
},{
    category: 'dictionaries',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/justus.cgi',
    imgUrl: '/refoyl/img/searchable-yiddish-dutch-dictionary.png',
    titleEn: 'Searchable Yiddish-Dutch dictionary',
    titleYi: 'ייִדיש<wbr>־האָנענדיש װערטערבוך',
    comments: 'Very comprehensive; data from Justus van de Kamp. His dictionary site is <a href="https://jnw.test.ivdnt.org/" target="_blank">Jiddische Lexicografie Amsterdam.</a>'
},{
    category: 'dictionaries',
    url: 'http://verterbukh.org/',
    imgUrl: '/refoyl/img/verterbukh.png',
    titleEn: 'Comprehensive Yiddish-English Dictionary',
    titleYi: 'אַרומנעמיק ייִדיש<wbr>־ענגליש װערטערבוך',
    comments: 'Beinfeld & Bochner'
},{
    category: 'text_tools',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/makeyiddish.html',
    imgUrl: '/refoyl/img/yiddish-typewriter-and-spelling-checker.png',
    titleEn: 'Yiddish typewriter and spelling checker',
    titleYi: '',
    comments: ''
},{
    category: 'text_tools',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/checkSpellUTF.cgi',
    imgUrl: '/refoyl/img/yiddish-spell-checker-and-normalizer.png',
    titleEn: 'Yiddish spell checker and normalizer',
    titleYi: '',
    comments: ''
},{
    category: 'text_tools',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/showDefs.cgi',
    imgUrl: '/refoyl/img/redt.png',
    titleEn: 'Yiddish glosser',
    titleYi: '',
    comments: 'Shows English definitions'
},{
    category: 'fonts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/Refoyl.ttf',
    imgUrl: '/refoyl/img/refoyl-cursive-yiddish-font.png',
    titleEn: 'Refoyl Cursive Yiddish font',
    titleYi: 'רפאל האַנטשריפט',
    comments: 'Download <a href="https://www.cs.uky.edu/~raphael/yiddish/Refoyl.dfont">Mac Truetype</a> or <a href="https://www.cs.uky.edu/~raphael/yiddish/Refoyl.ttf">TrueType</a>'
},{
    category: 'fonts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/Nachlaot.ttf',
    imgUrl: '/refoyl/img/nachlaot-cursive-yiddish-font.png',
    titleEn: 'Nachlaot Cursive Yiddish font',
    titleYi: 'נחלאות האַנטשריפט',
    comments: 'Download <a href="https://www.cs.uky.edu/~raphael/yiddish/Nachlaot.dfont">Mac Truetype</a> or <a href="https://www.cs.uky.edu/~raphael/yiddish/Nachlaot.ttf">TrueType</a>'
},{
    category: 'fonts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/Mashkit.ttf',
    imgUrl: '/refoyl/img/maskhit-old-yiddish-font.png',
    titleEn: 'Mashkit Old Yiddish font',
    titleYi: 'אַלט<wbr>־ייִדישע מאַקשעט',
    comments: 'Download <a href="https://www.cs.uky.edu/~raphael/yiddish/Mashkit.ttf">TrueType</a>'
},{
    category: 'non_ashkenazic_jewish_resources',
    url: 'http://kulanu.org/',
    imgUrl: '/refoyl/img/kulanu.png',
    titleEn: 'Kulanu: Helping Lost Jewish Communities',
    titleYi: 'כּלנו',
    comments: ''
},{
    category: 'non_ashkenazic_jewish_resources',
    url: 'http://jewish-languages.org/',
    imgUrl: '/refoyl/img/jewish-languages.png',
    titleEn: 'Jewish languages',
    titleYi: 'ייִדישע שפּראַכן',
    comments: ''
},{
    category: 'non_ashkenazic_jewish_resources',
    url: 'http://www.ivri-nasawi.org/',
    imgUrl: '/refoyl/img/ivri-nasawi.png',
    titleEn: 'Ivri Nasawi: New Association of Sephardi/Mizrahi Artists & Writers International',
    titleYi: '',
    comments: ''
},{
    category: 'non_ashkenazic_jewish_resources',
    url: 'https://www.bjhc.org.il/',
    imgUrl: '/refoyl/img/babylonian-jewry-heritage-center.png',
    titleEn: 'Babylonian Jewry Heritage Center',
    titleYi: '',
    comments: ''
},{
    category: 'yiddish_organizations',
    url: 'http://circle.org/',
    imgUrl: '/refoyl/img/workers-circle-arbeterring.png',
    titleEn: 'Workers\' Circle / Arbeterring',
    titleYi: 'דער אַרבעטעררינג',
    comments: ''
},{
    category: 'yiddish_organizations',
    url: 'http://www.yivo.org',
    imgUrl: '/refoyl/img/yivo-institute-for-jewish-research.png',
    titleEn: 'YIVO Institute for Jewish Research',
    titleYi: 'ייִװאָ: דער ייִדישער װיסנשאַפטלעכע אינסטיטוט',
    comments: ''
},{
    category: 'yiddish_organizations',
    url: 'http://yiddishbookcenter.org/',
    imgUrl: '/refoyl/img/national-yiddish-book-center.png',
    titleEn: 'National Yiddish Book Center',
    titleYi: 'דער ייִדישער ביכערצענטער',
    comments: ''
},{
    category: 'yiddish_organizations',
    url: 'http://nytf.org/',
    imgUrl: '/refoyl/img/national-yiddish-theatre-folksbiene.png',
    titleEn: 'National Yiddish Theatre Folksbiene',
    titleYi: 'די פאָלקסבינע',
    comments: ''
},{
    category: 'yiddish_organizations',
    url: 'http://www.yiddishweb.com/english/',
    imgUrl: '/refoyl/img/maison-de-la-culture-yiddish-bibliotheque-medem.png',
    titleEn: 'Maison de la culture yiddish / Bibliothèque Medem',
    titleYi: 'די מעדעם<wbr>־ביבליאָטעק',
    comments: ''
},{
    category: 'yiddish_organizations',
    url: 'http://yilovejewish.org/',
    imgUrl: '/refoyl/img/yiddishkayt-initiative.png',
    titleEn: 'Yiddishkayt Initiative',
    titleYi: '',
    comments: ''
},{
    category: 'yiddish_organizations',
    url: 'http://yaaana.org/',
    imgUrl: '/refoyl/img/yaaana-yiddish-arts-academics-association-of-north-america.png',
    titleEn: 'YAAANA: Yiddish Arts & Academics Association of North America',
    titleYi: '',
    comments: ''
},{
    category: 'yiddish_organizations',
    url: 'http://jewishpubliclibrary.org/',
    imgUrl: '/refoyl/img/jewish-public-library.png',
    titleEn: 'Jewish Public Library',
    titleYi: '',
    comments: ''
},{
    category: 'yiddish_organizations',
    url: 'http://www.committeeforyiddish.com/',
    imgUrl: '/refoyl/img/committee-for-yiddish.png',
    titleEn: 'Committee for Yiddish',
    titleYi: '',
    comments: ''
},{
    category: 'yiddish_organizations',
    url: 'http://yiddishkayt.org/',
    imgUrl: '/refoyl/img/yiddishkayt-la.png',
    titleEn: 'Yiddishkayt LA',
    titleYi: '',
    comments: ''
},{
    category: 'yiddish_organizations',
    url: 'http://congressforjewishculture.org/',
    imgUrl: '/refoyl/img/congress-for-jewish-culture-kultur-kongres.png',
    titleEn: 'Congress for Jewish Culture / Kultur Kongres',
    titleYi: 'דער קולטור<wbr>־קאָנגרעס',
    comments: ''
},{
    category: 'yiddish_organizations',
    url: 'http://bethshalomaleichem.co.il/',
    imgUrl: '/refoyl/img/sholem-aleykhem-hoyz.png',
    titleEn: 'Sholem Aleykhem Hoyz',
    titleYi: 'שלום<wbr>־עליכם הױז',
    comments: ''
},{
    category: 'yiddish_organizations',
    url: 'http://yiddish.co.il/',
    imgUrl: '/refoyl/img/yung-yidish.png',
    titleEn: 'Yung Yidish',
    titleYi: 'יונג<wbr>־ייִדיש',
    comments: ''
},{
    category: 'yiddish_organizations',
    url: 'https://www.yiddish.world',
    imgUrl: '/refoyl/img/iayc-international-association-of-yiddish-clubs.png',
    titleEn: 'IAYC: International Association of Yiddish Clubs',
    titleYi: '',
    comments: ''
},{
    category: 'dictionaries',
    url: 'https://jnw.test.ivdnt.org/',
    imgUrl: '/refoyl/img/jiddische-lexicografie-amsterdam.png',
    titleEn: 'Jiddische Lexicografie Amsterdam',
    titleYi: '',
    comments: 'Free Yiddish-Dutch dictionary, very comprehensive'
},{
    category: 'music',
    url: 'https://ruthrubin.yivo.org/exhibits/show/ruth-rubin-sound-archive/home',
    imgUrl: '/refoyl/img/ruth-rubin-sound-archive.png',
    titleEn: 'Ruth Rubin Sound Archive',
    titleYi: 'רות רובין אַרכיװ',
    comments: ''
},{
    category: 'music',
    url: 'https://yiddishsongs.org/',
    imgUrl: '/refoyl/img/the-yosl-and-chana-mlotek-yiddish-song-collection.png',
    titleEn: 'The Yosl and Chana Mlotek Yiddish Song Collection',
    titleYi: 'יאָסל און חנה מלאָטעק אַנטאָלאָגיע פון ייִדישע לידער',
    comments: ''
},{
    category: 'poetry',
    url: 'https://www.xn--7dbli0a4a.us.org/',
    imgUrl: '/refoyl/img/the-online-treasury-of-yiddish-poetry.png',
    titleEn: 'The Online Treasury of Yiddish Poetry',
    titleYi: 'דער אױפן<wbr>־װעב אוצר פון ייִדישע לידער',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://shoshke.net/kompyuteray/',
    imgUrl: '/refoyl/img/a-users-guide-to-yiddish-on-the-internet.png',
    titleEn: 'A Users’ Guide to Yiddish on the Internet',
    titleYi: 'ייִדיש-קאָמפּיוטערײ',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://editions.yiddish.paris/wp-content/uploads/2021/06/%D7%A4%D6%BF%D7%90%D6%B8%D7%A0%D7%A2%D7%98%D7%99%D7%A9%D7%A2%D7%A8-%D7%90%D7%99%D7%A0%D7%93%D7%A2%D7%A7%D7%A1.pdf',
    imgUrl: '/refoyl/img/list-of-semitic-words-in-yiddish.png',
    titleEn: 'List of Semitic words in Yiddish, organized by pronunciation',
    titleYi: 'פאָנעטישער אינדעקס פון לשון־קודש־שטאַמענדיקע װערטער אין ייִדיש',
    comments: ''
},{
    category: 'dictionaries',
    url: 'https://www.yiddishculturaldictionary.org/',
    imgUrl: '/refoyl/img/yiddish-cultural-dictionary.png',
    titleEn: 'Yiddish Cultural Dictionary',
    titleYi: 'ווילנער ווערטערבוך',
    comments: 'English-Yiddish Dictionary for the 21st Century'
},{
    category: 'other_yiddish_resources',
    url: 'https://yivoencyclopedia.org/',
    imgUrl: '/refoyl/img/yivo-encyclopedia-of-jews-in-eastern-europe.png',
    titleEn: 'YIVO Encyclopedia of Jews in Eastern Europe',
    titleYi: 'די ייִװאָ ענציקלאָפּעדיע פון ייִדן אין מזרח־אייראָפּע',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://www.leyblsvelt.co.il/',
    imgUrl: '/refoyl/img/leybls-velt.png',
    titleEn: 'Leybls velt',
    titleYi: 'לייבלס װעלט',
    comments: ''
},{
    category: 'poetry',
    url: 'https://yiddishpoetry.org/',
    imgUrl: '/refoyl/img/yiddish-poetry.png',
    titleEn: 'Yiddish poetry',
    titleYi: 'ייִדיעש פּאָעזיע',
    comments: ''
},{
    category: 'music',
    url: 'https://rsa.fau.edu/judaic',
    imgUrl: '/refoyl/img/judaica-sound-archives-at-florida-atlantic-university.png',
    titleEn: 'Judaica Sound Archives at Florida Atlantic University',
    titleYi: '',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://www.ibiblio.org/yiddish/forum/wwwboard/',
    imgUrl: '/refoyl/img/yiddish-bulletin-board.png',
    titleEn: 'Yiddish bulletin board',
    titleYi: 'שטעטל: שמועסן אױף מאַמע<wbr>־לשון',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://yiddish.forward.com/blogs/index.html',
    imgUrl: '/refoyl/img/yiddish-forward-blogs.png',
    titleEn: 'Yiddish Forward Blogs',
    titleYi: 'פאָרװערטס־בלאָגס',
    comments: ''
},{
    category: 'music',
    url: 'https://ulrich-greve.eu/free/',
    imgUrl: '/refoyl/img/songs-by-mordechai-gebirtig.png',
    titleEn: 'Songs by Mordechai Gebirtig',
    titleYi: 'לידער פון מרדכי געבירטיג',
    comments: ''
},{
    category: 'yiddish_organizations',
    url: 'https://yugntruf.org/',
    imgUrl: '/refoyl/img/yugntruf.png',
    titleEn: 'Yugntruf',
    titleYi: 'יוגנטרוף',
    comments: ''
},{
    category: 'music',
    url: 'http://yidlid.org/',
    imgUrl: '/refoyl/img/yidlid.png',
    titleEn: 'Yidlid: Yiddish songs',
    titleYi: 'ייִדליד: ייִדישע לידער',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://www.ibiblio.org/yiddish/',
    imgUrl: '/refoyl/img/virtual-shtetl.png',
    titleEn: 'Virtual Shtetl',
    titleYi: 'אינטערנעץ־שטעטל',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://sammlungen.ub.uni-frankfurt.de/judaica/nav/index/all?&facets=language%3D%22yid%22',
    imgUrl: '/refoyl/img/yiddish-collection-digitized-at-the-goethe-universitat.png',
    titleEn: 'Yiddish collection (digitized) at the Goethe Universität',
    titleYi: '',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'http://www.yv.org/',
    imgUrl: '/refoyl/img/the-yiddish-voice-radio.png',
    titleEn: 'The Yiddish Voice Radio',
    titleYi: 'דאָס ייִדישע קול',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://urplay.se/sok?language=Jiddisch&product_type=series',
    imgUrl: '/refoyl/img/swedish-education-broadcasting-company-yiddish-programs.png',
    titleEn: 'Swedish Educational Broadcasting Company: Yiddish programs',
    titleYi: '',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://www.nypl.org/locations/schwarzman/jewish-division',
    imgUrl: '/refoyl/img/new-york-public-library-dorot-jewish-division.png',
    titleEn: 'New York Public Library Dorot Jewish Division',
    titleYi: '',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://uyip.org/',
    imgUrl: '/refoyl/img/uyip.png',
    titleEn: 'UYIP: Understanding Yiddish Information Processing',
    titleYi: '',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://www.nli.org.il/en/newspapers/lbf?',
    imgUrl: '/refoyl/img/lebns-fragn.png',
    titleEn: 'Lebns-fragn',
    titleYi: 'לעבנס<wbr>־פראַגן',
    comments: 'Digitization of all 63 years of the organ of the Arbeter-ring in Israel.'
},{
    category: 'other_yiddish_resources',
    url: 'https://derbay.org/',
    imgUrl: 'https://derbay.org/wp-content/uploads/2021/03/golden-gate-panorama-e1617763780946.jpg',
    titleEn: 'Der Bay',
    titleYi: '',
    comments: 'Anglo-Yiddish Newsletter'
},{
    category: 'poetry',
    url: 'https://www.angelfire.com/ma/khaver/amerike.html',
    imgUrl: '/refoyl/img/yiddish-poetry-in-america.png',
    titleEn: 'Yiddish Poetry in America',
    titleYi: 'ייִדישע פּאָעזיע אין אַמעריקע',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://www.yiddishdance.com/',
    imgUrl: 'https://www.yiddishdance.com/user/gimage/grandmarchsepai_700_477.jpg',
    titleEn: 'Yiddish Dance',
    titleYi: '',
    comments: ''
},{
    category: 'yiddish_organizations',
    url: 'https://www.instagram.com/kadimahmelbourne/',
    imgUrl: '/refoyl/img/kadimah-jewish-cultural-centre-melbourne.png',
    titleEn: 'Kadimah Jewish Cultural Centre, Melbourne',
    titleYi: 'קדימה',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://saveculture.org/yiddish-culture/',
    imgUrl: 'https://saveculture.org/wp-content/uploads/2022/10/Illustration-CCP-Green.png',
    titleEn: 'Center for Cultural Preservation: Jewish Culture Oral Histories',
    titleYi: '',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://iisg.amsterdam/en/collections/browsing/collection-guides/yiddish-collection',
    imgUrl: 'https://iisg.amsterdam/files/2018-09/iish_collections-guide_yiddish-bund.jpg',
    titleEn: 'INTERNATIONAL INSTITUTE OF SOCIAL HISTORY: Yiddish Collection Guide',
    titleYi: '',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://katlekanye.blogspot.com/',
    imgUrl: '/refoyl/img/katlekanyes-blog.png',
    titleEn: 'Katlekanye\'s blog',
    titleYi: 'קטלא קניא',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://sholemberger.blogspot.com/',
    imgUrl: '/refoyl/img/sholem-bergers-blog.png',
    titleEn: 'Sholem Berger\'s blog',
    titleYi: 'שלום בערגער',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://inmolaraan.blogspot.com/',
    imgUrl: '/refoyl/img/in-mol-araan-a-blogele-vegen-esn-un-verter.png',
    titleEn: 'In mol araan: a blogele vegn esn un verter',
    titleYi: 'אין מױל ארײן: א בלאגעלע װעגן עסן און װערטער',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://sammlungen.ub.uni-frankfurt.de/jd',
    imgUrl: 'https://sammlungen.ub.uni-frankfurt.de/jd/domainimage/resource1977964',
    titleEn: 'Frankfurt am Main Yiddish texts',
    titleYi: '',
    comments: ''
},{
    category: 'music',
    url: 'https://www.livingtraditions.org/',
    imgUrl: '/refoyl/img/the-jalopy-theatre-and-school-of-music.png',
    titleEn: 'The Jalopy Theatre and School of Music',
    titleYi: '',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://yiddish.haifa.ac.il/contents.htm',
    imgUrl: '/refoyl/img/the-world-of-yiddish.png',
    titleEn: 'The World of Yiddish',
    titleYi: 'די װעלט פון ייִדיש',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://www.shoshke.net/uyip/kompterm/kompterm.pdf',
    imgUrl: '/refoyl/img/computer-terminology-in-yiddish.png',
    titleEn: 'Computer terminology in Yiddish',
    titleYi: 'קאָמפּיוטערײַ <wbr>־טערמינען',
    comments: ''
},{
    category: 'poetry',
    url: 'https://www.yisroelshtern.org/',
    imgUrl: '/refoyl/img/yisroel-shtern-project.png',
    titleEn: 'Yisroel Shtern Project',
    titleYi: 'דער ישׂראל שטערן פּראָיעקט',
    comments: ''
},{
    category: 'poetry',
    url: 'https://yiddishpoetry.commons.gc.cuny.edu/',
    imgUrl: 'https://yiddishpoetry.commons.gc.cuny.edu/wp-content/themes/twentyten/images/headers/path.jpg',
    titleEn: 'Blog on Rivka Basman Ben-Hayim',
    titleYi: 'רבקה בסמן בן־חיים בלאָג',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://mummeloohshen.wordpress.com/',
    imgUrl: '/refoyl/img/mumme-looshen.png',
    titleEn: 'Mumme Looshen',
    titleYi: '',
    comments: 'A linguistic book on Yiddish, with SY transcriptions'
},{
    category: 'other_yiddish_resources',
    url: 'https://www.yiddishbookcenter.org/collections/archival-recordings',
    imgUrl: '/refoyl/img/frances-brandt-online-yiddish-audio-library.png',
    titleEn: 'Frances Brandt Online Yiddish Audio Library',
    titleYi: '',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://pglasserblog.wordpress.com/2013/04/23/my-latest-maps-%D7%9E%D7%B2%D6%B7%D7%A0%D7%A2-%D7%A0%D7%B2%D6%B7%D7%A1%D7%98%D7%A2-%D7%9E%D7%90%D6%B7%D7%A4%D6%BC%D7%A2%D7%A1/',
    imgUrl: '/refoyl/img/maps-of-jewish-eastern-europe.png',
    titleEn: 'Maps of Jewish Eastern Europe (Hershl Glasser)',
    titleYi: '',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'https://www.nli.org.il/en/discover/newspapers/jpress',
    imgUrl: '/refoyl/img/historical-jewish-press.png',
    titleEn: 'Historical Jewish Press',
    titleYi: '',
    comments: ''
},{
    category: 'poetry',
    url: 'https://www.grosbardproject.com/Grosbard_Project/Home.html',
    imgUrl: '/refoyl/img/the-grosbard-project.png',
    titleEn: 'The Grosbard Project',
    titleYi: 'דער גראָסבאַרד פּראָיעקט',
    comments: ''
},{
    category: 'other_yiddish_resources',
    url: 'http://web-corpora.net/YNC/search/',
    imgUrl: '/refoyl/img/redt.png',
    titleEn: 'The Corpus of Modern Yiddish',
    titleYi: '',
    comments: ''
},{
    category: 'music',
    url: 'https://ctmd.org/archive/collections/',
    imgUrl: '/refoyl/img/center-for-traditional-music-and-dance.png',
    titleEn: 'Center for Traditional Music and Dance Jewish Song Collection',
    titleYi: '',
    comments: ''
},{
    category: 'non_yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/ksubo.utf8.html',
    titleEn: 'Egalitarian Kesubo',
    titleYi: '',
    comments: 'Aramaic',
    author: 'Raphael Finkel and Michael Fox'
},{
    category: 'non_yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish.html#:~:text=Ritual%20slaughter%20of%20the%20latke',
    titleEn: 'Ritual Slaughter of the Latke',
    titleYi: '',
    comments: 'English',
    author: 'Raphael Finkel'
},{
    category: 'non_yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/okets.html',
    titleEn: 'Al Kol Eyle',
    titleYi: '',
    comments: 'Hebrew',
    author: 'Naomi Shemer'
},{
    category: 'non_yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/trops/',
    titleEn: 'Refoyl\'s trop page',
    titleYi: '',
    comments: '',
    author: 'Raphael Finkel'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/shlof.gif',
    titleEn: 'Shlof mayn kind, shlof keseyder',
    titleYi: '',
    comments: '',
    author: 'Anonymous'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/libe.gif',
    titleEn: 'Oy, a libe iz an umglik',
    titleYi: '',
    comments: '',
    author: 'Anonymous'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/lid.shikt_der_har_1.pdf',
    titleEn: 'Shikt der har',
    titleYi: '',
    comments: 'Version 1',
    author: 'Anonymous'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/lid.shikt_der_har_2.pdf',
    titleEn: 'Shikt der har',
    titleYi: '',
    comments: 'Version 2',
    author: 'Anonymous'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/sholem.spontan.gif',
    titleEn: 'Spontan lid',
    titleYi: '',
    comments: '',
    author: 'Sholem Berger'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/sholem.spontan.2.utf8.html',
    titleEn: 'Spontan lid 2',
    titleYi: '',
    comments: 'Unicode',
    author: 'Sholem Berger'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/sholem.lider.pdf',
    titleEn: 'Nay-ufgedekte lider',
    titleYi: '',
    comments: 'PDF',
    author: 'Sholem Berger'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/sholem.rap.pdf',
    titleEn: '<esukener mezumen: shoyn tsurik tsu aykh in keshene',
    titleYi: '',
    comments: 'PDF',
    author: 'Sholem Berger'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/lid.vikhtik.pdf',
    titleEn: 'Vos iz vikhtik (Naye verter)',
    titleYi: '',
    comments: 'PDF',
    author: 'Sholem Berger'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/bushevski.letst.utf8.html',
    titleEn: 'Mayn letst lid',
    titleYi: '',
    comments: 'Unicode',
    author: 'Rokhl Bushevski-Kaplan'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/lid.kumShoyn.pdf',
    titleEn: 'O kum shoyn, shtiler ovnt',
    titleYi: '',
    comments: 'PDF',
    author: 'Daniel Charney'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/prufrock.pdf',
    titleEn: 'The love song of J. Alfred Prufrock',
    titleYi: '',
    comments: 'Translated by Ruth Wisse, Lucy Davidovich, Khayim Refoyl, Daniel Bell',
    author: 'T.S. Eliot'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/sizLoyter.utf8.html',
    titleEn: 'S\'iz loyter der rusisher step & Ikh hob keynmol nit geblondzhet',
    titleYi: '',
    comments: '',
    author: 'Itsik Feffer'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/vint.html',
    titleEn: 'Ven di vint',
    titleYi: '',
    comments: '',
    author: 'Raphael Finkel'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/matilde.utf8.html',
    titleEn: 'A tentsl, mayn kale (Waltzing Matilda)',
    titleYi: '',
    comments: 'Translated by Raphael Finkel',
    author: ''
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/jabber.html',
    titleEn: 'Jabberwocky',
    titleYi: '',
    comments: 'Translated by Raphael Finkel',
    author: 'Lewis Carroll'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/dos.eynikl.kumt.html',
    titleEn: 'Dos eynikl kumt',
    titleYi: '',
    comments: '',
    author: 'IAYC Conference'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/a.sude.html',
    titleEn: 'A sude',
    titleYi: '',
    comments: '',
    author: 'IAYC Conference'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/lid.vetshere.html',
    titleEn: 'Gebrakht vetshere tsu der tsayt',
    titleYi: '',
    comments: '',
    author: 'IAYC Conference'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish.html#:~:text=zunik%20in%20droysn%20(2010)',
    titleEn: 'Zunik indroysn',
    titleYi: '',
    comments: '',
    author: 'IAYC Conference'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/lid.shvues-1.html',
    titleEn: 'In shvues',
    titleYi: '',
    comments: '',
    author: 'IAYC Conference'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/dray_tekhterlekh.pdf',
    titleEn: 'Dray tekhterlekh',
    titleYi: '',
    comments: '',
    author: 'Mordkhe Gebirtig'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/lid.halpern.fartrayb.html',
    titleEn: 'Gey fartrayb zey',
    titleYi: '',
    comments: '',
    author: 'Moshe-Leib Halperin'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/bahit.gif',
    titleEn: 'Bahit',
    titleYi: '',
    comments: '',
    author: 'Malke Heifetz-Tussman'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/mazik.gif',
    titleEn: 'Bahit',
    titleYi: '',
    comments: '',
    author: 'Malke Heifetz-Tussman'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/heler.loshn.gif',
    titleEn: 'In vunderlekhn loshn',
    titleYi: '',
    comments: '',
    author: 'Binem Heller'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/heler.shvester.yid',
    titleEn: 'Mayn shvester Khaye',
    titleYi: '',
    comments: '',
    author: 'Binem Heller'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/heler.nisn.pdf',
    titleEn: 'In varshever geto iz itst khoydesh nisn',
    titleYi: '',
    comments: '',
    author: 'Binem Heller'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/vinter.gif',
    titleEn: 'In vinter farnakhtn',
    titleYi: '',
    comments: '',
    author: 'David Hofshteyn'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/friling.utf8.html',
    titleEn: 'Friling',
    titleYi: '',
    comments: '',
    author: 'Shmerke Kaczerginski'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/kleyd.gif',
    titleEn: 'A nay kleyd',
    titleYi: '',
    comments: '',
    author: 'Rokhl Korn'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/benkshaft.gif',
    titleEn: 'Benkshaft',
    titleYi: '',
    comments: '',
    author: 'Rokhl Korn'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/keyner.gif',
    titleEn: 'Keyner veyst es nisht',
    titleYi: '',
    comments: '',
    author: 'Rokhl Korn'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/briv.gif',
    titleEn: 'A briv',
    titleYi: '',
    comments: '',
    author: 'Rokhl Korn'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/korn.yener.pdf',
    titleEn: 'Fun Yener Zayt Lid',
    titleYi: '',
    comments: '',
    author: 'Rokhl Korn'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/asore.html',
    titleEn: 'Asore dibraye',
    titleYi: '',
    comments: '',
    author: 'Meyshe Kulbak'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/basheva.yankl.html',
    titleEn: 'Yankl un der bebl-shtengl',
    titleYi: '',
    comments: 'Retelling',
    author: 'Basheva Landesberg'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/basheva.trakhtn.gif',
    titleEn: '\"Trakhtn\" fun a fuftsn-yor alt yingl',
    titleYi: '',
    comments: '',
    author: 'Basheva Landesberg'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/basheva.zeyde.gif',
    titleEn: 'Ikh bin geven mayn eygener zeyde',
    titleYi: '',
    comments: 'Translation',
    author: 'Basheva Landesberg'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/basheva.royte.html',
    titleEn: 'Kleyne royte forn-kapishon',
    titleYi: '',
    comments: 'Retelling',
    author: 'Basheva Landesberg'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/basheva.hashem.gif',
    titleEn: 'Ikh ver elter',
    titleYi: '',
    comments: 'Translation',
    author: 'Basheva Landesberg'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/basheva.fraynd.gif',
    titleEn: 'A fraynd',
    titleYi: '',
    comments: 'Translation',
    author: 'Basheva Landesberg'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/basheva.vinter.gif',
    titleEn: 'Bed in Summer',
    titleYi: '',
    comments: 'Translation from Robert L. Stevenson',
    author: 'Basheva Landesberg'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/rumenia.html',
    titleEn: 'Rumenye, Rumenye',
    titleYi: '',
    comments: '',
    author: 'Aaron Lebedeff'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/slutsk.utf8.html',
    titleEn: 'Slutsk',
    titleYi: '',
    comments: '',
    author: 'Aaron Lebedeff'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/mani.leyb.noyt.utf8.html',
    titleEn: 'Di noyt',
    titleYi: '',
    comments: 'Transcribed by Eliezer Niborski',
    author: 'Mani Leyb'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/leyb.shtiler.utf8.html',
    titleEn: 'Shtiler, shtiler',
    titleYi: '',
    comments: 'Transcribed by Michael Tanksley',
    author: 'Mani Leyb'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/jcrs.pdf',
    titleEn: 'J.C.R.S.',
    titleYi: '',
    comments: 'Jewish Consumptives\' Relief Society: Spivak Sanatorium in Denver',
    author: 'H. Leyvik'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/findzhan.utf8.html',
    titleEn: 'Der findzhan',
    titleYi: '',
    comments: 'Original Hebrew by Khayem Fefer',
    author: 'Yitskhok Ludin'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/poe.neydus.rob.utf8.html',
    titleEn: 'Der rob',
    titleYi: '',
    comments: 'Original English by Edgar Allen Poe',
    author: 'Leyb Neydus'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/tam.gif',
    titleEn: 'Rebbenu Tam',
    titleYi: '',
    comments: '',
    author: 'Itsik Manger'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/mayrev.gif',
    titleEn: 'Ikh bin der Veg keyn Mayrev',
    titleYi: '',
    comments: '',
    author: 'Itsik Manger'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/vinter.melburn.pdf',
    titleEn: 'Vinter tsayt in melburn',
    titleYi: '',
    comments: '',
    author: 'Melburn Yugntruf-Yidish-Vokhnikes'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/nister-mashber.html',
    titleEn: 'Der mishpokhe Mashber',
    titleYi: '',
    comments: '',
    author: 'Der Nister (Pinkhes Kahanovitsh)'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/brayne.suke.utf8.html',
    titleEn: 'Far mayn tatns suke',
    titleYi: '',
    comments: '',
    author: 'Brayne Rabinovitsh'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/ravitsh.lid.on.nomen.utf8.html',
    titleEn: 'A lid on a nomen',
    titleYi: '',
    comments: '',
    author: 'Meylekh Ravitsh'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/akht.gif',
    titleEn: 'A Gezind Zalbe Akht',
    titleYi: '',
    comments: '',
    author: 'Avrom Reisen'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/reyzen.borekh.pdf',
    titleEn: 'Borekh Ate [PDF]',
    titleYi: '',
    comments: 'PDF',
    author: 'Avrom Reisen'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/khave.leye.gif',
    titleEn: 'Khave-Leye -- Gut Shabes',
    titleYi: '',
    comments: '1899',
    author: 'Moyshe Richter'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish.html#:~:text=Morris%20Rosenfeld%3A-,Mayn%20Yingele,-L.%20Rozenthal%20/%20Misha',
    titleEn: 'Mayn Yingele',
    titleYi: '',
    comments: '',
    author: 'Morris Rosenfeld'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish.html#:~:text=zhe%20papirosn%20(Yisrolik)-,PDF,-%7C%20utf8',
    titleEn: 'Koyft-zhe papirosn (Yisrolik)',
    titleYi: '',
    comments: '',
    author: 'L. Rozenthal / Misha Veksler'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/harbstlid.pdf',
    titleEn: 'Harbstlid',
    titleYi: '',
    comments: '',
    author: 'Bella Schaechter-Gottesman'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/sylvia-shild.vort.gif',
    titleEn: 'A yidish vort',
    titleYi: '',
    comments: '1996',
    author: 'Sylvia Schildt'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/khaneke.gif',
    titleEn: 'In dem templ',
    titleYi: '',
    comments: '1996',
    author: 'Sylvia Schildt'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish.html#:~:text=Templ%20(1996).%20%7C-,Akht%20Kleyne%20Brider,-(updated%201996).',
    titleEn: 'Akht kleyne brider',
    titleYi: '',
    comments: '1996',
    author: 'Sylvia Schildt'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/shteynbarg.lid.gif',
    titleEn: 'Af a shteyn',
    titleYi: '',
    comments: '',
    author: 'Elyezer Shteynbarg'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/shpinveb.gif',
    titleEn: 'Shpinvebekhts',
    titleYi: '',
    comments: '',
    author: 'Avrom-Nokhem Shtentsl'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/shtensl.lukhes.gif',
    titleEn: 'Di tsvey lukhes',
    titleYi: '',
    comments: '',
    author: 'Avrom-Nokhem Shtentsl'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/nito.pdf',
    titleEn: 'Du zogst',
    titleYi: '',
    comments: '',
    author: 'Avrom Sutzkever'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/sutskever-togbukh.html',
    titleEn: 'Lider fun togbukh',
    titleYi: '',
    comments: '',
    author: 'Avrom Sutzkever'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/nybc208866.html',
    titleEn: 'Poetishe verk 1',
    titleYi: '',
    comments: '',
    author: 'Avrom Sutzkever'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/nybc208867.html',
    titleEn: 'Poetishe verk 2',
    titleYi: '',
    comments: '',
    author: 'Avrom Sutzkever'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/nybc208870.html',
    titleEn: 'Firkantike oysyes',
    titleYi: '',
    comments: '',
    author: 'Avrom Sutzkever'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/nybc208871.html',
    titleEn: 'Tsaytike penemer',
    titleYi: '',
    comments: '',
    author: 'Avrom Sutzkever'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/sutskever-other.html',
    titleEn: 'Other poems',
    titleYi: '',
    comments: '',
    author: 'Avrom Sutzkever'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/pingpong.gif',
    titleEn: 'Ping-pong (Limerik #8)',
    titleYi: '',
    comments: '',
    author: 'Yankev Shmuel Toybes'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/prip.gif',
    titleEn: 'Afn Pripetshik',
    titleYi: '',
    comments: '',
    author: 'Mark Warshawsky'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/lid.fun.broyt.pdf',
    titleEn: 'Dos lid fun broyt',
    titleYi: '',
    comments: '',
    author: 'Mark Warshawsky'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/dona.gif',
    titleEn: 'Dona Dona',
    titleYi: '',
    comments: '',
    author: 'Aharon Zeitlin'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/eyer.mit.fleysh.html',
    titleEn: 'Eyer mit fleysh (Green Eggs and Ham)',
    titleYi: '',
    comments: '',
    author: 'Sam Zerin'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/shpoler.pdf',
    titleEn: 'Shpoler Zeydes nign',
    titleYi: '',
    comments: 'PDF',
    author: 'Shpoler Zeyde'
},{
    category: 'yiddish_texts',
    url: '',
    titleEn: '',
    titleYi: '',
    comments: '',
    author: 'Yugntruf-Yidish-Vokhnikes'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/hayzele.html',
    titleEn: 'Dos hayzele',
    titleYi: '',
    comments: '1996',
    author: 'Yugntruf-Yidish-Vokhnikes'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/viglid.html',
    titleEn: 'Viglid',
    titleYi: '',
    comments: '1998',
    author: 'Yugntruf-Yidish-Vokhnikes'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/balem.utf8.html',
    titleEn: 'Balem Bili Balem',
    titleYi: '',
    comments: '1999',
    author: 'Yugntruf-Yidish-Vokhnikes'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/kind.html',
    titleEn: 'Der yunger arbeter',
    titleYi: '',
    comments: '2001',
    author: 'Yugntruf-Yidish-Vokhnikes'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/zumer.html',
    titleEn: 'Zumer zikhroynes',
    titleYi: '',
    comments: '2003',
    author: 'Yugntruf-Yidish-Vokhnikes'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/lid.yor.html',
    titleEn: 'A nay yor',
    titleYi: '',
    comments: '2004',
    author: 'Yugntruf-Yidish-Vokhnikes'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/lid.malkele.html',
    titleEn: 'Malkele mayn lyalkele',
    titleYi: '',
    comments: '2006',
    author: 'Yugntruf-Yidish-Vokhnikes'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/lid.ban.html',
    titleEn: 'Vi di ban geyt',
    titleYi: '',
    comments: '2009',
    author: 'Yugntruf-Yidish-Vokhnikes'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/lid.shenk.html',
    titleEn: 'Di shenk',
    titleYi: '',
    comments: '2010',
    author: 'Yugntruf-Yidish-Vokhnikes'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/lid.himen.html',
    titleEn: 'Yidish-vokh himen',
    titleYi: '',
    comments: '2011',
    author: 'Yugntruf-Yidish-Vokhnikes'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/lid.geboyrn.html',
    titleEn: 'Geboyrntog-lid',
    titleYi: '',
    comments: '2012',
    author: 'Yugntruf-Yidish-Vokhnikes'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/lid.mandlbroyt.html',
    titleEn: 'Mandlbroyt',
    titleYi: '',
    comments: '2013',
    author: 'Yugntruf-Yidish-Vokhnikes'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/lid.porfolk.html',
    titleEn: 'Vi dos porfolk tantst',
    titleYi: '',
    comments: '2017',
    author: 'Yugntruf-Yidish-Vokhnikes'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/lid.tsirele.pdf',
    titleEn: 'To Celia',
    titleYi: '',
    comments: 'Translated by Ben Johnson',
    author: 'Yugntruf-Yidish-Vokhnikes'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/lid.sukes.html',
    titleEn: 'Sukes-lid',
    titleYi: '',
    comments: '2022',
    author: 'Yugntruf-Yidish-Vokhnikes'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/lid.shvues-2.html',
    titleEn: 'Shvues-lid',
    titleYi: '',
    comments: '2023',
    author: 'Yugntruf-Yidish-Vokhnikes'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/yiddish/fir_kashes.html',
    titleEn: 'Di fir kashes',
    titleYi: '',
    comments: '',
    author: ''
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/parshes/5757.beshalekh.pdf',
    titleEn: 'Droshes af parshes: beshalekh 5757',
    titleYi: '',
    comments: 'PDF Format',
    author: 'Various authors'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/parshes/5757.khukas.pdf',
    titleEn: 'Droshes af parshes: khukas 5758',
    titleYi: '',
    comments: 'PDF Format',
    author: 'Various authors'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/parshes/5757.bolek.pdf',
    titleEn: 'Droshes af parshes: bolek 5757',
    titleYi: '',
    comments: 'PDF Format',
    author: 'Various authors'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/parshes/5757.eykev.pdf',
    titleEn: 'Droshes af parshes: eykev 5757',
    titleYi: '',
    comments: 'PDF Format',
    author: 'Various authors'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/parshes/5757.khukas.pdf',
    titleEn: 'Droshes af parshes: khukas 5757',
    titleYi: '',
    comments: 'PDF Format',
    author: 'Various authors'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/parshes/5757.kiseytse.pdf',
    titleEn: 'Droshes af parshes: ki seytse 5757',
    titleYi: '',
    comments: 'PDF Format',
    author: 'Various authors'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/parshes/5757.koyrekh.pdf',
    titleEn: 'Droshes af parshes: koyrekh 5757',
    titleYi: '',
    comments: 'PDF Format',
    author: 'Various authors'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/parshes/5757.matosmasey.pdf',
    titleEn: 'Droshes af parshes: matos masey 5757',
    titleYi: '',
    comments: 'PDF Format',
    author: 'Various authors'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/parshes/5757.pinkhes.pdf',
    titleEn: 'Droshes af parshes: pinkhes 5757',
    titleYi: '',
    comments: 'PDF Format',
    author: 'Various authors'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/parshes/5758.khayesore.pdf',
    titleEn: 'Droshes af parshes: khaye sore 5757',
    titleYi: '',
    comments: 'PDF Format',
    author: 'Various authors'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/parshes/5758.lekhlekho.pdf',
    titleEn: 'Droshes af parshes: lekh lekho 5757',
    titleYi: '',
    comments: 'PDF Format',
    author: 'Various authors'
},{
    category: 'yiddish_texts',
    url: 'https://www.cs.uky.edu/~raphael/parshes/5758.bolek.pdf',
    titleEn: 'Droshes af parshes: bolek 5758',
    titleYi: '',
    comments: 'PDF Format',
    author: 'Various authors'
}];

export default allResourcesData;