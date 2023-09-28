const router = require("express").Router();
const weightRoutes = require("./weightRoutes");
const workoutRoutes = require("./workoutRoutes");
const gptRoutes = require("./gptRoutes");


router.use("/weights", weightRoutes);
router.use("/workouts", workoutRoutes);
router.use("/gpt", gptRoutes);

module.exports = router;
