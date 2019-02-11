const path = require('path');

const pathObject =  path.parse(__filename);
console.log(pathObject);

const os = require('os');

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

// Template string ES6 / ES2015
console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);

const fs = require('fs');

const files = fs.readdirSync('./02');
console.log(files);

// fs.readdir('./02', function(error, files) {
// 	if (error) {
// 		console.log('Error', error);
// 	} else {
// 		console.log('Result', files);
// 	}	
// });


// readdir arrow form
fs.readdir('./02', (error, files) => {
	if (error) {
		console.log('Error', error);
	} else {
		console.log('Result', files);
	}
});