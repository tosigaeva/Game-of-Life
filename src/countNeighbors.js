const nextPosition = require('./newStatus');

function countNeighbors(arr) {
    let newArray = [];
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        newArray[i] = [];
        let m = arr[i].length;

        for (let j = 0; j < m; j++) {
            let neighbors = 0;

            if (arr[fm(i, n) - 1][j] === true) neighbors++; //check top
            if (arr[i][j + 1 === m ? 0 : j + 1] === true) neighbors++; //check right
            if (arr[fp(i, n) + 1][j] === true) neighbors++; //check bottom
            if (arr[i][fm(j, m) - 1] === true) neighbors++; //check left
            //add a diagonal check
            if (arr[fm(i, n) - 1][fp(j, m) + 1] === true) neighbors++; //check top-right
            if (arr[fp(i, n) + 1][fp(j, m) + 1] === true) neighbors++; //check bottom-right
            if (arr[fp(i, n) + 1][fm(j, m) - 1] === true) neighbors++; //check bottom-left
            if (arr[fm(i, n) - 1][fm(j, m) - 1] === true) neighbors++; //check top-left

            newArray[i][j] = nextPosition(arr[i][j], neighbors);
        }
    }

    return newArray;
    //draw a new array: oldArray = newArray;
}

function fm(i, n) {
     if (i === 0) return n;

     return i;
}

function fp(i, n) {
    if (i === n - 1) return -1;

    return i;
}

module.exports = countNeighbors
