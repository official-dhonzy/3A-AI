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


// Firebase Configuration

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



// =====================
// USER ACCOUNT
// =====================


const auth = getAuth(app);



// Sign Up

window.signUp = async function(){


  const email =
  document.getElementById("email").value;


  const password =
  document.getElementById("password").value;



  try {


    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );


    alert("Account created successfully!");



  } catch(error){


    alert(error.message);


  }


};





// Login

window.login = async function(){


  const email =
  document.getElementById("email").value;


  const password =
  document.getElementById("password").value;



  try {


    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );


    alert("Login successful!");



  } catch(error){


    alert(error.message);


  }


};





// Logout

window.logout = async function(){


  await signOut(auth);


  alert("Logged out");


};





// User Status

onAuthStateChanged(auth, (user)=>{


  const status =
  document.getElementById("userStatus");



  if(status){


    if(user){


      status.innerHTML =
      "Logged in: " + user.email;



    } else {


      status.innerHTML =
      "Not logged in";


    }


  }


});





// =====================
// 3A AI MODEL
// =====================


const ai = getAI(app, {

  backend: new GoogleAIBackend()

});



const model = getGenerativeModel(ai, {


  model: "gemini-3.5-flash"


});





export { ai, model };
