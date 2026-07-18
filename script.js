function sendMessage() {

    const input = document.getElementById("question");
    const chatBox = document.getElementById("chat-box");

    const question = input.value.trim();

    if (question === "") {
        return;
    }


    // Show user's message
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerHTML = question;

    chatBox.appendChild(userMessage);


    input.value = "";


    // AI thinking message
    const thinking = document.createElement("div");
    thinking.className = "ai-message";
    thinking.innerHTML = "3A AI is thinking...";

    chatBox.appendChild(thinking);


    // Ask AI
    setTimeout(async () => {

        if (window.ask3AAI) {

            const answer = await window.ask3AAI(question);

            thinking.innerHTML = answer;

        } else {

            thinking.innerHTML =
            "Welcome to 3A AI. My AI system is connecting...";

        }


        chatBox.scrollTop = chatBox.scrollHeight;


    }, 1000);

}
