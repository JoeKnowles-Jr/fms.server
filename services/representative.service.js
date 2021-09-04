const Representative = require('../models/representative');

function getRepresentatives(state, res) {
    let filter = {};
    if (state !== 'all') {
        filter = { state_code: state };
    }
    Representative.find(filter, (err, data) => {
        if (err) { res.json(err); }
        res.json({ data: data });
    });
}

function insertRepresentative(representative, res) {
    // res.json(s);
    const s = new Representative(representative);
    s.save(function (err) {
        if (err) { res.json(err); }
        res.json({ message: "Representative inserted!" });
    });
}

function updateRepresentative({ filter, update }, res) {
    // res.json({filter: filter, update: update});
    Representative.findOneAndUpdate({ bioguide_id: filter }, update, function (err, result) {
        if (err) { res.json(err); }
        res.json({ data: result });
    });
}

module.exports = { getRepresentatives, insertRepresentative, updateRepresentative };
