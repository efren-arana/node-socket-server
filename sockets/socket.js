const {io} = require('../index.js');

//Mensajes de sockets
io.on('connection', client => {
    console.log('Cliente Conectado!');
    //client.on('event', data => { /* … */ });
    client.on('disconnect', () => { 
        console.log('Cliente desconectado!');
     });

     client.on('message' , (payload) => {
         console.log('Mensaje del cliente',payload);
     });

     io.emit('message', {message: 'El servidor esta emitiendo un mensaje!'})
  });
