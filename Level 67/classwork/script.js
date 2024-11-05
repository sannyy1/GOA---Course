// 1) Create a constructor function Person that takes two parameters: name and age.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 2) Add a method introduce() that logs: "Hi, I am <name> and I am <age> years old."

const person1 = new Person('Alice', 25);
person1.introduce();

// 3) Create a constructor function Car with parameters brand and year.

function Car(brand, year) {
    this.brand = brand;
    this.year = year;
}

const myCar = new Car('Toyota', 2020);
console.log(myCar);


// 4) If the year isn't provided, set a default value of 2020.

function Car(brand, year = 2020) {
    this.brand = brand;
    this.year = year;
}


// 5) Add a method describe() to print: "This is a <brand> from <year>."

const car1 = new Car('Toyota', 2018);
car1.describe(); 

const car2 = new Car('Ford');
car2.describe();