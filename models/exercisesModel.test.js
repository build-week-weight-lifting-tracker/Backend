const request = require('supertest');

const server = require('../api/server.js');
const db = require('../database/dbConfig.js');

describe('EXERCISES', () => {

    describe('GET /exercises', () => {
        it('should get list of exercises', () => {
            return request(server)
            .get('/exercises')
            .then(res => {
                expect(res.status).toBe(200);
                expect(res.type).toBe('application/json');
                expect(res.body.length).toBe(0);
            });
        });
    })

})