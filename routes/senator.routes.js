const router = require('express').Router();
const sServ = require('../services/senator.service');

router.get('/:state', function (req, res, next) {
    // res.json(req.params.state);
    sServ.getSenators(req.params.state, res);
});

module.exports = router;
