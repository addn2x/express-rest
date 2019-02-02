const path = require('path');

var pathObject =  path.parse(__filename);
console.log(pathObject);

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// Template string ES6 / ES2015
console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);

const fs = require('fs');

const files = fs.readdirSync('./02');
console.log(files);

fs.readdir('./02', function(error, files) {
	if (error) {
		console.log('Error', error);
	} else {
		console.log('Result', files);
	}	
});
