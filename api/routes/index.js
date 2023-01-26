//Routes Index
const route = require("express").Router();

route.get("/api", (req, resp) => {
  resp.send(200).json({
    message: "Masuk",
  });
});

const userRoutes = require("./userRoute");
const cartRoutes = require("./cartRoute");
const bookRoutes = require("./bookRoute");
const bookGenreRoutes = require("./bookGenreRoute");
const genreRoutes = require("./genreRoute");
const publisherRoutes = require("./publisherRoute");
const authRoutes = require("./authRoute");

route.use("/api/users", userRoutes);
route.use("/api/carts", cartRoutes);
route.use("/api/books", bookRoutes);
route.use("/api/book_genre", bookGenreRoutes);
route.use("/api/genres", genreRoutes);
route.use("/api/publishers", publisherRoutes);
route.use('/api/auth', authRoutes);

module.exports = route;
