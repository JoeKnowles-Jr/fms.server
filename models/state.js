const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define our model
const stateSchema = new Schema({
    state: String,
    slug: String,
    code: String,
    nickname: String,
    website: String,
    admission_date: String,
    admission_number: String,
    capital_city: String,
    capital_url: String,
    population: String,
    population_rank: String,
    constitution_url: String,
    state_flag_url: String,
    state_seal_url: String,
    map_image_url: String,
    landscape_background_url: String,
    skyline_background_url: String,
    twitter_url: String,
    facebook_url: String
}, { timestamps: true });

// create the model class
const model = mongoose.model('State', stateSchema);

// export the model
module.exports = model;
