function countOfNeighborsFromTopLine(board, currentPosition) {
    return getNeighbors(
        currentPosition.i === 0 ? board[board.length - 1] : board[currentPosition.i - 1],
        currentPosition.j
    ).reduce((a, b) => b === true ? ++a : a, 0)
}

function countOfNeighborsFromBottomLine(board, currentPosition) {
    return getNeighbors(
        currentPosition.i === board.length - 1 ? board[0] : board[currentPosition.i + 1],
        currentPosition.j
    ).reduce((a, b) => b === true ? ++a : a, 0)
}

function countOfNeighborsFromLeft(board, currentPosition) {
    if (currentPosition.j === 0) {
        return board[currentPosition.i][board[currentPosition.i].length - 1] === true ? 1 : 0;
    }

    return board[currentPosition.i][currentPosition.j - 1] === true ? 1 : 0;
}

function countOfNeighborsFromRight(board, currentPosition) {
    if (currentPosition.j === board[currentPosition.i].length - 1) {
        return board[currentPosition.i][0] === true ? 1 : 0;
    }

    return board[currentPosition.i][currentPosition.j + 1] === true ? 1 : 0;
}

function getNeighbors(currentLine, currentPosition) {
    if (currentPosition === 0) {
        return [currentLine[currentPosition], ...currentLine.slice(-2)];
    }

    if (currentPosition === currentLine.length - 1) {
        return [currentLine[currentPosition.j], ...currentLine.slice(0, 2)];
    }

    return currentLine.slice(currentPosition - 1, currentPosition + 2);
}

function countOfNeighbors(board, currentPosition) {
    return countOfNeighborsFromTopLine(board, currentPosition) +
        countOfNeighborsFromLeft(board, currentPosition) +
        countOfNeighborsFromRight(board, currentPosition) +
        countOfNeighborsFromBottomLine(board, currentPosition)
        ;
}


module.exports = countOfNeighbors
