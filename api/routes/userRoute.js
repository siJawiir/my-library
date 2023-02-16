const userRoute = require("express").Router();
const UserController = require("../controllers/UserController");
const multer = require("../middleware/multer");

userRoute.get("/", UserController.getData);
userRoute.get("/status", UserController.getStatusData);
userRoute.get("/latest", UserController.getLatestData);
userRoute.get("/detail/:id", UserController.getDataBy);
userRoute.post("/", multer.upload.single("image"), UserController.postData);
userRoute.put(
  "/update/:id",
  multer.upload.single("image"),
  UserController.putData
);
userRoute.delete("/delete/:id", UserController.deleteData);

module.exports = userRoute;
