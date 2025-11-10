const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.head = null; // first element
    this.tail = null; // last element
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      // if queue is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      // add to the end
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) return null; // empty queue
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null; // queue became empty
    return value;
  }
}

module.exports = {
  Queue
};
