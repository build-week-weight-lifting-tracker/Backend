const request = require('supertest');

const server = require('../api/server.js');
const db = require('../database/dbConfig.js');

describe('EXERCISES', () => {

        it('should return the correct object', () => {
        return request(server)
        .get('/exercises')
        .then(res => {
            expect(res.type).toBe('text/html');
        });
    });
})