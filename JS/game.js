'use strict'

// Global Variables
// ----------------
// gBoard
// A Matrix containing cell objects
// gLevel
// An object by which the board size is set
// gGame
// Holds the current game state

const MINE = '💣'
const FLAG = '🚩' 
const EMPTY = ' '

var gBoard

var gLevel = {
    
    Beginner :{ SIZE: 4, MINES: 2},
    Medium :{ SIZE: 4, MINES: 2},
    'Help Me God' :{ SIZE: 4, MINES: 2},
}

var gGame = {
  isOn: false,       
  revealedCount: 0,   
  markedCount: 0,    
  secsPassed: 0      
};

function onInit() {
//   console.log(' Game initialized!');
//   gGame.isOn = true;
//   gBoard = buildBoard();                    
//   console.table(gBoard);
//   renderBoard(gBoard);
console.log('Game initialized!');
  gGame.isOn = true;
  gBoard = buildBoard();
  setMinesNegsCount(gBoard);
  console.table(gBoard);
  renderBoard(gBoard);
} 

function buildBoard() {
  console.log('Board Size', gLevel['Beginner'].SIZE); 
  var board = [];

  // creating table rows
  for (var i = 0; i < gLevel['Beginner'].SIZE; i++) {
    board[i] = [];

    // creating cells
    for (var j = 0; j < gLevel['Beginner'].SIZE; j++) {
      
      board[i][j] = {
        minesAroundCount: 0,
        isRevealed: false,
        isMine: false,
        isMarked: false
      };
      console.log('Created cell at [' + i + ',' + j + ']:', board[i][j]);
    }
  }

  // Mines Demo 
//   board[1][2]= MINE
//   board[2][3]= MINE
//   console.log(' Mines placed at [1,2] and [2,3]')
    board[1][2].isMine = true;
    board[2][3].isMine = true;


  return board;  
}

function setMinesNegsCount(board) {
  console.log('Mines around each cell');
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      var count = 0;
//   Nighbors loop
      for (let celli = -1; celli <= 1; celli++) {
        for (let cellj = -1; cellj <= 1; cellj++) {
          
          if (celli === 0 && cellj === 0) continue;

          const ni = i + celli;
          const nj = j + cellj;

          
          if (ni < 0 || nj < 0 || ni >= board.length || nj >= board[i].length) continue;
          if (board[ni][nj].isMine) count++;
        }
      }

      board[i][j].minesAroundCount = count;
      console.log(`Cell [${i},${j}] => minesAroundCount = ${count}`);
    }
  }
  console.table(board);
}
function renderBoard(board) {
  console.log('Rendering board...');
  var strHTML = ''
  
  //   for (var i = 0; i < board.length; i++) {
    //       strHTML += '<tr>';
    //       for (var j = 0; j < board[0].length; j++) {
        //           strHTML += '<td class="cell"></td>';
        //         }
        //         strHTML += '</tr>';
        //     }
  for (var i = 0; i < board.length; i++) {
    strHTML += '<tr>';
    for (var j = 0; j < board[i].length; j++) {
      var cell = board[i][j];
      var content = '';

      if (cell.isMine) {
        content = MINE;
      } else if (cell.minesAroundCount > 0) {
        content = cell.minesAroundCount;
      }

      console.log(`Rendering cell [${i},${j}]:`, content || '(empty)');
      strHTML += `<td class="cell">${content}</td>`;
    }
    strHTML += '</tr>';
  }

//   elBoard.innerHTML = strHTML;

    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML;
}
