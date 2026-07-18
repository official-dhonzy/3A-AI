window.ask3AAI = async function(question) {

    const text = question.toLowerCase();


    if (text.includes("agriculture") || text.includes("farm")) {

        return `
        🌱 Agriculture

        Farming can improve with:
        - Better seeds
        - Good soil management
        - Proper irrigation
        - Pest control
        - Modern farming methods

        Ask me more about farming.
        `;

    }


    if (text.includes("education") || text.includes("school")) {

        return `
        📚 Education

        Learning improves through:
        - Access to books and technology
        - Good teaching methods
        - Practice and curiosity
        - Digital learning tools
        `;

    }


    if (text.includes("health")) {

        return `
        🏥 Health

        Staying healthy includes:
        - Eating balanced meals
        - Clean water
        - Hygiene
        - Regular health checkups

        For medical concerns, consult a qualified health professional.
        `;

    }


    if (text.includes("sanitation") || text.includes("water")) {

        return `
        🚰 Sanitation

        Clean communities need:
        - Safe drinking water
        - Proper waste management
        - Good hygiene practices
        - Clean environments
        `;

    }


    return `
    🌍 Hello! I am 3A AI.

    I can help with:
    🌱 Agriculture
    📚 Education
    🏥 Health
    🚰 Sanitation
    💼 Business
    💻 Technology

    What would you like to know?
    `;

};
