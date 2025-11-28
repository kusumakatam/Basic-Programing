const list = document.querySelector("#itemList");
const btn = document.querySelector("#addBtn");

btn.addEventListener("click", function () {
  const newLi = document.createElement("li");
  newLi.textContent = "New Item";
  list.appendChild(newLi);

  const index = list.children.length;

  if (index % 2 === 1) {
    newLi.style.fontWeight = "bold";
    newLi.style.color = "blue";
  } else {
    newLi.style.fontStyle = "italic";
    newLi.style.color = "red";
  }
});
