// app.js
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

greet('World');

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}
