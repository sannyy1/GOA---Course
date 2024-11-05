// შევქმნათ ფუნქცია რომელსაც გადაეცემა მასივი და აბრუნებს ამ მასივის ელემეტების ჯამს

function sumArray(arr) {
    return arr.reduce((total, current) => total + current, 0);
}

const numbers = [1, 2, 3, 4, 5];
const result = sumArray(numbers);
console.log(result)