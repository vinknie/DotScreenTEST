// Initialisation
let player1Turn = true
let sign = "";
let cellPlayed = [];

const victoryCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
]




document.querySelectorAll(".cell").forEach(cell => cell.addEventListener("click", gestionClick, { once: true }))

function gestionClick(cellClick) {

    const indexCell = cellClick.target

    if (player1Turn) {
        sign = "X";
    } else {
        sign = "O";
    }

    indexCell.innerHTML = sign;

    win();

    if (endGame()) {
        console.log("win")
    } else {
        swapPlayer();
    }

}

function swapPlayer() {
    player1Turn = !player1Turn

}

function endGame() {
    if (win()) {
        return true
    } else if (draw()) {
        return true
    } else {
        return false
    }
}

function win() {
    let cells = document.querySelectorAll(".cell");
    cells.forEach(function (cell, index, array) {
        if (cellPlayed[cell.innerText] === undefined) { cellPlayed[cell.innerText] = [] }
        if (cellPlayed[cell.innerText].indexOf(index) !== -1) { return; }
        cellPlayed[cell.innerText].push(index)

    })


    return victoryCondition.some(combination => {
        return combination.every(index => {
            return cellPlayed["X"].includes(index)
        })
    })



}

function draw() {

}








//timer


const startingMinutes = 3;
let time = startingMinutes * 60;

const countdown = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 3 ? '0' + seconds : seconds;

    countdown.innerHTML = minutes + ":" + seconds;
    time--;



}

