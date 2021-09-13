// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
// 13.09.2021

function disemvowel(str) {
    str = str.split('')  // Splits the input string into an array.
    // Checks for vowels, and removes them.
    let disemvoweledStr = str.filter(character => character != 'a' || character != 'e' || character != 'i' || character != 'o' || character != 'u');

    return disemvoweledStr;
}

console.log(disemvowel('dingus dongus'));
