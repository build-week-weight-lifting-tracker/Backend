const request = require('supertest');

const server = require('../api/server.js');
const db = require('../database/dbConfig.js');

// describe('USERS', () => {

//     it('should get list of users', () => {
//         return request(server)
//         .get('/users')
//         .then(res => {
//             expect(res.status).toBe(200);
//             expect(res.type).toBe('application/json');
//             expect(res.body.length).toBe(0);
//         });
//     });
// });