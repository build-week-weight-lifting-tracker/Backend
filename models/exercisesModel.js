const db = require('../database/dbConfig.js');

module.exports = {
    addExercise,
    addExerciseByUserId,
    findExercise,
    findByExercise,
    findByExerciseId,
    findExerciseByUserId,
    updateExercise,
    deleteExercise
};

function findExercise() {
    return db('exercises').select('id', 'exercise');
}

function findExerciseByUserId(id) {
    return db
        .select('exercise_id', 'username')
        .from('user_exercises')
        .join('users', 'user_id', 'user_exercises.exercise_id')
        .where({ user_id: id })
}

async function addExerciseByUserId(user_id, exercise_id) {
    const userid = await db('user_exercises')
    .insert({user_id: user_id, exercise_id: exercise_id});

    return userid;
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