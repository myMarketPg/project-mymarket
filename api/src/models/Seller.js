const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('seller', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            set(value) {
              this.setDataValue('password', hash(this.username + value));
            },
            allowNull: false,
        }
    },
    {
        timestamps: false
    }
      );
    };