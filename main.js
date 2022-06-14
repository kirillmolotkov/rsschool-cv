const text = document.querySelectorAll(".phrase");
let counter = 0;
let counterSecond = 0;

let timer = setInterval(() => {
  text[counter].classList.add("phrase-active");
  text[counter].classList.add("phrase-visible");
  counter++;
  if (counter === text.length) {
    clearTimeout(timer);
  }
}, 300);

const timerId = setTimeout(() => {
  let timerSecond = setInterval(() => {
    text[counterSecond].classList.remove("phrase-active");
    counterSecond++;
    if (counterSecond === text.length) {
      clearTimeout(timerSecond);
    }
  }, 300);
}, 1500);

text.forEach((elem) => {
  elem.addEventListener("mousemove", function () {
    this.classList.add("phrase-active");
    setTimeout(() => {
      this.classList.remove("phrase-active");
    }, 1000);
  });
});
