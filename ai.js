import { getAI, getGenerativeModel, GoogleAIBackend } 
from "https://www.gstatic.com/firebasejs/12.16.0/firebase-ai.js";

const ai = getAI({
  backend: new GoogleAIBackend()
});

const model = getGenerativeModel(ai, {
  model: "gemini-3.5-flash"
});

async function ask3AAI(question) {
  const result = await model.generateContent(question);
  return result.response.text();
}

window.ask3AAI = ask3AAI;
