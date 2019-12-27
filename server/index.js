const express = require("express");
const app = express();
const connectDB = require("./config/db");
const port = 5000;

// connect database
connectDB();
// init meddelwares
app.use(express.json({extended: false}))
app.get("/", (req, res) => res.send("Hello World!"));

// define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
