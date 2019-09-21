const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/usersModel');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: 'Not verified'})
            } else {
                req.decodedToken = decodedToken;
                next();
            }
        })
    } else {
        res.status(400).json({ message: 'No token provided'});
    };
};