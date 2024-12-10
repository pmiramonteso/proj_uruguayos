const { DataTypes } = require('sequelize');
const { sequelize } = require('../db.js');

const Post = sequelize.define('Post', {
  id_blog: {
    type: DataTypes.INTEGER(8).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: 1,
  },
}, {
  indexes: [{ unique: true, fields: ['titulo'] }],
  timestamps: true, // Activa la creación automática de createdAt y updatedAt
  updatedAt: 'updated_at',
  createdAt: 'created_at',
});

module.exports = Post;
