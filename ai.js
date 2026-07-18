window.ask3AAI = async function(question) {

    let text = question.toLowerCase();


    if (text.includes("agriculture") || text.includes("farm")) {

        return "🌱 Agriculture AI\n\nAgriculture is the practice of growing crops and raising animals. Farmers can improve production through better seeds, soil improvement, irrigation, and modern farming methods.";

    }


    if (text.includes("education") || text.includes("school")) {

        return "📚 Education AI\n\nEducation helps people gain knowledge and skills. 3A AI can help with learning, explanations, and study support.";

    }


    if (text.includes("health")) {

        return "🏥 Health AI\n\nHealth includes taking care of the body through good nutrition, hygiene, exercise, and proper medical support.";

    }


    if (text.includes("sanitation") || text.includes("water")) {

        return "🚰 Sanitation AI\n\nClean water, proper waste management, and good hygiene help create healthier communities.";

    }


    return "🌍 I am 3A AI, your African AI assistant. Ask me about Agriculture, Education, Health, Sanitation, Business, or Technology.";

};
