'use strict'

class Character {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.listLength = 0;
  }

  length() {
    return this.listLength;
  }

  append(element) {
    if (typeof element !== 'string') {
      throw new Error('Invalid typeof element');
    }
    const newCharacter = new Character(element);
    if (this.head === null) {
      this.head = newCharacter;
      this.tail = newCharacter;
      newCharacter.next = newCharacter;
    } else {
      this.tail.next = newCharacter;
      this.tail = newCharacter;
      newCharacter.next = this.head;
    }
    this.listLength++;
  }

  insert(element, index) {
    if (typeof element !== 'string') {
      throw new Error('Invalid typeof element');
    }
    if (index < 0 || index > this.listLength) {
      throw new Error('Invalid index');
    }
    if (index === 0) {
      const newCharacter = new Character(element);
      if (this.head === null) {
        this.head = newCharacter;
        this.tail = newCharacter;
        newCharacter.next = newCharacter;
      } else {
        newCharacter.next = this.head;
        this.head = newCharacter;
        this.tail.next = this.head;
      }
      this.listLength++;
    } else if (index === this.listLength) {
      this.append(element);
    } else {
      const newCharacter = new Character(element);
      let current = this.head;
      let i = 0;
      while (i < index - 1) {
        current = current.next;
        i++;
      }
      newCharacter.next = current.next;
      current.next = newCharacter;
      this.listLength++;
    }
  }

  delete(index) {
    if (index < 0 || index >= this.listLength) {
      throw new Error('Invalid index');
    }
    let deletedCharacter = null;
    if (this.listLength === 1) {
      deletedCharacter = this.head.value;
      this.head = null;
      this.tail = null;
    } else if (index === 0) {
      deletedCharacter = this.head.value;
      this.head = this.head.next;
      this.tail.next = this.head;
    } else if (index === this.listLength - 1) {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      deletedCharacter = this.tail.value;
      current.next = this.head;
      this.tail = current;
    } else {
      let current = this.head;
      let i = 0;
      while (i < index - 1) {
        current = current.next;
        i++;
      }
      deletedCharacter = current.next.value;
      current.next = current.next.next;
    }
    this.listLength--;
    return deletedCharacter;
  }

  deleteAll(element) {
    if (typeof element !== 'string') {
      throw new Error('Invalid typeof element');
    }
    if (!this.head) {
      return;
    }
    let current = this.head;
    let previous = this.tail;
    let count = 0;
    let startLength = this.listLength;
    do {
      if (current.value === element) {
        if (this.listLength === 1) {
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
          this.head = current.next;
          this.tail.next = this.head;
        } else if (current === this.tail) {
          previous.next = this.head;
          this.tail = previous;
        } else {
          previous.next = current.next;
        }
        this.listLength--;
      } else {
        previous = current;
      }
      count++;
      current = current.next;
    } while (count !== startLength);
  }

  get(index) {
    if (index < 0 || index >= this.listLength) {
    throw new Error('Invalid index');
    }
    let current = this.head;
    let i = 0;
    while (i < index) {
    current = current.next;
    i++;
    }
    return current.value;
  }

  clone() {
    let newList = new List();
    let current = this.head;
    for (let i = 0; i < this.listLength; i++) {
      newList.append(current.value);
      current = current.next;
    }
    return newList;
  }

  reverse() {
    let current = this.head;
    let previous = null;
    let next = null;
    this.tail = current;
    do {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    } while (current !== this.head);

    this.head = previous;
    this.tail.next = this.head;
  }

  findFirst(element) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode) {
      if (currentNode.value === element) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }
    return -1;
  }

  findLast(element) {
    let index = this.listLength - 1;
    while (index !== 0) {
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      if (currentNode.value === element) {
        return index;
      }
      index--
    }
    return -1;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.listLength = 0;
  }

  extend(otherList) {
    let listHead = otherList.head;
    do {
      this.append(listHead.value);
      listHead = listHead.next;
    } while (listHead !== otherList.head)
  }

  show() {
    let currentNode = this.head;
    let result = [];
    if (currentNode === null) {
      console.log(currentNode);
      return;
    }
    do {
      result.push(currentNode.value)
      currentNode = currentNode.next;
    }
    while (currentNode !== this.head)

    console.log('list:', result.join(' -> '));
  }
}

module.exports = { List };

