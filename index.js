require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");
const port = process.env.PORT || 5000;

// connect database
connectDB();
app.use(cors());

// init meddelwares
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Hello World!"));

// define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
