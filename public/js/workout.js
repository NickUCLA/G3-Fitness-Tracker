const exerciseTypeInput = document.getElementById('exerciseType');
const descriptionInput = document.getElementById('workoutDescription');
const weightInput = document.getElementById('weight');
const weightUnitInput = document.querySelector('select[name="weight_unit"]');
const workoutForm = document.querySelector('#workout-form');
const dateInput = document.getElementById('date');

const postWorkout = (workout) =>
  fetch('/api/workouts/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(workout),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Successful POST request:', data);
      return data;
    })
    .catch((error) => {
      console.error('Error in POST request:', error);
    });

const fetchAndRenderWorkouts = () => {
  fetch('/api/workouts')
    .then((res) => res.json())
    .then((data) => {

      const pastWorkoutsList = document.getElementById('workout-list'); 
      pastWorkoutsList.innerHTML = '';

      data.workouts.forEach((workout) => {
        const li = document.createElement('li');
        li.textContent = `${workout.exercise_type} - ${workout.description} - ${workout.weight} ${workout.weight_unit} -
        ${workout.date}`;
        pastWorkoutsList.appendChild(li);
      
      });
      console.log('Workouts rendered:', data.workouts);
    })
    .catch((error) => {
      console.error('Error fetching workouts:', error);
    });
};

workoutForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newWorkout = {
    exercise_type: exerciseTypeInput.value.trim(),
    description: descriptionInput.value.trim(),
    weight: weightInput.value,
    weight_unit: weightUnitInput.value,
    date: dateInput.value
  };


  postWorkout(newWorkout)
    .then((data) => {
      console.log(`Workout added! Workout ID: ${data.workout_id}`);
      fetchAndRenderWorkouts();
       location.reload();
    })
    .catch((err) => console.error(err));
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-workout')) {
    const workoutId = event.target.dataset.workoutId;
    deleteWorkout(workoutId);
  }
});

function deleteWorkout(workoutId) {
  fetch(`/api/workouts/delete/${workoutId}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error deleting workout: ${response.statusText}`);
    }
    return response.text(); 
  })
  .then(data => {
    console.log(data); 
    fetchAndRenderWorkouts();
     location.reload(); 
  })
  .catch(error => console.error('Error:', error));
}
