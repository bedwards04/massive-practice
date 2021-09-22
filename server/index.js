require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(dbInstance => {
    console.log('DB Ready')
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => console.log(`Running on port ${SERVER_PORT}`));
})
