const gServ = require('../services/governor.service');

exports.getGovernors = function (req, res, next) {
    gServ.getSenators(res);
};

exports.insertGovernor = function (req, res, next) {
    gServ.insertSenator(req.body, res);
};

exports.updateGovernor = function (req, res, next) {
    gServ.updateSenator(req.body, res);
};
