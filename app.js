const express = require("express");
const cors=require("cors");
const mongoose = require("mongoose");
const app = express();
const emailrout=require("./routes/emailRoutes")
app.use(cors());
app.use(express.json());
app.use("/api",emailrout)
require('dotenv').config()

mongoose
  .connect(
    process.env['MONGO_URL'],
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected");
  });

app.listen(5000, console.log("server started"));
