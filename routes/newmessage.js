const express = require("express");
const router = express.Router();
const db = require('../lib/db');

router.get("/", (req, res) => {
    res.render("newmessage");
});

router.post("/", (req, res) => {
    console.log(req.body);
    db.push(req.body);
    if(req.headers["from"] === "ajaxmessage") {
        res.json(db.getAll());
    } else {
        res.redirect("/newmessage");
    }
});

module.exports = router;