const gameData = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
	{
		name: '',
		symbol: 'X'
	},
	{
		name: '',
		symbol: 'O'
	}
];

const playerOverlay = document.getElementById('config-overlay');
const backDropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutput = document.getElementById('config-errors');
const gameBoard = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

const editPlayerOneBtn = document.getElementById('player-edit-1');
const editPlayerTwoBtn = document.getElementById('player-edit-2');
const cancelCongBtn = document.getElementById('cancel-config');
const startGameBtn = document.getElementById('start-game');
editPlayerOneBtn.addEventListener('click', openPlayerConfig);
editPlayerTwoBtn.addEventListener('click', openPlayerConfig);
// const gameFieldElements = document.querySelectorAll('#game-board');
const gameBoardElement = document.getElementById('game-board');
/*



*/
cancelCongBtn.addEventListener('click', closePlayerConfig);
backDropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

/*
const startGameBtn = document.getElementById('start-game');
const gameBoard = document.getElementById('active-game');
startGameBtn.addEventListener('click', function() {
	gameBoard.style.display = 'block';
});
*/

startGameBtn.addEventListener('click', startNewGame);

// for (const gameFieldElement of gameFieldElements) {
// 	gameFieldElement.addEventListener('click', selectGameField);
// }

gameBoardElement.addEventListener('click', selectGameField);
