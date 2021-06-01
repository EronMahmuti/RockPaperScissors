


let pScore = 0;
let cScore = 0;
let valScissors = false;
let valPaper = false;
let valRock = false;
const buttons = document.querySelectorAll('input')

const computerPlay = () => {
    let hands = ['PAPER', 'SCISSORS', 'ROCK'];
    return hands[Math.floor(Math.random() * hands.length)];
}
const playerSelection = (playerTouch) => {
        let cSelection = computerPlay();
        console.log(cSelection + ' pc');
        document.getElementById("btnFirst").innerHTML = `COMPUTER  <i class="fas fa-arrow-circle-right"></i> ${cSelection}`;
        console.log(playerTouch + ' player');
        document.getElementById("btnSecond").innerHTML =  `PLAYER  <i class="fas fa-arrow-circle-right"></i>  ${playerTouch}`;
        // if(){
        //     console.log('draw');
        //     document.getElementById("para").innerHTML = 1;
        // }else if()
        if((playerTouch == "SCISSORS" && cSelection == "PAPER") || 
        (playerTouch == "PAPER" && cSelection == "ROCK") || 
        (playerTouch == "ROCK" && cSelection == "SCISSORS")){
            console.log('win');
            pScore += 1;
        }
        else if(playerTouch == cSelection){
            console.log('draw');
        }
        else{
            console.log('loose');
            cScore += 1;
        }
        return;
}
const restart = () => {
    document.getElementById("interface").style.display = 'flex';
    document.getElementById("again").style.display = 'none';
    pScore = 0;
    cScore = 0;
    document.getElementById("para").innerHTML = `${cScore}`;
    document.getElementById("dyta").innerHTML = `${pScore}`;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection(button.value);
        document.getElementById("para").innerHTML = cScore;
        document.getElementById("dyta").innerHTML = pScore;
        if(cScore == 5){
            console.log("game over")
            document.getElementById("interface").style.display = 'none';
            document.getElementById("again").style.display = 'flex';
            document.getElementById("winner").innerHTML = 'computer won';
        }else if(pScore == 5){
            console.log("game over")
            document.getElementById("interface").style.display = 'none';
            document.getElementById("again").style.display = 'flex';
            document.getElementById("winner").innerHTML = 'player won';
        }
    })
})

document.getElementById("restart").addEventListener("click", restart);

console.log(computerPlay());


























