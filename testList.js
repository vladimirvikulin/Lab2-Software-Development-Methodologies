'use strict'

const assert = require('assert').strict;
const { singlyLinkedList } = require('./list.js')

let list = new singlyLinkedList();

// Test for the append method
list.append(1);
list.append(2); // [1, 2]
assert.strictEqual(list.length(), 2);
assert.strictEqual(list.get(0), 1);
assert.strictEqual(list.get(1), 2);

// Test for the insert method
list.insert(3, 2); // [1, 2, 3]
assert.strictEqual(list.length(), 3);
assert.strictEqual(list.get(0), 1);
assert.strictEqual(list.get(1), 2);
assert.strictEqual(list.get(2), 3);

// Test for the delete method
list.delete(0); // [2, 3]
assert.strictEqual(list.length(), 2);
assert.strictEqual(list.get(0), 2);
assert.strictEqual(list.get(1), 3);

// Test for the deleteAll method
list.append(2); // [2, 3, 2]
list.deleteAll(2); // [3]
assert.strictEqual(list.length(), 1);
assert.strictEqual(list.get(0), 3);

// Test for the clone method
list.append(1); // [3, 1]
let clonedList = list.clone(); 
assert.strictEqual(clonedList.length(), 2);
assert.strictEqual(clonedList.get(0), 3);
assert.strictEqual(clonedList.get(1), 1);
clonedList.delete(0); // [1]
assert.strictEqual(list.length(), 2);
assert.strictEqual(clonedList.length(), 1);

// Test for the reverse method
list.append(2); // [3, 1, 2]
list.reverse(); // [2, 1, 3]
assert.strictEqual(list.length(), 3);
assert.strictEqual(list.get(0), 2);
assert.strictEqual(list.get(1), 1);
assert.strictEqual(list.get(2), 3);

// Test for the findFirst method
list.append(2); // [2, 1, 3, 2]
assert.strictEqual(list.findFirst(2), 0);
assert.strictEqual(list.findFirst(1), 1);

// Test for the findLast method
assert.strictEqual(list.findLast(2), 3);
assert.strictEqual(list.findLast(1), 1);

// Test for the clear method
list.clear();
assert.deepStrictEqual(list.array, []);

// Test for the extend method
const list2 = new singlyLinkedList();
list.append(0); // [0]
list2.append(1);
list2.append(2); // [1, 2]
const extendedList = list.extend(list2);
assert.deepStrictEqual(extendedList, [0, 1, 2]);


