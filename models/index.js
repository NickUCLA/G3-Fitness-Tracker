const User = require("./User");
const Weight = require("./weight");
const ActivityLog = require("./activityLog");

User.hasMany(Weight, {
  foreignKey: "user_id",
});

Weight.belongsTo(User, {
  foreignKey: "user_id",
});

Weight.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(ActivityLog, {
  foreignKey: "user_id",
});

module.exports = { User, Weight, ActivityLog };
