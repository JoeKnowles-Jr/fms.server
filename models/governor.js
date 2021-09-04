const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define our model
const governorSchema = new Schema({
    state_name: String,
    state_name_slug: String,
    state_code: String,
    state_code_slug: String,
    votesmart: String,
    title: String,
    party: String,
    name: String,
    name_slug: String,
    first_name: String,
    middle_name: String,
    last_name: String,
    name_suffix: String,
    goes_by: String,
    pronunciation: String,
    gender: String,
    ethnicity: String,
    religion: String,
    openly_lgbtq: String,
    date_of_birth: String,
    entered_office: String,
    term_end: String,
    biography: String,
    phone: String,
    fax: String,
    latitude: String,
    longitude: String,
    address_complete: String,
    address_number: String,
    address_prefix: String,
    address_street: String,
    address_sec_unit_type: String,
    address_sec_unit_num: String,
    address_city: String,
    address_state: String,
    address_zipcode: String,
    address_type: String,
    website: String,
    contact_page: String,
    facebook_url: String,
    twitter_handle: String,
    twitter_url: String,
    photo_url: String

}, { timestamps: true });

// create the model class
const model = mongoose.model('Governor', governorSchema);

// export the model
module.exports = model;
