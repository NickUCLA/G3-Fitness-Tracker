const router = require('express').Router();
const { Workout } = require('../../models');

router.post('/submit', (req, res) => {
  const { exercise_type, description, weight, weight_unit } = req.body;

   const workout_id = 12345;
console.log(req.body)
  res.json({ workout_id });
});

module.exports = router;

// route to get all dishes
router.get('/', async (req, res) => {
    // We find all dishes in the db and set the data equal to dishData
    const workoutData = await workout.findAll().catch((err) => { 
      res.json(err);
    });
    // We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it. 
    const workout = workoutData.map((workout) => workout.get({ plain: true }));
    // We render the template, 'all', passing in dishes, a new array of serialized objects.
    res.render('all', { workout });
    });

    module.exports = router;
