/** Node: node for a queue. */
const LinkedList = require('./linkedlist.js');

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.size = 0;
    this._list = new LinkedList();
  }

  get first() {
    return this._list.head ? this._list.head.data : null;
  }

  get last() {
    return this._list.tail ? this._list.tail.data : null;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._list.append(val);
    this.size = this._list.size;

  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this.first) throw new Error("Queue is empty!");

    let value = this._list.removeFromBeginning();
    this.size = this._list.size;

    return value;

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (!this.first) throw new Error("Queue is empty!");

    return this._list.head.data;

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this._list.size === 0;

  }
}

module.exports = Queue;
