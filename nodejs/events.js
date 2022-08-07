//const events = require('events');
//console.log(events);

const { EventEmitter } = require('events');
//console.log(EventEmitter);

const ev = new EventEmitter();
//console.log(ev);

/*
ev.on('testing', (message) => { 
    console.log('rodou', message) 
})
*/

ev.once('testing', (message) => { 
    console.log('rodou 1x', message) 
})



ev.emit('testing', "mensagem" );
