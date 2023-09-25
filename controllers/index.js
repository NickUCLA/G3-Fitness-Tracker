const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const userRoutes = require("./userRoutes")

router.use("/user", userRoutes)
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
