const multer = require("multer");
const path = require("path");

//image upload
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/img/uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      path.parse(file.originalname).name +
        "-" +
// shit happens, read document multer. thanks!. ref: https://stackoverflow.com/questions/48418680/enoent-no-such-file-or-directory
        new Date().toISOString().replace(/:/g, "-") +
        path.extname(file.originalname)
    );
  },
});
// checking file type
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image! Please upload an image.", 400), false);
  }
};

exports.upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 6,
  },
  fileFilter: fileFilter,
});
