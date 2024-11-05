// შევქმნათ ობიექტი და გავუწეროთ მას 3 მეთოდი და 3 ფროფერთი


const person = {
    name: 'sadnro',
    age: 16,
    occupation: 'developer',

    greet: function() {
        return `Hello, my name is ${this.name}!`;
    },

    haveBirthday: function() {
        this.age++;
        return `My age is: ${this.age}`;
    },

    introduce: function() {
        return `I am ${this.name}, and work as ${this.occupation}.`;
    }
};