'use strict';

class PubSub {
    constructor() {
        this.events = [];
    }
    emit(event, data) {
        for (let i = 0; i < this.events.length; i++) {
            if (this.events[i].event === event) {
                this.events[i].handler.call(this, data);
            }
        }
    }
    on(event, handler) {
        this.events.push({
            event: event,
            handler: handler
        });
    }
}
const eventListener = new PubSub();

eventListener.on('publish', function (data) {
    console.log(data);
});

eventListener.on('subscribe', function (data) {
    console.log(data);
});

eventListener.emit('publish', 'Publish the post');
eventListener.emit('subscribe', 'Subscribe for newsletters');


