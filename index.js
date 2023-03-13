const dodger = document.getElementById("dodger");


function moveDodgerLeft() {
    const left = parseInt(dodger.style.left);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }




  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }


  