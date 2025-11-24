/Template Literals/
const username = "John";
const course = "JavaScript";

console.log(`Hello ${username}, welcome to the ${course} course!`);

/Shorthand version/
const name = "Sam";
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

/Arrow Function Shorthand/
const getFullName = (first, last) => `${first} ${last}`;

