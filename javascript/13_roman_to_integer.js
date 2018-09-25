/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const valueMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let lastNum = 0;
    let num = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        const n = valueMap[s[i]];
        if (n >= lastNum) {
            num += n;
        } else {
            num -= n;
        }
        lastNum = n;
    }
    return num;
};
