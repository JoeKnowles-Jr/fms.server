const router = require("express").Router();
const Comment = require("../models/comment.js");

router.get("/", (req, res) => {
    Comment.find({})
        .then(data => res.json({ comments: data }))
        .catch(err => res.json({ message: err }));
});

router.get("/communities", (req, res) => {
    Comment.aggregate([
        {
            $group: {
                _id: '$community',
                comments: { $push: '$$ROOT' }
            }
        }
    ])
        .then(data => res.json({ communities: data }))
    .catch(err => res.json({ message: err }));
});

router.get("/community/:cid", (req, res) => {
    Comment.find({ community: req.params.cid })
        .then(data => res.json({ comments: data }))
        .catch(err => res.json({ message: err }));
});

router.get("/:cid", function (req, res) {
    Comment.findOne({ _id: req.params.cid })
        .populate('replies')
        .then(comment => {
            return res.json({ comment: comment });
        })
        .catch(err => res.json({ message: err }));
});

router.post("/", function (req, res) {
    const l = new Comment(req.body);
    l.save(function (err) {
        if (err) { res.send(err); }
        res.json(l);
    });
});

router.put("/", function (req, res) {
    const cid = req.body.filter;
    const update = req.body.update;

    Comment.findOneAndUpdate({ _id: cid }, update, { new: true }, (err, result) => {
        if (err) { res.json(err); }
        res.json(result);
    });
});

router.delete("/:cid", function (req, res) {
    Comment.findByIdAndDelete({ _id: req.params.cid })
        .then(() => res.json("deleted"))
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;
