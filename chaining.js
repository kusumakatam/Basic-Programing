/Output + explanation/
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y); 
console.log(x);
/*
Explanation:

var is function-scoped, so y is available outside the block.

let is block-scoped, so x exists only inside the {} block and cannot be accessed outside.
*/

/Optional chaining/
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email);  
console.log(profile?.user?.details?.phone); 

/Example where optional chaining prevents error/
const product = {
  info: {
    name: "Laptop"
  }
};

console.log(product?.specs?.model);