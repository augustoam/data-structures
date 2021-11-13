class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
    }

    dequeue() {
        if (this.length != 0) {
            if (this.first === this.last) {
                this.last = null;
            }
            this.first = this.first.next;
            this.length--;
            return this;
        }
    }
}

const myQueue = new Queue();
myQueue.enqueue('joy');
myQueue.enqueue('matt');
myQueue.enqueue('pavel');
myQueue.enqueue('samir');
myQueue.dequeue();
myQueue.dequeue();