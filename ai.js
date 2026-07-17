import { model } from "./firebase.js";

window.ask3AAI = async function(question, imageFile = null) {
  try {

    let prompt = question;

    if (imageFile) {
      const imageBase64 = await fileToBase64(imageFile);

      const result = await model.generateContent([
        {
          text: question
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
