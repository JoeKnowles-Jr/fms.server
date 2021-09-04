const router = require('express').Router();
const sServ = require('../services/state.service');

router.get('/:state', function (req, res, next) {
    // res.json(req.params.state);
    sServ.getStates(req.params.state, res);
});

module.exports = router;
