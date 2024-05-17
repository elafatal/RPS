let player1_move="";
let player2_move="";
let player1_score=0;
let player2_score=0;

const score=document.getElementById("score"); 
const Result=document.getElementById("Result"); 
const player = document.getElementById("player");

player.addEventListener("click",(e)=>{
  e.preventDefault();
  player1_score=0;
  player2_score=0;
  player1_move="";
  player2_move="";
  score.innerText=`Player1 --- ${player1_score} :  ${player2_score} --- player2`;
  Result.innerText="START";
  Result.classList="text-center mt-5 pt-3 text-white "

}  )
//game
window.addEventListener("keydown", function (e) {
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
      player.classList="btn btn-outline-light fw-bold btn-lg"
      if(player1_move==="paper"){
          if(player2_move==="paper"){
              Result.innerText="DRAW";
              Result.classList="text-center mt-5 pt-3 text-warning"  ;
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




