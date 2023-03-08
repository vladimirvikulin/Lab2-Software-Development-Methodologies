'use strict'

const assert = require('assert').strict;
const { List } = require('./list.js')

{ // Test for the append method
    const list = new List();
    try { 
        list.append(1); 
        assert.fail('Expected an error to be thrown'); 
      } catch (error) { 
        assert.strictEqual(error.message, 'Invalid typeof element'); 
      }
    list.append('q');
    list.append('w'); // ['q', 'w']
    assert.strictEqual(list.length(), 2);
    assert.strictEqual(list.get(0), 'q');
    assert.strictEqual(list.get(1), 'w');
  }
  
  { // Test for the insert method
  const list = new List();
    try { 
      list.insert(1, 0); 
      assert.fail('Expected an error to be thrown'); 
    } catch (error) { 
      assert.strictEqual(error.message, 'Invalid typeof element'); 
    }
    try { 
      list.insert('e', -1); 
      assert.fail('Expected an error to be thrown'); 
    } catch (error) { 
      assert.strictEqual(error.message, 'Invalid index'); 
    }
    try { 
      list.insert('e', 2); 
      assert.fail('Expected an error to be thrown'); 
    } catch (error) { 
      assert.strictEqual(error.message, 'Invalid index'); 
    }
  list.insert('q', 0); 
  list.insert('w', 1);  // ['q', 'w']
  list.insert('r', 1);  // ['q', 'r', 'w']
  assert.strictEqual(list.length(), 3);
  assert.strictEqual(list.get(0), 'q');
  assert.strictEqual(list.get(1), 'r');
  assert.strictEqual(list.get(2), 'w');
  }
  
  { // Test for the delete method
  const list = new List();
    try { 
      list.delete(-1); 
      assert.fail('Expected an error to be thrown'); 
    } catch (error) { 
      assert.strictEqual(error.message, 'Invalid index'); 
    }
    try { 
      list.delete(2); 
      assert.fail('Expected an error to be thrown'); 
    } catch (error) { 
      assert.strictEqual(error.message, 'Invalid index'); 
    }
    list.append('q'); 
    list.append('w'); 
    list.append('e'); 
    list.append('r'); 
    list.append('t'); 
    list.append('y'); // ['q', 'w', 'e', 'r', 't', 'y']
    list.delete(0); // ['w', 'e', 'r', 't', 'y']
    list.delete(4); // ['w', 'e', 'r', 't']
    list.delete(1); // ['w', 'r', 't']
    assert.strictEqual(list.length(), 3);
    assert.strictEqual(list.get(0), 'w');
    assert.strictEqual(list.get(1), 'r');
    assert.strictEqual(list.get(2), 't');
    list.delete(0); // ['r', 't']
    list.delete(0); // ['t']
    list.delete(0); // []
    assert.strictEqual(list.length(), 0);
  }
  
  { // Test for the deleteAll method
    const list = new List();
    try { 
      list.deleteAll(1); 
      assert.fail('Expected an error to be thrown'); 
    } catch (error) { 
      assert.strictEqual(error.message, 'Invalid typeof element'); 
    }
    list.append('q'); 
    list.append('w'); 
    list.append('w'); 
    list.append('r'); 
    list.append('t'); 
    list.append('t'); // ['q', 'w', 'w', 'r', 't', 't']
    list.deleteAll('w'); // ['q', 'r', 't', 't']
    assert.strictEqual(list.length(), 4);
    assert.strictEqual(list.get(0), 'q');
    assert.strictEqual(list.get(1), 'r');
    assert.strictEqual(list.get(2), 't');
    assert.strictEqual(list.get(2), 't');
    list.deleteAll('t'); // ['q', 'r']
    assert.strictEqual(list.get(0), 'q');
    assert.strictEqual(list.get(1), 'r');
    list.deleteAll('q'); // ['r']
    assert.strictEqual(list.get(0), 'r');
    list.deleteAll('r'); // []
    assert.strictEqual(list.length(), 0);
    }
  
  { // Test for the get method
    const list = new List();
    try { 
      list.get(-1); 
      assert.fail('Expected an error to be thrown'); 
    } catch (error) { 
      assert.strictEqual(error.message, 'Invalid index'); 
    }
    try { 
      list.get(2); 
      assert.fail('Expected an error to be thrown'); 
    } catch (error) { 
      assert.strictEqual(error.message, 'Invalid index'); 
    }
    list.append('q'); 
    list.append('w');  // ['q', 'w']
    assert.strictEqual(list.get(0), 'q');
    assert.strictEqual(list.get(1), 'w');
  }
  
  { // Test for the clone method
    const list = new List();
    list.append('q'); 
    list.append('w'); // ['q', 'w']
    let clonedList = list.clone(); 
    assert.strictEqual(clonedList.length(), 2);
    assert.strictEqual(clonedList.get(0), 'q');
    assert.strictEqual(clonedList.get(1), 'w');
    clonedList.delete(0); // ['w']
    assert.strictEqual(list.length(), 2);
    assert.strictEqual(clonedList.length(), 1);
  }
  
  { // Test for the reverse method
    const list = new List();
    list.append('q'); 
    list.append('w'); 
    list.append('e'); 
    list.append('r'); // ['q', 'w', 'e', 'r']
    list.reverse(); // ['r', 'e', 'w', 'q']
    assert.strictEqual(list.length(), 4);
    assert.strictEqual(list.get(0), 'r');
    assert.strictEqual(list.get(1), 'e');
    assert.strictEqual(list.get(2), 'w');
    assert.strictEqual(list.get(3), 'q');
  }
  
  { // Test for the findFirst method
    const list = new List();
    list.append('q'); 
    list.append('w'); 
    list.append('w'); 
    list.append('q'); // ['q', 'w', 'w', 'q']
    assert.strictEqual(list.findFirst('q'), 0);
    assert.strictEqual(list.findFirst('w'), 1);
  }
  
  { // Test for the findLast method
    const list = new List();
    list.append('q'); 
    list.append('w'); 
    list.append('w'); 
    list.append('q'); // ['q', 'w', 'w', 'q']
    assert.strictEqual(list.findLast('q'), 3);
    assert.strictEqual(list.findLast('w'), 2);
  }
  
  { // Test for the clear method
    const list = new List();
    list.append('q'); 
    list.append('w'); 
    list.append('w'); 
    list.append('q'); // ['q', 'w', 'w', 'q']
    list.clear();
    assert.strictEqual(list.length(), 0);
  }
  
  { // Test for the extend method
    const list1 = new List();
    const list2 = new List();
    list1.append('q'); 
    list1.append('w'); // ['q', 'w']
    list2.append('e'); 
    list2.append('r'); // ['e', 'r']
    list1.extend(list2); // ['q', 'w', 'e', 'r']
    assert.strictEqual(list1.length(), 4);
    assert.strictEqual(list1.get(0), 'q');
    assert.strictEqual(list1.get(1), 'w');
    assert.strictEqual(list1.get(2), 'e');
    assert.strictEqual(list1.get(3), 'r');
  }


