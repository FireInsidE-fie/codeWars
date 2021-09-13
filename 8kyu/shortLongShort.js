// https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript
// 12.09.2021
// COMPLETED

function solution(a='', b=''){
    let solutionString = '';  // Initializes string.

    if (a.length > b.length) {  // In the case a is longer than b.
        solutionString = `${b}${a}${b}`;
    
    } else if (a.length < b.length) {  // In the case b is longer than a.
        solutionString = `${a}${b}${a}`;

    } else {  // In the case something went wrong for some reason.
        console.log('Error.');
    }
    
    return solutionString;  // Returns the final string.
}
