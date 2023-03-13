const dodger = document.getElementById("dodger");


function moveDodgerLeft() {
    const left = parseInt(dodger.style.left);
   
    if (left > 0) {
      dodger.style.left = `${left - 4}px`;
    }
  }
  
// document.addEventListener("Keydown", function (e){
//     if (e.key === "ArrowLeft"){

//         moveDodgerLeft();

//     }
// });



function moveDodgerRight() {
    var leftNumbers = DODGER.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
  
    if (left < GAME_WIDTH - DODGER_WIDTH) {
      DODGER.style.left = `${left + DODGER_SPEED}px`;
    }
  }
  