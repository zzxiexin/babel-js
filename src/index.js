// app.js
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

greet('World');

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
