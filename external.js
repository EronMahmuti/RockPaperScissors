var a = Math.floor(Math.random() * 3);
var randomAnswer= '';
function computerPlay(a,randomAnswer){
    if (a == 0){
        return randomAnswer = 'Rock'
    }else if(a == 1){
        return randomAnswer = 'Paper'
    }else{
        return randomAnswer = 'Scissors'
    }
}

function rockScissors(playerSelection,computerSelection){
    let toNow = '';
    if(playerSelection == computerSelection){
        return toNow = 'draw'
    }else if(playerSelection == 'Rock' && computerSelection == 'Paper'){
        return toNow = 'pc Won'
    }else if(playerSelection == 'Rock' && computerSelection == 'Scissors'){
        return toNow = 'you Won'
    }else if(playerSelection == 'Paper' && computerSelection == 'Rock'){
        return toNow = 'you Won'
    }else{
        return toNow = 'pc Won'
    }
}
let Pscore = 0;
let Cscore = 0;
var person = {
    Rock : 1,
    Paper : 2,
    Scissors : 3
}
let answer = 0;
function game(){
    
    var btnFirst = document.getElementById("btnFirst");
    btnFirst.onclick = function(answer){ answer = 1;}
    console.log(btnFirst.onclick)
    for(let i= 0;i < 5; i++){
        var a = Math.floor(Math.random() * 3);
        
        document.getElementById("btnFirst").addEventListener("click", function ansRock(){ return answer = 1 } );
        
        document.getElementById("btnSecond").addEventListener("click", person);
        document.getElementById("btnThird").addEventListener("click", person);
        var letYou = ''
        if(answer == 1){
            letYou = 'Rock'
        }else if(answer == 2){
            letYou = 'Paper'
        }else if(answer == 3){
            letYou = 'Scissors'
        }
        computerPlay(a,randomAnswer);
        console.log(computerPlay(a,randomAnswer))
        var letMe = computerPlay(a,randomAnswer)
        console.log(letYou)
        rockScissors(letYou,letMe);
        
    }
    var Decision = rockScissors(letYou,letMe);
    if(Decision == 'draw'){
        Pscore += 0;
        console.log('draw')
    }else if(Decision == 'you Won'){
        Pscore += 1;
        console.log(Pscore + ' win')
        document.getElementById("yourScore").innerHTML = `${Pscore}`;
    }else{
        Cscore += 1;
        console.log(Cscore + ' loose')
        document.getElementById("pcScore").innerHTML = `${Cscore}`;
    }

    if(Pscore >= Cscore){
        console.log('winner' + ` you got ${Pscore} points`)
    }else{
        console.log('looser' + ` pc got ${Cscore} points`)
    }
}

game()
