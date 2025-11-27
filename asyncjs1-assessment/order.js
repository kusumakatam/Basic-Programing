console.log("Begin");

setTimeout(() => {
  console.log("Timeout Task");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Task");
});

console.log("End");

/*
why the order occurs?

1.Begin and End run first because they are normal synchronous statements. JavaScript executes them immediately, line by line.
2.Promise Task runs next. Promise callbacks go into the microtask queue, which is always processed before the callback queue.
3.Timeout Task runs last. Even with a delay of zero, setTimeout places the callback in the callback queue. It is executed only after all microtasks are complete.

*/