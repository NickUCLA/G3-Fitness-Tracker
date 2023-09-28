document.getElementById('submit-workout').
  addEventListener('click', generateWorkout);

function generateWorkout() {
  const duration = document.getElementById('duration').value;
  const type = document.getElementById('type').value;

  const metadata = JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content": "You are a helpful fitness assistant that generates 30-minute workouts."
        },
        {
          "role": "user",
          "content": `Generate a ${duration}-minute ${type} workout for me.`
        }
      ]
    })

  fetch('/api/gpt', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: metadata
  })
    .then(response => response.json())
    .then(data => {
      const generatedWorkout = data.message.content;
      document.getElementById('generatedWorkout').innerText = generatedWorkout;
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById('submit-meal').addEventListener('click', generateMeal);

function generateMeal() {
  const metadata2 = JSON.stringify({
    "model": "gpt-3.5-turbo",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful assistant that generates quick healthy recipes for me."
      },
      {
        "role": "user",
        "content": "Generate a healthy recipe for me."
      }
    ]
  });

  fetch('/api/gpt', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: metadata2
  })
    .then(response => response.json())
    .then(data => {
      const generatedMeal = data.message.content;
      document.getElementById('generatedMeal').innerText = generatedMeal;
    })
    .catch(error => console.error('Error:', error));
}