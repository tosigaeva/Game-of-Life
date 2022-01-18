function getCell(active = true) {
    return {
        active
    };
}

function calcStatus(k, n, i) {
    const status = k > 0 && (n - i <= k || Math.random() >= 0.5);
    if (status) {
        k--;
    }
    return {k, status};
}

function multiArray(n, m) {
    let a = [];
    for (let i = 0; i < n; ++i) {
        a[i] = [];
        for (let j = 0; j < m; ++j) {
            a[i][j] = getCell();
        }
    }
    return a;
}

function singleArray(n, k) {
    let a = [];
    for (let i = 0; i < n; ++i) {
        const __ret = calcStatus(k, n, i);
        k = __ret.k;
        a[i] = getCell(__ret.status);
    }
    return a;
}

function init(n, m, k) {
    return m === 0 ? singleArray(n, k) : multiArray(n, m);
}

module.exports = init
