const bookRoute = require("express").Router();
const BookController = require("../controllers/BookController");
const multer = require("../middleware/multer");

bookRoute.get("/", BookController.getData);
bookRoute.get("/status", BookController.getStatusData);
bookRoute.get("/latest", BookController.getLatestData);
bookRoute.get("/detail/:id", BookController.getDataBy);
bookRoute.post("/", multer.upload.single("image"), BookController.postData);
bookRoute.put(
  "/update/:id",
  multer.upload.single("image"),
  BookController.putData
);
bookRoute.delete("/delete/:id", BookController.deleteData);

module.exports = bookRoute;
