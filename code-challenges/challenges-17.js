'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion
// 
// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
//
// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//

const recursionPattern = (int1, int2) => {
let arr =[];
arr.push(int1);
let changed = int1
for (let i=0;changed>0;i++){
changed -= int2
arr.push(changed)
}
for (let i=0;changed<int1;i++){
    changed += int2
    arr.push(changed)
    }
return arr
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
// 

const filterLinks = (str) => {
let wwwsite = str.indexOf("www")
let comsite = str.indexOf("com")
let orgsite = str.indexOf("org")
let netsite = str.indexOf("net")
let answer
if (comsite > 0){
    answer = str.slice(wwwsite,comsite+3)}
if (netsite > 0){
    answer = str.slice(wwwsite,netsite+3)}
if (orgsite > 0){
    answer = str.slice(wwwsite,orgsite+3)}
return answer
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// 
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//

const isPalindrome = (str) => {
let lowerCase = str.toLowerCase()
let splitbyspace = lowerCase.split(" ")
let removespace = splitbyspace.join('')
let splitbycomma = removespace.split(',')
let removecomma = splitbycomma.join('')
let splitby = removecomma.split(':')
let removed = splitby.join("")
let remove = removed.split("")
for (let i=0;i<remove.length/2;i++){
    if (remove[i] !== remove[remove.length-i-1]){
        return false
    }
}
return true
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern
//
//  EX: 
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false
//
//  here if the pattern had three different things so the array should had 3 different things to be true
//

const samePattern = (str, arr) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };