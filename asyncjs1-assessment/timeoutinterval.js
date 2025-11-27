const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter countdown seconds: ", (input) => {
  let time = Number(input);

  if (isNaN(time) || time <= 0) {
    console.log("Please enter a valid number.");
    rl.close();
    return;
  }

  console.log("Press 's' to stop the countdown.");

  const countdown = setInterval(() => {
    console.log("Time left:", time);
    time--;

    if (time < 0) {
      clearInterval(countdown);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);

  const checkStop = () => {
    rl.question("", (key) => {
      if (key.toLowerCase() === "s") {
        clearInterval(countdown);
        console.log("Countdown Stopped by User.");
        rl.close();
      } else {
        setTimeout(checkStop, 0);
      }
    });
  };

  setTimeout(checkStop, 0);
});
