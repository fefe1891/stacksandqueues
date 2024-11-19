const LinkedList = require('./linkedlist.js');

class Deque {
    constructor() {
        this._list = new LinkedList();
        this.size = 0;
    }

    /** Add new value to the back of the queue. Returns undefined. */
    enqueueBack(val) {
        this._list.append(val);
        this.size = this._list.size;
    }

    /** Add new value to the front of the queue. Returns undefined. */
    enqueueFront(val) {
        this._list.prepend(val);
        this.size = this._list.size;
    }

    /** Remove the nodefrom the back of the deque and return its value. */
    dequeueBack() {
        if (this._list.isEmpty()) throw new Error("Queue is empty!");
        let value = this._list.removeFromEnd();
        this.size = this._list.size;
        return value;
    }

    /** Remove the node from the start of the deque and return its value. */
    dequeueFront() {
        if (this._list.isEmpty()) throw new Error("Queue is empty!");
        let value = this._list.removeFromBeginning();
        this.size = this._list.size;
        return value;
    }

    /** Return the value of the first node in the deque. */
    peekFront() {
        if (this._list.isEmpty()) throw new Error("Queue is empty!");
        return this._list.head.data;
    }

    /** Return the value of the last in the deque. */
    peekBack() {
        if (this._list.isEmpty()) throw new Error("Queue is empty!");
        return this._list.tail.data;
    }

    /** Return true if the deque is empty, false otherwise. */
    isEmpty() {
        return this._list.isEmpty();
    }
}

module.exports = Deque;