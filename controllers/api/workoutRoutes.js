const express = require('express');
const router = express.Router();
const Workout = require('../models/workout'); // 

router.post('/submit', async (req, res) => {
  try {
    const { exercise_type, description, weight, weight_unit } = req.body;
    const workout = new Workout({
      exercise_type,
      description,
      weight,
      weight_unit,
      userId: req.user.id, 
    });
    await workout.save();
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
