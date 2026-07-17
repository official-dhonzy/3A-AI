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



    let instructions = `

You are 3A AI.

You are an assistant for global and African solutions.

Reply in ${language}.

`;



    if(mode === "location") {

      instructions += `

Give answers based on:

Continent: ${continent}

Country: ${country}

Consider local culture, resources, and conditions.

`;

    }



    instructions += `

User question:

${question}

`;




    if(imageFile){


      const image =
        await fileToBase64(imageFile);



      const result =
      await model.generateContent([


        {

          text: instructions

        },


        {

          inlineData: {

            data: image.split(",")[1],

            mimeType: imageFile.type

          }

        }


      ]);



      return result.response.text();



    }





    const result =
    await model.generateContent(instructions);



    return result.response.text();



  } catch(error) {


    console.log(error);


    return "AI Error: " + error.message;


  }


};




function fileToBase64(file){


return new Promise((resolve,reject)=>{


const reader =
new FileReader();


reader.onload =
()=>resolve(reader.result);



reader.onerror =
reject;



reader.readAsDataURL(file);



});


}
