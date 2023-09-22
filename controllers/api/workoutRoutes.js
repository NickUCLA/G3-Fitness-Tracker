const router = require("express").Router();
const { Workout } = require("../../models");

router.post("/submit", async (req, res) => {
  const { exercise_type, description, weight, weight_unit } = req.body;
  const workoutData = await Workout.create({
    exercise_type: exercise_type,
    description: description,
    weight: weight,
    weight_unit: weight_unit,
    userId: req.session.user_id,
  });
  res.json(workoutData.get({ plain: true }).id);
});

module.exports = router;
