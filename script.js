'use strict';
console.log(' the js are working good');

// import to the web page docment content in the web page

const clickbtn = document.querySelector('.check');
// const flipbox = document.querySelector('bodyofcon');
const score = document.querySelector('.score');
const hscore = document.querySelector('.h-score');
const result = document.querySelector('.result');

// const checkfun = function () {
//   if (!inputfild) {
//     alert('plase enter the number in input box');
//     console.log(inputfild);
//   } else {
//     if (inputfild <= 20 && inputfild >= 1) {
//       console.log(`the value is ${inputfild}`);
//       alert(`the value is ${inputfild}`);
//     } else {
//       alert(' your value not between in 1 to 20');
//       console.log(typeof inputfild);
//     }
//   }
// };
let gscore = 20;
let highscore = 0;
let oldscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(gscore);
console.log(`your secret number was da funny ${secretNumber}`);

document.querySelector('.score').textContent = gscore;
document.querySelector('.hs-n').textContent = highscore;

console.log(secretNumber);

// btn click funtuon
// -----------------------------------------------------------
// inputfild.value = 100;
// clickevent pass in check btn

clickbtn.addEventListener('click', function () {
  const inputfild = Number(document.querySelector('.inputfild').value);
  // document.querySelector('.bodyofcon').textContent = secretNumber;

  // start check number or not there
  if (!inputfild) {
    // if number is not there
    document.querySelector('.result').textContent =
      'Please Enter your guess number';

    // if number is there check between 1 to 20
  } else if (inputfild > 20 || inputfild < 1) {
    // is not there 1 to 20 ex:21.. sumthing
    // animaion for wrong
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.result').textContent =
      'GUESS THE NUMBER BETWEEN 1 TO 20 ';
    document.querySelector('.nameoflogo').textContent = 'try again ... ';
  } else {
    // in the number was === to correct that
    if (secretNumber === inputfild) {
      document.querySelector('.result').textContent = 'WOW CORRECT NUMBER....';
      document.querySelector('.nameoflogo').textContent = 'SUPER .. GOOD';
      gscore += 5;
      document.querySelector('.bodyofcon').textContent = secretNumber;
      document.querySelector('.score').textContent = gscore;

      secretNumber = Math.trunc(Math.random() * 20 + 1);

      console.log(`your secret number ccccc was ${secretNumber}`);

      // animaion for correct
      document.querySelector('body').style.backgroundColor = 'green';
      // -------------------------------high score process---------
      highscore = gscore;
      console.log(`your high score is ${highscore},${gscore}`);

      if (highscore < oldscore) {
      } else {
        oldscore = highscore;
      }

      highscore = oldscore;
      document.querySelector('.hs-n').textContent = highscore;
    }

    // if the number was wrong low than number responce
    else if (secretNumber > inputfild) {
      document.querySelector('.result').textContent = 'Too Low  number ..';
      document.querySelector('.nameoflogo').textContent = 'Too Low';
      gscore -= 1;
      document.querySelector('.score').textContent = gscore;
      // animaion for wrong
      document.querySelector('body').style.backgroundColor = 'red';
    }
    // if the number high than responce
    else if (secretNumber < inputfild) {
      document.querySelector('.result').textContent = 'TOO HIGH .. NUMBER .. ';
      document.querySelector('.nameoflogo').textContent =
        'ENTER THE LOW NUMBER ..';
      gscore -= 1;
      document.querySelector('.score').textContent = gscore;
      // animaion for wrong
      document.querySelector('body').style.backgroundColor = 'red';
    }
    // it is the wrong number
    else {
      document.querySelector('.result').textContent = 'WRONG ANSWER ..';
      gscore -= 1;
      document.querySelector('.score').textContent = gscore;
      document.querySelector('.nameoflogo').textContent =
        'THE  NUMBER WAS WRONG ..';
      // animaion for wrong
      document.querySelector('body').style.backgroundColor = 'red';
    }

    // score low ---------

    if (gscore <= 0) {
      document.querySelector('.result').textContent =
        'Not eligible for Play sorry..';
      gscore = 0;
      document.querySelector('.score').textContent = gscore;
      document.querySelector('.nameoflogo').textContent = 'NO SCORE TICKET..';
      // animaion for wrong
      document.querySelector('body').style.backgroundColor = 'yellow';
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
    document.querySelector('.nameoflogo').textContent = 'GUESS MY NUMBER BOSS';
    document.querySelector('.result').textContent = 'Please Enter your Number';
    document.querySelector('.inputfild').value = '';

    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.score').textContent = gscore;
    document.querySelector('.hs-n').textContent = highscore;
  }
});

// input filed click reset attributesdocme
document.querySelector('.inputfild').addEventListener('click', function () {
  document.querySelector('.nameoflogo').textContent = 'GUESS MY NUMBER';
  document.querySelector('body').style.backgroundColor = 'blue';
  document.querySelector('.inputfild').value = '';
  document.querySelector('.bodyofcon').textContent = '?';
  document.querySelector('.result').textContent = 'Enter know your guess';
});

// ---------------------------------------------------------------------------------------------
console.log('the js was finished to botteom');
