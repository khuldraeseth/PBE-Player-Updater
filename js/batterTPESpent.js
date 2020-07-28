import {archs} from "./archs.js";
import {scale} from "./tpeScale.js";
import {range, sum} from "./util.js";


const tpeSpentOn = function(lo, hi) {
    return sum(range(lo, hi).map(x => scale[x]));
}

const tpeSpent = function(before, after) {
    let teps = [];

    for (const i in before) {
        teps.push(tpeSpentOn(before[i], after[i]));
    }

    return teps;
}

const updateBatterTPESpent = function(before, after) {
    return sum(tpeSpent(before, after));
}

export const test = function() {
    alert(updateBatterTPESpent(archs.batting.mrUtility.attrs.min, archs.batting.mrUtility.attrs.max));
}
