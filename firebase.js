import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAI, getGenerativeModel, GoogleAIBackend } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-ai.js";

const firebaseConfig = {
  apiKey: "AIzaSyDcY0jmGCWwGlbjtgKvwAGx--YzXdal2wY",
  authDomain: "a-ai-d738d.firebaseapp.com",
  projectId: "a-ai-d738d",
  storageBucket: "a-ai-d738d.firebasestorage.app",
  messagingSenderId: "337673964829",
  appId: "1:337673964829:web:f10a8f1f8af9cae2a7e5f4",
  measurementId: "G-HHF7M563R0"
};

const app = initializeApp(firebaseConfig);

const ai = getAI(app, {
  backend: new GoogleAIBackend()
});

const model = getGenerativeModel(ai, {
  model: "gemini-3.5-flash"
});

export { ai, model };
