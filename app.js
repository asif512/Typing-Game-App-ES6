// GLOBAL VARIABLES
const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGame = document.getElementById('end-game-container');
const bodyEl = document.querySelector('.body');
const difficultyEl = document.getElementById('difficulty');
const setting = document.querySelector('.setting');

const words = [
    'drag',
    'ball',
    'juice',
    'bed',
    'admit',
    'north',
    'silver',
    'gold',
    'good',
    'diamond',
    'class',
    'habit',
    'success',
    'failur',
    'nice',
    'important',
    'bell',
    'dog',
    'max',
    'show',
    'queen',
    'king'
]

let randomWord;
let score = 0;
let time = 10;
let difficulty = 'easy';



// GET RANDOM WORD
const getRandomWord = () => {
    return  words[Math.floor(Math.random() * words.length)]
}

// ADD WORD TO DOM
const addWordToDom = () => {
     randomWord = getRandomWord();
     word.innerText = randomWord;
}

// UPDATE SCORE
const updateScore = () => {
    score++;
    scoreEl.innerText = score;
}

// END GAME
const gameOver = () => {
    endGame.innerHTML = `
        <h1> Time out </h1>
        <p> your final score is ${score} </p>
        <button onClick = 'location.reload()'> Reload </button>
    `;
    bodyEl.style.display = 'none';
    setting.style.display = 'none';
}

const timeInterval =  setInterval(updateTime, 1000)

// UPDATE TIME
function updateTime(){
    time--;
    timeEl.innerText = time + 's';
    
    if(time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
}

// SELECT DIFFICULTY
function selectDifficulty() {
    if(difficulty === 'hard'){
        time = 6;
    }
    if(difficulty === 'medium'){
        time = 8;
    }
    if(difficulty === 'easy'){
        time = 10;
    }
    return time;
}

// EVENT LISTNER
text.addEventListener('input', (e) => {
    const typedText = e.target.value;
    if(typedText === randomWord) {
        text.value = ''
        addWordToDom();
        updateScore();
        selectDifficulty();       
        updateTime();
    
    }
    
})

difficultyEl.addEventListener('change', (e) => {
    difficulty = e.target.value;
    selectDifficulty();
})


// RENDER WORD TO DOM
addWordToDom();

