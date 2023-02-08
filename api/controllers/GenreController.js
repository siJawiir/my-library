const {Genre, Book} = require('../models');
class GenreController {
    static async getData(req, resp) {
      try {
         let data = await Genre.findAll({
           include: [
             {
               model: Book,
               attributes: ["title", "price", "pub_id"],
             }
           ],
         });
         resp.status(200).json(data);
       } catch (error) {
         resp.status(500).json(error);
       }
    }

     static async postData(req, resp) {
        try {
            const {genre} = req.body
            const data = await Genre.create({
               genre
            })
            data
        ? resp.status(200).json({
            message: "Data ID has Added!", data
          })
        : resp.status(403).json({
            message: "Data ID Coulnd't be Added!",
          });
        } catch (error) {
            resp.status(500).json(error)
        }
     }

     static async putData(req, resp) {
      try {
         const { genre } = req.body;
         const id  = +req.params.id
         const data = await Genre.update({
           genre
         }, {
            where: {id}
         });
         data[0]
           ? resp.status(200).json({
               message: "Data ID has Updated!",
               data,
             })
           : resp.status(403).json({
               message: "Data ID Coulnd't be Added!",
             });
       } catch (error) {
         resp.status(500).json(error);
       }
     }

     static async deleteData(req, resp) {
      try {
         const id = +req.params.id;
         let data = await Genre.destroy({
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

module.exports = GenreController
