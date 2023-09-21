const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection');
const { ActivityLog } = require('.');

class activityLog extends Model {}

activityLog.init (
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",   // matches the model name in User
          key: "id",       // matches the primary key in User
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "activityLog",
    }
}
)

module.exports = activityLog;
