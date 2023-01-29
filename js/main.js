// Date Count
let countDowndate = new Date("Dec 31, 2023 23:59:59").getTime();
// console.log(countDowndate);

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDowndate - dateNow;

  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff <= 0) {
    clearInterval(counter);
  }
}, 1000);

// End Date Count

// The progress

function skiilsFel() {
  let sectionSkill = document.querySelector(".our-skills");
  if (window.scrollY >= sectionSkill.offsetTop) {
    let spans = document.querySelectorAll(".skill span");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
}
window.addEventListener("scroll", skiilsFel);
// End The progress

// Count Number
let nums = document.querySelectorAll(".stats .number");
let sectionCount = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= sectionCount.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// End Count Number
