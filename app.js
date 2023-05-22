const express = require("express");
const cors=require("cors");
const mongoose = require("mongoose");
const app = express();
const emailrout=require("./routes/emailRoutes")
app.use(cors());
app.use(express.json());
app.use("/api",emailrout)

mongoose
  .connect(
    "mongodb+srv://suraj:fxdx-suraj@cluster0.yyzhu2n.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected");
  });

app.listen(5000, console.log("server started"));
