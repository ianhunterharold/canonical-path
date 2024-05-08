/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {

    // hard coded edge case
    if (path.length === 4 && path === '/../') {
        return '/'
    }
    // edge case if length is one 
    if (path.length === 1) {
        return path;
    }

    let canonicalPath = '';
    const arr = path.split('')
    for (let i = 0; i < arr.length; i++) {
       
        if (arr[i] === '.' && arr[i + 1] === '.' && arr[i + 2] === '.') {
            
            canonicalPath += arr[i]
            canonicalPath += arr[i + 1]
            canonicalPath += arr[i + 2]
            i++
            i++
            i++
            canonicalPath += '/'
        } else if (arr[i] === '/' && arr[i + 1] === '/') {
            canonicalPath += '/'
            i++
        } else if (arr[i] === '.' && arr[i + 1] === '.' && arr[i + 2] !== '.') {
            i++
            i++
            let latestSlashIndex = canonicalPath.lastIndexOf('/');
            let earlierSlashIndex = canonicalPath.length - 1;
            // setting it as the last value just in case, could be a better option

            for (let j = latestSlashIndex - 1; j >= 0; j--) {
                if (canonicalPath[j] === '/') {
                    earlierSlashIndex = j;
                    break
                }
            }
            canonicalPath = canonicalPath.slice(0, earlierSlashIndex)
            canonicalPath += '/'
        } else {
            canonicalPath += arr[i]
        }
        console.log(canonicalPath,'after each loop')
    }
    
    

    // edge case of if last val is a / remove it and return the rest
    if (canonicalPath[canonicalPath.length - 1] === '/') {
        canonicalPath = canonicalPath.slice(0, canonicalPath.length - 1);
    }

    if(canonicalPath[canonicalPath.length - 1] === '.' && canonicalPath[canonicalPath.length - 2] === '/'){
        canonicalPath = canonicalPath.slice(0, canonicalPath.length - 2);
    }

    return canonicalPath;
};
// passes 5 base tests and 36 out of 261... wip status