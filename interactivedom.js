const colorInput = document.getElementById("colorInput");
const textInput = document.getElementById("textInput");
const bgBtn = document.getElementById("bgBtn");
const textBtn = document.getElementById("textBtn");
const box = document.getElementById("box");

bgBtn.addEventListener("click", function () {
  const color = colorInput.value.trim();
  const tester = document.createElement("div");
  tester.style.color = color;

  if (tester.style.color === "") {
    alert("Invalid color name!");
  } else {
    box.style.backgroundColor = color;
  }
});

textBtn.addEventListener("click", function () {
  const newText = textInput.value.trim();

  if (newText === "") {
    alert("Please enter some text!");
  } else {
    box.textContent = newText;
  }
});
