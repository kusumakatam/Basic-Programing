/Merge arrays with spread/
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const merged = [...arr1, ...arr2];
console.log(merged);

/Sum with rest/
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);

/Multi-level destructuring/
const user = {
  name1: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

const { name1, address: { city, pin } } = user;

console.log(name1, city, pin);
