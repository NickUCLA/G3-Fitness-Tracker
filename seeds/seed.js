const sequelize = require("../config/connection");
const { User, Weight } = require("../models"); // Import the Weight model
const userData = require("./userData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Seed users
  const createdUsers = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // Seed weights
  for (const user of createdUsers) {
    const userWeightData = userData.find((data) => data.email === user.email);

    for (const weightData of userWeightData.weights) {
      await Weight.create({
        weight: weightData.weight,
        recorded_at: weightData.recorded_at,
        user_id: user.id,
      });
    }
  }

  process.exit(0);
};

seedDatabase();
