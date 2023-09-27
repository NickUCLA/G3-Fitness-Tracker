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
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    if (!userData) {
      // Handle the case where the user is not found
      return res.status(404).json({ message: "User not found" });
    }

    const user = userData.get({ plain: true });

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
      user,
      sessionUserId: req.session.user_id,
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
