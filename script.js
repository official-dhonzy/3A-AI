async function askAI() {
  let question = document.getElementById("question").value;
  let answer = document.getElementById("answer");

  if (question === "") {
    answer.innerHTML = "Please ask a question.";
    return;
  }

  answer.innerHTML = "3A AI is thinking...";

  let response = await ask3AAI(question);

  answer.innerHTML = response;
}
