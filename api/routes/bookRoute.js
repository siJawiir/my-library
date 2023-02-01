const bookRoute = require("express").Router();
const BookController = require("../controllers/BookController");
const multer = require("../middleware/multer");

bookRoute.get("/", BookController.getData);
bookRoute.get("/book/:id", BookController.getDataBy);
bookRoute.post(
  "/",
  multer.upload.single("image"),
  (req, resp) => {
    let imageUrl =
      req.protocol +
      "://" +
      req.get("host") +
      "/img/uploads/" +
      req.file.filename;
    resp.json({ status: "success", image: imageUrl });
  },
  BookController.postData
);
bookRoute.put("/update/:id", BookController.putData);
bookRoute.delete("/delete/:id", BookController.deleteData);

module.exports = bookRoute;
