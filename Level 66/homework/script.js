// შექმენი ფუნქცია, რომელიც მიიღებს რიცხვს და პირობით შეამოწმებს, არის თუ არა ის კენტი ან ლუწი.

function checkOddEven(number) {
    if (typeof number !== 'number') {
        return "Invalid input. Please enter a number.";
    }
    if (number % 2 === 0) {
        return "The number is even.";
    } else {
        return "The number is odd.";
    }
}


// შექმენი პირობა, რომელიც შეამოწმებს, არის თუ არა სია ცარიელი და თუ არა, იპოვოს რიცხვების ჯამი.

function sumOfNumbers(array) {
    if (array.length === 0) {
        return "The list is empty.";
    }

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return `The sum of the numbers is: ${sum}`;
}


// შექმენი ფუნქცია, რომელიც მიიღებს რიცხვების სიას, გაამრავლებს ყველა რიცხვს 3-ზე და დაიბრუნებს მხოლოდ იმ რიცხვებს, რომლებიც 20-ზე მეტია.

function filterAndMultiply(array) {
    let result = [];

    if (array.length === 0) {
        return "The list is empty.";
    }

    for (let i = 0; i < array.length; i++) {
        let multiplied = array[i] * 3;
        if (multiplied > 20) {
            result.push(multiplied);
        }
    }

    return result.length > 0 ? result : "No numbers greater than 20.";
}


// Medium -- შექმენი პირობა, რომელიც შეამოწმებს სიაში უდიდეს რიცხვს და დააბრუნებს მას.

function findMaxNumber(array) {
    if (array.length === 0) {
        return "The list is empty.";
    }

    let maxNumber = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }

    return `The maximum number is: ${maxNumber}`;
}