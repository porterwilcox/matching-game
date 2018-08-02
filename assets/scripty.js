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
let testArr = [5];
let testIndex;
let myIndex;
let empower;


//Functions
let hideStart = function () {
    start.style.visibility = 'hidden';
    shiftUnwanted = setTimeout(shifty, 1000);
}

let shifty = function () {
    playerArr.shift();
}

let randomBox = function () {
    let i = Math.floor(Math.random() * 8);
    box[i].style.backgroundColor = "whitesmoke";
    box[i].style.boxShadow = "0 0 50px white";
    compArr.push(i);
    nBoxOff = setTimeout(boxOff, 900);
    simonOff = setTimeout(stopSimon, 4000);
}

let boxOff = function () {
    let myBox = boxes.find(b => b.style.backgroundColor == "whitesmoke");
    myBox.style.backgroundColor = "transparent";
    myBox.style.boxShadow = "none";
}

let simon = function () {
    nSimonInt = setInterval(randomBox, 1000);
}

let stopSimon = function () {
    clearInterval(nSimonInt);
    testArr = compArr.slice();
    givePower();
}

let givePower = function () {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.pointerEvents = "all";
    }
}

let colorChange = function () {
    this.style.backgroundColor = "whitesmoke";
    this.style.boxShadow = "0 0 50px white";
    nBoxOff = setTimeout(boxOff, 250);
}

let playerMatch = function () {
    playerArr.push(boxes.findIndex(b => b.style.backgroundColor == "whitesmoke"));
    myIndex = playerArr.shift();
    testIndex = testArr.shift();
    console.log(testArr);
    if (testIndex == undefined) {
        simon();
    }
    else if (myIndex !== testIndex) {
        alert("You Lose.")
    }
}


//Events
start.addEventListener('click', hideStart);
start.addEventListener('click', simon);
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', colorChange);
    box[i].addEventListener('click', playerMatch);
}