// 1) Create a Person constructor with properties name and age. Add a method introduce() that logs: "Hi, I am <name> and I am <age> years old."

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
};


// 2) Create a Book constructor with parameters title and author. If no author is provided, set it to "Unknown". Add a method getDetails() to print the book's details.


function Book(title, author = "Unknown") {
    this.title = title;
    this.author = author;
}

Book.prototype.getDetails = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}`);
};


// 3) Constructor with Arrays Create a Classroom constructor that takes an array of students. Add a method countStudents() to log the number of students in the array.

function Classroom(students) {
    this.students = students;
}

Classroom.prototype.countStudents = function() {
    console.log(`Number of students: ${this.students.length}`);
};