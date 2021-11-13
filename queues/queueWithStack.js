// https://leetcode.com/problems/implement-queue-using-stacks/

class QueueWithStack {
    constructor() {
        this.first = [];
        this.last = [];
    }

    enqueue(value) {
        for (let i in this.first) {
            this.last.push(this.first.pop())
        }
        this.last.push(value);
        return this;
    }

    dequeue() {
        for (let i in this.last) {
            this.first.push(this.last.pop());
            console.log(this.last.pop())
        }
        this.first.pop();
        return this;
    }

    peek() {
        if (this.last.length > 0) {
            return this.last[0];
        }
        return this.first[this.first.length - 1];
    }
}

const myQueue = new QueueWithStack();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.peek();
myQueue.dequeue();
