const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${
      process.env.DB_PASSWORD
    }@cluster-jnh4i.mongodb.net/test?retryWrites=true`,
    {
      useNewUrlParser: true
    }
  )
  .catch(err => console.log(err));

mongoose.set("useCreateIndex", true);

mongoose.connection.on("connected", () => console.log("MongoDB connected"));

mongoose.connection.on("error", err => console.log("Error connecting to MongoDB" + err));

mongoose.connection.on("disconnected", () => console.log("MongoDB disconnected"));
