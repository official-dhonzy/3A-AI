// ai.js

import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

window.ask3AAI = async function(question) {

  let answer = "";

  if (question.toLowerCase().includes("agriculture")) {
    answer = "Agriculture can improve through better seeds, soil improvement, irrigation, and modern farming methods.";
  } 
  else if (question.toLowerCase().includes("education")) {
    answer = "Education improves when students have access to quality teachers, learning materials, and technology.";
  }
  else if (question.toLowerCase().includes("health")) {
    answer = "Health improves through good hospitals, prevention, clean water, and access to medical information.";
  }
  else if (question.toLowerCase().includes("sanitation")) {
    answer = "Sanitation improves through clean environments, proper waste disposal, and safe water systems.";
  }
  else {
    answer = "3A AI received your question: " + question;
  }

  // Save chat to Firestore
  await addDoc(collection(db, "chats"), {
    question: question,
    answer: answer,
    time: serverTimestamp()
  });

  return answer;
};
