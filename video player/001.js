// DOM
let video = document.querySelector("video");
let playbtn = document.getElementById("play");
let fwd = document.getElementById("fast_forward");
let rwd = document.getElementById("fast_rewind");
let alltime = document.getElementsByClassName("all-time")[0];
let currenttime = document.getElementsByClassName("current-time")[0];
let timebar = document.querySelector("input.bar")
let volbar = document.querySelector("input.vol")
let volicon = document.getElementById("volume_up")
let fullscreen = document.getElementById("fullscreen")
let player = document.getElementsByClassName("player")[0]



// function
function show(){
    volbar.classList.toggle("hidden")
}

function playORpause(){
    alltime.textContent = getTime(video.duration)
    if(video.paused){
        video.play();
        playbtn.innerText = "pause"
    }else{
        video.pause();
        playbtn.innerText = "play_arrow"

    }
}

function forwd(){
    video.currentTime = video.currentTime +10;
}

function rewd(){
    video.currentTime = video.currentTime -10;
}

function videoTime(){

}

function getTime(time){
    let min = Math.floor(time /60);
    let sec = Math.floor(time -(min*60))
    let finalmin , finalsec;

    if(min < 10){
        finalmin = "0"+ min;
    }else{
        finalmin = min;
    }

    if(sec < 10){
        finalsec = "0"+ sec;
    }else{
        finalsec = sec;
    }

    return finalmin + ":" + finalsec
}

function toggleFullSreen(){
    if(!document.fullscreenElement){
        player.requestFullscreen();
    }else{
        if(document.exitFullscreen){
            document.exitFullscreen();
        }
    }
}


// event
fullscreen.addEventListener("click" , toggleFullSreen)
playbtn.addEventListener("click" , playORpause);
fwd.addEventListener("click", forwd);
rwd.addEventListener("click", rewd);
volicon.addEventListener("click" , show)
video.addEventListener("timeupdate", function(){
    currenttime.textContent = getTime(video.currentTime)
    let barlength = (video.currentTime / video.duration) *100;
    timebar.style = `background : linear-gradient(90deg , rgba(230,126,34,1) ${barlength}% , #e1e1e1 0%)`
    timebar.value = barlength;
})    
timebar.addEventListener('input' , function() {
    video.currentTime = (this.value / 100) * video.duration
})
volbar.addEventListener("input" , function(){
    video.volume = this.value /100;
    this.style = `background : linear-gradient(90deg , rgba(230,126,34,1) ${this.value}% , #e1e1e1 0%)`
})
volbar.addEventListener("input" , function(){
    video.volume = this.value /100;
    this.style = `background : linear-gradient(90deg , rgba(230,126,34,1) ${this.value}% , #e1e1e1 0%)`
})



