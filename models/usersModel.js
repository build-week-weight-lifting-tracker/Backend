const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById
};

function find() {
    return db('users').select('id', 'first_name', 'last_name', 'email', 'username', 'password');
}

function findBy(filter) {
    return db('users').where(filter);
}

async function add(user) {
    // const [id] = await db('users').insert(user);

    return db('users').insert(user)
    .then(ids => {
        return db('users').where({ id: ids[0]}).first();
    });
}

function findById(id) {
    return db('users').where({ id }).first();
}