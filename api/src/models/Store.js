const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('store', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    rating: {
        type: DataTypes.FLOAT,
        validate: {isIn: [[1, 2, 3, 4, 5]]}
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {
    timestamps: false
  },
  {
    timestamps: false
  }
  );
};