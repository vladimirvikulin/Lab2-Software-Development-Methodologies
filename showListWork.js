'use strict'

const { List } = require('./list.js')

const list = new List();

list.show();
console.log('length():', list.length());

list.show();
list.append(5)
console.log('append(5)');
list.show();

list.show();
list.insert('sad', 1);
console.log('insert(\'sad\', 1)');
list.show();

list.show();
list.delete(1);
console.log('delete(1)');
list.show();

list.append(5);
list.append(5);
list.append('sad');
list.show();
list.deleteAll(5)
console.log('deleteAll(5)');
list.show();

list.show();
console.log('get(0):', list.get(0));

list.append('sad');
list.show();
const cloneList = list.clone();
console.log('clone():');
cloneList.show();

list.append(true);
list.append(345);
list.append(true);
list.show();
list.reverse();
console.log('reverse():');
list.show();


list.show();
console.log('findFirst(true):', list.findFirst(true));

list.show();
console.log('findLast(true):', list.findLast(true));

list.show();
list.clear()
console.log('clear()');
list.show();

const list2 = new List();
list.append(1);
list2.append(2);
list.show();
list2.show();
list.extend(list2);
console.log('extend():');
list.show();
