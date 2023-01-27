const authRoute = require("express").Router();
const AuthController = require("../controllers/AuthController");

authRoute.get("/", AuthController.getData);
authRoute.post("/login", AuthController.loginData);
authRoute.post("/register", AuthController.registerData);
authRoute.put("/update/:id", AuthController.putData);
authRoute.delete("/delete/:id", AuthController.deleteData);

module.exports = authRoute;
