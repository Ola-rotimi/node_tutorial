const EventEmitter = require('events')

const event = () => {
    customEmitter = new EventEmitter()

    customEmitter.on('response', ( name, id)=>{
        console.log(`data received. User: ${name} with id: ${id}`);
    })


    customEmitter.on('response', ()=>{
        console.log('second event test');
    })

    customEmitter.emit('response', 'john', 7);
}

module.exports = event;