// 1) Create an array with 5 items
let array = ['apple', 'banana', 'cherry', 'date', 'elderberry'];



// 2) Log the length of the array
console.log('Length of array:', array.length);



// 3) Convert the array to a string and log the result
let arrayString = array.toString();
console.log('Array as string:', arrayString);



// 4) Access the second element and log it
let secondElement = array.at(1); 
console.log('Second element:', secondElement);



// 5) Join elements with '-' between them
let joinedString = array.join('-');
console.log('Joined elements:', joinedString);



// 6) Push two new elements and then pop the last element
array.push('fig', 'grape'); 
console.log('Array after push:', array);
array.pop(); 
console.log('Array after pop:', array);


