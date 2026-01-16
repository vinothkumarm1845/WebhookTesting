import {io} from 'socket.io-client';
const socket = io('http://localhost:5000');
socket.on('connnect', ()=>{
    console.log('socket connected ', socket.id);
});
socket.on('new-event', (data)=>{
    console.log('received event ', data);
});
socket.on('disconnect', ()=>{
    console.log('socket disconnected');
});

