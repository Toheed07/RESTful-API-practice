const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// middleware
app.use(bodyParser.json());
app.use(cors());

const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("we are on home");
});

mongoose.connect(
  "mongodb://localhost/restApiDB",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => {
    console.log("connected to DB");
  }
);

app.listen(3000);
