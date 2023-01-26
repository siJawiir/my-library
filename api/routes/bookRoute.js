const bookRoute = require("express").Router();
const BookController = require("../controllers/BookController");

bookRoute.get("/", BookController.getData);
bookRoute.get("/book/:id", BookController.getDataBy);
bookRoute.post("/create", BookController.postData);
bookRoute.put("/update/:id", BookController.putData);
bookRoute.delete("/delete/:id", BookController.deleteData);

module.exports = bookRoute;
