class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function printReverse(head) {
    if (head === null) return;
    printReverse(head.next);
    process.stdout.write(head.value + " ");
}

function processTestCases(T, testCases) {
    let results = [];
    testCases.forEach(testCase => {
        const [n, arr] = testCase;
        
        let dummy = new ListNode(0);
        let current = dummy;
        
        for (let i = 0; i < n; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }

        printReverse(dummy.next);
        console.log(""); 
    });
}

const testCases = [
  [4, [1, 3, 4, 7]]
];

processTestCases(1, testCases);
