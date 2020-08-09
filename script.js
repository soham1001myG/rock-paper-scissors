
const btn1 = document.querySelector('#rock');
btn1.addEventListener('click', () => {
    playRound("Rock", computerPlay())
    choice1.src = "img/rock.png";
});

const btn2 = document.querySelector('#paper');
btn2.addEventListener('click', () => {
    playRound("Paper", computerPlay())
    choice1.src = "img/paper.png";
});

const btn3 = document.querySelector('#scissors');
btn3.addEventListener('click', () => {
    playRound("Scissors", computerPlay())
    choice1.src = "img/scissors.png";
});

const userScore = document.getElementById("userscore");
const drawScore = document.getElementById("tie");
const compScore = document.getElementById("computerscore");
const choice1 = document.getElementById("select1");
const choice2 = document.getElementById("select2");

let tie = computer = user = 0;

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) { choice2.src = "img/rockb.png" }
    else if (choice == 1) { choice2.src = "img/paperb.png"; }
    else { choice2.src = "img/scissorsb.png"; }
    return (choice == 0) ? "Rock" :
        (choice == 1) ? "Paper" :
            "Scissors";
}

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();
    let result = (cs === ps) ? 0 :
        ((cs == 'rock' && ps == 'scissors') ||
            (cs == 'paper' && ps == 'rock') ||
            (cs == 'scissors' && ps == 'paper')) ? -1 : 1;
    console.log((result == 0) ? "It's a tie" :
        (result == -1) ?
            ("You Lose! " + computerSelection + " beats " + ps) :
            ("You Win! " + ps + " beats " + computerSelection));
    if (result == 0) {
        drawScore.innerHTML = ++tie;
        console.log(tie);
    }
    else if (result == -1) {
        compScore.innerHTML = ++computer;
        console.log();
    }
    else {
        userScore.innerHTML = ++user;
        console.log(userScore);
    }
    return result;
}


function game() {
    i = 5;
    let playerSelection;
    let result;
    let score = 0;
    while (i > 0) {
        do {
            playerSelection = prompt("Rock,paper or scissors ?").toLowerCase();
        }
        while (!(playerSelection == 'rock' ||
            playerSelection == 'paper' ||
            playerSelection == 'scissors'));
        result = playRound(playerSelection, computerPlay());
        if (result == -1) score -= 1;
        else if (result == 1) score += 1;
        i--;
    }
    if (score > 0) console.log("You won the war ");
    else if (score < 0) console.log("You lost the war ;_;");
    else console.log("It's a tie!");
}




