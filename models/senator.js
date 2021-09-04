const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define our model
const senatorSchema = new Schema({
    address_city: String,
    address_complete: String,
    address_number: String,
    address_prefix: String,
    address_sec_unit_num: String,
    address_sec_unit_type: String,
    address_state: String,
    address_street: String,
    address_type: String,
    address_zipcode: String,
    biography: String,
    bioguide: { type: String, unique: true, uppercase: true },
    class: String,
    contact_page: String,
    date_of_birth: String,
    entered_office: String,
    ethnicity: String,
    facebook_url: String,
    fax: String,
    fec: String,
    first_name: String,
    gender: String,
    goes_by: String,
    google_entity_id: String,
    last_name: String,
    latitude: String,
    longitude: String,
    maplight: String,
    middle_name: String,
    name: String,
    name_slug: String,
    name_suffix: String,
    openly_lgbtq: String,
    opensecrets: String,
    party: String,
    phone: String,
    photo_url: String,
    pronunciation: String,
    religion: String,
    state_code: String,
    state_code_slug: String,
    state_name: String,
    state_name_slug: String,
    term_end: String,
    thomas: String,
    title: String,
    twitter_handle: String,
    twitter_url: String,
    votesmart: String,
    website: String,
    wikidata: String
}, {timestamps: true});

// create the model class
const model = mongoose.model('Senator', senatorSchema);

// export the model
module.exports = model;
