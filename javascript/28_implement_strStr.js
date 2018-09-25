/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) {
        return 0;
    }
    if (needle.length > haystack.length) {
        return -1;
    }
    for (let i = 0; i < haystack.length - (needle.length - 1); i++) {
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;
};

console.log(strStr(a, b));
