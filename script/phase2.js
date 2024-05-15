let player1_move="";
let player2_move="";
let player1_score=0;
let player2_score=0;

const score=document.getElementById("score"); 
const Result=document.getElementById("Result"); 

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

      
})

