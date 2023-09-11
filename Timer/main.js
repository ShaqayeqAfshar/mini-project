// DOM
let input = document.getElementById("input");
let btn = document.getElementsByTagName("button")[0];
let num = document.getElementById("number");
let fill = document.getElementsByClassName("fill")[0];
let error = document.getElementById("error-box");
let circle = document.querySelector(".circle");
let massege = document.querySelector(".massege");
let p = document.querySelector(".massege > p");
let inputs = document.getElementsByClassName("inputs")[0];




// function
function start() {
  if (isNaN(parseInt(input.value))) {
    circle.classList.add("hidden");
    massege.classList.add("hidden");
    error.classList.remove("hidden");
    return;
  } else {
    circle.classList.remove("hidden");
    massege.classList.remove("hidden");
    error.classList.add("hidden");
    num.innerText = parseInt(input.value);
    inputs.classList.add("hidden");
    let originSec = num.innerText;
    let lastpersent = "p100";

    let a = setInterval(() => {
      if (lastpersent) {
        circle.classList.remove(lastpersent);
      }
      if (num.innerText <= 0) {
        clearInterval(a);
      }
      if (num.innerText > 0) {
        num.innerText--;
        let per = Math.abs(
          Math.floor(((originSec - num.innerText) / originSec) * 100 - 100)
        );
        console.log(per, originSec, num.innerText);
        lastpersent = `p${per}`;
        circle.classList.add(`p${per}`);
      } else {
        p.innerText = "زمان شما تمام شد";
        p.classList.add("text-green-500");
        inputs.classList.remove("hidden");
        input.value = "";
        circle.classList.add("hidden");
        return;
      }
    }, 1000);
  }
}


// event
btn.addEventListener("click", start);
