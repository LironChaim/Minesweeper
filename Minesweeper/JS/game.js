'use strict'

const MINE = '&#8855;'	
const FLAG = '&#9830;'

const gGame = {
    score: 0,
    isOn: false

}

// The mine field
var gBoard = { 
    minesAroundCount: 4, 
    isRevealed: false, 
    isMine: false, 
    isMarked: false 
}

function onInit() {
    console.log('1,2 is it on ?')

    gBoard = buildBoard()
    
    
    
    renderBoard(gBoard)
   
}

function buildBoard(){
    const board = craeteMat(4,4)
    console.log('board', board)

    console.table(board);
    return board
    
}