const toggleBtn = document.querySelector(".checkbox");
const mode = document.querySelector(".mode");
const body = document.querySelector("body");
const slider = document.querySelector(".label");
toggleBtn.addEventListener("click", function () {
  if (toggleBtn.checked) {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
    mode.textContent = "Light Mode";
    slider.classList.add("light-toggle");
  } else {
    body.classList.add("theme-dark");
    body.classList.remove("theme-light");
    mode.textContent = "Dark Mode";
    slider.classList.remove("light-toggle");
  }
});
