import { model } from "./firebase.js";

window.ask3AAI = async function(question, imageFile = null) {
  try {

    const languageElement = document.getElementById("language");
    const selectedLanguage = languageElement
      ? languageElement.value
      : "English";

    const answerTypeElement = document.getElementById("answerType");
    const continentElement = document.getElementById("continent");
    const countryElement = document.getElementById("country");

    let locationInfo = "";

    if (
      answerTypeElement &&
      answerTypeElement.value === "location"
    ) {
      locationInfo =
        "Answer based on this location: " +
        continentElement.value +
        ", " +
        countryElement.value;
    }


    const prompt = `
You are 3A AI, an intelligent assistant.

Answer language: ${selectedLanguage}

${locationInfo}

Give helpful, accurate answers.
Consider local culture, resources, and solutions when location is selected.

User question:
${question}
`;


    if (imageFile) {

      const imageBase64 = await fileToBase64(imageFile);

      const result = await model.generateContent([
        {
          text: prompt
        },
        {
          inlineData: {
            data: imageBase64.split(",")[1],
            mimeType: imageFile.type
          }
        }
      ]);

      return result.response.text();

    }


    const result = await model.generateContent(prompt);

    return result.response.text();


  } catch (error) {

    console.log(error);

    return "3A AI is busy right now. Please try again shortly.";

  }
};


function fileToBase64(file) {

  return new Promise((resolve, reject) => {

    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);

    reader.onerror = reject;

    reader.readAsDataURL(file);

  });

      }
