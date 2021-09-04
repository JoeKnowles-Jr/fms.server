const router = require('express').Router();
const gServ = require('../services/governor.service');

router.get('/:state', function (req, res, next) {
    // res.json(req.params.state);
    gServ.getGovernors(req.params.state, res);
});

router.post('/add', function (req, res, next) {
    gServ.insertGovernor(req.body.governor, res);
});

module.exports = router;
