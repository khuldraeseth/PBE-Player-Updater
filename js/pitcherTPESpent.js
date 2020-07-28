import {archs} from "./archs.js";
import {scale, velos} from "./tpeScale.js";
import {range, sum} from "./util.js";


const tpeSpentOn = function(lo, hi) {
    return sum(range(lo, hi).map(x => scale[x]));
}

const tpeSpentOnVelo = function(lo, hi) {
    return 30 * (velos.indexOf(hi) - velos.indexOf(lo));
}

const tpeSpent = function(before, after) {
    let teps = {};

    for (const i in before) {
        if (i === "Velocity") {
            teps[i] = tpeSpentOnVelo(before[i], after[i]);
        } else if (before[i] === 0) {
            teps[i] = 10 + tpeSpentOn(before[i], after[i]);
        } else {
            teps[i] = tpeSpentOn(before[i], after[i]);
        }
    }

    return teps;
}

const updatePitcherTPESpent = function(before, after) {
    console.log(tpeSpent(before, after));
    return sum(tpeSpent(before, after));
}

export const test = function() {
    let newCreate = archs.pitching.flamethrowerRP.attrs.min;
    newCreate["Pitch 4"] = 0;
    newCreate["Pitch 5"] = 0;
    alert(updatePitcherTPESpent(newCreate, archs.pitching.flamethrowerRP.attrs.max));
}
