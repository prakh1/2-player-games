
let tog=1
let gameoverSound= new Audio('game-over.mp3')
let rollingSound= new Audio('rpg-dice-rolling-95182.mp3')
let player1sum=0;
let player2sum=0;


function play(playersum,num) {
        
    if (playersum == player1sum){

        player1sum = player1sum + num;
    
        if (player1sum > 36){
            player1sum = player1sum - num;
           
        }
    
        if (player1sum == 6){
            player1sum = 18;
    
        }
    
        if (player1sum == 12){
            player1sum = 24;
        }
        
        if (player1sum == 15){
            player1sum = 27;
        }

        if (player1sum == 32){
            player1sum = 28;
        }
    
        if (player1sum == 25){
            player1sum = 23;
        }
    
        if (player1sum == 20){
            player1sum = 16;
        }
    
        if (player1sum == 11){
            player1sum = 3;
        }

    return player1sum;

    }
     
     else if (playersum == player2sum)
     
     {

    player2sum = player2sum + num;


    if (player2sum>36){
        player2sum= player2sum - num;
       
    }

    if (player2sum == 6){
        player2sum = 18;

    }

    if (player2sum == 12){
        player2sum = 24;
    }
    
    if (player2sum == 15){
        playersum = 27;
    }

    if (player2sum == 32){
        player2sum = 28;
    }

    if (player2sum == 25){
        player2sum = 23;
    }

    if (player2sum == 20){
        player2sum = 16;
    }

    if (player2sum == 11){
        player2sum = 3;
    }

    return player2sum;
    }

    if (ladders[newPosition]) {
               newPosition = ladders[newPosition]; 
            } else if (snakes[newPosition]) {
                newPosition = snakes[newPosition];
            }

            return newPosition
}

   document.getElementById("diceBtn").addEventListener("click", function() {
   rollingSound.play();
    let num = Math.floor(Math.random() * 6 ) + 1;
    document.getElementById("dice").innerText = num;


    if (tog % 2 !== 0) {
        document.getElementById('tog').innerText="Yellow's Turn To Play";
       player1sum = play("player1sum",num);
   
    }
   
    
        
     
        
  else  
   
   {
    
        document.getElementById('tog').innerText="Red's Turn To Play";
      player2sum =  play("player2sum",num);

        }
        updatePlayerPosition(player, currentPlayerSum);

        if (player1sum === 36)

        {
            gameoverSound.play();
            alert("red won!!");
    }

    else (player2sum === 36)

    {
        gameoverSound.play();
        alert("yellow won!!");
    }

    location.reload();
   
tog = tog + 1;

});

