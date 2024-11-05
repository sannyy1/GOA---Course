// 1) Create a function greet that accepts a name as a parameter and greets the person. If no name is provided, the default name should be "Guest".

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// 2) Write a function add_numbers that takes two numbers and returns their sum. The second number should have a default value of 0.

function add_numbers(num1, num2 = 0) {
    return num1 + num2;
}


// 3) Create a function calculate_area to find the area of a rectangle. It should take two parameters: length and width. If the width is not provided, use a default value of 1.

function calculate_area(length, width = 1) {
    return length * width;
}


// 4) Write a function convert_temperature to convert temperatures between Celsius and Fahrenheit. It should have two parameters: temperature and scale (either "C" for Celsius or "F" for Fahrenheit), with "C" as the default scale.
function convert_temperature(temperature, scale = "C") {
    if (scale === "C") {

        return (temperature * 9/5) + 32;
    } else if (scale === "F") {

        return (temperature - 32) * 5/9;
    } else {
        throw new Error("Invalid scale. Use 'C' for Celsius or 'F' for Fahrenheit.");
    }
}


// 5) Create a function add_to_shopping_list that accepts an item and a quantity. The quantity should default to 1 if not provided.

function add_to_shopping_list(item, quantity = 1) {
    return `Added ${quantity} of ${item} to the shopping list.`;
}


// 6) Write a function power that calculates the power of a number with a default exponent value of 2 (i.e., square).

function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}