const express = require('express');

const cors = require('cors');
const path = require('path');

const routes = require('./routes');
const http = require('http');

require('dotenv').config();
const app = express();

app.use(cors({origin:'*'}));
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 8080);