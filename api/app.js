const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
// const session = require('express-session')



app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized:true}));



const routes = require("./routes");
app.use(routes);
app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
