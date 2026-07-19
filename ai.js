import { model } from "./firebase.js";


window.ask3AAI = async function(question){

try{


const prompt = `

You are 3A AI.

Your name means:
Accessible • Affordable • African AI.

You are an AI assistant that helps people in Africa and around the world.

Help users with:

🌱 Agriculture
📚 Education
🏥 Health information
🚰 Sanitation
💼 Business
💻 Technology

Give clear, useful, and simple answers.

User question:

${question}

`;



const result = await model.generateContent(prompt);


const response = result.response;


return response.text();


}


catch(error){


console.log(error);


return "🌍 3A AI is having trouble connecting. Please try again.";


}


};
