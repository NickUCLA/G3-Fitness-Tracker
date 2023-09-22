const router = require("express").Router();
const { Weight } = require("../../models");

router.get("api/weights", async (req, res) => {
  try {
    const weightData = await Weight.findAll(); // Fetch data from the Weight model
    res.json(weightData);
  } catch (error) {
    console.error("Error fetching weight data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;