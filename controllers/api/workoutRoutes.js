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

router.delete("/delete/:id", async (req, res) => {
  try {
    const workoutId = req.params.id;
    const deletedWorkout = await Workout.destroy({
      where: {
        id: workoutId,
        userId: req.session.user_id, 
      },
    });
    if (deletedWorkout) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error("Error deleting workout:", error);
    res.sendStatus(500);
  }
});


module.exports = router;
