const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    User_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    Movie_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Movie",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Review",
  }
);

module.exports = Review;