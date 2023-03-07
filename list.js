'use strict'

class singlyLinkedList {
    constructor() {
      this.array = [];
    }
  
    length() {
      return this.array.length;
    }
  
    append(item) {
      this.array.push(item);
    }
  
    insert(item, index) {
      if (index < 0 || index > this.length) {
        throw new Error("Invalid index");
      }
      this.array.splice(index, 0, item);
    }
  
    delete(index) {
      if (index < 0 || index >= this.length) {
        throw new Error("Invalid index");
      }
      return this.array.splice(index, 1);
    }
  
    deleteAll(item) {
      this.array = this.array.filter((element) => element !== item);
    }
  
    get(index) {
      if (index < 0 || index >= this.length) {
        throw new Error("Invalid index");
      }
      return this.array[index];
    }
  
    clone() {
      const newList = new singlyLinkedList();
      newList.array = [...this.array];
      return newList;
    }
  
    reverse() {
      this.array.reverse();
    }
  
    findFirst(item) {
      return this.array.indexOf(item);
    }
  
    findLast(item) {
      return this.array.lastIndexOf(item);
    }
  
    clear() {
      this.array = [];
    }

    extend(list) {
      const extendedArray = this.array.concat(list.array)
      return extendedArray;
    }
  }

  module.exports = { singlyLinkedList };

