## Backend URL : https://weightlifting-tracker-bw.herokuapp.com/

## Summary Table of API Endpoints 

| Type   | Endpoints                      | Description                          | Access  |
| ------ | ------------------------------ | ------------------------------------ | ------- |
| POST   | /api/register                  | Register User                        | Public  |
| POST   | /api/login                     | Login user                           | Public  |
| GET    | /api/users                     | Get all users                        | Private |
| GET    | /api/user                      | Get current user                     | Public  |
| GET    | /api/users/:id                 | Get user by id                       | Public  |
| GET    | /api/exercises                 | Get list of exercises                | Public  |
| POST   | /api/exercises                 | Create an exercise                   | Public  |
| GET    | /api/exercises/:id             | Get specific exercise                | Public  |
| PUT    | /api/exercises/:id             | Update a specific exercise           | Public  |
| DEL    | /api/exercises/:id             | Delete a specific exercise           | Public  |

### For private access, token needs to be passed as header 

## Register 

### Endpoint https://weightlifting-tracker-bw.herokuapp.com/api/register

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

### Endpoint: https://weightlifting-tracker-bw.herokuapp.com/api/login

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

## Get Users 

### Endpoint: https://weightlifting-tracker-bw.herokuapp.com/api/users

- `GET` request needed for this endpoint

```
    {
        "id": 1,
        "first_name": "example",
        "last_name": "example",
        "email": "example@example.com",
        "username": "example"
    },
    {
        "id": 2,
        "first_name": "example",
        "last_name": "example",
        "email": "example@example.com",
        "username": "example"
    },
    {
        "id": 3,
        "first_name": "example",
        "last_name": "example",
        "email": "example@example.com",
        "username": "example"
    }
```

## Get User 

### Endpoint: https://weightlifting-tracker-bw.herokuapp.com/api/users/1

- `GET` request needed for this endpoint
- id needed 

```
    {
    "User": {
        "id": 1,
        "first_name": "example",
        "last_name": "example",
        "email": "example@example.com",
        "username": "example",
        "password": "$2a$10$7gOSyqBDP5k4bCHAWdReSeJvrMAbdVgGcLDCMV9/L4XSeZ231YlY2",
        "created": ""
        }
    }
```

## Exercises 

### Endpoint: https://weightlifting-tracker-bw.herokuapp.com/api/exercises

### Get list of exercises

- `GET` request

```
    {
        "id": 1,
        "exercise": "Barbell Bench Press"
    },
    {
        "id": 2,
        "exercise": "Dumbbell Bench Press"
    },
    {
        "id": 3,
        "exercise": "Incline Barbell/Dumbbell Bench Press"
    } 
```

### Create an exercise 

- `POST` request

```
    {
        "exercise": "Pendlay Rows"
    }
```

### Update an exercise 

- `PUT` request
- Success confirmation below 

```
    {
        "id": 1
    }
```

### Delete an exercise 

- `DEL` request 
- Success confirmation below

```
    {
        "message": "Deleted ID 57"
    }
```

#### Created by Lucas Larrubia WEBPT6 