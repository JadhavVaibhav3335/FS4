3.On Event Handling
Create an event emitter instance and define an event named greet.Implement a listener for the greet event that prints "Hello, Event!" to the console.Emit the greet event and observe the output in the console.
-->

// Import the EventEmitter class from the events module
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Define a listener function for the greet event
function greetListener() {
    console.log("Hello, Event!");
}

// Add the greetListener function as a listener for the greet event
eventEmitter.on('greet', greetListener);

// Emit the greet event
eventEmitter.emit('greet');