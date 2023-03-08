'use strict'

const { List } = require('./list.js')

const list = new List();
console.log(list);
console.log('length():', list.length() + '\n');

console.log(list);
list.append(5)
console.log('append(5)');
console.log(list, '\n');

console.log(list);
list.insert('sad', 1);
console.log('insert(\'sad\', 1)');
console.log(list, '\n');

console.log(list);
list.delete(1);
console.log('delete(1)');
console.log(list, '\n');

list.append('sad');
console.log(list);
list.deleteAll('sad')
console.log('deleteAll(\'sad\')');
console.log(list, '\n');

console.log(list);
console.log('get(0):', list.get(0) + '\n');

list.append('sad');
console.log(list);
const cloneList = list.clone();
console.log('clone():', cloneList.array + '\n');

list.append(345);
list.append(true);
console.log(list);
list.reverse();
console.log('reverse():', list.array  + '\n');

list.append(true);
console.log(list);
console.log('findFirst(true):', list.findFirst(true) + '\n');

console.log(list);
console.log('findLast(true):', list.findLast(true) + '\n');

console.log(list);
list.clear()
console.log('clear()');
console.log(list, '\n');

const list2 = new List();
list.append(1);
list2.append(2);
console.log(list);
console.log(list2);
list.extend(list2)
console.log('extend():', list);