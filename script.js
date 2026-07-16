window.ask3AAI = async function(question) {

  if (question.trim() === "") {
    return "Please enter a question.";
  }

  await new Promise(resolve => setTimeout(resolve, 1000));

  if (question.toLowerCase().includes("hello")) {
    return "Hello! I am 3A AI, Accessible • Affordable • African AI.";
  }

  return "You asked: " + question;
};
