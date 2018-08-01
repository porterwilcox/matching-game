//Variables
let box = document.getElementsByClassName('box');
// console.log(box);



//Functions
let hideStart = function () {
    document.querySelector(".start").style.display = 'none';
}

let randomBox = function() {
    let i = Math.floor(Math.random()*8);
    box[i].style.backgroundColor = "whitesmoke";
    box[i].style.boxShadow = "0 0 50px white";
}



//Events
box[5].addEventListener('click', hideStart);
box[5].addEventListener('click', randomBox);