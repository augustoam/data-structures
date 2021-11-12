const mergeSorted = (head1, head2) => {
    if (!head1) {
        return head2;
    } else if (!head2) {
        return head1;
    };

    let mergedHead = null;
    if (head1.data <= head2.data) {
        mergedHead = head1;
        head1 = head1.next;
    } else {
        mergedHead = head2;
        head2.next;
    }

    let mergedTail = mergedHead;

    while (head1 && head2) {
        let temp = null;
        if (head1.data <= head2.data) {
            temp = head1;
            head1 = head1.next;
        } else {
            temp = head2;
            head2 = head2.next;
        }

        mergedTail.next = temp;
        mergedTail = temp;
    }

    if (head1) {
        mergedTail.next = head1;
    } else if (head2) {
        mergedTail.next = head2;
    }

    return mergedHead;
};

mergeSorted([1, 3, 5, 6], [2, 4, 6, 20, 34])