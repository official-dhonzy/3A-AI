
async function ask3AAI(question) {
  const response = await fetch("YOUR_AI_CONNECTION_URL", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      question: question
    })
  });

  const data = await response.json();
  return data.answer;
}
