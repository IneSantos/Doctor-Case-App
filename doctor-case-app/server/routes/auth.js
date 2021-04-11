const express = require('express');
const router = express.Router();
const Users = require('../models/User');

//LOGOUT 
router.get('/', async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200);
    } catch(err){
        res.json({message: err});
    }
});

//LOGIN
router.post('/', async (req, res) => {
    try {
        const payload = {email: req.body.email, password: req.body.password};
        const user = await Users.findOne(payload);
        return user ? res.status(200).json(user) : res.status(204).json();
    } catch(err){
        console.log(err);
        res.status(404).json({message: err});
    }
});

module.exports = router;