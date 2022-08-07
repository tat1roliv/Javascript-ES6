const { inherits } = require('util');
const { EventEmitter } = require('events');

function Character(name){
    this.name = name;
}

inherits(Character, EventEmitter);
const ada = new Character('ada');
ada.on('testing', () => console.log(`teste exibe ${ada.name}`));

ada.emit('testing');