'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BookGenre.belongsTo(models.Book, {foreignKey: "book_id"})
      BookGenre.belongsTo(models.Genre, {foreignKey: "gen_id"})
    }
  }
  BookGenre.init({
    book_id: DataTypes.INTEGER,
    gen_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BookGenre',
  });
  return BookGenre;
};