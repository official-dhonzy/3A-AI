let chatHistory = [];

async function askAI() {
  const question = document.getElementById("question").value;
  const imageInput = document.getElementById("imageInput");
  const imageFile = imageInput ? imageInput.files[0] : null;

  const answer = document.getElementById("answer");
  const history = document.getElementById("history");

  const answerType = document.getElementById("answerType");
  const continent = document.getElementById("continent");
  const country = document.getElementById("country");
  const language = document.getElementById("language");


  let modePrompt = "";

  if (answerType && answerType.value === "location") {

    modePrompt =
      "Answer based on this location: " +
      continent.value +
      ", " +
      country.value;

  } else {

    modePrompt = "Give a general AI answer.";

  }


  let languagePrompt = "";

  if (language) {
    languagePrompt =
      "Reply in " + language.value + " language.";
  }


  if (!question.trim() && !imageFile) {

    answer.innerHTML =
      "Please type a question or select an image.";

    return;

  }


  answer.innerHTML = "3A AI is thinking...";


  try {

    const fullQuestion =
      modePrompt +
      "\n" +
      languagePrompt +
      "\n\nUser question: " +
      question;


    const reply =
      await window.ask3AAI(fullQuestion, imageFile);


    answer.innerHTML = reply;


    speakAnswer(reply);


    chatHistory.push({

      question: question,
      answer: reply

    });


    if (history) {

      history.innerHTML += `

        <div>

          <b>You:</b> ${question}<br>

          <b>3A AI:</b> ${reply}

          <hr>

        </div>

      `;

    }


  } catch (error) {

    console.error(error);

    answer.innerHTML =
      "3A AI is busy right now. Please try again shortly.";

  }

}



function speakAnswer(text) {

  const speech =
    new SpeechSynthesisUtterance(text);

  speech.lang = "en-US";

  speech.rate = 1;

  speech.pitch = 1;


  window.speechSynthesis.speak(speech);

}



window.askAI = askAI;



// Image upload

const imageInput =
document.getElementById("imageInput");


if (imageInput) {

  imageInput.addEventListener("change", function () {

    const file = this.files[0];


    if (file) {

      document.getElementById("answer").innerHTML =
        "Image selected: " +
        file.name +
        ". Ask 3A AI about it.";

    }

  });

}



// AI type selector

const answerType =
document.getElementById("answerType");

const locationOptions =
document.getElementById("locationOptions");



if (answerType) {

  answerType.addEventListener("change", function () {

    if (this.value === "location") {

      locationOptions.style.display = "block";

    } else {

      locationOptions.style.display = "none";

    }

  });

}



// Countries

const countries = {

Africa: [

"Ghana 🇬🇭",
"Nigeria 🇳🇬",
"Kenya 🇰🇪",
"South Africa 🇿🇦",
"Egypt 🇪🇬",
"Ethiopia 🇪🇹",
"Tanzania 🇹🇿",
"Uganda 🇺🇬",
"Rwanda 🇷🇼",
"Senegal 🇸🇳",
"Morocco 🇲🇦",
"Algeria 🇩🇿",
"Tunisia 🇹🇳",
"Cameroon 🇨🇲",
"Ivory Coast 🇨🇮",
"Zimbabwe 🇿🇼",
"Zambia 🇿🇲",
"Botswana 🇧🇼",
"Namibia 🇳🇦",
"Mali 🇲🇱"

],


Asia: [

"China 🇨🇳",
"India 🇮🇳",
"Japan 🇯🇵",
"South Korea 🇰🇷",
"Indonesia 🇮🇩",
"Malaysia 🇲🇾",
"Singapore 🇸🇬",
"Thailand 🇹🇭",
"Vietnam 🇻🇳",
"Saudi Arabia 🇸🇦"

],


Europe: [

"United Kingdom 🇬🇧",
"France 🇫🇷",
"Germany 🇩🇪",
"Italy 🇮🇹",
"Spain 🇪🇸",
"Portugal 🇵🇹",
"Netherlands 🇳🇱",
"Sweden 🇸🇪",
"Norway 🇳🇴",
"Switzerland 🇨🇭"

],


"North America": [

"United States 🇺🇸",
"Canada 🇨🇦",
"Mexico 🇲🇽",
"Cuba 🇨🇺",
"Jamaica 🇯🇲"

],


"South America": [

"Brazil 🇧🇷",
"Argentina 🇦🇷",
"Colombia 🇨🇴",
"Chile 🇨🇱",
"Peru 🇵🇪",
"Ecuador 🇪🇨"

],


Oceania: [

"Australia 🇦🇺",
"New Zealand 🇳🇿",
"Fiji 🇫🇯",
"Papua New Guinea 🇵🇬"

]

};



// Country selector

const continent =
document.getElementById("continent");

const country =
document.getElementById("country");


if (continent) {

  continent.addEventListener("change", function () {


    country.innerHTML =
    '<option value="">Choose Country</option>';


    if (countries[this.value]) {


      countries[this.value].forEach(function(place) {


        country.innerHTML +=

        `<option value="${place}">
        ${place}
        </option>`;


      });


    }


  });

  }
