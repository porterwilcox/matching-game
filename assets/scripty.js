//Variables
let box = document.getElementsByClassName('box');
let start = document.querySelector('.start')
let compArr = [];
let nSimonInt;
let nBoxOff;
let boxes = Array.from(box);
let simonOff;
let playerArr = [];
let shiftUnwanted;


//Functions
let hideStart = function () {
    start.style.visibility = 'hidden';
    shiftUnwanted = setTimeout(shifty, 1000);
}

let shifty = function() {
    playerArr.shift();
}

let randomBox = function() {
    let i = Math.floor(Math.random()*8);
    box[i].style.backgroundColor = "whitesmoke";
    box[i].style.boxShadow = "0 0 50px white";
    compArr.push(i);
    nBoxOff = setTimeout(boxOff, 900);
    simonOff = setTimeout(stopSimon, 4000);
}

let boxOff = function() {
    let myBox = boxes.find(b => b.style.backgroundColor == "whitesmoke");
    myBox.style.backgroundColor = "transparent";
    myBox.style.boxShadow = "none";
}

let simon = function() {
    nSimonInt = setInterval(randomBox, 1000);
}

let stopSimon = function() {
    clearInterval(nSimonInt);
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.pointerEvents = "all";
    }
}

let colorChange = function() {
    this.style.backgroundColor = "whitesmoke";
    this.style.boxShadow = "0 0 50px white";
    nBoxOff = setTimeout(boxOff, 250);
}

let playerMatch = function () {
   let myIndex = playerArr.push(boxes.findIndex(b => b.style.backgroundColor == "whitesmoke"));
    let testArr = compArr.slice();
    
    console.log(testArr)
    console.log(playerArr)
}


//Events
start.addEventListener('click', hideStart);
start.addEventListener('click', simon);
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', colorChange);
    box[i].addEventListener('click', playerMatch);
}