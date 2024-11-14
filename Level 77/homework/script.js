// 1) შექმენით ფუქცია რომელიც გამოიტანს ("გამარჯობა")-ს (ვოიდ ფუნქცია)

function sayHello() {
    console.log("გამარჯობა");
}

// 2) შექმენით ფუნქცია რომელსაც გადაეცემა სახელის არგუმენტი და გამოიტანს ამ სახელის მისალმებას (მაგ: "გამარჯობა, ლაშა") (ვოიდ ფუნქცია)

function greetByName(name) {
    console.log("გამარჯობა, " + name);
}


// 3) შექმენით ფუნქცია რომელიც აბრუნებს გადაცემულ რიცხვზე ერთით მეტს (მაგ: 55->56)  (ჩვეულებრივი ფუნქცია)

function addOne(number) {
    return number + 1;
}


// 4) შექმენით ფუნქცია რომელიც აბრუნებს არა-ნეგატიური რიცხვის ნეგატიურ ვერსიას და შემდეგ გამოიყენეთ ეს ფუნქცია რომ გამოიტანოთ დაბრუნებულზე ერთით მეტი რიცხვი (მაგ: თუ ფუნქციას გადავეცით 44 საბოლლოდ უნდა გამოვიტანოთ (კონსოლში) -43 ) (ჩვეულებრივი ფუნქცია)

function makeNegative(number) {
    if (number >= 0) {
        return -number;
    }
    return number;
}

function showResult(number) {
    const negativeVersion = makeNegative(number);
    console.log(negativeVersion + 1);
}


// 5) გავაკეთოთ ფუნქცია რომელიც გადაცემული ID-ს მიხედვით აბრუნებს html-ის ელემენტს (მაგ: "first" -> document.getElementbyId("first")) შემდეგ კი გამოიყენეთ ეს ფუნქცია რომ დაბრუნბულ ელემენტს 3 ატრიბუტი შევუცვალოთ (მაგ: color, backgroundColor, textContent) (ჩვეულებრიივი ფუნქცია)

function getElementByIdAndChangeAttributes(id) {
    let element = document.getElementById(id);
    
    if (element) {
        element.style.color = "red";
        element.style.backgroundColor = "blue";
        element.textContent = "New Text";
    } else {
        console.log("Element not found");
    }
}