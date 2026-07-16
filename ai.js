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


const ai = getAI(app, {
  backend: new GoogleAIBackend()
});


const model = getGenerativeModel(ai, {
  model: "gemini-3.5-flash"
});


window.ask3AAI = async function(question) {

  const result = await model.generateContent(question);

  const answer = result.response.text();


  await addDoc(collection(db, "chats"), {
    question: question,
    answer: answer,
    time: serverTimestamp()
  });


  return answer;

};
