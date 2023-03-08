'use strict'

class List {
    constructor() {
      this.array = [];
    }
  
    length() {
      return this.array.length;
    }
  
    append(item) {
      if (typeof item !== 'string') {
        throw new Error('Invalid typeof element');
      }
      this.array.push(item);
    }
  
    insert(item, index) {
      if (typeof item !== 'string') {
        throw new Error('Invalid typeof element');
      }
      if (index < 0 || index > this.length()) {
        throw new Error('Invalid index');
      }
      this.array.splice(index, 0, item);
    }
  
    delete(index) {
      if (index < 0 || index >= this.length()) {
        throw new Error('Invalid index');
      }
      return this.array.splice(index, 1);
    }
  
    deleteAll(item) {
      if (typeof item !== 'string') {
        throw new Error('Invalid typeof element');
      }
      this.array = this.array.filter((element) => element !== item);
    }
  
    get(index) {
      if (index < 0 || index >= this.length()) {
        throw new Error('Invalid index');
      }
      return this.array[index];
    }
  
    clone() {
      const newList = new List();
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
      list.array.map((elem) => this.append(elem));
    }
  }

  module.exports = { List };

