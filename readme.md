# Documentation

You have to download this API, write in console npm install and add .env file with content like below:

DATABASE_URL=mongodb+srv://[username]:[password]cluster0.dyzu6.mongodb.net/[dbname]?retryWrites=true&w=majority

and replace [username], [password] and [dbname] with data from your mongodb account

To start app type npm run devStart in console

## example requests:

### Get every item from data base

GET http://localhost:3008/items

### Get one item by id from data base

GET http://localhost:3008/:id

### Send new item to data base

POST http://localhost:3008/items
Content-Type: application/json

{
    "name": "Gumy do ćwiczeń",
    "value": 2,
    "price": 30,
    "shortDescription": "Idealna do treningu z regulowanym obciążeniem",
    "description": "Idealna do treningu rehabilitacyjnego, czerwona daje większe obciążenie, zaś niebieska mniejsze obciążenie. Wykonuj ćwiczenia zgodnie z filmikami nagranymi przez fizjoterapeutę",
    "picture": "assets/img/products/band.jpg"
}

### Delete item by id from data base

DELETE http://localhost:3008/items/:id

### Change one item by id with PATCH

PATCH  http://localhost:3008/items/:id
Content-Type: application/json

{
    "name": "Czerwone Gumy do Ćwiczeń"
}

### Add new user to data base - password will be hashed and saved

POST http://localhost:3008/auth/register
Content-Type: application/json

{
    "first_name": "Paulina",
    "last_name": "Kowalska",
    "email": "pkowalska@gmail.com",
    "password": "secret321"
}