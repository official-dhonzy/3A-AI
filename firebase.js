// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "a-ai-d738d.firebaseapp.com",
  projectId: "a-ai-d738d",
  storageBucket: "a-ai-d738d.firebasestorage.app",
  messagingSenderId: "337673964829",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);

getAnalytics(app);

export { app };
