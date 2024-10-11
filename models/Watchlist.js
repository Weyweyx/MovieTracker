const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Watchlist extends Model {}

Watchlist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
        unique: true,
      },
    },
    movie_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "movie",
        key: "id",
        unique: true,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "watchlist",
  }
);

module.exports = Watchlist;
