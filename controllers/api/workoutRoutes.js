const router = require('express').Router();
const { Workout } = require('../../models');

router.post('/submit', (req, res) => {
  const { exercise_type, description, weight, weight_unit } = req.body;

   const workout_id = 12345;
console.log(req.body)
  res.json({ workout_id });
});

module.exports = router;