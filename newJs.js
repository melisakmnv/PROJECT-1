
document.addEventListener('DOMContentLoaded', () => {


    // ======================//
    //   SET PAGE FUNCTIONS  //
    // ======================//

    let toggleStatus = false

    function toggleMenu(){
        let getNav_bar = document.querySelector('.nav-bar');
        let getMenu_list = document.querySelector('.menu-list')
        if (!toggleStatus) {
            getMenu_list.style.visibility =("visible");
            toggleStatus = true;
        } else if (toggleStatus) {
            getMenu_list.style.visibility =("hidden");
            toggleStatus = false;
        }
    }

    // === each menu list === //

    const intro = document.querySelector('.item-Intro');
    const displayA = document.querySelector('.displayA')
    let displayA1 = true

    function displayIntro() {
        if (displayA1) {
            displayA.classList.remove('hidden');
            welcome.classList.add('chamoue-hidden')
            displayA1 = false
        }
        else if (!displayA1) {
            displayA.classList.add('hidden');
            welcome.classList.remove('chamoue-hidden')
            welcome.classList.add('welcome-Page')
            displayA1 = true;
        }
    }


    const rules = document.querySelector('.item-Rules');
    const displayB = document.querySelector('.displayB');
    let displayB1 = true


    function displayRules() {
        if (displayB1) {
            displayB.classList.remove('hidden');
            welcome.classList.add('chamoue-hidden')
            displayB1 = false
        }
        else if (!displayB1) {
            displayB.classList.add('hidden');
            welcome.classList.remove('chamoue-hidden')
            welcome.classList.add('welcome-Page')
            displayB1 = true;
        }
    }

    const itemsObst = document.querySelector('.item-Obstacles');
    const displayC = document.querySelector('.displayC');
    let displayC1 = true

    function displayObstacles () {
        if (displayC1) {
            displayC.classList.remove('hidden');
            welcome.classList.add('chamoue-hidden')
            displayC1 = false
        }
        else if (!displayC1) {
            displayC.classList.add('hidden');
            welcome.classList.remove('chamoue-hidden')
            welcome.classList.add('welcome-Page')
            displayC1 = true;
        }
    }


    const thankYou = document.querySelector('.item-ThankYou');
    const displayD = document.querySelector('.displayD');
    let displayD1 = true


    function displayThankYou () {
        if (displayD1) {
            displayD.classList.remove('hidden');
            welcome.classList.add('chamoue-hidden')
            displayD1 = false
        }
        else if (!displayC1) {
            displayD.classList.add('hidden');
            welcome.classList.remove('chamoue-hidden')
            welcome.classList.add('welcome-Page')
            displayD1 = true;
        }
    }

    

    intro.addEventListener('click', displayIntro);
    rules.addEventListener('click', displayRules);
    itemsObst.addEventListener('click', displayObstacles);
    thankYou.addEventListener('click', displayThankYou);
   

    // ======================//
    //      SET BUTTONS      //
    // ======================//

    const welcome = document.querySelector('.welcome-Page');
    const game = document.querySelector('.game')
    let gameSwitch = true;

    function playGame() {
        if(gameSwitch) {
            game.classList.remove('game-hidden');
            welcome.classList.remove('welcome-Page')
            welcome.classList.add('chamoue-hidden')
            gameSwitch = false;
        }
    }

    function backToWelcome () {
        if (!gameSwitch) {
            game.classList.add('game-hidden');
            welcome.classList.add('welcome-Page')
            welcome.classList.remove('chamoue-hidden')
            gameSwitch = true;
            clearInterval(scoreId);
            scoreCount ="0"
            document.querySelector('#score').innerHTML = scoreCounter;
        }
    } 


    function checkKey(e) {
        if (e.keyCode === 13) {
            playGame();
            startGame();
        }
        if (e.keyCode === 27) {
            backToWelcome();
        }
    }

    function control(event) {
        if (event.keyCode === 32) {
            jumpUp();
        }
        if (event.keyCode === 40) {
            slideDown();
        }
    }

    // ======================//
    //   SET GAME VARIABLES  //
    // ======================//

    const character = document.querySelector('.character');
    const player = document.querySelector('.player');
    const container = document.querySelector('.container');
    let scoreCounter = 0;
    let myObstacles = ['bushOne', 'bushTwo', 'bushThree', 'bushFour', 'treeOne', 'treeTwo', 'treeThree', 'treeFour', 'fenceOne', 'cloudOne', 'cloudTwo', 'moonOne', 'moonTwo'];
    let _FRAMEID;
    let tick = 0;
    const obstacles = document.getElementsByClassName("newObstacle")


    // ======================//
    //     GAME FUNCTIONS    //
    // ======================//


    // ====== PLAYER ATTRIBUT ====== //


    function slideDown() {
        player.classList.remove('running')
        player.classList.add('sliding')
        let slideTime = setTimeout(() => {
            player.classList.remove('sliding')
            player.classList.add('running');
            clearTimeout(slideTime)
        }, 1000)
    }

    function jumpUp() {
        player.classList.remove('running')
        player.classList.add('jumping')
        character.classList.add('jump')
        let jumpTime = setTimeout(() => {
            character.classList.remove('jump')
            player.classList.remove('jumping')
            player.classList.add('running')
            clearTimeout(jumpTime)
        }, 600);
    }

    // ====== OBSTACLES ====== //

    function createObstacle() {
        if (obstacles.length >= 2) return;
        const rand = Math.floor(Math.random() * myObstacles.length);
        const type = myObstacles[rand];
        const newObstacle = document.createElement('div'); // I removed const here
        newObstacle.className = "newObstacle " + type;
        container.appendChild(newObstacle);
        setTimeout(() => {
            newObstacle.remove()
        }, 5000)
    }

    function startObstaclesLoop() {
        if (tick % 50 === 0) {
            createObstacle()
        }
        tick++;
        _FRAMEID = requestAnimationFrame(startObstaclesLoop)
    }

    // ====== SCORE ====== //

    let scoreId = setInterval(scoreCount,1000);
    function scoreCount() {
        scoreCounter ++;
        document.querySelector('#score').innerHTML = scoreCounter;
    }

    // ====== START ====== //

    function startGame() {
        container.classList.add('scrollingBg');
        player.classList.add('running');
        _FRAMEID = requestAnimationFrame(startObstaclesLoop)
    }


    // ======================//
    //       ALL EVENTS      //
    // ======================//

    document.addEventListener('keydown', control);
    document.addEventListener('keydown', checkKey);
    menu.addEventListener('click', toggleMenu);

});
