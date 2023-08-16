const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
//routes
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

//database
const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://quangnv0212:QKIjheFdvKgyr2a1@cluster0.kn6fcgr.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};
connectDatabase();
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}..`);
});
