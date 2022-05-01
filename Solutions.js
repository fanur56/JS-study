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
Task:
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
/*
Task:
This code does not execute properly. Try to figure out why.
function multiply(a, b){
  a * b
}
 */
function multiply(a, b){
    return(+a * +b);
}

//================================================================================

/*
Task:
We need a function that can transform a number into a string.
What ways of achieving this do you know?
 */
function numberToString(num) {
    return String(num);
}

//==================================================================================

/*
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
Division by zero should return NaN.
 */
function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
    if (n > m) {
        return (n % m);
    } else {
        return (m % n);
    }
}