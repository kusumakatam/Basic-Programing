let count = 0;

const loader = setInterval(() => {
  console.log("Loading...");
  count++;
}, 1000);

setTimeout(() => {
  clearInterval(loader);
  console.log("Loaded successfully!");
}, 5000);
