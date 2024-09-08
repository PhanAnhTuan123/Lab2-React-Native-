let score = 20;
let secretNumber = Math.floor(Math.random() * 20) + 1; 


const resetGame = () => {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1; 
    

    const messageEl = document.querySelector('.message');
    const numberEl = document.querySelector('.number');
    const scoreEl = document.querySelector('.score');
    const guessInputEl = document.querySelector('.guess');


    messageEl.textContent = 'Start guessing...'; 
    numberEl.textContent = '?'; 
    numberEl.style.width = '15rem'; 
    numberEl.style.backgroundColor = '#222';
    scoreEl.textContent = score; 
    guessInputEl.value = '';
};


