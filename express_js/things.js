var express = require('express');
var router = express.Router();

router.get('/:name', function (req, res) {
    res.send("Get route on things!!!" + req.params.name);
});

router.post('/', function (req, res) {
    res.send("Post route on things!!!");
});



module.exports = router;


