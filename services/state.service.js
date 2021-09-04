const State = require('../models/state');

function getStates(state, res) {
    let filter = {};
    if (state !== 'all') {
        filter = { state_code: state };
    }
    State.find(filter, (err, data) => {
        if (err) { res.json(err); }
        res.json({ data: data });
    });
}

function insertState(state, res) {
    // res.json(s);
    const s = new State(state);
    s.save(function (err) {
        if (err) { res.json(err); }
        res.json({ message: "State inserted!" });
    });
}

function updateState({ filter, update }, res) {
    // res.json({filter: filter, update: update});
    State.findOneAndUpdate({ bioguide_id: filter }, update, function (err, result) {
        if (err) { res.json(err); }
        res.json({ data: result });
    });
}

module.exports = { getStates, insertState, updateState };
