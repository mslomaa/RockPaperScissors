const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: '',
    aiHand: '',
}


const hands = document.querySelectorAll('.select img');

function handSelection() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px blue';
    
}

hands.forEach(hand => 
    hand.addEventListener('click', handSelection)
)

function compSelection() {
    const aiComp = hands[Math.floor(Math.random() * 3)].dataset.option
    return aiComp;
}

function checkResult (player, ai){
    if(player === ai){
        return 'draw'
    } else if ((player === 'papier' && ai === 'kamien') || (player === 'kamien' && ai === 'nozyczki') || (player === 'nozyczki' && ai === 'papier')){
        return 'win'
        
    } else {
        return 'loss' 
    }
}

function startGame() {
    if(!game.playerHand) {
        return alert('wybierz reke')
    }
    game.aiHand = compSelection()
    const gameResult = checkResult(game.playerHand, game.aiHand);
}

document.querySelector('.start').addEventListener('click', startGame)