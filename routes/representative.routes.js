const router = require('express').Router();
const rServ = require('../services/representative.service');

router.get('/:state', function (req, res, next) {
    // res.json(req.params.state);
    rServ.getRepresentatives(req.params.state, res);
});

router.post('/add', function (req, res, next) {
    rServ.insertRepresentative(req.body.representative, res);
});

module.exports = router;
