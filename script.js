// caching DOM to store something for future use. storing all variable to use later 
let userScore = 0
let cpuScore = 0
// use let variable because it is a variable that changes. score changes 
const userScore_span = document.getElementById('user-score')
const cpuScore_span = document.getElementById('cpu-score')
const scoreBoard_div =document.querySelector('.score-board')
const result_p = document.querySelector('.result > p')
const rock_div =document.getElementById('r')
const paper_div =document.getElementById('p')
const scissors_div = document.getElementById('s')

// Gets random computer choice out of rock, paper or scissors 
function getComputerChoice(){
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

//function that converts letter to word 
function convertToWord(letter) {
    if (letter === 'r') return 'Rock'
    if (letter === 'p') return 'Paper'
    return 'Scissors'
}


//function that runs if user wins the round 
function win(userChoice, computerChoice ) {
    userScore++
    userScore_span.innerHTML = userScore
    // user score reflexs in the scoreboard column. "InnerHTML" property changes orginal html code. 
    cpuScore_span.innerHTML = cpuScore
    //cpu score will not change 
    result_p.innerHTML= `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win! 🔥`
    // es6. to combine string with variable without using " " or +. use ${} to distinguish variable 
}

function lose(userChoice, computerChoice) {
     cpuScore++
    userScore_span.innerHTML = userScore
    // user score reflexs in the scoreboard column. "InnerHTML" property changes orginal html code. 
    cpuScore_span.innerHTML = cpuScore
    //cpu score will change to plus 1
    result_p.innerHTML= `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You Lost...💩`
    // es6. to combine string with variable without using " " or +. use ${} to distinguish variable 
}



function tie(userChoice, computerChoice) {
    result_p.innerHTML= `You both chose ${convertToWord(userChoice)}. its A tie 😐`
    // es6. to combine string with variable without using " " or +. use ${} to distinguish variable 
}
function game(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice)
            //runs win function
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice)
            //runs lose function
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            tie(userChoice, computerChoice)
            //runs tie function
            break;
    }
        
}

function main() {

    // Add event listener to each button 
    rock_div.addEventListener('click', function () {
        game('r')
        // if user clicks rock it runs argument of 'r'
    })
    paper_div.addEventListener('click', function () {
        game('p')
        // if user clicks paper it runs argument of 'p'
    })
    scissors_div.addEventListener('click', function () {
        game('s')
        // if user clicks scissors it runs argument of 's'
    })
}
// runs the function 
main()