class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data) {
        // Create a new node
        const node = new Node(data);
        
        // If there is no head then make the new node as head and tail
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }

    prepend(data) {
        // Create a new node
        const node = new Node(data, this.head);
        this.head = node;

        // If this is the first node then update the tail also
        if (!this.tail) {
            this.tail = node;
        }

        this.size++;
    }

    removeFromEnd() {
        let removedData = null;

        if (!this.head) { // If the list is empty
            return null;

        } else {
            if (!this.head.next) { // If list has only one node
                removedData = this.head.data;
                this.head = null;
                this.tail = null;
            } else {
                let current = this.head;
                while (current.next.next) {
                    current = current.next;
                }

                removedData = current.next.data;
                current.next = null;
                this.tail = current;
            }

            this.size--;
        }

        return removedData;
    }

    removeFromBeginning() {
        if (!this.head) { // If list is empty
            return null;
        } else {
            let removedData = this.head.data;
            this.head = this.head.next;
            this.size--;

            return removedData;
        }
    }

    isEmpty() {
        return this.size === 0;
    }
}

module.exports = LinkedList;