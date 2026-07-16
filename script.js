window.ask3AAI = function() {
  const question = document.getElementById("question").value;

  if (question.trim() === "") {
    alert("Please enter a question");
    return;
  }

  document.getElementById("answer").innerHTML =
    "3A AI is thinking...";

  // Temporary AI response
  setTimeout(() => {
    document.getElementById("answer").innerHTML =
      "You asked: " + question;
  }, 1000);
};
