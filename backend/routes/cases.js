const express = require('express');
const router = express.Router();
const Cases = require('../models/Case');

//GETS BACK ALL THE CASES
router.get('/', async (req, res) => {
    try {
        const cases = await Cases.find();
        res.json(cases);
    } catch(err){
        res.json*({message: err});
    }
});

module.exports = router;