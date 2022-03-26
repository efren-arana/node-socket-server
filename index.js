const { on } = require("events");
const express = require("express");
const path = require('path');
require('dotenv').config();


//Node App express
const app = express();

//Node Socket server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

require('./sockets/socket.js');



//Path publico
const publicPath = path.resolve(__dirname,'public');

app.use(express.static(publicPath));



server.listen(process.env.PORT, (err) => {
    
    if(err) throw new Error();

    console.log(`Servidor corriendo en el puerto, !!`,3000);

})