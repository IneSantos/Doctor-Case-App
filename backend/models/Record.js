const mongoose = require('mongoose');

const RecordSchema = mongoose.Schema({
    caseID: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    conditionID: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Record', RecordSchema);