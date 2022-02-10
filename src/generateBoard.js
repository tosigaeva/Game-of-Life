const newStatus = require('./newStatus');

function generateBoard(currentBoard) {
    let newBoard = [];

    for (let i = 0; i < currentBoard.length; i++) {
        newBoard[i] = [];

        for (let j = 0; j < currentBoard[i].length; j++) {
            let neighbors = 0;

            if(isNeighborFromTopFound(currentBoard, i, j)) {neighbors++;}
            if(isNeighborFromTopRigthFound(currentBoard, i, j)) {neighbors++;}
            if(isNeighborFromRigthFound(currentBoard, i, j)) {neighbors++;}
            if(isNeighborFromBottomRigthFound(currentBoard, i, j)) {neighbors++;}
            if(isNeighborFromBottomFound(currentBoard, i, j)) {neighbors++;}
            if(isNeighborFromBottomLeftFound(currentBoard, i, j)) {neighbors++;}
            if(isNeighborFromLeftFound(currentBoard, i, j)) {neighbors++;}
            if(isNeighborFromTopLeftFound(currentBoard, i, j)) {neighbors++;}

            newBoard[i][j] = newStatus(currentBoard[i][j], neighbors);
        }
    }

    return newBoard;
}

function isNeighborFromTopFound(board, rowIndex, columnIndex) {
    rowIndex = rowIndex === 0 ? board.length -1 : rowIndex - 1;

    return board[rowIndex][columnIndex];
}

function isNeighborFromTopRigthFound(board, rowIndex, columnIndex) {
    rowIndex = rowIndex === 0 ? board.length -1 : rowIndex - 1;
    columnIndex = columnIndex === board[rowIndex].length - 1 ? 0 : columnIndex + 1;

    return board[rowIndex][columnIndex];
}

function isNeighborFromRigthFound(board, rowIndex, columnIndex) {
    columnIndex = columnIndex === board[rowIndex].length - 1 ? 0 : columnIndex + 1;

    return board[rowIndex][columnIndex];
}

function isNeighborFromBottomRigthFound(board, rowIndex, columnIndex) {
    rowIndex = rowIndex === board.length - 1 ? 0 : rowIndex + 1;
    columnIndex = columnIndex === board[rowIndex].length - 1 ? 0 : columnIndex + 1;

    return board[rowIndex][columnIndex];
}

function isNeighborFromBottomFound(board, rowIndex, columnIndex) {
    rowIndex = rowIndex === board.length -1 ? 0 : rowIndex + 1;

    return board[rowIndex][columnIndex];
}

function isNeighborFromBottomLeftFound(board, rowIndex, columnIndex) {
    rowIndex = rowIndex === board.length -1 ? 0 : rowIndex + 1;
    columnIndex = columnIndex === 0 ? board[rowIndex].length - 1 : columnIndex - 1;

    return board[rowIndex][columnIndex];
}

function isNeighborFromLeftFound(board, rowIndex, columnIndex) {
    columnIndex = columnIndex === 0 ? board[rowIndex].length - 1 : columnIndex - 1;

    return board[rowIndex][columnIndex];
}

function isNeighborFromTopLeftFound(board, rowIndex, columnIndex) {
    rowIndex = rowIndex === 0 ? board.length -1 : rowIndex - 1;
    columnIndex = columnIndex === 0 ? board[rowIndex].length - 1 : columnIndex - 1;

    return board[rowIndex][columnIndex];
}

module.exports = generateBoard
