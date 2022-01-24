function newPostition(currentStatus, countOfNeighbors) {

    return !currentStatus || countOfNeighbors === 3 ||countOfNeighbors === 2;

}

module.exports = newPostition