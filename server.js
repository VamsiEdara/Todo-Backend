const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db-connection.js");
const todoRoutes = require("./routes/todos.js");
const app = express();
const port = process.env.PORT;
dotenv.config();

//middleware to parse json request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/v1", todoRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Homepage</h1>");
});
// app.post("/cars", (req, res) => {
//   const { name, model } = req.body;
//   console.log(name, model);
//   res.send("Car added!");
// });

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

// vamsi
// vamsi123
// mongodb+srv://vamsi:vamsi123@cluster0.wwbfnng.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// const mongoose = require("mongoose");
// mongoose
// .connect("mongodb+srv://vamsi:vamsi123@cluster0.wwbfnng.mongodb.net/Cars")
// .connect(process.env.URI)
// .then(() => {
//   console.log(`DB connected succesful`);
// })
// .catch((err) => {
//   console.log(err);
// });
