const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
          title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
          User_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'User',
              key: 'id',
            },
        },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'movie',
    }
);

module.exports = Movie;