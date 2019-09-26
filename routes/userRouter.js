const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/usersModel.js');
const Exercise = require('../models/exercisesModel.js');
const restricted = require('../auth/restricted-middleware.js');

// Create a new user 
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
        console.log(err);
        res.status(500).json({ message: 'Is this working'});
    });
});

// Login for a current user, requires token
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

// GET all users, requires token  
router.get('/users', restricted, (req, res) => {
    User.find()
    .then(users => {
        res.json(users);
    })
    .catch(err => res.send(err))
    });

// GET single user, requires token 
router.get('/users/:id', (req, res) => {
    User.findById(req.user.id)
    .then(response => {
        if (response) res.status(200).json({ item: response })
        else res.status(404).json({ message: 'User not found '})
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve this user' });
    });
});

// // Post exercises for a specific user
// router.post('/users/:id/exercises', restricted, (req, res) => {
//     Exercise.addExerciseByUserId(req.user_id, req.params.exercise_id)
//     .then(response => {
//        if (response) res.status(200).json({ item: response })
//        else res.status(404).json({ message: 'Exercise not found' })
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json({ message: 'Failed to add exercise' });
//     });
// });

// // GET exercises for a specific user 
// router.get('/users/:id/exercises', restricted, (req, res) => {
//     Exercise.findExerciseByUserId(req.params.id)
//     .then(response => {
//         if (response) res.status(200).json({ item: response })
//         else res.status(404).json({ message: 'Exercises not found' })
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json({ message: 'Failed to retrieve these exercises' });
//     });
// });

// // Update exercise for specific user
// router.put('/users/:id/exercises', restricted, (req, res) => {
//     Exercise.updateExercise(req.params.id, req.body)
//     .then(response => {
//         res.status(200).json({ item: response })
//     })
//     .catch(err => {
//         res.status(500).json({ message: 'Failed to update exercise '});
//     });
// });

// // Delete exercise for specific user
// router.delete('/users/:id/exercises', restricted, (req, res) => {
//     Exercise.deleteExercise(req.params.id)
//     .then(response => {
//         res.status(200).json({ message: 'Exercise deleted' });
//     });
// });

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