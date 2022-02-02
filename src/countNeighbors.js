function countNeighbors(n, m) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
        for (let j = 0; j < m; j++) {
            let neighbors = 0;
            if (arr[fm(i, n) - 1][j] === true) neighbors++; //check top
            if (arr[i][fp(j, m) + 1] === true) neighbors++; //check right
            if (arr[fp(i, n) + 1][j] === true) neighbors++; //check bottom
            if (arr[i][fm(j, m) - 1] === true) neighbors++; //check left
            //add a diagonal check
        }
    }
    //return 8;
}

function fm(i, n) {
     if (i === 0) return n;
     else return i;
}

function fp(i, n) {
    if (i === n - 1) return -1;
    else return i;
}

module.exports = countNeighbors