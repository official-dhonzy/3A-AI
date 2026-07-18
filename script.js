function sendMessage(){


const input = document.getElementById("question");

const chatBox = document.getElementById("chat-box");


const question = input.value.trim();



if(question === ""){

return;

}





// User message

const userMessage = document.createElement("div");

userMessage.className = "user-message";

userMessage.innerHTML = question;


chatBox.appendChild(userMessage);



input.value = "";






// AI loading

const aiMessage = document.createElement("div");

aiMessage.className = "ai-message";

aiMessage.innerHTML =
"🌍 3A AI is thinking...";


chatBox.appendChild(aiMessage);



chatBox.scrollTop =
chatBox.scrollHeight;






setTimeout(async()=>{



if(window.ask3AAI){



const answer =
await window.ask3AAI(question);



aiMessage.innerHTML = answer;





// Save conversation

if(window.saveChat){


window.saveChat(
question,
answer
);


}



}


else{


aiMessage.innerHTML =
"🌍 3A AI connection not ready.";


}



chatBox.scrollTop =
chatBox.scrollHeight;



},500);



}







function newChat(){


const chatBox =
document.getElementById("chat-box");



chatBox.innerHTML = `

<div class="ai-message">

👋 New chat started.

<br><br>

How can I help you today?

</div>

`;


}
function startVoice(){

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;


if(!SpeechRecognition){

alert("Voice input is not supported on this browser.");

return;

}


const recognition = new SpeechRecognition();

recognition.lang = "en-US";

recognition.start();


recognition.onresult = function(event){

const text =
event.results[0][0].transcript;


document.getElementById("question").value = text;


sendMessage();

};

}
