const sServ = require('../services/senator.service');

exports.getSenators = function (req, res, next) {
    sServ.getSenators(res);
};

exports.insertSenator = function(req, res, next) {
    sServ.insertSenator(req.body, res);
};

exports.updateSenator = function(req, res, next) {
    sServ.updateSenator(req.body, res);
};
