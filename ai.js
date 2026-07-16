import { model } from "./firebase.js";

window.ask3AAI = async function(question) {
  try {
    const result = await model.generateContent(question);
    return result.response.text();

  } catch (error) {
    console.error("AI Error:", error);
    return "AI connection failed. Please try again.";
  }
};
