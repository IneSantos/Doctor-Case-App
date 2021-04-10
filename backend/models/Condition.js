const mongoose = require('mongoose');

const ConditionSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Condition', ConditionSchema);