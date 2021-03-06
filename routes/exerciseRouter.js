const express = require('express');
const Exercise = require('../models/exercisesModel.js');

const router = express.Router();

// Create a new exercise 
router.post('/', (req, res) => {
    const exerciseData = req.body;

    Exercise.addExercise(exerciseData)
    .then(exercise => {
        res.status(201).json(exercise)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to add exercise'});
    });
});

// Find all exercises
router.get('/', (req, res) => {
    Exercise.findExercise()
    .then(exercises => {
        res.status(200).json(exercises);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve exercise'});
    });
});

// Find an exercise by ID
router.get('/:id', (req, res) => {
    Exercise.findByExerciseId(req.params.id)
    .then(response => {
        if (response) res.status(200).json({ item: response })
        else res.status(404).json({ message: 'Exercise not found'})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Failed to retrieve this exercise'});
    });
});

// Update an exercise 
router.put('/:id', (req, res) => {
    Exercise.updateExercise(req.params.id, req.body)
    .then(response => {
        res.status(200).json({ id: response })
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to update exercise'});
    });
});

// Delete an exercise 
router.delete('/:id', (req, res) => {
    Exercise.deleteExercise(req.params.id)
    .then(response => {
       res.status(200).json({ message: `Deleted ID ${req.params.id}`})
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete exercise'});
    });
});

module.exports = router;