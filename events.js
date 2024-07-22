const EventEmitter = require('events')

const event = () => {
    customEmitter = new EventEmitter()

    customEmitter.on('response', ()=>{
        console.log('data received');
    })

    customEmitter.emit('response');
}

module.exports = event;