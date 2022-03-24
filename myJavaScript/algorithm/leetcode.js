// 回文数
// const x = 121;
// var isPalindrome = function(num) {
//     const ARR = [];
//     let sum = 0;
//     let y = 0;
//     for (let i = 1; num / i >= 1; i *= 10) {
//         let m = ((num - sum) / i) % 10;
//         ARR.push(m);
//         sum += m * i;
//     };
//     for (let j = 0 ; j < ARR.length; j++) {
//         y += ARR[j] * (10 ** (ARR.length - j - 1));
//     }
//     return num == y;
// };

// 反转字符串
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// 计算整数的阶乘
// const x = 5;
// function factorialize(num) {
//     if (num ===0) {
//         return 1;
//     }
//     return num*factorialize(num-1);
//   }

// 找出字符串中的最长单词
// const x = "The quick brown fox jumped over the lazy dog";
// function findLongestWordLength(str) {
//     return str.split(' ').reduce(function(longest, word) {
//         return Math.max(longest, word.length)
//     }, 0);
// }

// 无重复字符的最长子串
const x = 'abcabcbb';
var lengthOfLongestSubstring = function(s) {

};

function F() {
    document.getElementById('demo').innerHTML=isPalindrome(x);
};