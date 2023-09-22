const { User, Weight } = require("../models");

exports.getUserWeights = async (req, res) => {
  try {
    const userData = await User.findAll({ include: Weight });
    res.json(userData);
  } catch (error) {
    console.error("Error fetching user weight data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
