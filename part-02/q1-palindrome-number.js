// Q1. PALINDROME NUMBER
/* 
    An integer is a palindrome when it reads the same forward and backward.
    eg: 
        input: x = 121 => output: true
        input: y = 10 => output: fale
*/

const input = 121;

const isPalindrome = input => {
  // checking the input < 10 is optimizing our code.
  return input < 10
    ? false
    : input === Number(input.toString().split("").reverse().join(""));
};
const output = isPalindrome(input);
console.log(output);

/* 
  123 => "123"
  "123" => ["1", "2", "3"]
  ["1", "2", "3"] => ["3", "2", "1"]
  ["3", "2", "1"] => "321"
  "321" => 321
*/
