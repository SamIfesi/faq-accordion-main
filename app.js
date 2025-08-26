const minus = document.querySelectorAll(".minus");
const plus = document.querySelectorAll(".plus");
const button = document.querySelectorAll("button");
const paragraph = document.querySelectorAll(".para");

button.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    const tab = e.target;

    if (["BUTTON", "STRONG", "IMG"].includes(tab.tagName)) {
      paragraph[index].classList.toggle("active");
      plus[index].classList.toggle("active");
      minus[index].classList.toggle("active");
    }
  });
});
