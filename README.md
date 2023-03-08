# Unit tests, CI

## Description

The application implements a typed linked list that stores a collection of elements. The element can be added, deleted, or searched for within the list. The initial implementation of the list uses built-in arrays/lists to store the data, while the refactored implementation uses a singly linked circular list.

## Variant

The variant is determined by taking the remainder of the student ID number divided by 4:
My ID number — 1106
1106 % 4 = 2

## How to run

1. Clone the repository to your local machine
2. Navigate to the project directory in your terminal or command prompt
3. To run the demonstration of using of all methods
```bash
$ node showListWork.js
``` 
4. To run tests
 ```bash
$ node testList.js
``` 

## Reference to the commit, where CI tests failed

[Tests failed](https://github.com/vladimirvikulin/Software-Development-Methodologies-Lab2/commit/37d63f52b8caae0a8644fe89453e0a40a499f783)

## Conclusion

Unit tests have proven to be very helpful in ensuring the correctness and robustness of the application. The tests helped to identify and fix bugs, as well as validate the functionality of the refactored code. The time spent writing and running unit tests was definitely worth it, as it saved time in the long run by catching and fixing issues early on.