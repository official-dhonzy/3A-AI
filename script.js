let chatHistory = [];

async function askAI() {
  const question = document.getElementById("question").value;
  const answer = document.getElementById("answer");
  const history = document.getElementById("history");

  if (!question.trim()) {
    answer.innerHTML = "Please type a question.";
    return;
  }

  answer.innerHTML = "3A AI is thinking...";

  try {
    const reply = await window.ask3AAI(question);

    answer.innerHTML = reply;

    // 🔊 Read AI answer aloud
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
    answer.innerHTML = "3A AI is busy right now. Please try again shortly.";
  }
}

function speakAnswer(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}

window.askAI = askAI;
const imageInput = document.getElementById("imageInput");

if (imageInput) {
  imageInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
      document.getElementById("answer").innerHTML =
        "Image selected: " + file.name + ". Now ask 3A AI about it.";
    }
  });
}
