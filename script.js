function askAI() {
  let question = document.getElementById("question").value;

  let answer = document.getElementById("answer");

  if (question === "") {
    answer.innerHTML = "Please ask a question.";
  } else {
    answer.innerHTML = "3A AI is thinking about: " + question;
  }
}
