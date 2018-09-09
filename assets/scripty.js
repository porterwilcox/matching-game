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
let nBoxRandOff;
let nBoxPlayOff;
let boxPlay;
let boxes = Array.from(box);
let simonOff;
let playerArr = [];
let shiftUnwanted;
let testArr = [5];
let testIndex;
let myIndex;
let empower;
let turnCounter = 0;
let highScore = 0;
let masterTurn = 0;
let recapArr = [];
let recapInt;
let randomTurnCreator = 0;
let targetCount = 0;



//Functions
let hideStart = function () {
    start.style.display = 'none';
    shiftUnwanted = setTimeout(shifty, 1000);
    turnCounter--;
    box[5].style.backgroundColor = "transparent";
    box[5].style.boxShadow = "none";
}
let shifty = function () {
    playerArr.shift();
}
let randomBox = function () {
    if (!highScore && randomTurnCreator < 4) {
        let i = Math.floor(Math.random() * 8);
        box[i].style.backgroundColor = "whitesmoke";
        box[i].style.boxShadow = "0 0 50px white";
        nBoxRandOff = setTimeout(boxRandOff, 900);
        compArr.push(i);
        randomTurnCreator++;
    }
    else if (randomTurnCreator == 4) {
        randomTurnCreator = 0;
        testArr = compArr.slice();
        targetCount = compArr.length;
        stopSimon();
    }
    else if (randomTurnCreator < 1) {
        let i = Math.floor(Math.random() * 8);
        box[i].style.backgroundColor = "whitesmoke";
        box[i].style.boxShadow = "0 0 50px white";
        nBoxRandOff = setTimeout(boxRandOff, 900);
        compArr.push(i);
        randomTurnCreator++;
    }
    else {
        randomTurnCreator = 0;
        testArr = compArr.slice();
        targetCount = compArr.length;
        turnCounter = 0;
        stopSimon();
    }
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
    nBoxPlayOff = setTimeout(boxPlayOff.bind(), 250);
}
let boxPlayOff = function () {
    let myBox = boxes.find(b => b.style.backgroundColor == "whitesmoke");
    myBox.style.backgroundColor = "transparent";
    myBox.style.boxShadow = "none";
}
let boxRandOff = function () {
    let myBox = boxes.find(b => b.style.backgroundColor == "whitesmoke");
    myBox.style.backgroundColor = "transparent";
    myBox.style.boxShadow = "none";
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
        box[1].style.backgroundColor = 'whitesmoke';
        box[2].style.backgroundColor = 'whitesmoke';
        box[4].style.backgroundColor = 'whitesmoke';
        box[6].style.backgroundColor = 'whitesmoke';
        box[7].style.backgroundColor = 'whitesmoke';
        box[1].style.boxShadow = "0 0 50px white";
        box[2].style.boxShadow = "0 0 50px white";
        box[4].style.boxShadow = "0 0 50px white";
        box[6].style.boxShadow = "0 0 50px white";
        box[7].style.boxShadow = "0 0 50px white";
        you.style.display = 'block';
        winLose.innerText = "you lose"
        winLose.style.display = "block";
        score.style.display = "block";
        numberScore.innerText = `${highScore}`;
        numberScore.style.display = "block";
        reset.style.display = "block";
        return;
    }
    if (turnCounter >= highScore) {
        highScore++;
    }
    turnCounter++;
    if (turnCounter == targetCount) {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.pointerEvents = "none";
        }
        masterTurn++;
        recapIntStart();
    }
    // else if (turnCounter == 8 && masterTurn == 1) {
    //     for (let i = 0; i < boxes.length; i++) {
    //         boxes[i].style.pointerEvents = "none";
    //     }
    //     turnCounter -= compArr.length;
    //     masterTurn++;
    //     recapIntStart();
    // }
    // else if (turnCounter == 12 && masterTurn == 2) {
    //     for (let i = 0; i < boxes.length; i++) {
    //         boxes[i].style.pointerEvents = "none";
    //     }
    //     turnCounter -= compArr.length;
    //     masterTurn++;
    //     recapIntStart();
    // }
    // else if (turnCounter == 16 && masterTurn == 3) {
    //     turnCounter -= compArr.length;
    //     masterTurn++;
    //     recapIntStart();
    // }
    // else if (turnCounter == 20 && masterTurn == 4) {
    //     for (let i = 0; i < boxes.length; i++) {
    //         boxes[i].style.pointerEvents = "none";
    //     }
    //     turnCounter -= compArr.length;
    //     masterTurn++;
    //     recapIntStart();
    // }
    else if (turnCounter == 24) {
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
        numberScore.innerText = `${highScore}`;
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
        nBoxRandOff = setTimeout(boxRandOff, 900);
        simon();
    }
    if (recapArr.length > 0) {
        let boxIndex = recapArr.shift();
        box[boxIndex].style.backgroundColor = "whitesmoke";
        box[boxIndex].style.boxShadow = "0 0 50px white";
        nBoxRandOff = setTimeout(boxRandOff, 900);
    } else {
        clearInterval(recapInt);
    }
}
function resetAll() {
    location.reload();
}

//Events
start.addEventListener('click', hideStart);
start.addEventListener('click', simon);
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', colorChange);
    box[i].addEventListener('click', playerMatch);
}
reset.addEventListener('click', resetAll);