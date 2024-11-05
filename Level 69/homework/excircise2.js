// 1) Shift Element: Create an array and remove the first element using shift().

let array = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let shiftedElement = array.shift(); 
console.log('Array after shift:', array);
console.log('Removed element:', shiftedElement);


// 2) Unshift Element: Add a new element at the beginning using unshift().

array.unshift('fig');
console.log('Array after unshift:', array);

// 3) Delete Element: Use the delete operator to remove the second element. Log the array and observe the result.

delete array[1];
console.log('Array after delete:', array);


// 4) Concatenate Arrays: Create two arrays and use concat() to merge them. 

let array1 = ['grape', 'honeydew'];
let array2 = ['kiwi', 'lemon'];
let mergedArray = array1.concat(array2);
console.log('Merged array:', mergedArray);


// 5) Explore Unshift & Length: After using unshift(), log the new length of the array.

let newLength = array.length;
console.log('New length of array after unshift:', newLength);