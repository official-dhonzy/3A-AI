import { getAI, getGenerativeModel } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-ai.js";

const ai = getAI();

const model = getGenerativeModel(ai, {
  model: "gemini-3.5-flash"
});

async function ask3AAI(question) {
  const result = await model.generateContent(question);
  return result.response.text();
}

window.ask3AAI = ask3AAI;
