const { User, Auth } = require("../models");

class UserController {
  static async getData(req, resp) {
    try {
      let data = await User.findAll({
        order:[
          ['id', 'ASC']
        ], 
        include: [
           {
              model: Auth,
                attributes: ["user_id", "username"]
           }
         ]
      });
      resp.status(200).json(data);
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async getLatestData(req, resp) {
    try {
      let data = await User.findAll({
        limit: 3,
        order:[
          ['createdAt', 'DESC']
        ],
      });
      resp.status(200).json(data);
    } catch (error) {
      resp.status(500).json(error);
      console.log(error)
    }
  }

  static async getDataBy(req, resp) {
    try {
      const id  = +req.params.id;
      let data = await User.findByPk(id);
      resp.status(200).json(data);
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  
  static async getStatusData(req, resp) {
    try {
      const id = req.id
      let data = await User.findAndCountAll(id)
      resp.status(200).json(data)
    } catch (error) {
      resp.status(500).json(error)
      console.log(error)
    }
  }

  static async postData(req, resp) {
    const { fullname, phone, address, city, image } = req.body;
    try {
      let data = User.create({
        fullname,
        phone,
        address,
        city,
        image: req.protocol +
        "://" +
        req.get("host") +
        "/img/uploads/" +
        req.file.filename,
      });
      resp.status(201).json(data);
    } catch (error) {
      // resp.status(500).json(error);
      console.log(error)
    }
  }

  static async putData(req, resp) {
    try {
      const id = +req.params.id;
      const { fullname, phone, address, city, image } = req.body;
      let data = User.update(
        {
          fullname,
          phone,
          address,
          city,
          image: req.protocol +
          "://" +
          req.get("host") +
          "/img/uploads/" +
          req.file.filename,
        },
        {
          where: { id },
        }
      );
      // console.log(id)
      data[0]
        ? resp.json(201).json({
            message: "Data ID has been Updated!",
          })
        : resp.status(403).json({
            message: "Data ID not Found!",
          });
      // console.log(data)
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async deleteData(req, resp) {
    try {
      const id = +req.params.id;
      let data = await User.destroy({
        where: { id },
        force:true
      });
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

module.exports = UserController;
