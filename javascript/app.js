// ======== PAGE SETTING ======== //

const menuBtn = document.querySelector('#toggle-btn');  

let btn_state = {
    menu_btn : false
}

function renderMenu() {
    const listMenu = document.querySelector('.nav-bar > .side-bar')
    if (!btn_state.menu_btn) {
        listMenu.style.visibility ="visible";
    } else if (btn_state.menu_btn) {
        listMenu.style.visibility ="hidden";
    }
}

menuBtn.addEventListener('click', renderMenu);

// 1 function to run every btn function / back to pizza dom




const game = document.querySelector('#game');
const player = document.querySelector('#player');
const obstacles = document.querySelector('.obstacle');
const GAME_WIDTH = 1000;
const GAME_HEIGTH = 400;
let jumpState = false;

// // ASSIGN JUMP FUNCTION 

// ======== CODE CONTROL ======== //
function control(event) {
    if (event.keyCode === 32) {
        if (jumpState === false) {
            jumpState = true;
            jumpUp();
        }
    }
}

// ======== JUMP ======== //

let bottom = 0;
function jumpUp() {
    let jumpTime = setInterval(function () {
        if (bottom === 150) {
            clearInterval(jumpTime)
            let fallTime = setInterval(function () {
                if (bottom === 0) {
                    clearInterval(fallTime)
                    jumpState = false
                }
                bottom -= 30
                player.style.bottom = bottom + 'px';
            }, 40)
        }
        bottom += 30; // here player will stop at y -30  ????????
        player.style.bottom = bottom + 'px';
    }, 30);
}


// ======== OBSTACLE ======== //

let left = 1350;
function movingObstacle() {
    let moveTime = setInterval(function () {
        if (bottom === 0) {
            clearInterval(moveTime)
            left -= 30
            obstacles.style.left = left + 'px';
        }
    }, 30)
}

movingObstacle();


// ======== GAME CHECK ======== //

function gameCheck() {
    let check = setInterval(function () {
        let playerPosition = player.getBoundingClientRect();
        let obstaclePosition = obstacles.getBoundingClientRect();

        if ((playerPosition.right >= obstaclePosition.left) && (playerPosition.bottom >= obstaclePosition.top)) {
            // alert("NOOOOOO")
        }
    }, 200);
}

gameCheck();


document.addEventListener('keydown', control);



