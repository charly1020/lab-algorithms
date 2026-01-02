import { Node } from "./Node.js";

export class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let toPop = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return toPop;
    }

    let prev = this.head;
    while (prev.next.next) {
      prev = prev.next;
    }

    toPop = this.tail;
    this.tail = prev;
    prev.next = null;
    this.length--;

    return toPop;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }

    this.head = newNode;
    this.length++;

    return this;
  }

  shift() {
    if (!this.head) return undefined;
    const toReturn = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    toReturn.next = null;
    this.length--;
    return toReturn;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let nodeTemp = this.head;
    for (let i = 0; i < index; i++) {
      nodeTemp = nodeTemp.next;
    }

    return nodeTemp;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) return false;
    const toReplace = this.get(index);

    if (toReplace) {
      toReplace.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index >= this.length) return false;

    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const temp = prev.next;

    prev.next = temp.next;
    temp.next = null;
    this.length++;

    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let current = temp;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;

      prev = current;
      current = next;
    }

    return this;
  }

  // Tortoise and hare algorithm
  findMiddleNode() {
    let middle = this.head;
    let forward = this.head;
    let next;
    while (forward && forward.next) {
      forward = forward.next.next;
      middle = middle.next;
    }

    return middle;
  }
}
