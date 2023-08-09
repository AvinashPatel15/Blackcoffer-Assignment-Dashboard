const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./Configs/db");
const { chartRouter } = require("./Routes/Chart.Route");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

/** Welcome Page */
app.get("/", (req, res) => {
  res.send("Welcome To Blackcoffer Dashboard Server");
});

/** Chart Router */
app.use("/chart", chartRouter);

/** For Listening Port */
app.listen(port, async () => {
  connection();
  console.log(`Server listening on ${port}`);
});
