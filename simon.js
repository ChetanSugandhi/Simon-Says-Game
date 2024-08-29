let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["red","yellow","green","purple"];
let h2 = document.querySelector("h2");

document.addEventListener('keypress',function () {
    if(started == false) {
        console.log("Game Started..!!");
        started = true;

        levelUp();
    }
});

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // random button choose here..
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function btnFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash'); 
    },250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]){
        // console.log("Same Value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 750);
        }
    }
    else {
        h2.innerHTML = `Game Over! <b>Your Score was ${level}.<br>Press any Key to Resart the Game..`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = 'white';
        },350);
        reset();

    }
}

function btnPress (){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute('id');
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
    // console.log(userColor);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}

function reset () {
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}