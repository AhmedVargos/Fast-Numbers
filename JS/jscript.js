var score;
var total;

function startGame() {
  var scoreTxt = document.getElementById('scoreTxt');  
  scoreTxt.style.visibility = 'hidden';
  
  document.getElementById('counterText').innerHTML = 30;
  document.getElementById('startBtn').disabled = true;
  
  score = 0;
  total = 0;
  toggleCounter();
  toggleNumber();        
}

function stopGame() {
  stopCounter(counterInterv);
}

function toggleCounter() {
  var conterTxt = document.getElementById('counterText');
  
  counterInterv = setInterval(function () {
    if (conterTxt.innerHTML == 0) {
      stopCounter(counterInterv);
    } else {
      conterTxt.innerHTML = conterTxt.innerHTML - 1;
    }
  }, 1000);
}

function stopCounter(interval) {
  document.getElementById('startBtn').disabled = false;
  document.getElementById('mCircle').style.backgroundColor = '#3d4b99';
  document.onkeydown = null;
  clearInterval(interval);
  clearInterval(numInterv);
  document.getElementById('numbers').innerHTML = 'X';  
  document.getElementById('counterText').innerHTML = '30';
  scoreTxt.style.visibility = 'visible';
  scoreTxt.innerHTML = "Your score is " + score + " from " + total;
}

function toggleNumber() {
  numInterv = setInterval(function () {

    document.getElementById('mCircle').style.backgroundColor = '#3d4b99';
    var pressed = true;
    var numTxt = document.getElementById('numbers');
    numVal = (Math.floor(Math.random() * 9) + 1);
    numTxt.innerHTML = numVal;

    function keepScore(e) {
      var keynum;
      if (window.event) { // IE                    
        keynum = e.key;
      } else if (e.which) { // Netscape/Firefox/Opera                   
        keynum = e.key;
      }
      if (pressed) {
        if (keynum == numVal) {
          document.getElementById('mCircle').style.backgroundColor = '#29c62f';
         score++;
         console.log(numTxt.style.fontSize);
        } else {
          document.getElementById('mCircle').style.backgroundColor = 'red';
        }
      }
      pressed = false;
    }

    total++;
    document.onkeydown = keepScore;

  }, 1500);
}

