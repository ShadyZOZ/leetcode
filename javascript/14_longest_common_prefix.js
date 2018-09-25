/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || !strs.length) {
        return '';
    }
    let minLength = strs[0].length;
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < minLength) {
            minLength = strs[i].length;
        }
    }
    let low = 1;
    let high = minLength;
    while (low <= high) {
        const middle = parseInt((low + high) / 2);
        if (isCommonPrefix(strs, middle)) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }
    return strs[0].slice(0, parseInt((low + high) / 2));
};

function isCommonPrefix(strs, len) {
    const prefix = strs[0].slice(0, len);
    return strs.every(str => str.startsWith(prefix));
}

// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function(strs) {
//     if (!strs || !strs.length) {
//         return '';
//     }
//     const prefix = [];
//     let i = 0;
//     const firstString = strs[0];
//     if (!firstString) {
//         return '';
//     }
//     const restStrs = strs.slice(1);
//     if (!restStrs.length) {
//         return firstString;
//     }
//     while (true) {
//         if (i === firstString.length ||!restStrs.every(str => (str && str[i] === firstString[i]))) {
//             break;
//         }
//         prefix.push(firstString[i]);
//         i++;
//     }
//     return prefix.join('');
// };
