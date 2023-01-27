"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.belongsTo(models.Publisher, { foreignKey: "pub_id" });
      Book.hasMany(models.Cart, { foreignKey: "book_id" });
      Book.belongsToMany(models.Genre, {
        through: models.BookGenre,
        foreignKey: "book_id",
      });
    }
  }
  Book.init(
    {
      pub_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      price: DataTypes.INTEGER,
      image: DataTypes.STRING,
      desc: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
