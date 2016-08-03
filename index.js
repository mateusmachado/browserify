// require the core node events module
var EventEmitter = require('events').EventEmitter;

//create a new event emitter
var emitter = new EventEmitter;

// set up a listener for the event
emitter.on('hamburger', function(message){
  console.log(message);
});

// emit an event
emitter.emit('hamburger', 'hamburger is extremely yummy');
