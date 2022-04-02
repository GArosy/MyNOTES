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
// const x = 'abcabcbb';
// var lengthOfLongestSubstring = function(s) {

// };

// 77.组合
let result = []
       let path = []
       var combine = function(n, k) {
        result = []
        backtraking(n,k,1)
        return result
       };
           const backtraking = (n, k,startindex) =>{
           if (path.length === k){     //backtracking也是递归，首先应该确定递归的终止条件
               result.push([...path])   //复制是为了避免“引用传递”？
               return
           }
           for(let i = startindex; i<=n; i++){
               path.push(i)
               backtraking(n,k,i+1)                    /* backtracking（递归函数）通过不断调用自己一直往深处遍历，总会遇到叶子节点，遇到了叶子节点就要返回。
                                                             backtracking的下面部分就是回溯的操作了，撤销本次处理的结果。 */
               path.pop()

           }
        }
    

function F() {
    document.getElementById('demo').innerHTML=combine(4, 2);
};