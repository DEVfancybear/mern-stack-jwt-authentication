
const express = require("express");
const router = express.Router();
// route GET api/post
// desc test route
// acces public
router.get("/", (req, res) => {
  res.send("Post route");
});
module.exports = router;