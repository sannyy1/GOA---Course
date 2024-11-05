// შევქმნათ ფუნქცია რომელსაც გადაეცემა ობიექტების მასივი და აბრუნებს მასივს ამ ობიექტების name- propetry-ით

function getNames(arr) {
    return arr.map(obj => obj.name);
}

const users = [
    { name: 'sadnro', age: 16 },
    { name: 'dato', age: 46 },
    { name: 'maia', age: 44 }
];

const names = getNames(users);
console.log(names)