// ===============================
// 1. Template Literals + Expressions
// ===============================

// a
console.log(`5 + 7 = ${5 + 7}`);

// b
const multi = `Line one
Line two
Line three`;
console.log(multi);

// c
const firstName = "John";
const lastName = "Doe";
console.log(`${firstName} ${lastName}`);


// ===============================
// 2. Arrow Functions & this
// ===============================

// a
const square = n => n * n;
console.log(square(5));

// b: Explanation in comment
// Arrow functions do not have their own 'this'. They use the surrounding 'this',
// so inside obj.test(), 'this' is not pointing to obj, which results in undefined.

// c
const obj2 = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
obj2.test();


// ===============================
// 3. Rest, Spread & Copying Objects
// ===============================

// a
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);

// b
const objA = { x: 1 };
const objB = { y: 2 };
const merged = { ...objA, ...objB };
console.log(merged);

// c
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(4, 7, 2, 10));


// ===============================
// 4. Destructuring & Optional Chaining
// ===============================

// a
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

// b
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

// c
const info = {};
console.log(info?.user?.name);


// ===============================
// 5. Scoping (let/var/const)
// ===============================

// a: prints 3 because var is function scoped
for (var i = 0; i < 3; i++) {}
console.log(i);

// b: ReferenceError because let is block scoped
for (let j = 0; j < 3; j++) {}
// console.log(j);

// c: Explanation in comment
// const prevents reassignment, which protects values that should stay fixed.


// ===============================
// 6. Ternary Operator – Practice
// ===============================

// a
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

// b
let age = 17;
console.log(age >= 18 ? "Adult" : "Minor");

// c
let num = -5;
const type = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(type);


// ===============================
// 7. Spread, Rest & Arrays
// ===============================

// a
const nums = [1, 2, 3];
const withExtra = [...nums, 4, 5];
console.log(withExtra);

// b
let a = ["x", "y"];
let b = ["z"];
const combined = [...a, ...b];
console.log(combined);

// c
function printNames(...names) {
  return names;
}
console.log(printNames("A", "B", "C"));


// ===============================
// 8. Object Destructuring & Shorthand
// ===============================

// a
const user = { id: 101, Status: "active" };
const { id: uid, Status } = user;
console.log(uid, Status);

// b
const id2 = 101;
const role = "admin";
const user2 = { id2, role };
console.log(user2);

// c
const x = 10;
const y = 20;
const obj3 = {
  x,
  y,
  show() {
    console.log("Values:", x, y);
  }
};
obj3.show();


// ===============================
// 9. Template Literals (More Practice)
// ===============================

// a
console.log(`Today's date is ${new Date().toDateString()}`);

// b
const NAME = "Alex";
const SCORE = 88;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);


// ===============================
// 10. Arrow Function Shorthands
// ===============================

// a
const add = (p, q) => p + q;
console.log(add(2, 3));

// b
const isAdult = age => age >= 18;
console.log(isAdult(20));

// c
const double = n => n * 2;
console.log(double(8));


// ===============================
// 11. Spread Operator (Arrays & Objects)
// ===============================

// a
const arrClone = [...nums];
console.log(arrClone);

// b
const addFront = [100, ...nums];
console.log(addFront);

// c
const obj4 = { name: "A", age: 20 };
const obj5 = { age: 25, city: "Pune" };
const mergedObj = { ...obj4, ...obj5 };
console.log(mergedObj);


// ===============================
// 12. Optional Chaining (More Practice)
// ===============================

const user3 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};

// a
console.log(user3?.address?.city);

// b
console.log(user3?.job?.title);

// c
const demo = {};
console.log(demo?.profile?.email);  
