import { model } from "./firebase.js";


window.ask3AAI = async function(question){


try{


const result = await model.generateContent(question);



const response = result.response;



return response.text();



}


catch(error){


console.log(error);


return "🌍 3A AI is having trouble connecting. Please try again.";


}


};
