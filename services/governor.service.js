const Governor = require('../models/governor');

function getGovernors(state, res) {
    let filter = {};
    if (state !== 'all') {
        filter = { state_code: state };
    }
    Governor.find(filter, (err, data) => {
        if (err) { res.json(err); }
        res.json({ data: data });
    });
}

function insertGovernor(governor, res) {
    console.log(governor);
    const s = new Governor(governor);
    console.log("s");
    console.log(s);
    s.save(function (err) {
        if (err) { res.json(err); }
        res.json({ message: "Governor inserted!" });
    });
}

function updateGovernor({ filter, update }, res) {
    // res.json({filter: filter, update: update});
    Governor.findOneAndUpdate({ bioguide_id: filter }, update, function (err, result) {
        if (err) { res.json(err); }
        res.json({ data: result });
    });
}

module.exports = { getGovernors, insertGovernor, updateGovernor };
