const Senator = require('../models/senator');

function getSenators(state, res) {
    let filter = {};
    if (state !== 'all') {
        filter = { state_code: state };
    }
    Senator.find(filter, (err, data) => {
        if (err) { res.json(err); }
        res.json({ data: data });
    });
}

function insertSenator(senator, res) {
    // res.json(s);
    const s = new Senator(senator);
    s.save(function(err) {
        if (err) { res.json(err); }
        res.json({message: "Senator inserted!"}) ;
    });
} 

function updateSenator({filter, update}, res) {
    // res.json({filter: filter, update: update});
    Senator.findOneAndUpdate({bioguide_id: filter}, update, function(err, result) {
        if (err) { res.json(err); }
        res.json({ data: result });
    });
}

module.exports = { getSenators, insertSenator, updateSenator };
