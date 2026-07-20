import { model } from "./firebase.js";



window.ask3AAI = async function(question){


try{


const prompt = `

You are 3A AI.

Your name means:
Accessible • Affordable • African AI.

You help people in Africa and around the world.

Answer clearly using:

- Short paragraphs
- Bullet points
- Numbered steps when needed
- Bold important points using ** **

Help with:

🌱 Agriculture
📚 Education
🏥 Health information
🚰 Sanitation
💼 Business
💻 Technology


User question:

${question}

`;



const result = await model.generateContent(prompt);


const response = result.response;


return response.text();


}


catch(error){


console.log("Gemini Error:", error);


// Backup AI responses

const q = question.toLowerCase();



// Greetings

if(
q.includes("hello") ||
q.includes("hi") ||
q.includes("hey")
){

return `

👋 **Hello! I am 3A AI.**

Your African AI assistant.

I can help you with:

• 🌱 Agriculture
• 📚 Education
• 🏥 Health information
• 🚰 Sanitation
• 💼 Business
• 💻 Technology

Ask me anything.

`;

}




// Agriculture

if(
q.includes("farm") ||
q.includes("agriculture") ||
q.includes("crop")
){

return `

🌱 **Agriculture Solution**

Farmers can improve production by:

1. Using quality seeds.

2. Improving soil with compost and organic matter.

3. Using proper irrigation methods.

4. Protecting crops from pests.

5. Learning modern farming techniques.

`;

}




// Education

if(
q.includes("school") ||
q.includes("education") ||
q.includes("learn")
){

return `

📚 **Education Support**

Ways to improve learning:

• Read consistently.

• Practice what you learn.

• Use technology and online resources.

• Ask questions when you do not understand.

`;

}




// Business

if(
q.includes("business") ||
q.includes("money") ||
q.includes("startup")
){

return `

💼 **Business Advice**

Steps to start a business:

1. Find a problem people need solved.

2. Create a useful solution.

3. Start small and improve.

4. Understand your customers.

5. Manage your money carefully.

`;

}




// Technology

if(
q.includes("technology") ||
q.includes("computer") ||
q.includes("ai")
){

return `

💻 **Technology Help**

Technology can help by:

• Making work faster.

• Improving communication.

• Creating new business opportunities.

• Providing access to information.

`;

}




// Default

return `

🌍 **3A AI**

I am currently running in backup mode.

I can help you with:

• Agriculture
• Education
• Health
• Sanitation
• Business
• Technology

Please ask another question.

`;

}



};
