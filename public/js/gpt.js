import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

document.getElementById('submit-workout').
addEventListener('click', generateWorkout);

    function generateWorkout() {
      const duration = document.getElementById('duration').value;
      const type = document.getElementById('type').value;

      fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ${apiKey}'
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful fitness assistant that generates 30-minute workouts.'
            },
            {
              role: 'user',
              content: `Generate a ${duration}-minute ${type} workout for me.`
            }
          ]
        })
      })
        .then(response => response.json())
        .then(data => {
          const generatedWorkout = data.choices[0].message.content;
          document.getElementById('generatedWorkout').innerText = generatedWorkout;
        })
        .catch(error => console.error('Error:', error));
    }
    document.getElementById('submit-meal').addEventListener('click', generateMeal);
    function generateMeal() {
      fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ${apiKey}'
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant that generates quick healthy recipes for me.'
            },
            {
              role: 'user',
              content: 'Generate a healthy recipe for me.'
            }
          ]
        })
      })
        .then(response => response.json())
        .then(data => {
          const generatedWorkout = data.choices[0].message.content;
          document.getElementById('generatedMeal').innerText = generatedWorkout;
        })
        .catch(error => console.error('Error:', error));
    }