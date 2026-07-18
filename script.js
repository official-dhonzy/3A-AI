function sendMessage() {

    const input = document.getElementById("question");
    const chatBox = document.getElementById("chat-box");

    const question = input.value.trim();

    if (question === "") {
        return;
    }


    // User message
    const user = document.createElement("div");
    user.className = "user-message";
    user.innerHTML = question;

    chatBox.appendChild(user);


    input.value = "";


    // AI typing
    const ai = document.createElement("div");
    ai.className = "ai-message";
    ai.innerHTML = "3A AI is thinking...";

    chatBox.appendChild(ai);


    chatBox.scrollTop = chatBox.scrollHeight;



    setTimeout(async function(){

        if(window.ask3AAI){

            const answer = await window.ask3AAI(question);

            ai.innerHTML = answer;

        } else {

            ai.innerHTML =
            "🌍 3A AI is connecting. Please try again.";

        }


        chatBox.scrollTop = chatBox.scrollHeight;


    },1000);

}




function newChat(){

    const chatBox = document.getElementById("chat-box");


    chatBox.innerHTML = `

    <div class="ai-message">

    👋 New chat started.

    <br><br>

    How can I help you today?

    </div>

    `;

}
