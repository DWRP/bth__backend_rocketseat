const express = require('express');
const mongoose = require( 'mongoose');
const cors = require('cors');
const path = require('path');
const soketio = require('socket.io');
//const routes = require('./routes');
const http = require('http');

require('dotenv').config();
const app = express();

const server = http.Server(app);
const io = soketio(server);



/*DB_USER = process.env.DB_USER;
DB_PASS = process.env.DB_PASS;
DB_NAME = process.env.DB_NAME;
DB_PATH = process.env.DB_PATH;
DB_RULES = process.env.DB_RULES;

DB_URL = `mongodb+srv://${DB_USER}:${DB_PASS}${DB_PATH}${DB_NAME}?${DB_RULES}`;

mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const connectedUsers = {};

io.on('connection', socket=>{
    
    const {user_id} = socket.handshake.query;

    connectedUsers[user_id] = socket.id;
    
});

app.use((req,res,next)=>{
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

*/

app.use(cors({origin:'*'}));
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname,'..','uploads')));
//app.use(routes);


server.listen(process.env.PORT || 8080);