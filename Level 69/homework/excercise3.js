// 1 Find Index: Create an array with repeated values. Use indexOf() to find the first occurrence of an element.
// 2 Find Last Index: Use lastIndexOf() to find the last occurrence of the same element.
// 3 Check Inclusion: Use includes() to check if a specific element exists in the array.
// 4 Invalid Index Search: Use indexOf() to search for a non-existing element. Log the result.
// 5 Case Sensitivity: Check if includes() is case-sensitive by searching for different cases of the same string.


let array = ['apple', 'banana', 'cherry', 'apple', 'date', 'banana'];

let firstIndex = array.indexOf('apple');
console.log('First occurrence of "apple":', firstIndex);

let lastIndex = array.lastIndexOf('apple');
console.log('Last occurrence of "apple":', lastIndex);

let hasBanana = array.includes('banana');
console.log('Array includes "banana":', hasBanana);

let nonExistingIndex = array.indexOf('orange');
console.log('Index of non-existing "orange":', nonExistingIndex);

let caseSensitiveCheck = array.includes('Apple');
console.log('Array includes "Apple":', caseSensitiveCheck);