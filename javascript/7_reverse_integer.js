/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let xChar = x.toString().split('');
    if (xChar[0] === '-') {
        xChar = xChar.slice(1);
        xChar.push('-');
    }
    const res = parseInt(xChar.reverse().join(''));
    const int32bit = Math.pow(2, 31);
    if (res > int32bit - 1 || res < -int32bit) {
        return 0;
    }
    return res;
}
