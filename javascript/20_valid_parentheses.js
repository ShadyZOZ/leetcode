/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }
    const pairMap = {
        '[': ']',
        '(': ')',
        '{': '}',
    };
    const closeTags = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (pairMap[c]) {
            closeTags.push(pairMap[c]);
        } else if (c !== closeTags.pop()) {
            return false;
        }
    }
    return closeTags.length === 0;
};
