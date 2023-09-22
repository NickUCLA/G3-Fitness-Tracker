const router = require("express").Router();
const userRoutes = require("./userRoutes");
const weightRoutes = require("./weightRoutes");
const workoutRoutes = require("./workoutRoutes");

router.use("/users", userRoutes);
router.use("/weights", weightRoutes);
router.use("/workouts", workoutRoutes);

module.exports = router;
