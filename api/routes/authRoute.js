const authRoute = require("express").Router();
const AuthController = require("../controllers/AuthController");

authRoute.get("/", AuthController.getData);
authRoute.post("/login", AuthController.loginData);
authRoute.post("/register", AuthController.registerData);
authRoute.put("/update", AuthController.putData);

module.exports = authRoute;
