const toggleBtn = document.querySelector("#toggleButton");
const closeBtn = document.querySelector("#closeBtn");
const sideBar = document.querySelector("aside");
console.log(toggleBtn, closeBtn, sideBar);

toggleBtn.onclick = function () {
  sideBar.classList.toggle("display_aside");
};

closeBtn.onclick = function () {
  sideBar.classList.remove("display_aside");
};
