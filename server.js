const http = require('http');
const express = require('express')
const app = express();
const router = require('./app');

app.use(express.json());

app.use('/', router.router);

app.set('view engine', 'pug');
app.set('views', './views');


const host = 'localhost';
const port = 3000;

http.createServer(app).listen(port, host);