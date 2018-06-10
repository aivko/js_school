'use strict';

let array = [11, 22, 48, 54],
    wrongArray = [11, 12, 48, 54];

function compareArray(array1, array2) {

    if (!Array.isArray(array1) || ! Array.isArray(array2) || array1.length !== array2.length) {
        return false;
    }

    let _array1 = array1.sort();
    let _array2 = array2.sort();

    for (let i = 0; i < _array1.length; i++) {
        if (_array1[i] !== _array2[i])
            return false;
    }

    return true;

}

console.log(compareArray(array, wrongArray));
console.log(compareArray(array, array));