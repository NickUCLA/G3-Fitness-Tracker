const { Weight } = require("../models");

exports.getWeights = async (req, res) => {
  try {
    const userData = await Weight.findAll({
      Where: {
        userId: req.session.user_id,
      },
    });
    res.json(userData);
  } catch (error) {
    console.error("Error fetching user weight data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
