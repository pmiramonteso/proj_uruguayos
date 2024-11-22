const { DataTypes } = require('sequelize');
const { sequelize } = require('../db.js');

const Eventos = sequelize.define('Eventos', {
  id_evento: {
    type: DataTypes.INTEGER(8).UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  entrada: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Gratuito', // Valor por defecto si no se proporciona
    validate: {
      isIn: [['Gratuito', 'Con precio', 'No disponible']] // Valores posibles
    }
  },
  precio: {
    type: DataTypes.DECIMAL,
    allowNull: true, // Solo se proporciona si 'entrada' es 'Con precio'
    validate: {
      isDecimal: true, 
      min: 0 // El precio debe ser mayor o igual a 0
    }
}
}, 
{
  tableName: 'eventos',
  timestamps: true
});

module.exports = Eventos;
