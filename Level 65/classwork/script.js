// შექმენით 20 წყვილი ცვლადი და შინახეთ მათ შიგნით true და false data types სხვადასხვა გზით და გამოიტანთ ეკრაზე მათი შედარება "და" და "ან" ლოგიკუ ოპერატორებით

const pairs = [
    { a: true, b: false },
    { a: false, b: true },
    { a: true, b: true },
    { a: false, b: false },
    { a: true, b: true },
    { a: false, b: false },
    { a: true, b: false },
    { a: false, b: true },
    { a: true, b: false },
    { a: true, b: true },
    { a: false, b: false },
    { a: true, b: true },
    { a: false, b: false },
    { a: true, b: false },
    { a: true, b: true },
    { a: false, b: true },
    { a: false, b: false },
    { a: true, b: true },
    { a: true, b: false },
    { a: false, b: true }
];


pairs.forEach((pair, index) => {
    console.log(`წყვილი ${index + 1}:`);
    console.log(`  A: ${pair.a}, B: ${pair.b}`);
    console.log(`  AND (&&): ${pair.a && pair.b}`);
    console.log(`  OR (||): ${pair.a || pair.b}`);
});