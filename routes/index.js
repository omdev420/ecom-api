const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<div>Hello World</div>");
});
router.use("/api", require("./api"));

module.exports = router;
