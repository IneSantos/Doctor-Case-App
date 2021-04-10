const express = require('express');
const router = express.Router();
const Users = require('../models/User');

//LOGOUT 
router.get('/', async (req, res) => {
    try {
        const users = await Users.find();
        res.json(users);
    } catch(err){
        res.json({message: err});
    }
});

//LOGIN
router.post('/', async (req, res) => {
    try {
        const users = await Users.find();
        res.json(users);
    } catch(err){
        res.json({message: err});
    }
});

module.exports = router;