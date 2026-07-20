function formatAnswer(text){

return text
.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
.replace(/(\d+\.)/g, "<br><br><strong>$1</strong>")
.replace(/[-•]/g, "<br>•")
.replace(/\n\n/g, "<br><br>")
.replace(/\n/g, "<br>");

}





function typeText(element, text){

let index = 0;

element.innerHTML = "";

let timer = setInterval(()=>{

element.innerHTML += text[index];

index++;


if(index >= text.length){

clearInterval(timer);

}

},20);


}







async function sendMessage(){


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




// AI message

const aiMessage = document.createElement("div");

aiMessage.className = "ai-message";

aiMessage.innerHTML = "🌍 3A AI is typing...";

chatBox.appendChild(aiMessage);



chatBox.scrollTop = chatBox.scrollHeight;




try{


if(window.ask3AAI){


const answer = await window.ask3AAI(question);



const formatted = formatAnswer(answer);



typeText(aiMessage, formatted);



if(window.saveChat){

window.saveChat(
question,
answer
);

}


}

else{


aiMessage.innerHTML =
"🌍 3A AI is not connected yet.";

}



}

catch(error){


aiMessage.innerHTML =
"⚠️ Something went wrong.";

console.log(error);


}



chatBox.scrollTop =
chatBox.scrollHeight;


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
window.SpeechRecognition ||
window.webkitSpeechRecognition;



if(!SpeechRecognition){

alert("🎤 Voice input is not supported.");

return;

}



const recognition =
new SpeechRecognition();


recognition.lang="en-US";


recognition.start();



recognition.onresult=function(event){


const text =
event.results[0][0].transcript;


document.getElementById("question").value=text;


sendMessage();


};


}






window.sendMessage = sendMessage;

window.newChat = newChat;

window.startVoice = startVoice;
