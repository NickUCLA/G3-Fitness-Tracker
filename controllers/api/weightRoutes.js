const router = require("express").Router();
const { Weight, User } = require("../../models");

router.get("/api/weights", async (req, res) => {
  try {
    const weightData = await Weight.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: User,
    });

    const weightsWithGoalWeight = weightData.map((weight) => {
      const user = weight.User;
      if (user) {
        return {
          id: weight.id,
          weight: weight.weight,
          recorded_at: weight.recorded_at,
          goalWeight: user.goalWeight, // Access the goalWeight attribute directly
        };
      }
      return weight;
    });

    res.json(weightsWithGoalWeight);
  } catch (error) {
    console.error("Error fetching weight data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
