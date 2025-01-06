const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  queueList = new ListNode(null);

  getUnderlyingList() {
    return this.queueList;
  }

  enqueue(value) {
    if (this.queueList.value === null) {
      this.queueList.value = value;
    } else {
      let currentNode = this.queueList;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = new ListNode(value);
    }
  }

  dequeue() {
    const firstItemFromQueue = this.queueList.value;
    this.queueList = this.queueList.next;
    return firstItemFromQueue;
  }
}

module.exports = {
  Queue,
};
