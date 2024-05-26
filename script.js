'use strict';
console.log(' the js are working good');

// import to the web page docment content in the web page

const clickbtn = document.querySelector('.check');

const score = document.querySelector('.score');
const hscore = document.querySelector('.h-score');
const result = document.querySelector('.result');

let gscore = 20;
let highscore = 0;
let oldscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(gscore);
console.log(`your secret number was ${secretNumber}`);

document.querySelector('.score').textContent = gscore;
document.querySelector('.hs-n').textContent = highscore;

console.log(secretNumber);

// dom line optimization
// name of logo
const nameoflogo = function (nameoflogomsg) {
  document.querySelector('.nameoflogo').textContent = nameoflogomsg;
};

const bodyclr = function (bodycolor) {
  document.querySelector('body').style.backgroundColor = bodycolor;
};
const resultchange = function (resultparameter) {
  document.querySelector('.result').textContent = resultparameter;
};
const scoregs = function (scoreparameter) {
  document.querySelector('.score').textContent = scoreparameter;
};
// ---------------------------------------------------------------------------------------------
clickbtn.addEventListener('click', function () {
  const inputfild = Number(document.querySelector('.inputfild').value);

  // start check number or not there
  if (!inputfild) {
    // if number is not there
    // document.querySelector('.result').textContent =
    //   'Please Enter your guess number';
    resultchange('Please Enter the guess Number');

    // if number is there check between 1 to 20
  } else if (inputfild > 20 || inputfild < 1) {
    // document.querySelector('body').style.backgroundColor = 'red';
    bodyclr('red');
    resultchange('GUESS THE NUMBER BETWEEN 1 TO 20');
    // document.querySelector('.result').textContent =
    //   'GUESS THE NUMBER BETWEEN 1 TO 20 ';
    // document.querySelector('.nameoflogo').textContent = 'try again ... ';
    nameoflogo('Try again');
  } else if (secretNumber === inputfild) {
    // in the number was === to correct that

    // document.querySelector('.result').textContent = 'WOW CORRECT NUMBER....';
    resultchange('WOW CORRECT NUMBER ');
    nameoflogo('SUPER . .. GOOD ');

    // document.querySelector('.nameoflogo').textContent = 'SUPER .. GOOD';
    gscore += 5;
    document.querySelector('.bodyofcon').textContent = secretNumber;
    // bodyclr(secretNumber);
    // document.querySelector('.score').textContent = gscore;
    scoregs(gscore);

    secretNumber = Math.trunc(Math.random() * 20 + 1);

    console.log(`your secret number ccccc was ${secretNumber}`);

    // animaion for correct
    // document.querySelector('body').style.backgroundColor = 'green';
    bodyclr('green');
    // -------------------------------high score process---------
    highscore = gscore;
    console.log(`your high score is ${highscore},${gscore}`);

    if (highscore < oldscore) {
    } else {
      oldscore = highscore;
    }

    highscore = oldscore;
    document.querySelector('.hs-n').textContent = highscore;
  } else if (secretNumber !== inputfild) {
    if (inputfild > 1) {
      console.log('score is possitive');
      nameoflogo(secretNumber > inputfild ? 'TOO Low ' : 'Too High');
      // document.querySelector('.nameoflogo').textContent =
      //   secretNumber > inputfild ? 'Too Low' : 'Too High';
      gscore--;
      resultchange(
        secretNumber > inputfild ? 'incress the count' : 'decreass the count'
      );

      // document.querySelector('.result').textContent =
      //   secretNumber > inputfild ? 'incress the count' : 'decreass the count';
      // document.querySelector('.score').textContent = gscore;
      scoregs(gscore);
      // color chaning user expreance in  the game
      // document.querySelector('body').style.backgroundColor = 'red';
      bodyclr('red');
    } else {
      // document.querySelector('.result').textContent = 'WRONG ANSWER ..';
      resultchange('THE NUMBER WAS WRONG ANSWER..');
      gscore -= 1;
      // document.querySelector('.score').textContent = gscore;
      scoregs(gscore);
      // document.querySelector('.nameoflogo').textContent =
      //   'THE  NUMBER WAS WRONG ..';daw
      nameoflogo('THE NUMBER WAS WRONG ..');
      // animaion for wrong
      // document.querySelector('body').style.backgroundColor = 'red';
      bodyclr('red');
    }

    // score low ---------

    if (gscore <= 0) {
      // document.querySelector('.result').textContent =
      //   'Not eligible for Play sorry..';
      resultchange('Not eligible for Play sorry..');
      gscore = 0;
      // document.querySelector('.score').textContent = gscore;
      scoregs(gscore);
      // document.querySelector('.nameoflogo').textContent = 'NO SCORE TICKET..';
      nameoflogo('No score Ticket');
      // animaion for wrong
      // document.querySelector('body').style.backgroundColor = 'yellow';
      bodyclr('yellow');
    }
  }
  console.log(gscore);
});
// ----------------------------------click agin btn
document.querySelector('.again').addEventListener('click', function () {
  console.log('the again btn was clicked ...');
  if (gscore == 0) {
    gscore = 20;

    secretNumber = Math.trunc(Math.random() * 20 + 1);
    nameoflogo('GUESS MY NUMBER BOSS');
    resultchange('please enter the your Number ');
    bodyclr('black');
    scoregs(gscore);

    // document.querySelector('.nameoflogo').textContent = 'GUESS MY NUMBER BOSS';
    // document.querySelector('.result').textContent = 'Please Enter your Number';
    document.querySelector('.inputfild').value = '';

    // document.querySelector('body').style.backgroundColor = 'black';
    // document.querySelector('.score').textContent = gscore;
    document.querySelector('.hs-n').textContent = highscore;
  }
});

// input filed click reset attributesdocme
document.querySelector('.inputfild').addEventListener('click', function () {
  nameoflogo('No number in the box');
  bodyclr('blue');
  resultchange('Enter know  your guess ');
  // document.querySelector('.nameoflogo').textContent = 'No number in the box ';
  // document.querySelector('body').style.backgroundColor = 'blue';
  document.querySelector('.inputfild').value = '';
  document.querySelector('.bodyofcon').textContent = '?';
  // document.querySelector('.result').textContent = 'Enter know your guess';
});

// ---------------------------------------------------------------------------------------------
console.log('the js was finished to botteom');
