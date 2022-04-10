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

     client.on('msg-client', (payload) => {
        //io.emit('msg-socket-server', payload);
        client.broadcast.emit('msg-socket-server', payload); // emite a todos menos al que lo emitio
     })

     client.on('msg-client-flutter', (payload) => {
        //io.emit('msg-socket-server', payload);
        client.broadcast.emit('msg-client-app', payload); // emite a todos menos al que lo emitio
        console.log('Mensaje del cliente movil',payload);
    })
  });
