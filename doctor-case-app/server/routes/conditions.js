const express = require('express');
const router = express.Router();
const loadConditions = require('../utils/loadConditions');

router.get('/', async (req, res) => {
    try {
        const conditions = await loadConditions();
        res.json(conditions);
    } catch(err){
        res.status(500).json({message: err});
    }
});

module.exports = router;