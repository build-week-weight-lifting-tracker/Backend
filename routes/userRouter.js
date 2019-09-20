const User = require('../models/usersModel');
const bcrypt = require('bcryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');

const Router = express.Router();

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    User.add(user)
    .then(saved => {
        // generating token
        const token = generateToken(user);
        res.status(201).json({user: saved, token});
    })
    .catch(err => {
        res.status(500).json(err);
    });
});