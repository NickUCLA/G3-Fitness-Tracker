const User = require("./User");
const Weight = require("./weight");
const Workout = require("./workout")

User.hasMany(Weight, {
  foreignKey: "user_id",
});

module.exports = { User, Weight, Workout };
