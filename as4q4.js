4.On Streams and buffers
Create a readable stream to read data from a text file named data.txt. Use the fs module to create the stream. Implement event listeners for the data and end events of the stream. Display the received data and a message indicating the end of the stream in the console.
--->

// Import the fs module
const fs = require('fs');

// Create a readable stream from the file data.txt
const readableStream = fs.createReadStream('data.txt', 'utf8');

// Event listener for the data event
readableStream.on('data', (chunk) => {
    // Display the received data in the console
    console.log(`Received data chunk: ${chunk}`);
});

// Event listener for the end event
readableStream.on('end', () => {
    // Display a message indicating the end of the stream in the console
    console.log('End of stream');
});