const express = require('express');
const router = express.Router();
const loadConditions = require('../utils/loadConditions');
const verifyJWT = require('../utils/verifyJWT');

router.get('/', verifyJWT, async (req, res) => {
    try {
        const conditions = await loadConditions();
        res.json(conditions);
    } catch(err){
        res.status(500).json({message: err});
    }
});

module.exports = router;