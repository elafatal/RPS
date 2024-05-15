let player1_move="";
let player2_move="";
let player1_score=0;
let player2_score=0;

const score=document.getElementById("score"); 
const Result=document.getElementById("Result"); 

//names
document.addEventListener('DOMContentLoaded', function() {
  var player1Name = document.getElementById('player1Name');
  var player2Name = document.getElementById('player2Name');
  var hideInputsButton = document.getElementById('hideInputsButton');

  // Function to hide inputs
  function hideInputs() {
      player1Name.style.display = 'none';
      player2Name.style.display = 'none';
      hideInputsButton.style.display = 'none'; 
  }


  player1Name.addEventListener('input', function() {
      if (player1Name.value.trim()!== '') {
          hideInputs();
      }
  });

  player2Name.addEventListener('input', function() {
      if (player2Name.value.trim()!== '') {
          hideInputs();
      }
  });


  hideInputsButton.addEventListener('click', function() {
      hideInputs();
  });
});

//game
window.addEventListener("keydown", function (e) {
  if (e.defaultPrevented) {
    return; 
  }
    e.preventDefault();

    switch (e.key) {
        case "ArrowLeft":
          player2_move="paper";  
        break;
        case "ArrowUp":
          player2_move="scissor";
          break;
        case "ArrowRight":
          player2_move="rock"; 
          break;
        case "a":
          player1_move="paper";
          break;
        case "s":
          player1_move="scissor";
          break;
        case "d":
          player1_move="rock";
          break;
      }

    if (player1_move!= "" && player2_move!=""){
      if(player1_move==="paper"){
          if(player2_move==="paper"){
              Result.innerText="DRAW";
              Result.classList="text-center mt-5 pt-3 text-warning"  ;
              player2_score++;
              player1_score++;
          } else if(player2_move==="scissor"){
              Result.innerText="PLAYER 2 WIN";
              Result.classList="text-center mt-5 pt-3 text-danger"  ;
              player2_score++;
          } else if(player2_move==="rock"){
              Result.innerText="PLAYER 1 WIN";
              Result.classList="text-center mt-5 pt-3 text-info"  ;
              player1_score++;
          }
      } else if (player1_move==="scissor") {
          if(player2_move==="scissor"){
              Result.innerText="DRAW";
              Result.classList="text-center mt-5 pt-3 text-warning"  ;
              player2_score++;
              player1_score++;
          } else if(player2_move==="rock"){
              Result.innerText="PLAYER 2 WIN";
              Result.classList="text-center mt-5 pt-3 text-danger"  ;
              player2_score++;
          } else if(player2_move==="paper"){
              Result.innerText="PLAYER 1 WIN";
              Result.classList="text-center mt-5 pt-3 text-info"  ;
              player1_score++;
          }
      } else if (player1_move=="rock"){
          if(player2_move==="rock"){
              Result.innerText="DRAW";
              Result.classList="text-center mt-5 pt-3 text-warning"  ;
              player2_score++;
              player1_score++;
          } else if(player2_move==="paper"){
              Result.innerText="PLAYER 2 WIN";
              Result.classList="text-center mt-5 pt-3 text-danger"  ;
              player2_score++;
          } else if(player2_move==="scissor"){
              Result.innerText="PLAYER 1 WIN";
              Result.classList="text-center mt-5 pt-3 text-info"  ;
              player1_score++;
          }
      }
      score.innerText=`Player1 --- ${player1_score} :  ${player2_score} --- player2`;
      player1_move= "";
      player2_move="";
  }
      
})




