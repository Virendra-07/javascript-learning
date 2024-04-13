let randomNumber = parseInt(Math.random()*100+1);
console.log(randomNumber);


const userInput = document.querySelector(".guessField");
const submit = document.querySelector("#subt");
const previousGuesses = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector("resultParas");

const p = document.createElement('p');

let prevGuess = []; // Es array me guess kiya hua value update karenge
let numberOfGuesses = 1; 

let playGame = true;

if(playGame){
     submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
     });
}
function validateGuess(guess){ 
    //yeha pe value cheack karenge ki ye shi hai ya nhi ya value Number hai ya nhi 
    if(isNaN(guess)){
        alert(`Please enter a valid number`);
    }else if(guess < 1){
        alert(`Please enter a valid number which is greater then 1`);
    }
    else if(guess > 100){
        alert(`Please enter a valid number which is less then 100`);
    }
    else{
        prevGuess.push(guess);
        // if guesses is the 10th attempt then 
        if(numberOfGuesses === 11){
            displayGuess(guess);
            displayMassage(`Game Over : Random Number is ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
        
    }

}

function checkGuess(guess){
    // ye check karega ki randon number or guess number equel hai ya nhi
    if(guess === randomNumber){
        alert(`Your guess is right`);
        endGame();
    }else if(guess < randomNumber){
        alert(`your guesses is TOOOO Low`);
    }else if(guess > randomNumber){
        alert(`your guesses is TOOOO High`);
    } 

}

function displayGuess(guess){
    // ye privious guess value ko clean jkarega fir 
    // ye aapka guess ka aaray hai usko bhi update karega
    // ye remaning attempt ko bhi update karega
    userInput.value = '';
    previousGuesses.innerHTML += `${guess} `;
    numberOfGuesses++;
    remaining.innerHTML = `${11 - numberOfGuesses}`;
}
function displayMassage(message){
    // esme jo low Or high ka message pass karenge
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    // Game over hone ka update dega
    userInput.value = '';
    userInput.setAttribute('disables', '')
    p.classList.add('button');
    p.innerText = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    // again ye fir ne new game start karega
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('clicl', function(e){
        randomNumber = parseInt(Math.random()*100+1);
    prevGuess = [];
    previousGuesses.innerHTML = '';
    remaining.innerHTML = `${11- numberOfGuesses}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
    });
    
}