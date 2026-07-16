// ai.js

import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

// Temporary AI brain
// We will connect Gemini here after Firebase AI Logic is enabled.

window.ask3AAI = async function(question) {

  let answer = "";

  answer = `3A AI received your question:

"${question}"

I will be able to give full AI lessons, explanations, coding help, and step-by-step guidance when the Gemini AI connection is activated.`;

  // Save conversation
  try {
    await addDoc(collection(db, "chats"), {
      question: question,
      answer: answer,
      time: serverTimestamp()
    });
  } catch (error) {
    console.log("Firestore save error:", error);
  }

  return answer;
};
