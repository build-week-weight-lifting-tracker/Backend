const db = require('../database/dbConfig.js');

module.exports = {
    addExercise,
    findExercise,
    findByExercise,
    findByExerciseId
};

function findExercise() {
    return db('exercises').select('id', 'exercises');
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