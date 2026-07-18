console.log("3A AI loaded");


window.ask3AAI = async function(question) {

    const text = question.toLowerCase();


    if (text.includes("hello") || text.includes("hi")) {

        return `
        👋 Hello! I am 3A AI.

        Accessible • Affordable • African AI.

        How can I help you today?
        `;

    }


    if (text.includes("agriculture") || text.includes("farm") || text.includes("crop")) {

        return `
        🌱 Agriculture AI

        Agriculture is the practice of growing crops and raising animals.

        Farmers can improve production through:
        • Better seeds
        • Good soil management
        • Irrigation
        • Pest control
        • Modern farming methods
        `;

    }


    if (text.includes("education") || text.includes("school") || text.includes("learn")) {

        return `
        📚 Education AI

        Education helps people gain knowledge and skills.

        I can help with:
        • Learning explanations
        • Study tips
        • School subjects
        • Digital learning
        `;

    }


    if (text.includes("health") || text.includes("healthy")) {

        return `
        🏥 Health AI

        Healthy living includes:
        • Good nutrition
        • Clean water
        • Hygiene
        • Exercise
        • Proper medical support

        For serious medical concerns, contact a health professional.
        `;

    }


    if (text.includes("sanitation") || text.includes("water") || text.includes("waste")) {

        return `
        🚰 Sanitation AI

        Clean communities need:
        • Safe water
        • Proper waste management
        • Good hygiene
        • Environmental care
        `;

    }


    if (text.includes("business") || text.includes("money") || text.includes("startup")) {

        return `
        💼 Business AI

        I can help with:
        • Business ideas
        • Planning
        • Entrepreneurship
        • Growth strategies
        `;

    }


    if (text.includes("technology") || text.includes("coding") || text.includes("computer")) {

        return `
        💻 Technology AI

        I can help with:
        • Coding
        • Apps
        • Digital skills
        • Artificial Intelligence
        `;

    }


    return `
    🌍 I am 3A AI.

    I can help you with:

    🌱 Agriculture
    📚 Education
    🏥 Health
    🚰 Sanitation
    💼 Business
    💻 Technology

    Ask me a question.
    `;

};
