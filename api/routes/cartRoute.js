const cartRoute = require("express").Router();
const CartController = require("../controllers/CartController");

cartRoute.get("/", CartController.getData);
cartRoute.get("/:id", CartController.getDataBy);
cartRoute.post("/", CartController.postData);
cartRoute.delete("/delete/:id", CartController.deleteData);

module.exports = cartRoute;
