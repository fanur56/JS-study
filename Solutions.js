/*
Task:
    Given a list of integers, determine whether the sum of its elements is odd or even.

    Give your answer as a string matching "odd" or "even".

    If the input array is empty consider it as: [0] (array with a zero).
 */

function oddOrEven(array) {
    let sum = array.reduce((accum, item) => accum + item, 0);
    if (sum % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

//============================================================================
/*
Given an array of integers your solution should find the smallest integer.

    For example:

    Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}

//=============================================================================

