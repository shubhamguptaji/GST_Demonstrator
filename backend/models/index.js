const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://guptaji:d23wuZKg1KkHJBEj@cluster-jnh4i.mongodb.net/test?retryWrites=true",
    // "mongodb://localhost:27017/Scapic"
    {
      useNewUrlParser: true
    }
  )
  .catch(err => console.log(err));

mongoose.set("useCreateIndex", true);

mongoose.connection.on("connected", () => console.log("MongoDB connected"));

mongoose.connection.on("error", err => console.log("Error connecting to MongoDB" + err));

mongoose.connection.on("disconnected", () => console.log("MongoDB disconnected"));
