const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define our model
const commentSchema = new Schema({
    title: String,
    body: String,
    tags: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    community: String,
    posted_from: String,
    replies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        default: []
    }]
}, { timestamps: true });

// create the model class
const model = mongoose.model('Comment', commentSchema);

// export the model
module.exports = model;
