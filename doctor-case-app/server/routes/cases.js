const express = require('express');
const router = express.Router();
const loadCases = require('../utils/loadcases');
const verifyJWT = require('../utils/verifyJWT');

router.get('/', verifyJWT, async (req, res) => {
    try {
        const cases = await loadCases();
        res.json(cases);
    } catch(err){
        res.status(500).json({message: err});
    }
});

module.exports = router;