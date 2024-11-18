const { DataTypes } = require('sequelize');
const { sequelize } = require('../db.js');

const Negocios = sequelize.define('Negocio', {
    id_negocio: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type:DataTypes.STRING,
        allowNull: true
    },
    redesSociales: {
        type:DataTypes.STRING,
        allowNull: true
    },
    latitud: {
        type: DataTypes.DECIMAL(10,8),
        allowNull: false
    },
    longitud: {
        type: DataTypes.DECIMAL(11,8),
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'Negocios',
  timestamps: false
})

module.exports = Negocios;