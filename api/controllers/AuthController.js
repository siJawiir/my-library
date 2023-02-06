const { Auth, User } = require("../models");

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

  static async loginData(req, resp) {
    try {
      const data = await User.findOne({
        where: [
          {
            username: req.body.username
          }
        ]
      })

      if (!user) {
        console.log("no email found~!", req.body.username)
        resp.status(401).json({
          message: "Username/pass wrong"
        })
      }
    } catch (error) {}
  }

  static async registerData(req, resp) {
    try {
      const { username, email, password, role, user_id } = req.body;
      const data = await Auth.create({
        username,
        email,
        password,
        role,
        user_id,
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
