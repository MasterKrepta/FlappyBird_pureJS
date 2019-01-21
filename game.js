var playerObj = document.getElementById('player');
var pipesObj = document.getElementById('pipes');

var player = {
     top: 15
};

var pipes ={
    top: 400,
    left: 300
}

var flapSpeed = 50;
var gravity = 5;

var moveUp = true;


document.onkeydown = function(e){
    if(e.keyCode === 32){
        console.log('jump');
        player.top -= flapSpeed;
    }
    
} 

function start(){
    playerObj.style.top = player.top + "px";
    pipesObj.style.top = pipes.top + "px";
}

function movePlayer(){
    player.top += gravity;
    if(pipes.top <= 300 && moveUp){
        moveUp = false;
    } else if(pipes.top >= 400 && !moveUp){
        moveUp = true;
    }
    playerObj.style.top = player.top + "px";
    if(player.top === 550){
        die();
    }
}
  
function die(){
    console.log("die");
    alert("You Died");
}

function drawPlayer(){
    playerObj.style.top = player.top + "px";
}

function movePipes(){
    pipes.left -= gravity;
    pipesObj.style.left = pipes.left + "px";

    if(moveUp){
        //console.log("GoingUP");
        pipes.top -= gravity;
    } else{
        //console.log("GoingDown");
        pipes.top += gravity;
    }
        pipesObj.style.top = pipes.top + "px";

}

function gameLoop(){
    //console.log("GameRunning");
    setTimeout(gameLoop, 100);
    movePlayer();
    drawPlayer();
    movePipes();
    
}
start();
gameLoop();