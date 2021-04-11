const express = require('express');
const router = express.Router();
const Case = require('../models/Case');
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

router.get('/allCases', async (req, res) => {
    try {
        const cases = await Case.find();
        res.json(cases);
    } catch(err){
        res.status(500).json({message: err});
    }
});

router.post('/', verifyJWT, async (req, res) => {
    const newCase = new Case({
        id: req.body.caseId,
        description: req.body.description,
        label: {
            code: req.body.codeId,
            userId: req.body.userId
        }
    });
    newCase.save()
    .then(data => {
        res.status(200).json(data); 
    })
    .catch(err => {
        res.status(500).json({message: err});
    });
});

module.exports = router;