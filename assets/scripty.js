//Variables
let box = document.getElementsByClassName('box');
let compArr = [];
let nSimonInt;
let nBoxOff;
let boxes = Array.from(box);



//Functions
let hideStart = function () {
    document.querySelector(".start").style.display = 'none';
}

let randomBox = function() {
    let i = Math.floor(Math.random()*8);
    box[i].style.backgroundColor = "whitesmoke";
    box[i].style.boxShadow = "0 0 50px white";
    compArr.push(i);
    nBoxOff = setTimeout(boxOff, 900);
}

let boxOff = function () {
    let myBox = boxes.find(b => b.style.backgroundColor == "whitesmoke");
    myBox.style.backgroundColor = "transparent";
    myBox.style.boxShadow = "none";
}

let simon = function () {
    nSimonInt = setInterval(randomBox, 1000);

}

// let isArr = function () {
//     console.log(boxes);
// }

//Events
box[5].addEventListener('click', hideStart);
box[5].addEventListener('click', simon);
// box[5].addEventListener('click', isArr);