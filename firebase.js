import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import {
  getAI,
  getGenerativeModel,
  GoogleAIBackend
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-ai.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


// Firebase Configuration

const firebaseConfig = {

  apiKey: "AIzaSyDcY0jmGCWwGlbjtgKvwAGx--YzXdal2wY",

  authDomain: "a-ai-d738d.firebaseapp.com",

  projectId: "a-ai-d738d",

  storageBucket: "a-ai-d738d.firebasestorage.app",

  messagingSenderId: "337673964829",

  appId: "1:337673964829:web:e0766dc95ad40f6ca7e5f4",

  measurementId: "G-CBCHD37706"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Authentication

const auth = getAuth(app);


// Firestore

const db = getFirestore(app);


// Gemini AI

const ai = getAI(app, {
  backend: new GoogleAIBackend()
});


const model = getGenerativeModel(ai, {
  model: "gemini-2.0-flash-lite"
});


// Sign Up

window.signUp = async function(){

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {

    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    alert("Account created successfully!");

    location.href = "home.html";

  } catch(error){

    alert(error.message);

  }

};


// Login

window.login = async function(){

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {

    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    alert("Login successful!");

    location.href = "home.html";

  } catch(error){

    alert(error.message);

  }

};


// Logout

window.logout = async function(){

  await signOut(auth);

  location.href = "login.html";

};


// User Status

onAuthStateChanged(auth,(user)=>{

  const status = document.getElementById("userStatus");

  if(status){

    status.innerHTML = user
    ? "Logged in: " + user.email
    : "Guest";

  }

});


// Save Chat

window.saveChat = async function(question, answer){

  try {

    const user = auth.currentUser;

    await addDoc(collection(db,"chats"),{

      question: question,

      answer: answer,

      userId: user ? user.uid : "guest",

      time: serverTimestamp()

    });

    console.log("Chat saved");

  } catch(error){

    console.log("Save error:", error);

  }

};


export { model, db, auth };
