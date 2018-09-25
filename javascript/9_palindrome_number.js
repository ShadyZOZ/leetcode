/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x > 0 && x % 10 === 0)) {
        return false;
    }
    return x.toString().split('').every((c, i, l) => {
        return c === l[l.length - i - 1];
    });
};
