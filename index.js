'use strict';

const http = require('http');
const path = require('path');



const NW = require('./lib/nw-core');

const express = require('express');


const app = express();

app.use(express.static(path.resolve(__dirname, 'test', 'public')));


const server = http.createServer(app);
NW(server);

server.listen(8888);