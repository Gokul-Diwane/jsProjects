let randomNum=parseInt(Math.random()*100+1);
console.log(randomNum);

let userInput=document.querySelector('#guessField')
let submit=document.querySelector('#submit')
let remaining=document.querySelector('.remainGuesses')
let previous=document.querySelector('.guesses')
let loworhigh=document.querySelector('.lowOrHigh')
let result=document.querySelector('.result')

let para=document.createElement('p');

let prevGuess=[]
let numGuess=1

let playGame=true
if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        let gus=parseInt(userInput.value);
        console.log(gus);
        validateGuess(gus);
    })
}

function validateGuess(guess) {
    if(guess<1){
        alert("Enter a number greater than 0!!!")
    }else if(guess>100){
        alert("Enter a number less than 101!!!")
    }else{
        prevGuess.push(guess);
        if(numGuess==10){
            displayGuess(guess);
            displayMsg(`Game Over !!!  Random number was ${randomNum}`);
            checkGuess(guess);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess) {
    if(guess===randomNum){
        displayMsg("Hurray! You guessed the correct number.")
        endGame();
    }else if(guess<randomNum){
        displayMsg("Your guess is lower!!!")
    }else if(guess>randomNum){
        displayMsg("Your guess is higher!!!")
    }
}
function displayGuess(guess) {
    userInput.value='';
    previous.innerHTML+=`${guess}  `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}
function displayMsg(msg) {
    loworhigh.innerHTML=`<h2>${msg}</h2>`
}

function endGame(){
    userInput.value="";
    userInput.setAttribute('disabled','')
    submit.disabled=true;
    para.classList.add('button')
    para.innerHTML=`<button id="newGame">Start New Game </button>`;
    result.appendChild(para);
    newGame();
}
function newGame(){
    let newGameButton=document.querySelector('#newGame');
    
    newGameButton.addEventListener('click',(e)=>{
        randomNum=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        previous.innerHTML='';
        displayMsg('')
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled','')
        result.removeChild(para);
        submit.disabled=false;
        playGame=true;
        
    })
}


