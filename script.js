// starting the timer

function startTimer(duration, display){
    var timer = duration, minutes, seconds;
setInterval (function(){
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60 , 10);

    minutes = minutes <10? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds + " " + "seconds remaining";

     if (--timer < 0) {   
     display.textContent = "Finished"  // stopping the timer after the 60 seconds
    document.getElementById("game").style.display = "none";
     document.getElementById("result").style.display = "block";
    }
}, 1000);
}

window.onload = function(){
    var oneMinutes = 60 * 1,
    display = document.querySelector('#time');
    startTimer( oneMinutes, display);
};

//moving the mouse 
var last = 0;
var score = 0;
setInterval(myInterval, 600);

function myInterval() {
    // debugger;
var image = document.createElement("img");
image.setAttribute("src", "https://sherkhan0786.github.io/jsWhackMouse/rat.png");
image.setAttribute("class", "rat");
image.setAttribute("onclick", "clicked();");
var arr = ['d1','d2','d3','d4','d5','d6','d7','d8','d9'];

var random = Math.floor(Math.random() * 9);
document.getElementById(arr[last]).innerHTML = '';
document.getElementById(arr[random]).appendChild(image);
last=random;
}

function clicked(){
    score += 10;
    document.getElementById('score').innerHTML = score;
    document.getElementById('showScore').innerHTML = 'Your score is '+ score;
}

// for moving to main.html page
function menu(){
    location.replace("main.html");
}

// for moving to index.html
function mainpage(){
    location.replace("index.html");
}


// for animating image of main.html
function loopDown(){
    $("#img1").animate({
        marginTop : 70
        },
        500, function() {
        loopUp();
    });
}

function loopUp(){
    $("#img1").animate({
        marginTop : 20
        },
        500, function() {
        loopDown();
    });
}
loopDown();