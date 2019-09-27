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

## Register 

### Endpoint https://weightlifting-tracker-bw.herokuapp.com/register

``` 
{ 
    "first_name": "example",                        required
    "last_name": "example1",                        required
    "email": "example2",                            required
    "username": "example3",                         required
    "password": "example4",                         required
}
``` 

#### Register user: 201 OK 

``` 
{
  "user": {
    "id": 3,
    "first_name": "example",
    "last_name": "exmaple",
    "email": "example",
    "username": "example",
    "password": "$2a$10$hM1w6LiSVQmvMup5auYB1erZkS5irByGFa24Cjjw6N4RLWwI9pofi",
    "created": ""
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsInVzZXJuYW1lIjoibHVjYXMyIiwiaWF0IjoxNTY5NTQ2NDU5LCJleHAiOjE1NzIxMzg0NTl9.dH2PUsVxY5CGOnU-dNeafMzx_8njZRJHHtXF1E0ut7I"
}
``` 

#### Register user: 500 Internal Server Error

``` 
{
  "message": "Unable to register"
}

``` 

## Login 

### Endpoint: https://weightlifting-tracker-bw.herokuapp.com/login

``` 
{
    "username": "example",
    "password": "example"
}
```

#### Login user: 200 OK 

``` 
{
    "message": "Hello example!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoibHVjYXNsIiwiaWF0IjoxNTY5NTQxNjE3LCJleHAiOjE1NzIxMzM2MTd9.H-SX15XK8Ui4GJlmSp-3rRqR7_3jaupjuy4fs7jDQCs"
}
``` 

#### Login user: 401 Unauthorized 

``` 
{
    "message": "Invalid credentials"
}
``` 

#### Login user: 500 Internal Server Error

``` 
{
    "message": "Unable to login"
}
``` 