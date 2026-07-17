let chatHistory = [];

async function askAI() {

  const question = document.getElementById("question").value;
  const answer = document.getElementById("answer");
  const history = document.getElementById("history");

  const imageInput = document.getElementById("imageInput");
  const imageFile = imageInput ? imageInput.files[0] : null;


  if (!question.trim() && !imageFile) {
    answer.innerHTML = "Please type a question or upload an image.";
    return;
  }


  answer.innerHTML = "3A AI is thinking...";


  try {

    const reply = await window.ask3AAI(question, imageFile);

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


  } catch(error) {

    console.log(error);

    answer.innerHTML =
      "3A AI error: " + error.message;

  }

}


window.askAI = askAI;



function startVoice() {

  if (!("webkitSpeechRecognition" in window ||
        "SpeechRecognition" in window)) {

    alert("Voice is not supported.");

    return;
  }


  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;


  const recognition = new SpeechRecognition();


  recognition.lang = "en-US";


  recognition.start();


  recognition.onresult = function(event) {

    const text =
      event.results[0][0].transcript;


    document.getElementById("question").value = text;


    askAI();

  };

}


window.startVoice = startVoice;



function askCategory(topic) {

  document.getElementById("question").value =
    "Give me solutions about " + topic;

  askAI();

}


window.askCategory = askCategory;



function speakAnswer(text) {

  const speech =
    new SpeechSynthesisUtterance(text);

  speech.lang = "en-US";

  speech.rate = 1;

  speech.pitch = 1;


  window.speechSynthesis.speak(speech);

}
