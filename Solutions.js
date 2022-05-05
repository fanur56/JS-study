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
Task
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

//=========================================================================================

/*
Task
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
 */
function positiveSum(arr) {
    return arr.reduce(function(sum, elem) {
        if (elem < 0) {
            elem = 0;
        }
        return sum + elem;
    }, 0)
}

//=======================================================================================
/*
Task
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */
function even_or_odd(number) {
    return (number % 2 === 0) ? "Even" : "Odd";
}

//====================================================================================
/*
Task:
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
 */
function makeNegative(num) {
    if (num > 0) {
        return num *= -1;
    } else {
        return num;
    }
}

//===================================================================================
/*
Task:
Very simple, given an integer or a floating-point number, find its opposite.
 */
function opposite(number) {
    return -number;
}

//=================================================================================
/*
Task:
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
 */
function removeChar(str){
    return str.substring(1, str.length-1);
}

//==================================================================================
