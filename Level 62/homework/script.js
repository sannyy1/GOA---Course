// 1) Multiply Two Numbers. Write a function multiply() that prompts the user to input two numbers and returns their product.

function multiply() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    
    return num1 * num2;
}

// 2.Subtract Two Numbers. Write a function subtract() that prompts the user for two numbers and returns the difference.

function subtract() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    
    return num1 - num2;
}


// 3. Divide Two Numbers. Write a function divide() that prompts the user for two numbers and returns their quotient.

function divide() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    
    return num1 / num2;
}

// 4. Return a Full Name. Write a function fullName() that prompts the user to input their first name and last name, and returns the full name as a single string.

function fullName() {
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");
    
    return firstName + " " + lastName;
}

// 5. Convert Minutes to Seconds. Write a function minutesToSeconds() that prompts the user for a number of minutes and returns the equivalent in seconds.

function minutesToSeconds() {
    let minutes = parseFloat(prompt("Enter the number of minutes:"));
    
    return minutes * 60;
}

// 6. Calculate the Area of a Rectangle. Write a function rectangleArea() that prompts the user to input the length and width of a rectangle and returns the area.

function rectangleArea() {
    let length = parseFloat(prompt("Enter the length of the rectangle:"));
    let width = parseFloat(prompt("Enter the width of the rectangle:"));
    
    return length * width;
}

// 7.Concatenate Two Strings. Write a function concatenateStrings() that prompts the user for two strings and returns them concatenated together.

function concatenateStrings() {
    let str1 = prompt("Enter the first string:");
    let str2 = prompt("Enter the second string:");
    
    return str1 + str2;
}


// 8.Exponentiation. Write a function power() that prompts the user for a base number and an exponent, and returns the result of raising the base to the power of the exponent.

function power() {
    let base = parseFloat(prompt("Enter the base number:"));
    let exponent = parseFloat(prompt("Enter the exponent:"));
    
    return Math.pow(base, exponent);
}


// 9.Calculate Circle Circumference. Write a function circumference() that prompts the user to input a circle's radius and returns the circumference.

function circumference() {
    let radius = parseFloat(prompt("Enter the radius of the circle:"));
    
    return 2 * Math.PI * radius;
}


// 10.Return the Next Number. Write a function nextNumber() that prompts the user for a number and returns the next number (the input number plus one).

function nextNumber() {
    let number = parseInt(prompt("Enter a number:"));
    
    return number + 1;
}