import { model } from "./firebase.js";


window.ask3AAI = async function(question, imageFile = null) {

  try {


    const language =
    document.getElementById("language")?.value || "English";


    const mode =
    document.getElementById("answerType")?.value || "general";


    const continent =
    document.getElementById("continent")?.value || "";


    const country =
    document.getElementById("country")?.value || "";



    let prompt = `

You are 3A AI.

You are an African and global AI assistant.

Answer in ${language}.

Be helpful, clear, and practical.

`;



    if(mode === "location"){

      prompt += `

The user selected this location:

Continent: ${continent}

Country: ${country}

Give answers that consider this location.

`;

    }



    prompt += `

User question:

${question}

`;





    if(imageFile){


      const image =
      await fileToBase64(imageFile);



      const result =
      await model.generateContent([

        {
          text: prompt
        },


        {
          inlineData:{
            data:image.split(",")[1],
            mimeType:imageFile.type
          }
        }

      ]);


      return result.response.text();


    }




    const result =
    await model.generateContent(prompt);



    return result.response.text();



  } catch(error){


    console.log(error);


    return "3A AI Error: " + error.message;


  }


};




function fileToBase64(file){


return new Promise((resolve,reject)=>{


const reader = new FileReader();


reader.onload =
()=>resolve(reader.result);


reader.onerror =
reject;


reader.readAsDataURL(file);



});


}
