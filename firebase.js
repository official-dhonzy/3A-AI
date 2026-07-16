// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app-check.js";


const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "a-ai-d738d.firebaseapp.com",
  projectId: "a-ai-d738d",
  storageBucket: "a-ai-d738d.firebasestorage.app",
  messagingSenderId: "337673964829",
  appId: "1:337673964829:web:f10a8f1f8af9cae2a7e5f4",
  measurementId: "G-HHF7M563R0"
};


// Enable App Check debug mode for testing
self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;


const app = initializeApp(firebaseConfig);


// App Check setup
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider("YOUR_RECAPTCHA_SITE_KEY"),
  isTokenAutoRefreshEnabled: true
});


const db = getFirestore(app);


export { app, db, appCheck };
