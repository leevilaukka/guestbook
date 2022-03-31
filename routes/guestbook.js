const express = require("express");
const router = express.Router();
const db = require("../lib/db");

router.get("/", (req, res) => {
    res.render("guestbook", {messages: db.getAll()});
});

module.exports = router;