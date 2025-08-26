const card = document.querySelectorAll(".card");
const button = document.querySelectorAll("button");
const paragraph = document.querySelectorAll(".para");

button.forEach((btn, index) => {

  btn.addEventListener("click", (e) => {

    const tab = e.target;
    if (["BUTTON", "STRONG", "IMG"].includes(tab.tagName)) {
      paragraph[index].classList.toggle("active");
    }
  });
});
