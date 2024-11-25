const { DataTypes } = require('sequelize');
const { sequelize } = require('../db.js');

const Post = sequelize.define('Post', {
  id_post: {
    type: DataTypes.INTEGER(8).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: 1,
  },
}, {
  indexes: [{ unique: true, fields: ['title'] }],
  timestamps: true, // Activa la creación automática de createdAt y updatedAt
  updatedAt: 'updated_at',
  createdAt: 'created_at',
});

module.exports = Post;
