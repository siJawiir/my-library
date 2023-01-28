const {Publisher, Book, Genre} = require('../models');

class PublisherController {
    static async getData(req, resp) {
      try {
         let data = await Publisher.findAll({
           include: [
             {
               model: Book,
               attributes: ["title", "price"],
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
         const { pub_name, address } = req.body;
         const data = await Publisher.create({
           pub_name, address
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
         const { pub_name, address } = req.body;
         const data = await Publisher.update(
           {
             pub_name, address
           },
           {
             where: { id },
           }
         );
         !data[0]
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
         let data = await Publisher.destroy({
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

module.exports = PublisherController
