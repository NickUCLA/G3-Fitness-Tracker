const router = require("express").Router();
const userRoutes = require("./userRoutes");
const weightRoutes = require("./weightRoutes");

router.use("/users", userRoutes);
router.use("/weights", weightRoutes);

module.exports = router;
