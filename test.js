

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    }

const head = new ListNode(1)
head.next = new ListNode(3);
console.log(head)