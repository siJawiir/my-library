const {Book} = require('../models');

class BookController {
    static async getData(req, resp) {
        try {
            let data = await Book.findAll({
                
            })
            resp.status(200).json(data)
        } catch (error) {
            resp.status(500).json(error)
        }
    }

     static async getDataBy(req, resp){
        try {
            
        } catch (error) {
            
        }
     }

     static async postData(req, resp) {
        try {
            
        } catch (error) {
            
        }
     }

     static async putData(req, resp) {
        try {
            
        } catch (error) {
            
        }
     }

     static async deleteData(req, resp) {
        try {
            
        } catch (error) {
            
        }
     }
}

module.exports = BookController
