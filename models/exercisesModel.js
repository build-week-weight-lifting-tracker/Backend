const db = require('../database/dbConfig.js');

module.exports = {
    addExercise,
    findExercise,
    findByExercise,
    findByExerciseId,
    updateExercise,
    deleteExercise
};

function findExercise() {
    return db('exercises').select('id', 'exercise');
}

function findByExercise(filter) {
    return db('exercises').where(filter);
}

async function addExercise(exercise) {
     return db('exercises').insert(exercise)
    
    .then(ids => {
        return db('exercises').where({ id: ids[0]}).first();
    });
}

function findByExerciseId(id) {
    return db('exercises').where({ id }).first();
}

function updateExercise(id, exercise) {
    return db('exercises').where({ id }).update(exercise)
}

function deleteExercise(id) {
    return db('exercises').where({ id }).del()
}