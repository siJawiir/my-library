const {BookGenre, Book, Genre} = require('../models');

class BookGenreController {
    static async getData(req, resp) {
      try {
         let data = await BookGenre.findAll({
           include: [
             {
               model: Genre,
               attributes: ["genre"],
             },
             {
               model: Book,
               attributes: ["title", "price", "desc"],
             },
           ],
         });
         resp.status(200).json(data);
       } catch (error) {
         resp.status(500).json(error);
       }
    }

     static async postData(req, resp) {
      try {
         const { book_id, gen_id } = req.body;
         const data = await BookGenre.create({
           book_id, gen_id
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
         const { book_id, gen_id } = req.body;
         const data = await BookGenre.update(
           {
             book_id, gen_id
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
         let data = await BookGenre.destroy({
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

module.exports = BookGenreController
