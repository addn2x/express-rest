

const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('messageLogged', {
            id: 1,
            string: 'text'
        });
    }
}

module.exports.Logger = Logger;