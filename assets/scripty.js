//Variables
let box = document.getElementsByClassName('box');
let start = document.querySelector('.start')
let you = document.getElementById('you');
let winLose = document.getElementById('win-lose');
let score = document.getElementById('score');
let numberScore = document.getElementById('number-score');
let reset = document.getElementById('reset');
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
    start.style.display = 'none';
    shiftUnwanted = setTimeout(shifty, 1000);
    turnCounter--;
}

let shifty = function () {
    playerArr.shift();
}

let randomBox = function () {
    if (randomTurnCreator < 4) {
        let i = Math.floor(Math.random() * 8);
        box[i].style.backgroundColor = "whitesmoke";
        box[i].style.boxShadow = "0 0 50px white";
        nBoxOff = setTimeout(boxOff, 900);
        compArr.push(i);
        randomTurnCreator++;
        console.log(compArr);
    }
    else if (randomTurnCreator == 4) {
        randomTurnCreator = 0;
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
    if (mine !== comps) {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.pointerEvents = "none";
        }
        box[0].style.backgroundColor = 'whitesmoke';
        box[1].style.backgroundColor = 'whitesmoke';
        box[2].style.backgroundColor = 'whitesmoke';
        box[3].style.backgroundColor = 'whitesmoke';
        box[4].style.backgroundColor = 'whitesmoke';
        box[0].style.boxShadow = "0 0 50px white";
        box[1].style.boxShadow = "0 0 50px white";
        box[2].style.boxShadow = "0 0 50px white";
        box[3].style.boxShadow = "0 0 50px white";
        box[4].style.boxShadow = "0 0 50px white";
        you.style.display = 'block';
        winLose.innerText = "loser :("
        winLose.style.display = "block";
        score.style.display = "block";
        numberScore.innerText = `${turnCounter}`;
        numberScore.style.display = "block";
        reset.style.display = "block";
    }
    turnCounter++;
    if (turnCounter == 4 && masterTurn == 0) {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.pointerEvents = "none";
        }
        turnCounter -= compArr.length;
        masterTurn++;
        recapIntStart();
    }
    else if (turnCounter == 8 && masterTurn == 1) {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.pointerEvents = "none";
        }
        turnCounter -= compArr.length;
        masterTurn++;
        recapIntStart();
    }
    else if (turnCounter == 12 && masterTurn == 2) {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.pointerEvents = "none";
        }
        turnCounter -= compArr.length;
        masterTurn++;
        recapIntStart();
    }
    else if (turnCounter == 16 && masterTurn == 3) {
        turnCounter -= compArr.length;
        masterTurn++;
        recapIntStart();
    }
    else if (turnCounter == 20 && masterTurn == 4) {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.pointerEvents = "none";
        }
        turnCounter -= compArr.length;
        masterTurn++;
        recapIntStart();
    }
    else if (turnCounter == 24 && masterTurn == 5) {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.pointerEvents = "none";
        }
        box[0].style.backgroundColor = 'whitesmoke';
        box[1].style.backgroundColor = 'whitesmoke';
        box[2].style.backgroundColor = 'whitesmoke';
        box[3].style.backgroundColor = 'whitesmoke';
        box[4].style.backgroundColor = 'whitesmoke';
        box[0].style.boxShadow = "0 0 50px white";
        box[1].style.boxShadow = "0 0 50px white";
        box[2].style.boxShadow = "0 0 50px white";
        box[3].style.boxShadow = "0 0 50px white";
        box[4].style.boxShadow = "0 0 50px white";
        you.style.display = 'block';
        winLose.innerText = "winner!"
        winLose.style.display = "block";
        score.style.display = "block";
        numberScore.innerText = `${turnCounter}`;
        numberScore.style.display = "block";
        reset.style.display = "block";
    }
}

function recapIntStart() {
    recapInt = setInterval(recaper, 1000);
}

function recaper() {
    if (recapArr.length == 1) {
        let boxIndex = recapArr.shift();
        box[boxIndex].style.backgroundColor = "whitesmoke";
        box[boxIndex].style.boxShadow = "0 0 50px white";
        nBoxOff = setTimeout(boxOff, 900);
        simon();
    }
    if (recapArr.length > 0) {
        let boxIndex = recapArr.shift();
        box[boxIndex].style.backgroundColor = "whitesmoke";
        box[boxIndex].style.boxShadow = "0 0 50px white";
        nBoxOff = setTimeout(boxOff, 900);
    } else {
        clearInterval(recapInt);
    }
}

function resetAll() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "transparent";
        boxes[i].style.boxShadow = "none";
    }
    you.style.display = 'none';
    winLose.style.display = "none";
    score.style.display = "none";
    numberScore.style.display = "none";
    boxes[5].style.backgroundColor = "whitesmoke";
    boxes[5].style.boxShadow = "0 0 50px white";
    start.style.display = "block";
    compArr = [];
    playerArr = [];
}


//Events
start.addEventListener('click', hideStart);
start.addEventListener('click', simon);
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', colorChange);
    box[i].addEventListener('click', playerMatch);
}
reset.addEventListener('click', resetAll);