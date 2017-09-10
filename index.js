const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const connectionString = "postgres://postgres:Romania7@localhost/sandbox";
const controller = require('./controller');

const app = module.exports = express();
massive(connectionString).then(dbInstance => {
    app.set('db', dbInstance);
});

app.use( bodyParser.json() );
app.use( cors() );

app.get('/api/planes', controller.getPlanes);

const port = 3000;
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );

