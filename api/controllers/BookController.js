const { Book, Publisher, BookGenre } = require("../models");

class BookController {
  static async getData(req, resp) {
    try {
      let data = await Book.findAll({
        incluide: [
          {
            model: BookGenre,
            attributes: ["book_id", "gen_id"],
          },
          {
            model: Publisher,
            attributes: ["pub_name"],
          },
        ],
      });
      resp.status(200).json(data);
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async getDataBy(req, resp) {
    try {
      const id = +req.params.id;
      let data = await Book.findOne({
        where: {
          id,
        },
         // include: [{ model: Publisher }],
      });
      resp.status(200).json(data);
    } catch (error) {
      resp.status(500).json(error);
      // console.log(error)
    }
  }

  static async postData(req, resp) {
    try {
      const { pub_id, title, price, image, desc } = req.body;
      const data = await Book.create({
        pub_id,
        title,
        price,
        image,
        desc,
      });
      data
        ? resp.status(200).json({
            message: "Data ID has Added!",
            data,
          })
        : resp.status(403).json({
            message: "Data ID Coulnd't be Added!",
          });
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async putData(req, resp) {
    try {
      const id = +req.params.id;
      const { pub_id, title, price, image, desc } = req.body;
      const data = await Book.update(
        {
          pub_id,
          title,
          price,
          image,
          desc,
        },
        {
          where: { id },
        }
      );
      data[0]
        ? resp.json(201).json({
            message: "Data ID has been Updated!",
            data,
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
      let data = await Book.destroy({
        where: { id },
        force: true,
      });
      data
        ? resp.status(200).json({
            message: "Data ID has Deleted!",
            data,
          })
        : resp.status(403).json({
            message: "Data ID not Found!",
          });
    } catch (error) {
      // resp.status(500).json(error)
      console.log(error);
    }
  }
}

module.exports = BookController;
