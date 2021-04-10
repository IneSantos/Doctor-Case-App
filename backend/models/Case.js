const mongoose = require('mongoose');

const CaseSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    label: {
        code: String,
        userId: String,
        date: {
            type: Date,
            default: Date.now
        }
    }
})

module.exports = mongoose.model('Case', CaseSchema);