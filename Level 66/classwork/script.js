// მომხმარებელს შემოატანინეთ თავისი ასაკი, თუ მომხმარებელი იყო 18 წლზე პატარა დაუპრინტეთ შენ არასულწლოვანი ხარ, ხოლო სხვაშემთხვევაში შენ სულწლოვანი ხარ.

function checkAge() {
    const age = parseInt(prompt("Please enter your age:"));
    if (isNaN(age)) {
        alert("Invalid input. Please enter a number.");
    } else if (age < 18) {
        alert("You are a minor.");
    } else {
        alert("You are an adult.");
    }
}

checkAge();


// for-ლუპის დახმარებით ჩაწერეთ ლისტში 1-დან 30-მდე რიცხვები, და შემდეგ შექმენით ახალი ლისტი სადაც ჩაწერთ იმ ლისტში მყოფ რიცხვებიდან მარტო ლუწ რიცხვებს.
let numbers = [];
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}

console.log("All numbers:", numbers);
console.log("Even numbers:", evenNumbers);