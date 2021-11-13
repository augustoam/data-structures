class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.top = node;
            this.bottom = node;
        } else {
            const holdingPointer = this.top;
            this.top = node;
            this.top.next = holdingPointer;
        }
        this.length++;
    }

    pop() {
        if (this.length != 0) {
            if (this.top === this.bottom) {
                this.bottom = null;
            }
            this.top = this.top.next;
            this.length--;
            return this;
        }
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('facebook');
myStack.pop();
