function formatAnswer(text){

return text

// Bold text between ** **
.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

// Numbered lists
.replace(/(\d+\.)/g, "<br><br><strong>$1</strong>")

// Bullet points
.replace(/[-•]/g, "<br>•")

// Paragraph spacing
.replace(/\n\n/g, "<br><br>")

// New lines
.replace(/\n/g, "<br>");

}





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



// AI loading message

const aiMessage = document.createElement("div");

aiMessage.className = "ai-message";

aiMessage.innerHTML = "🌍 3A AI is thinking...";

chatBox.appendChild(aiMessage);


chatBox.scrollTop = chatBox.scrollHeight;




setTimeout(async()=>{


try{


if(window.ask3AAI){


const answer = await window.ask3AAI(question);


// Formatted AI answer

aiMessage.innerHTML = formatAnswer(answer);



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



}

catch(error){


console.error("Chat Error:", error);


aiMessage.innerHTML =
"⚠️ Error: " + error.message;


}



chatBox.scrollTop = chatBox.scrollHeight;



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








// 🎤 Voice Assistant

function startVoice(){


const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;



if(!SpeechRecognition){

alert("🎤 Voice input is not supported on this browser.");

return;

}



const recognition = new SpeechRecognition();


recognition.lang = "en-US";


recognition.start();



recognition.onstart = function(){

console.log("Listening...");

};



recognition.onresult = function(event){


const text =
event.results[0][0].transcript;



document.getElementById("question").value = text;



sendMessage();


};



recognition.onerror = function(event){


alert("Microphone error: " + event.error);


};


}






// Make buttons work

window.sendMessage = sendMessage;

window.newChat = newChat;

window.startVoice = startVoice;
