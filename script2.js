function askAI(topic) {
let question = topic || document.getElementById("question").value.toLowerCase();
  let answer = document.getElementById("answer");

  if (question.includes("farm") || question.includes("agriculture")) {
    answer.innerHTML = "3A AI: Improve farming with good seeds, soil care, water management, and modern farming methods.";
  } 
  else if (question.includes("school") || question.includes("education")) {
    answer.innerHTML = "3A AI: Education grows through learning, reading, practice, and sharing knowledge.";
  }
  else if (question.includes("health")) {
    answer.innerHTML = "3A AI: Good health starts with clean water, good nutrition, and healthy habits.";
  }
  else if (question.includes("sanitation") || question.includes("clean")) {
    answer.innerHTML = "3A AI: Good sanitation means clean surroundings, safe water, and proper waste disposal.";
  }
  else {
    answer.innerHTML = "3A AI: Ask me about agriculture, education, health, or sanitation.";
  }
}
