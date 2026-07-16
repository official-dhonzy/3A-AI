window.ask3AAI = async function(question) {

  let q = question.toLowerCase();

  if (q.includes("agriculture") || q.includes("farming")) {
    return "Agriculture is the practice of growing crops and raising animals for food and resources. In Africa, farmers can improve production through better seeds, soil care, irrigation, and modern farming methods.";
  }

  if (q.includes("education") || q.includes("school")) {
    return "Education helps people gain knowledge and skills. Technology, digital learning, and access to quality teachers can improve education across Africa.";
  }

  if (q.includes("health")) {
    return "Health means maintaining physical and mental well-being. Access to hospitals, clean water, nutrition, and health information helps communities stay healthier.";
  }

  if (q.includes("sanitation") || q.includes("water")) {
    return "Sanitation involves keeping communities clean through safe water, proper waste management, and hygiene practices.";
  }

  return "I am 3A AI. Ask me about agriculture, education, health, sanitation, or African solutions.";
};
