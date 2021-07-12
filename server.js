'use strict';

const express = require('express');
var dateTime = require('node-datetime');

const PORT = 8080;
const HOST = '0.0.0.0';

var dt = dateTime.create();
dt.format('m/d/Y H:M:S');

const app = express();
app.get('/', (req, req) => {
    res.send('Hello Word');
});

const app = express();
app.get('/', (req, req) => {
    res.send(new Date(dt.now()));
});

const app = express();
app.get('/', (req, req) => {
    res.send('Hostname: dt-machine-2 \n hostname:8080');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
