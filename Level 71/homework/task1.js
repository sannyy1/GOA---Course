// Write a function that generates a random number between 1 and 100 using Math.random(). Ensure the number is an integer.

function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}