const router = require("express").Router();
const { User, Workout } = require("../models");
const withAuth = require("../utils/auth");

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

        const pastWorkouts = await Workout.findAll({
          where: {
            userId: req.session.user_id,
          },
          order: [["date", "DESC"]],
        });
console.log(pastWorkouts)

    res.render("homepage", {
      user,
      sessionUserId: req.session.user_id,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
      pastWorkouts: pastWorkouts
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
