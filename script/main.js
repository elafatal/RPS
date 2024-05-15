function getRandomNumber() {
    const randNumber= Math.random();
    const scaledRandomNumber = Math.floor(randNumber * 3) + 1;
    return scaledRandomNumber;
}

let player_score=0;
let computer_score=0; 

// player
const paper= document.getElementById("paper"); 
const scissor= document.getElementById("scissor"); 
const rock= document.getElementById("rock");
// pc

const randomNumber=getRandomNumber();
const pc=document.getElementById("pc-choosed")


if (randomNumber<1 && randomNumber<4){
    switch(randomNumber) {
        case 1:
            pc.innerText="Computer chose : Paper";
        break;
        case 2:
            pc.innerText="Computer chose : Scissor";
        break;
        case 3:
            pc.innerText="Computer chose : Rock";
        break;
    }
}