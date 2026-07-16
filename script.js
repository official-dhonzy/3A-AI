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

    chatHistory.push({
      question: question,
      answer: reply
    });

    history.innerHTML += `
      <div>
        <b>You:</b> ${question}<br>
        <b>3A AI:</b> ${reply}
        <hr>
      </div>
    `;

  } catch (error) {
    console.error(error);
    answer.innerHTML = "Error connecting to 3A AI.";
  }
}

window.askAI = askAI;
