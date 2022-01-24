function newPostition(currentStatus, countOfNeighbors) {

    if (!currentStatus && countOfNeighbors === 3) {
        return true;
    }

    if (!currentStatus && countOfNeighbors !== 3) {
        return false;
    }

    return countOfNeighbors === 3 || countOfNeighbors === 2

}

module.exports = newPostition