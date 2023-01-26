const {User} = require('../models');

class UserController {
    static async getData(req, resp) {
        try {
            let users = await User.findAll({
                
            })
            resp.status(200).json(users)
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

module.exports = UserController
