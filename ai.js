import { model } from "./firebase.js";

window.ask3AAI = async function(question) {
  try {
    const result = await model.generateContent(question);
    return result.response.text();

  } catch (error) {
    console.log(error);
    return "Real error: " + error.message;
  }
};
