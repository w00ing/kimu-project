"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandom = void 0;
function getRandom(arr, n) {
    var result = new Array(n), len = arr.length, taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
exports.getRandom = getRandom;
//# sourceMappingURL=helperFunctions.js.map