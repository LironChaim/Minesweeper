'use strict'

// Global Variables
// ----------------
// gBoard
// A Matrix containing cell objects
// gLevel
// An object by which the board size is set
// gGame
// Holds the current game state

// Constants
// ---------
const MINE = '⊗';	
const FLAG = '♦' 
const EMPTY = ' '


// The Functionalty

 function onInit () {
    var gBoard = buildBoard()
    renderBoard(gBoard)
 }


 function buildBoard () {

    const size = 4
    const board = []

    for (let i = 0; i < size; i++) {
        board.push([])

        for (let j = 0; j < size; j++) {
            board[i][j]= EMPTY
            
        }
        
    }

    // console.log (board)
    // console.table (board)

    board[1][1] = MINE
    board[3][2] = MINE

     console.log (board)
    console.table (board)

    
    return board

 }

 function renderBoard(board) {

    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML+= '<tr>'

        for (var j = 0; j < board[0].length; j++){

            const cell = board[i][j]
            const className = `cell cell-${i}-${j}`

            strHTML += `<td class="${className}">${cell}</td>`
        }

        strHTML+= '</tr>'
    }

    console.log('strHTML',strHTML)
    

    const elBoard  = document.querySelector('.board')
    elBoard.innerHTML = strHTML

    // var strHTML = '<table>'
    //     '<tbody>'

    // for (let i = 0; i < board.length; i++) {
    //     strHTML += '<tr>'
    //     for (let j = 0; j < board.length; j++) {
    //         const cell = board[i][j]
    //         const className = `cell cell-${i}-${j}`
            
    //         strHTML += `<td class="${className}">${cell}</td>`
    //     }
    //     strHTML += '</tr>'
        
    // }
    // strHTML +=
    //  '</tbody>'
    // '</table>'
    
    // const elContainer = document.querySelector('.board')
    // elContainer.innerHTML = strHTML
    
 }

 function renderCell (loction, value) {
    const elCell = document.querySelector(`.cell -${loction.i}-${loction.j}`)
    elCell.innerHTML = value
 }
