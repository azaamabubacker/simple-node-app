const path = require("path");
const express = require("express");
const router = express.Router();

const rootDir = require("../utill/path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/admin");
});

module.exports = router;
