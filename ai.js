// ai.js

import { app, db } from "./firebase.js";

import {
  getAI,
  getGenerativeModel,
  GoogleAIBackend
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-ai.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


// Connect to Gemini Developer API
const ai = getAI(app, {
  backend: new GoogleAIBackend()
});


// Choose Gemini model
const model = getGenerativeModel(ai, {
  model: "gemini-3.5-flash"
});


// Function used by your Ask button
window.ask3AAI = async function(question) {

  try {

    const result = await model.generateContent(question);

    const response = result.response;
    const answer = response.text();


    // Save chat to Firestore
    await addDoc(collection(db, "chats"), {
      question: question,
      answer: answer,
      time: serverTimestamp()
    });


    return answer;

  } catch (error) {

    console.log(error);

    return "Sorry, 3A AI could not answer right now: " + error.message;

  }

};
