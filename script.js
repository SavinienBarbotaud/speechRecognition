let langTrad = [
    ["Français", "fr"],
    ["English", "en"],
    ["Español", "es"],
    ["Afrikaans", "af"],
    ["አማርኛ", "am"],
    ["Azərbaycanca", "az"],
    ["বাংলা", "bn"],
    ["Bahasa Indonesia", "id"],
    ["Bahasa Melayu", "ms"],
    ["Català", "ca"],
    ["Čeština", "cs"],
    ["Dansk", "da"],
    ["Deutsch", "de"],
    ["Euskara", "eu"],
    ["Filipino", "fil"],
    ["Basa Jawa", "jv"],
    ["Galego", "gl"],
    ["ગુજરાતી", "gu"],
    ["Hrvatski", "hr"],
    ["IsiZulu", "zu"],
    ["Íslenska", "is"],
    ["Italiano", "it"],
    ["ಕನ್ನಡ", "kn"],
    ["ភាសាខ្មែរ", "km"],
    ["Latviešu", "lv"],
    ["Lietuvių", "lt"],
    ["മലയാളം", "ml"],
    ["मराठी", "mr"],
    ["Magyar", "hu"],
    ["ລາວ", "lo"],
    ["Nederlands", "nl"],
    ["नेपाली भाषा", "ne"],
    ["Norsk bokmål", "nb"],
    ["Polski", "pl"],
    ["Português", "pt"],
    ["Română", "ro"],
    ["සිංහල", "si"],
    ["Slovenščina", "sl"],
    ["Basa Sunda", "su"],
    ["Slovenčina", "sk"],
    ["Suomi", "fi"],
    ["Svenska", "sv"],
    ["Kiswahili", "sw"],
    ["ქართული", "ka"],
    ["Հայերեն", "hy"],
    ["தமிழ்", "ta"],
    ["తెలుగు", "te"],
    ["Tiếng Việt", "vi"],
    ["Türkçe", "tr"],
    ["اُردُو", "ur"],
    ["Ελληνικά", "el"],
    ["български", "bg"],
    ["Pусский", "ru"],
    ["Српски", "sr"],
    ["Українська", "uk"],
    ["한국어", "ko"],
    ["中文", "cmn"],
    ["日本語", "ja"],
    ["हिन्दी", "hi"],
    ["ภาษาไทย", "th"]
];


var langList = [
    ["Afrikaans", ["af-ZA"]],
    ["አማርኛ", ["am-ET"]],
    ["Azərbaycanca", ["az-AZ"]],
    ["বাংলা", ["bn-BD", "বাংলাদেশ"], ["bn-IN", "ভারত"]],
    ["Bahasa Indonesia", ["id-ID"]],
    ["Bahasa Melayu", ["ms-MY"]],
    ["Català", ["ca-ES"]],
    ["Čeština", ["cs-CZ"]],
    ["Dansk", ["da-DK"]],
    ["Deutsch", ["de-DE"]],
    [
        "English",
        ["en-AU", "Australia"],
        ["en-CA", "Canada"],
        ["en-IN", "India"],
        ["en-KE", "Kenya"],
        ["en-TZ", "Tanzania"],
        ["en-GH", "Ghana"],
        ["en-NZ", "New Zealand"],
        ["en-NG", "Nigeria"],
        ["en-ZA", "South Africa"],
        ["en-PH", "Philippines"],
        ["en-GB", "United Kingdom"],
        ["en-US", "United States"],
    ],
    [
        "Español",
        ["es-AR", "Argentina"],
        ["es-BO", "Bolivia"],
        ["es-CL", "Chile"],
        ["es-CO", "Colombia"],
        ["es-CR", "Costa Rica"],
        ["es-EC", "Ecuador"],
        ["es-SV", "El Salvador"],
        ["es-ES", "España"],
        ["es-US", "Estados Unidos"],
        ["es-GT", "Guatemala"],
        ["es-HN", "Honduras"],
        ["es-MX", "México"],
        ["es-NI", "Nicaragua"],
        ["es-PA", "Panamá"],
        ["es-PY", "Paraguay"],
        ["es-PE", "Perú"],
        ["es-PR", "Puerto Rico"],
        ["es-DO", "República Dominicana"],
        ["es-UY", "Uruguay"],
        ["es-VE", "Venezuela"],
    ],
    ["Euskara", ["eu-ES"]],
    ["Filipino", ["fil-PH"]],
    ["Français", ["fr-FR"]],
    ["Basa Jawa", ["jv-ID"]],
    ["Galego", ["gl-ES"]],
    ["ગુજરાતી", ["gu-IN"]],
    ["Hrvatski", ["hr-HR"]],
    ["IsiZulu", ["zu-ZA"]],
    ["Íslenska", ["is-IS"]],
    ["Italiano", ["it-IT", "Italia"], ["it-CH", "Svizzera"]],
    ["ಕನ್ನಡ", ["kn-IN"]],
    ["ភាសាខ្មែរ", ["km-KH"]],
    ["Latviešu", ["lv-LV"]],
    ["Lietuvių", ["lt-LT"]],
    ["മലയാളം", ["ml-IN"]],
    ["मराठी", ["mr-IN"]],
    ["Magyar", ["hu-HU"]],
    ["ລາວ", ["lo-LA"]],
    ["Nederlands", ["nl-NL"]],
    ["नेपाली भाषा", ["ne-NP"]],
    ["Norsk bokmål", ["nb-NO"]],
    ["Polski", ["pl-PL"]],
    ["Português", ["pt-BR", "Brasil"], ["pt-PT", "Portugal"]],
    ["Română", ["ro-RO"]],
    ["සිංහල", ["si-LK"]],
    ["Slovenščina", ["sl-SI"]],
    ["Basa Sunda", ["su-ID"]],
    ["Slovenčina", ["sk-SK"]],
    ["Suomi", ["fi-FI"]],
    ["Svenska", ["sv-SE"]],
    ["Kiswahili", ["sw-TZ", "Tanzania"], ["sw-KE", "Kenya"]],
    ["ქართული", ["ka-GE"]],
    ["Հայերեն", ["hy-AM"]],
    [
        "தமிழ்",
        ["ta-IN", "இந்தியா"],
        ["ta-SG", "சிங்கப்பூர்"],
        ["ta-LK", "இலங்கை"],
        ["ta-MY", "மலேசியா"],
    ],
    ["తెలుగు", ["te-IN"]],
    ["Tiếng Việt", ["vi-VN"]],
    ["Türkçe", ["tr-TR"]],
    ["اُردُو", ["ur-PK", "پاکستان"], ["ur-IN", "بھارت"]],
    ["Ελληνικά", ["el-GR"]],
    ["български", ["bg-BG"]],
    ["Pусский", ["ru-RU"]],
    ["Српски", ["sr-RS"]],
    ["Українська", ["uk-UA"]],
    ["한국어", ["ko-KR"]],
    [
        "中文",
        ["cmn-Hans-CN", "普通话 (中国大陆)"],
        ["cmn-Hans-HK", "普通话 (香港)"],
        ["cmn-Hant-TW", "中文 (台灣)"],
        ["yue-Hant-HK", "粵語 (香港)"],
    ],
    ["日本語", ["ja-JP"]],
    ["हिन्दी", ["hi-IN"]],
    ["ภาษาไทย", ["th-TH"]],
];

var output = document.getElementById("output");
var translation = document.getElementById("translation");

let oldText = '';

var start = document.getElementById("start");
var stop = document.getElementById("stop");
var cancel = document.getElementById("cancel");
var country = document.getElementById("country");
var countryTrad = document.getElementById("countryTrad");
var countryLang = document.getElementById("countryLang");
var confd = document.getElementById("confd");

// now lets use web speech api
//var speechRecognition = speechRecognition || webkitSpeechRecognition;
let recognizer = new webkitSpeechRecognition();

recognizer.interimResults = true;
recognizer.maxAlternatives = 1;
recognizer.continuous = true;

// first select a default language on page load
recognizer.lang = "fr-FR";
// now create a list of language to select on page
for (var i = 0; i < langList.length; i++) {
    // add it in the select tag
    if (langList[i][0] == "English") {
        var countryList2 = countryList2 + '<option selected value="' + i + '">' + langList[i][0] + "</option>";
    } else if (langList[i][0] == "Français") {
        var countryList = countryList + '<option selected value="' + i + '">' + langList[i][0] + "</option>";
    } else {
        var countryList = countryList + '<option value="' + i + '">' + langList[i][0] + "</option>";
        var countryList2 = countryList2 + '<option value="' + i + '">' + langList[i][0] + "</option>";
    }
}
country.innerHTML = countryList;
countryTrad.innerHTML = countryList2;
// some languages are used in more that one country Now specify languages for country
country.onchange = function () {
    var countryVal = country.value;
    // we have to give the array variable to get data "langList"
    var selectCount = langList[countryVal];
    if (selectCount.length <= 2) {
        var countryLangList =
            countryLangList +
            '<option value="' +
            selectCount[1][0] +
            '">' +
            selectCount[0] +
            "</option>";
    } else {
        for (var j = 1; j < selectCount.length; j++) {
            var countryLangList =
                countryLangList +
                '<option value="' +
                selectCount[j][0] +
                '">' +
                selectCount[j][1] +
                "</option>";
        }
    }
    countryLang.innerHTML = countryLangList;
    countryLang.style.display = "inline-block";
    recognizer.lang = countryLang.value;
};
// first set the value for lang
countryLang.onchange = function () {
    // it will get the value and assign to the "recognizer.lang" on selecting
    recognizer.lang = countryLang.value;
};
// now set controls
start.onclick = function () {
    console.log("Speech started");
    recognizer.start();
};
stop.onclick = function () {
    console.log("Speech stopped");
    recognizer.stop();
};
cancel.onclick = function () {
    console.log("Speech canceled");
    recognizer.abort();
    confd.innerHTML = "Cancled";
};



// when the recognizing start
recognizer.onstart = function () {
    console.log("recognizer started");
};
recognizer.onspeechend = function () {
    console.log("recognizer end");
    stop.click();
};
recognizer.onerror = function (event) {
    console.log("on error");
    console.log(event.error);
};

let timeoutID;
recognizer.onresult = async function (event) {

    clearTimeout(timeoutID);

    // Set a new timeout for 1 second
    timeoutID = setTimeout(function () {
        oldText = output.value;
        recognizer.stop();
        setTimeout(function () {recognizer.start()}, 500);
    }, 1000);

    //console.log("on result" + JSON.stringify(event.results[0][0].transcript));
    var outText = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence * 100;
    output.value = oldText+" "+outText;
    confd.innerHTML = "Confidence: " + Math.round(confidence) + "%";
    await traduction(output.value, langList[country.value][0], langList[countryTrad.value][0]);
};


async function traduction(text, lang, langTo) {
    let sigle = '';
    let sigleTo = '';
    if (!text || !langTo || !lang) return;
    for (let i = 0; i < langTrad.length; i++) {
        if (langTrad[i][0] === lang) {
            sigle = langTrad[i][1];
        }
        if (langTrad[i][0] === langTo) {
            sigleTo = langTrad[i][1];
        }
    }
    //console.log(lang + " -> " + langTo);
    //console.log(sigle + " -> " + sigleTo);
    fetch("http://localhost:5000/translate", {
        method: "POST",
        body: JSON.stringify({
            q: text,
            source: sigle,
            target: sigleTo,
        }),
        headers: { "Content-Type": "application/json" }
    }).then(async (res) => {
        result = await res.json();
        translation.value = result.translatedText;
    });
}