/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const stack = [];
    const tokens = path.split('/');
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '..') {
            // moving up one directory level, remove the previous element
            // ensure the previous path is in the stack 
            if (stack.length > 0) {
                stack.pop();
            }
        } else if (tokens[i] && tokens[i] !== '.') {
            // no solution keeps current directory . for reference 
            stack.push(tokens[i])
        }
    }
    let final = "/";
    if (stack.length > 0) {
       final += stack.join('/');
    }
    return final;
};
// on the board - beats 33% of other javascript submissions 
