let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
const playerScoreDisplay = document.getElementById('playerNum');
const computerScoreDisplay = document.getElementById('computerNum');
playerScore = 0;
computerScore = 0;

function gameProcess(playerChoice){
    let choices = ['👊', '✋', '✌️'];
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomNum];
    document.getElementById('computer').textContent = `COMPUTER:${computerChoice}`;

    document.getElementById('player').textContent = `YOU:${playerChoice}`;

    let res =  document.getElementById('emoji');
    
    if (playerChoice === computerChoice){
        document.getElementById('result').textContent = "IT'S A TIE!";
        res.textContent = '';
        new Audio('./sounds/tie.mp3').play();
    }
    else if(playerChoice === '👊' && computerChoice === '✋'){
        document.getElementById('result').textContent = 'YOU LOSE!';
        document.getElementById('emoji').textContent = '😞';
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        new Audio('./sounds/wrong.mp3').play();      
    }
    else if(playerChoice === '👊' && computerChoice === '✌️'){
        document.getElementById('result').textContent = 'YOU WIN!';
        document.getElementById('emoji').textContent = '😁';
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        new Audio('./sounds/tada.mp3').play();
    }
    else if(playerChoice === '✋' && computerChoice === '👊'){
        document.getElementById('result').textContent = 'YOU WIN!';
        document.getElementById('emoji').textContent = '😁';
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        new Audio('./sounds/tada.mp3').play();
    }
    else if(playerChoice === '✋' && computerChoice === '✌️'){
        document.getElementById('result').textContent = 'YOU LOSE!';
        document.getElementById('emoji').textContent = '😞';
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        new Audio('./sounds/wrong.mp3').play();
    }
    else if(playerChoice === '✌️' && computerChoice === '👊'){
        document.getElementById('result').textContent = 'YOU LOSE!';
        document.getElementById('emoji').textContent = '😞';
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        new Audio('./sounds/wrong.mp3').play();
    }
    else if(playerChoice === '✌️' && computerChoice === '✋'){
        document.getElementById('result').textContent = 'YOU WIN!';
        document.getElementById('emoji').textContent = '😁';
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        new Audio('./sounds/tada.mp3').play();
    }
    else {
        document.getElementById('result').textContent += ''; 
    }
} 




     
    
