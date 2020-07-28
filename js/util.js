const range = function(lo, hi) {
    let out = [];

    for (let i = lo; i < hi; ++i) {
        out.push(i);
    }

    return out;
}

const sum = function(xs) {
    let acc = 0;
    for (const i in xs) {
        acc += xs[i];
    }
    return acc;
}

export { range, sum };
