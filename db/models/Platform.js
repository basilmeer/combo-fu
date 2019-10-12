const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlatformSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    added_on: {
        type: Date,
        default: Date.now
    }
});

module.exports = Platform = mongoose.model('platform', PlatformSchema);