class Stack {
    constructor() {
        this.stack = [];
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        this.stack.pop();
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('facebook');
myStack.pop();
