const newStatus = require('./newStatus');

function generateBoard(currentBoard) {
    let newBoard = [];
    let wigthBoard = currentBoard.length;

    for (let i = 0; i < wigthBoard; i++) {
        newBoard[i] = [];
        let lengthBoard = currentBoard[i].length;

        for (let j = 0; j < lengthBoard; j++) {
            let neighbors = 0;

            if (currentBoard[fm(i, wigthBoard) - 1][j] === true) neighbors++; //check top
            if (currentBoard[i][j + 1 === lengthBoard ? 0 : j + 1] === true) neighbors++; //check right
            if (currentBoard[fp(i, wigthBoard) + 1][j] === true) neighbors++; //check bottom
            if (currentBoard[i][fm(j, lengthBoard) - 1] === true) neighbors++; //check left
            //add a diagonal check
            if (currentBoard[fm(i, wigthBoard) - 1][fp(j, lengthBoard) + 1] === true) neighbors++; //check top-right
            if (currentBoard[fp(i, wigthBoard) + 1][fp(j, lengthBoard) + 1] === true) neighbors++; //check bottom-right
            if (currentBoard[fp(i, wigthBoard) + 1][fm(j, lengthBoard) - 1] === true) neighbors++; //check bottom-left
            if (currentBoard[fm(i, wigthBoard) - 1][fm(j, lengthBoard) - 1] === true) neighbors++; //check top-left

            newBoard[i][j] = newStatus(currentBoard[i][j], neighbors);
        }
    }

    return newBoard;
}

function fm(i, wigthBoard) {
     if (i === 0) return wigthBoard;

     return i;
}

function fp(i, wigthBoard) {
    if (i === wigthBoard - 1) return -1;

    return i;
}

module.exports = generateBoard
