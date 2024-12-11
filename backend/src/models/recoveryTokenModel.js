const { DataTypes } = require('sequelize');
const { sequelize } = require('../db.js');
const User = require('./userModel.js');

const RecoveryToken = sequelize.define('RecoveryToken', {
  token: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  user_id: {
    type: DataTypes.INTEGER(5).UNSIGNED,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  }
}, {
  timestamps: false,
});

User.hasMany(RecoveryToken, { foreignKey: 'user_id' });
RecoveryToken.belongsTo(User, { foreignKey: 'user_id' });

module.exports = RecoveryToken;
