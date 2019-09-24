const express = require('express');
const Exercise = require('../models/exercisesModel.js');

const router = express.Router();

router.post('/exercises', (req, res) => {
    const exerciseData = req.body;

    Exercise.addExercise(exerciseData)
    .then(exercise => {
        res.status(201).json(exercise)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to add exercise'});
    });
});

router.get('/', (req, res) => {
    Exercise.findExercise()
    .then(exercises => {
        res.status(200).json(exercises);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve exercise'});
    });
});

router.get('/:id', (req, res) => {
    Exercise.findByExerciseId(req.params.id)
    .then(res => {
        if (res) {
            res.status(200).json({ item: res })
        } else {
            res.status(404).json({ message: 'Exercise not found'})
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Failed to retrieve this exercise'});
    });
});

router.put(':id', (req, res) => {
    Exercise.updateExercise(req.params.id, req.body)
    .then(res => {
        res.status(200).json({ id: res })
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to update exercise'});
    });
});

router.delete('/:id', (req, res) => {
    Exercise.deleteExercise(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: 'Deleted'})
        } else {
            res.status(404).json({ message: 'Exercise could not be found'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete exercise'});
    });
});

module.exports = router;