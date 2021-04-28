// ====== SET GAME VARIABLE ====== //
document.addEventListener('DOMContentLoaded', () => {

    // const gameContainer = document.querySelector('.container');
    const player = document.querySelector('.player');
    const obstacle = document.querySelector('.obstacle');
    const container = document.querySelector('.container');
    let scoreCounter = 0;


    function control(event) {
        if (event.keyCode === 32) {
            // if (isJumping === false) {
                jumpUp();
            // } 
        }
    }
   
    function jumpUp () {
        player.classList.add('jumping')
        player.classList.remove('moving')
        let jumpTime = setTimeout(() => {
            player.classList.remove('jumping')
            player.classList.add('moving')
        }, 600);
    }


    function gameCheck() {
        let check = setInterval(function () {
            let playerPosition = player.getBoundingClientRect();
            let obstaclePosition = obstacle.getBoundingClientRect();
            if ((playerPosition.right >= obstaclePosition.left) && (playerPosition.bottom >= obstaclePosition.top)) {
                obstacle.classList.remove('obstacleMoving')
                alert('Game Over, Your score is' + scoreCounter);
                scoreCounter = 0;
            }
            else {}
            document.querySelector('#score').innerHTML = scoreCounter;
        },20);
    }
    gameCheck();


    function createObstacles () {

    }


// ====== START BUTTON ====== //

    const start = document.querySelector('#start-game');

    function startGame () {
        container.classList.add('scrollingBg');
        obstacle.classList.add('obstacleMoving');
        scoreCounter ++
    }

    start.addEventListener('click', startGame);
    document.addEventListener('keydown', control);
});
        