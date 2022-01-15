const { Schema } = require('mongoose');

// This is a subdocument schema
const citySchema = new Schema({
    cityName: {
        type: String,
        required: true
    },
    cityId: {
        type: String,
        require: true
    }
});

module.exports = citySchema;