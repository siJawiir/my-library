const {Auth} = require('../models');

class AuthController{
    static async getData(req, resp) {
        try {
            let data = await Auth.findAll({
                
            })
            resp.status(200).json(data)
        } catch (error) {
            resp.status(500).json(error)
        }
    }

     static async loginData(req, resp){
        try {
            
        } catch (error) {
            
        }
     }

     static async registerData(req, resp) {
        try {
            
        } catch (error) {
            
        }
     }

     static async putData(req, resp) {
        try {
            
        } catch (error) {
            
        }
     }
}

module.exports = AuthController
