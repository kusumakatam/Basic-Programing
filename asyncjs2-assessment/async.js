function timer(duration, onComplete) {
  setTimeout(() => {
    onComplete("Timer of " + duration + " ms finished");
  }, duration);
}

function handleComplete(message) {
  console.log(message);
}

timer(2000, handleComplete);
