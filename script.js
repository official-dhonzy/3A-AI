let chatHistory = JSON.parse(localStorage.getItem("3AAI_history")) || [];


// =====================
// ASK AI
// =====================

async function askAI() {

  const question =
  document.getElementById("question").value;

  const answer =
  document.getElementById("answer");

  const imageInput =
  document.getElementById("imageInput");

  const imageFile =
  imageInput ? imageInput.files[0] : null;


  if (!question.trim() && !imageFile) {

    answer.innerHTML =
    "Please type a question or upload an image.";

    return;

  }


  answer.innerHTML =
  "3A AI is thinking...";


  try {


    const reply =
    await window.ask3AAI(question, imageFile);


    answer.innerHTML =
    reply;


    speakAnswer(reply);



    chatHistory.push({

      question: question,

      answer: reply,

      date: new Date().toLocaleString()

    });



    localStorage.setItem(
      "3AAI_history",
      JSON.stringify(chatHistory)
    );


    showHistory();



  } catch(error) {


    answer.innerHTML =
    "3A AI Error: " + error.message;


  }


}


window.askAI = askAI;



// =====================
// CHAT HISTORY
// =====================


function showHistory(){


  const history =
  document.getElementById("history");


  if(!history) return;


  history.innerHTML = "";


  chatHistory.forEach(chat=>{


    history.innerHTML += `

    <div>

    <b>You:</b> ${chat.question}

    <br>

    <b>3A AI:</b> ${chat.answer}

    <br>

    <small>${chat.date}</small>

    <hr>

    </div>

    `;


  });


}


showHistory();



function clearHistory(){


  chatHistory = [];


  localStorage.removeItem(
    "3AAI_history"
  );


  showHistory();


}


window.clearHistory = clearHistory;




// =====================
// VOICE INPUT
// =====================


function startVoice(){


  const SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;



  if(!SpeechRecognition){

    alert(
    "Voice input is not supported on this device."
    );

    return;

  }



  const recognition =
  new SpeechRecognition();



  recognition.lang =
  "en-US";



  recognition.start();



  recognition.onresult =
  function(event){


    const text =
    event.results[0][0].transcript;


    document.getElementById("question").value =
    text;


  };


}


window.startVoice = startVoice;



// =====================
// VOICE ANSWER FIX
// =====================


function speakAnswer(text){


  if(
    "speechSynthesis" in window &&
    "SpeechSynthesisUtterance" in window
  ){


    const speech =
    new SpeechSynthesisUtterance(text);


    speech.lang =
    "en-US";


    window.speechSynthesis.speak(
      speech
    );


  }


}




// =====================
// SOLUTION BUTTONS
// =====================


function askCategory(topic){


  document.getElementById("question").value =
  "Give me solutions about " + topic;


  askAI();


}


window.askCategory = askCategory;




// =====================
// LOCATION COUNTRIES
// =====================


const countries = {


Africa:[

"Ghana 🇬🇭",

"Nigeria 🇳🇬",

"Kenya 🇰🇪",

"South Africa 🇿🇦"

],


Asia:[

"China 🇨🇳",

"India 🇮🇳",

"Japan 🇯🇵",

"South Korea 🇰🇷"

],


Europe:[

"United Kingdom 🇬🇧",

"France 🇫🇷",

"Germany 🇩🇪",

"Italy 🇮🇹"

],


"North America":[

"USA 🇺🇸",

"Canada 🇨🇦",

"Mexico 🇲🇽",

"Cuba 🇨🇺"

],


"South America":[

"Brazil 🇧🇷",

"Argentina 🇦🇷",

"Chile 🇨🇱",

"Colombia 🇨🇴"

],


Oceania:[

"Australia 🇦🇺",

"New Zealand 🇳🇿",

"Fiji 🇫🇯",

"Samoa 🇼🇸"

]


};



const answerType =
document.getElementById("answerType");


const locationOptions =
document.getElementById("locationOptions");


if(answerType){


answerType.addEventListener(
"change",
()=>{


if(answerType.value === "location"){

locationOptions.style.display =
"block";


}else{

locationOptions.style.display =
"none";


}


});


}



const continent =
document.getElementById("continent");


const country =
document.getElementById("country");



if(continent){


continent.addEventListener(
"change",
()=>{


country.innerHTML =
'<option value="">Choose Country</option>';



countries[continent.value].forEach(place=>{


country.innerHTML +=

`<option value="${place}">
${place}
</option>`;


});


});


  }
