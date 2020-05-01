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

function publishResult(player, ai, result) {
    document.querySelector("[data-summary='your-choice']").textContent = player;

    document.querySelector("[data-summary='ai-choice']").textContent = ai;

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers

    if(result === 'win'){
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;

        document.querySelector('[data-summary="who-win"]').textContent = 'Zwyciestwo!';

        document.querySelector('[data-summary="who-win"]').style.color = 'green';
    } else if(result === 'loss'){
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;

        document.querySelector('[data-summary="who-win"]').textContent = 'Komputer wygrywa!';

        document.querySelector('[data-summary="who-win"]').style.color = 'red';

    } else {
        document.querySelector('p.losses span').textContent = ++gameSummary.draws;

        document.querySelector('[data-summary="who-win"]').textContent = 'Remis!';

        document.querySelector('[data-summary="who-win"]').style.color = 'gray';
    }
}
function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = '';
    game.playerHand = '';
    game.aiHand = '';
}

function startGame() {
    if(!game.playerHand) {
        return alert('wybierz reke')
    }
    game.aiHand = compSelection()
    const gameResult = checkResult(game.playerHand, game.aiHand);
    publishResult(game.playerHand, game.aiHand, gameResult);

    endGame();
}

document.querySelector('.start').addEventListener('click', startGame)