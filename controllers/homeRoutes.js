const router = require("express").Router();
const { User, Workout } = require("../models");
const withAuth = require("../utils/auth");

router.get("/test", async (req, res) => {
  try {
    res.render("user");
  } catch (err) {
    res.status(500).json(err);
  }
});
// Prevent non logged in users from viewing the homepage
router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));

        const workoutData = await Workout.findAll({
          where:{
            userId: req.session.user_id
          }
        });

        console.log(workoutData)
       
        const workouts = workoutData.map((workout) => workout.get({ plain: true }));
        console.log("test")
        console.log(workouts);
    res.render("homepage", {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
      workouts
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
