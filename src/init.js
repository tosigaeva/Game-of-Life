let amountOfActive = 0;

function getCell(active = true) {
    return {
        active
    };
}

function calcStatus(amountToSetActive, allItems, currentItem) {
    let delta = amountToSetActive - amountOfActive;
    const status = delta > 0 && (allItems - currentItem <= delta || Math.random() >= 0.5);
    amountOfActive = status ? amountOfActive + 1 : amountOfActive;

    return status;
}

function multiArray(n, m, k) {
    let a = [];
    for (let i = 0; i < n; ++i) {
        a[i] = [];
        for (let j = 0; j < m; ++j) {
            a[i][j] = getCell(calcStatus(k, n * m, i * m + j))
        }
    }

    return a;
}

function singleArray(n, k) {
    let a = [];
    for (let i = 0; i < n; ++i) {
        a[i] = getCell(calcStatus(k, n, i));
    }
    return a;
}

function init(n, m, k = 0) {
    amountOfActive = 0;
    return m === 0 ? singleArray(n, k) : multiArray(n, m, k);
}

module.exports = init
