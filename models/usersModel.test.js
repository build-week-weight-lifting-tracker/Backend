const request = require('supertest');

const server = require('../api/server.js');
const db = require('../database/dbConfig.js');
const User = require('../models/usersModel.js');

describe('USERS', () => {

    it('should get list of users', () => {
        return request(server)
        .get('/api/users')
        .then(res => {
            expect(res.status).toBe(200);
        });
    });
});