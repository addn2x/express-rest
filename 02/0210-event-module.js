
const Logger = require('./module-logger');
const logger = new Logger.Logger();

// Register a listener
logger.on('messageLogged', (arg) => {
	console.log('Listener called', arg);
});

logger.log('first call');