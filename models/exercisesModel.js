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
    const [id] = await db('exercises').insert(exercise);

    return findById(id);
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