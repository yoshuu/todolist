const tasks = document.querySelector(".tasks a");
const progress = document.querySelector(".progress a");
const completed = document.querySelector(".completed a");

tasks.addEventListener("click", () => {
  // console.log("我點了tasks連結");
  progress.classList.remove(`active`);
  tasks.classList.add(`active`);
  completed.classList.remove("active");
});
progress.addEventListener("click", () => {
  // console.log("我點了progress連結");
  progress.classList.add(`active`);
  tasks.classList.remove(`active`);
  completed.classList.remove("active");
});
completed.addEventListener("click", () => {
  // console.log("我點了completed連結");
  progress.classList.remove(`active`);
  tasks.classList.remove(`active`);
  completed.classList.add("active");
});
