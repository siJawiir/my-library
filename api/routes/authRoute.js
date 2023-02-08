const authRoute = require("express").Router();
const AuthController = require("../controllers/AuthController");
// const {isAuthenticated} = require('../middleware/isAuthenticated')
const {authentication} = require('../middleware/auth')


authRoute.get("/",authentication, AuthController.getData);
authRoute.post("/login",  AuthController.loginData);
authRoute.post("/logout", (req,resp) => {
    req.logout();
    resp.status(200).json({MessageChannel:"kaluar"})
});
authRoute.post("/signup", AuthController.registerData);
authRoute.delete("/delete/:id", AuthController.deleteData);





module.exports = authRoute;
