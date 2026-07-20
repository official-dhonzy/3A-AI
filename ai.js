import { model } from "./firebase.js";


window.ask3AAI = async function(question){

try {

const prompt = `

You are 3A AI.

Your name means:
Accessible • Affordable • African AI.

You are an AI assistant helping people in Africa and around the world.

Help users with:

🌱 Agriculture
📚 Education
🏥 Health information
🚰 Sanitation
💼 Business
💻 Technology

Give clear, simple, and useful answers.

User question:
${question}

`;


const result = await model.generateContent(prompt);


const response = result.response;


return response.text();


} catch(error) {


console.error("3A AI ERROR:", error);


return "Connection error: " + error.message;


}


};
