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
let turnCounter = 0;
let masterTurn = 0;
let recapArr = [];
let recapInt;
let randomTurnCreator = 0;


//Functions
let hideStart = function () {
    start.style.visibility = 'hidden';
    shiftUnwanted = setTimeout(shifty, 1000);
    turnCounter--;
}

let shifty = function () {
    playerArr.shift();
}

let randomBox = function () {
    if (randomTurnCreator < 5){
    let i = Math.floor(Math.random() * 8);
    box[i].style.backgroundColor = "whitesmoke";
    box[i].style.boxShadow = "0 0 50px white";
    nBoxOff = setTimeout(boxOff, 900);
    compArr.push(i);
    randomTurnCreator++;
    console.log(compArr);
    }
    else if(randomTurnCreator == 5){
    randomTurnCreator -= 5;
    testArr = compArr.slice();  
    stopSimon();
    }
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
    recapArr = compArr.slice();  
    clearInterval(nSimonInt);
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
    matchEnforcer(myIndex, testIndex);
}

function matchEnforcer(mine, comps) {
    turnCounter++;
    if (mine !== comps) {
        alert("You Lose.")
    }
    else if (turnCounter == 5 && masterTurn == 0){
        turnCounter -= compArr.length;
        masterTurn++;
        recapIntStart();
    }
    else if (turnCounter == 10 && masterTurn == 1){
        turnCounter -= compArr.length;
        masterTurn++;
        recapIntStart();
    }
    else if (turnCounter == 15 && masterTurn == 2){
        turnCounter -= compArr.length;
        masterTurn++;
        recapIntStart();
    }
    else if (turnCounter == 20 && masterTurn == 3){
        turnCounter -= compArr.length;
        masterTurn++;
        recapIntStart();
    }
}

function recapIntStart () {
    recapInt = setInterval(recaper, 1000);
}

function recaper() {
    if (recapArr.length == 1){
        let boxIndex = recapArr.shift();
        box[boxIndex].style.backgroundColor = "whitesmoke";
        box[boxIndex].style.boxShadow = "0 0 50px white";
        nBoxOff = setTimeout(boxOff, 900);
        simon();
    }
    if(recapArr.length > 0){
        let boxIndex = recapArr.shift();
        box[boxIndex].style.backgroundColor = "whitesmoke";
        box[boxIndex].style.boxShadow = "0 0 50px white";
        nBoxOff = setTimeout(boxOff, 900);
    } else {
    clearInterval(recapInt);
    }
}

//Events
start.addEventListener('click', hideStart);
start.addEventListener('click', simon);
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', colorChange);
    box[i].addEventListener('click', playerMatch);
}