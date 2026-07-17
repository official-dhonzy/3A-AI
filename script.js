let chatHistory = [];

async function askAI() {

  const questionInput = document.getElementById("question");
  const answer = document.getElementById("answer");
  const history = document.getElementById("history");
  const imageInput = document.getElementById("imageInput");

  const question = questionInput.value;
  const imageFile = imageInput ? imageInput.files[0] : null;


  if (!question.trim() && !imageFile) {

    answer.innerHTML =
      "Please type a question or upload an image.";

    return;

  }


  answer.innerHTML =
    "3A AI is thinking...";


  try {


    if (!window.ask3AAI) {

      answer.innerHTML =
        "AI is still loading. Refresh and try again.";

      return;

    }


    const reply =
      await window.ask3AAI(question, imageFile);



    answer.innerHTML = reply;



    chatHistory.push({

      question: question,
      answer: reply

    });



    if (history) {

      history.innerHTML += `

      <div>

      <b>You:</b> ${question}

      <br>

      <b>3A AI:</b> ${reply}

      <hr>

      </div>

      `;

    }



    speakAnswer(reply);



  } catch (error) {


    console.log(error);


    answer.innerHTML =
      "AI Error: " + error.message;


  }

}



window.askAI = askAI;




// Voice input

function startVoice() {


  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;


  if (!SpeechRecognition) {

    alert("Voice input is not supported.");

    return;

  }


  const recognition =
    new SpeechRecognition();


  recognition.lang = "en-US";


  recognition.start();



  recognition.onresult = function(event) {


    const text =
      event.results[0][0].transcript;


    document.getElementById("question").value =
      text;


    askAI();


  };


}


window.startVoice = startVoice;




// Category buttons

function askCategory(topic) {


  document.getElementById("question").value =
    "Give me solutions about " + topic;


  askAI();


}


window.askCategory = askCategory;




// AI voice response

function speakAnswer(text) {


  if ("speechSynthesis" in window) {


    const speech =
      new SpeechSynthesisUtterance(text);


    speech.lang =
      "en-US";


    window.speechSynthesis.speak(speech);


  }

}




// Location selector

const answerType =
document.getElementById("answerType");


const locationOptions =
document.getElementById("locationOptions");


if (answerType) {


  answerType.addEventListener("change", function(){


    if (this.value === "location") {

      locationOptions.style.display =
        "block";

    } else {

      locationOptions.style.display =
        "none";

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
"Morocco 🇲🇦"
],


Asia: [
"China 🇨🇳",
"India 🇮🇳",
"Japan 🇯🇵",
"South Korea 🇰🇷"
],


Europe: [
"United Kingdom 🇬🇧",
"France 🇫🇷",
"Germany 🇩🇪"
],


"North America": [
"USA 🇺🇸",
"Canada 🇨🇦",
"Mexico 🇲🇽"
],


"South America": [
"Brazil 🇧🇷",
"Argentina 🇦🇷"
],


Oceania: [
"Australia 🇦🇺",
"New Zealand 🇳🇿"
]


};



const continent =
document.getElementById("continent");


const country =
document.getElementById("country");



if (continent) {


  continent.addEventListener("change", function(){


    country.innerHTML =
      '<option value="">Choose Country</option>';



    countries[this.value].forEach(function(place){


      country.innerHTML +=

      `<option value="${place}">
      ${place}
      </option>`;


    });


  });


}
