const cutoffs = [40, 50, 60, 70, 80, 90, 100];
const costs   = [1,  2,  3,  4,  6,  7,  8  ];

const velos = ["75-80", "80-83", "83-85", "84-86", "85-87", "86-88", "87-89", "88-90", "89-91", "90-92", "91-93", "92-94", "93-95", "94-96", "95-97", "96-98", "97-99", "98-100", "99-101", "100"]

const insertionIndex = function(x, xs) {
    const go = function(x, xs, lo, hi) {
        if (lo === hi) {
            return lo;
        }

        const mid = (lo + hi) >>> 1;
        if (x === xs[mid]) {
            return mid;
        }
        if (x < xs[mid]) {
            return go(x, xs, lo, mid)
        }
        return go(x, xs, mid+1, hi)
    }

    return go(x, xs, 0, xs.length);
}

const scale = [...Array(100).keys()].map((_, x) => costs[insertionIndex(x+1, cutoffs)]);

export { scale, velos };
