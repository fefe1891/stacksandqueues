/** Node: node for a stack. */
const LinkedList = require('./linkedlist.js');

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this._list = new LinkedList();
    this.size = 0;
  }

  get first() {
    return this._list.head ? this._list.head.data : null;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    this._list.prepend(val);
    this.size = this._list.size;

  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first) throw new Error("Stack is empty!");

    let value = this._list.removeFromBeginning();
    this.size = this._list.size;

    return value;

  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (!this.first) throw new Error("Stack is empty!");

    return this._list.head.data;

  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this._list.isEmpty();

  }
}

module.exports = Stack;
