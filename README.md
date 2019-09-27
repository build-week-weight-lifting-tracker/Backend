## Backend URL : https://weightlifting-tracker-bw.herokuapp.com/

## Summary Table of API Endpoints 

| Type   | Endpoints                      | Description                          | Access  |
| ------ | ------------------------------ | ------------------------------------ | ------- |
| POST   | /api/register                  | Register User                        | Public  |
| POST   | /api/login                     | Login user                           | Public  |
| GET    | /api/users                     | Get all users                        | Private |
| GET    | /api/user                      | Get current user                     | Private |
| GET    | /api/users/:id                 | Get user by id                       | Private |
| GET    | /api/users/:id/exercises       | Get exercises by user id             | Public  |
| POST   | /api/users/:id/exercises       | Create an exercise for a user        | Private |
| PUT    | /api/users/:id/exercises       | Update an exercise for a user        | Private |
| DEL    | /api/users/:id/exercises       | Delete an exercise for a user        | Private |
| GET    | /api/exercises                 | Get list of exercises                | Public  |
| POST   | /api/exercises                 | Create an exercise                   | Public  |
| GET    | /api/exercises/:id             | Get specific exercise                | Public  |
| PUT    | /api/exercises/:id             | Update a specific exercise           | Public  |
| DEL    | /api/exercises/:id             | Delete a specific exercise           | Public  |

### For private access, token needs to be passed as header 