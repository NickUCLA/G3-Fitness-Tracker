const router = require("express").Router();
const weightRoutes = require("./weightRoutes");
const workoutRoutes = require("./workoutRoutes");


router.use("/weights", weightRoutes);
router.use("/workouts", workoutRoutes);

module.exports = router;
