const newStatus = require('./newStatus');

function generateBoard(board) {
    let newBoard = [];

    for (let i = 0; i < board.length; i++) {
        newBoard[i] = [];
        let verticalShift = getCellIndexes(board, i);

        for (let j = 0; j < board[i].length; j++) {
            let horizontalShift = getCellIndexes(board[i], j);
            let neighbors = getNeighbors(board, verticalShift, horizontalShift);
            let numberOfLivingNeighbors = Object.values(neighbors).filter(item => item === true).length;

            newBoard[i][j] = newStatus(board[i][j], numberOfLivingNeighbors);
        }
    }

    return newBoard;
}

function getCellIndexes(board, currentIndex) {
    let prevIndex = currentIndex - 1;
    let nextIndex = currentIndex + 1;

    if (currentIndex === 0) {
        prevIndex = board.length - 1;
    }

    if (currentIndex === board.length - 1) {
        nextIndex = 0;
    }

    return {
        prevIndex,
        currentIndex,
        nextIndex
    };
}

function getNeighbors(board, verticalIndexes, horizontalIndexes) {
    return {
        neighborTop: board[verticalIndexes.prevIndex][horizontalIndexes.currentIndex],
        neighborTopRigth: board[verticalIndexes.prevIndex][horizontalIndexes.nextIndex],
        neighborRigth: board[verticalIndexes.currentIndex][horizontalIndexes.nextIndex],
        neighborBottomRigth: board[verticalIndexes.nextIndex][horizontalIndexes.nextIndex],
        neighborBottom: board[verticalIndexes.nextIndex][horizontalIndexes.currentIndex],
        neighborBottomLeft: board[verticalIndexes.nextIndex][horizontalIndexes.prevIndex],
        neighborLeft: board[verticalIndexes.currentIndex][horizontalIndexes.prevIndex],
        neighborTopLeft: board[verticalIndexes.prevIndex][horizontalIndexes.prevIndex]
    }
}

module.exports = generateBoard
