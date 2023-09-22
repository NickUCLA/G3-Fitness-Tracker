const User = require("./User");
const Weight = require("./weight");

User.hasMany(Weight, {
  foreignKey: "user_id",
});

Weight.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Weight };
