class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        if (index >= this.length) {
            this.append(value)
        };
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;

        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;

        return this.printList;
    }

    remove(index) {

        const leader = this.traverseToIndex(index === 0 ? index : index - 1);
        leader.next = leader.next.next;
        this.length--;
        return this.printList();
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode
    }

    reverse() {
        let first = this.head; // 1
        this.tail = this.head; // 1
        let second = first.next; // 5
        while (second) {
            const temp = second.next; // 16 // null
            second.next = first; // 1 // 5
            first = second; // 5 // 16
            second = temp; //16 // null
        }
        this.head.next = null;
        this.head = first;
        return this.printList();
    }
}
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(2);
myLinkedList.remove(0);
console.log(myLinkedList.printList());
myLinkedList.reverse()
console.log(myLinkedList.printList());