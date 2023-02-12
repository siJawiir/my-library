"use strict";
const { encryptPwd } = require("../helpers/bcrypt");
const { options } = require("../routes");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Auth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Auth.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  Auth.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
      },
      role: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate: (auth, options) => {
          auth.password = encryptPwd(auth.password);
        },
      },
      timestamps: false,
      sequelize,
      modelName: "Auth",
    }
  );
  return Auth;
};
