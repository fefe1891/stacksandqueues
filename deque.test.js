const Deque = require("./deque");

let deque;

beforeEach(() => {
    deque = new Deque();
});

describe("Dequeue functionality", () => {

    test("enqueueBack and dequeueFront", () => {
        deque.enqueueBack(10);
        expect(deque.size).toBe(1);
        let removed = deque.dequeueFront();
        expect(removed).toBe(10);
        expect(deque.size).toBe(0);
    });

    test("enqueueFront and dequeueBack", () => {
        deque.enqueueFront(20);
        expect(deque.size).toBe(1);
        let removed = deque.dequeueBack();
        expect(removed).toBe(20);
        expect(deque.size).toBe(0);
    });

    test("isEmpty", () => {
        expect(deque.isEmpty()).toBe(true);
        deque.enqueueBack(30);
        expect(deque.isEmpty()).toBe(false);
        deque.dequeueFront();
        expect(deque.isEmpty()).toBe(true);
    });

    test("peekFront and peekBack", () => {
        deque.enqueueBack(40);
        deque.enqueueBack(50);
        expect(deque.peekFront()).toBe(40);
        expect(deque.peekBack()).toBe(50);
    });
});