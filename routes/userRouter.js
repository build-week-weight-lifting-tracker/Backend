const User = require('../models/usersModel');
const bcrypt = require('bcryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    User.add(user)
    .then(saved => {
        // generating token
        const token = generateToken(saved);
        res.status(201).json({user: saved, token});
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    User.findBy({ username })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({ message: `Hello ${user.username}!`, token});
        } else {
            res.status(401).json({ message: 'Invalid credentials'})
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

function generateToken(user) {
    const payload = {
        sub: user.id,
        username: user.username,
    }

    const options = {
        expiresIn: '30d'
    }

    return jwt.sign(payload, process.env.JWT_SECRET, options);
}

module.exports = router;