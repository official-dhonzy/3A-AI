window.ask3AAI = async function(question) {

let text = question.toLowerCase();


if(text.includes("agriculture") || text.includes("farm")) {

return "🌱 Agriculture AI\n\nAgriculture is the practice of growing crops and raising animals. Farmers can improve production through better seeds, soil management, irrigation, and modern farming methods.";

}


if(text.includes("education") || text.includes("school")) {

return "📚 Education AI\n\nEducation helps people gain knowledge and skills. 3A AI can help with learning, explanations, and study support.";

}


if(text.includes("health")) {

return "🏥 Health AI\n\nHealth information includes nutrition, hygiene, exercise, and seeking professional medical support when needed.";

}


if(text.includes("sanitation") || text.includes("water")) {

return "🚰 Sanitation AI\n\nClean water, waste management, and hygiene help create healthier communities.";

}


if(text.includes("business") || text.includes("money")) {

return "💼 Business AI\n\n3A AI can help with business ideas, planning, marketing, and growth strategies.";

}


if(text.includes("technology") || text.includes("ai") || text.includes("coding")) {

return "💻 Technology AI\n\n3A AI can help explain technology, coding, artificial intelligence, and digital skills.";

}



return "🌍 I am 3A AI, your African AI assistant. Ask me about Agriculture, Education, Health, Sanitation, Business, or Technology.";

};
