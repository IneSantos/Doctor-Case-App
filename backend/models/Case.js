const mongoose = require('mongoose');

const CaseSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Case', CaseSchema);