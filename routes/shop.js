const path = require("path");
const express = require("express");
const router = express.Router();

const rootDir = require("../utill/path");

router.get("/users", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

module.exports = router;
