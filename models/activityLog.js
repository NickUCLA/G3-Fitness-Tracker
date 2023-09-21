const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class activityLog extends Model {
    static associate(models) {
        activityLog.belongsTo(models.User, {
          foreignKey: 'userId',
        });
}
}