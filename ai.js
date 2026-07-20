import { model } from "./firebase.js";

console.log("3A AI file loaded");


window.ask3AAI = async function(question){

console.log("Question sent:", question);


try {

const result = await model.generateContent(question);

console.log("AI result:", result);


return result.response.text();


} catch(error) {


console.error("FULL AI ERROR:", error);


return "ERROR: " + error.message;


}

};
