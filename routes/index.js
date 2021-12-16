const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get('/otra', (req,res) =>{
    res.json({ message: "Esta es una prueba de json" });
});

module.exports = router;
