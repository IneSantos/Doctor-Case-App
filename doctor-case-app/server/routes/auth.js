const express = require('express');
const router = express.Router();
const Users = require('../models/User');
const jwt = require('jsonwebtoken');
const CryptoJS = require("crypto-js");
require('dotenv/config');

//LOGOUT 
router.post('/logout', function(req, res) {
    res.json({ auth: false, token: null });
});

//LOGIN
router.post('/', async (req, res) => {
    try {
        var bytes  = CryptoJS.AES.decrypt(req.body.ciphertext, process.env.SECRET);
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        
        const payload = {email: decryptedData.email, password: decryptedData.password};
        const user = await Users.findOne(payload);
        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.SECRET, {
                expiresIn: 300 // expires in 5min
            });
            return res.status(200).json({ user: user, token: token })
        }
        else return res.status(204).json();
    } catch(err){
        console.log(err);
        res.status(404).json({message: err});
    }
});

module.exports = router;