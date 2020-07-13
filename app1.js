var scores, roundScore=0, activePlayer,status,diceRoll,winningScore,input;

init();
document.querySelector(".dice").style.display = "none";
document.querySelector(".dice2").style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function (){
    if(status  === "true"){
                  var dice = Math.floor(Math.random()*6)+1;
        // if you want to use one dice then you can remove the dice2 and you can have only one dice in the game, you want to remove in the css file also...
                  var dice2 = Math.floor(Math.random()*6)+1;

    document.querySelector("#current-"+activePlayer).textContent = dice+(+dice2); 
    var diceDOM = document.querySelector(".dice");
    var diceDOM2 = document.querySelector(".dice2");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-"+dice+".png";
    diceDOM2.style.display = "block"; 
    diceDOM2.src = "dice-"+dice2+".png";    

    //updating the roundScore if the dice number is not equal to 1

    /* if the player rolls two 6s at a time then he loses his chance and the next player gets the chance to play....this is the code for that
    
    if(diceRoll === 6 && dice === 6){
        scores[activePlayer] = 0;
        document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer];
        nextPlayer();
   
    } else */ if(dice !== 1 && dice2 !== 1){
        roundScore = roundScore+dice+dice2; 
        document.querySelector("#current-"+activePlayer).textContent=roundScore;
    } else {
        nextPlayer();

    } 
      
    }
 
    
});
document.querySelector(".btn-hold").addEventListener("click", function(){
    if(status === "true"){
        document.querySelector("#current-"+activePlayer).textContent = "0"; 
    scores[activePlayer]=scores[activePlayer]+roundScore;
    
    document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer];
        //challenge 6.2
        winningScore = document.querySelector(".box").value;
        if(winningScore){
            input = winningScore;
        } else {
            input = 100;
        }
       // console.log(input);
    if(scores[activePlayer]>=input ){ // challenge 6.2
        document.querySelector("#name-"+activePlayer).textContent = "Winner!";
        document.querySelector(".dice").style.display = "none"; 
        document.querySelector(".dice2").style.display = "none"; 
        document.querySelector(".player-"+activePlayer+"-panel").classList.add("Winner!");
        document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
        status = "flase";
    } else {
        nextPlayer();
    }
    }
    
    
});

function nextPlayer(){
    
    
        activePlayer === 0? activePlayer = 1:activePlayer = 0;
        roundScore=0;
        document.querySelector("#current-0").textContent = '0';
        document.querySelector("#current-1").textContent = '0';
        
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
    
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".dice2").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init(){
   scores = [0,0];
reoundScores = 0;
activePlayer = 0;
    status = "true";

document.querySelector("#score-0").textContent = "0";
document.querySelector("#score-1").textContent = "0";
document.querySelector("#current-0").textContent = "0";
document.querySelector("#current-1").textContent = "0";
document.querySelector(".dice").style.display = "none";
    document.querySelector(".dice2").style.display = "none"; 

    document.querySelector("#name-0").textContent = "Player 1";
        document.querySelector("#name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("Winner!");

            document.querySelector(".player-1-panel").classList.remove("Winner!");
     document.querySelector(".player-0-panel").classList.remove("active");
         document.querySelector(".player-1-panel").classList.remove("active");

        document.querySelector(".player-0-panel").classList.add("active");
}












