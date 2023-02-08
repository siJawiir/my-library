const { Auth, User } = require("../models");
const {decryptPwd} = require('../helpers/bcrypt');
const { tokenGenerator, tokenVerifier } = require("../helpers/jsonweboken");



class AuthController {
  static async getData(req, resp) {
    try {
      let data = await Auth.findAll({
        include: [
          {
            model: User,
            attributes: ["id"],
          },
        ],
      });
      resp.status(200).json(data);
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async loginData(req, resp, next) {
    try {
      const { password, username } = req.body;

      let emailFound = await Auth.findOne({
        where: {
          username : username,
        },
      });

      if (emailFound) {
        if (decryptPwd(password, emailFound.password)) {
          let access_token = tokenGenerator(emailFound);

          let verifyToken = tokenVerifier(access_token);
          console.log(verifyToken);
          resp.status(200).json(access_token);
        } else {
          resp.status(400).json({
            message: `invalid email/password`,
          });
        }
      } else {
        resp.status(404).json({
          message: `name with ${username} not found!`,
        });
      }
    } catch (error) {
      next(error)
      console.log(error)
    }
  }

  static async registerData(req, resp) {
    try {
      const { username, email, password } = req.body;
      const data = await Auth.create({
        username,
        email,
        password,
      });
      resp.status(201).json(data);
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async putData(req, resp) {
    try {
      const id = +req.params.id;
      const { username, email, password, role, user_id } = req.body;
      const data = await Auth.update(
        {
          username,
          email,
          password,
          role,
          user_id,
        },
        {
          where: { id },
        }
      );
      !data[0]
        ? resp.json(201).json({
            message: "Data ID has been Updated!",
          })
        : resp.status(403).json({
            message: "Data ID not Found!",
          });
    } catch (error) {
      resp.status(500).json(error);
    }
  }
  static async deleteData(req, resp) {
    try {
      const id = +req.params.id;
      let data = await Auth.destroy({
        where: { id },
        force: true
      },
      force
      );
      data ?
      resp.status(200).json({
         message: "Data ID has Deleted!"
      })
      :
      resp.status(403).json({
         message: "Data ID not Found!"
      })
    } catch (error) {
      resp.status(500).json(error)
    }
  }


  
}

module.exports = AuthController;
