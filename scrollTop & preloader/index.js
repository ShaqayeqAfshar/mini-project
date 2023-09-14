
// DOM
let backToTop = document.getElementById("backToTop");
let preloader = document.getElementById("preloader");
let content = document.getElementsByClassName("content")[0];





// function
function scrollTop(scroll , duration) {
  let doc = document.documentElement;
  let speed = 10;
  let a = Math.floor(doc.scrollTop / (duration/speed));
  let scroltop = Math.floor(doc.scrollTop);

  var timerHandle = setInterval(function () {
    if (scroltop <= 0) return;

    if (document.body.scrollTop != 0 ||document.documentElement.scrollTop != 0)
    doc.scrollTop -= a; else clearInterval(timerHandle);}, speed);}

function loadpage() {
  preloader.style.display = "none";
  content.classList.remove("d-none");
}

function backbtn() {
  if (this.document.documentElement.scrollTop > 900) 
    backToTop.style.display = "flex"; else backToTop.style.display = "none";}



// event
backToTop.addEventListener("click", ()=>{
    scrollTop(0 , 500)
});
window.addEventListener("scroll", backbtn);
document.addEventListener("DOMContentLoaded", loadpage);
window.addEventListener("scroll", backbtn);
