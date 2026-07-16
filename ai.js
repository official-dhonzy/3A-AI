window.ask3AAI = async function(question) {

  let q = question.toLowerCase();

  if (q.includes("agriculture") || q.includes("farming")) {
    return "Agriculture is the practice of growing crops and raising animals. Farmers can improve production through better seeds, soil improvement, irrigation, and modern farming methods.";
  }

  if (q.includes("education") || q.includes("school")) {
    return "Education helps people gain knowledge and skills. Digital learning, technology, and better access to teachers can improve education across Africa.";
  }

  if (q.includes("health")) {
    return "Health means keeping people physically and mentally well. Clean water, nutrition, healthcare services, and prevention help communities stay healthy.";
  }

  if (q.includes("sanitation") || q.includes("water")) {
    return "Sanitation means keeping communities clean through safe water, proper waste disposal, and good hygiene practices.";
  }

  if (q.includes("hello") || q.includes("hi")) {
    return "Hello! I am 3A AI, Accessible • Affordable • African AI.";
  }

  return "I am 3A AI. Ask me about agriculture, education, health, sanitation, or African solutions.";
};
