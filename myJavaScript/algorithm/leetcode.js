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
// let result = []
//        let path = []
//        var combine = function(n, k) {
//         result = []
//         backtraking(n,k,1)
//         return result
//        };
//            const backtraking = (n, k,startindex) =>{
//            if (path.length === k){     //backtracking也是递归，首先应该确定递归的终止条件
//                result.push([...path])   //复制是为了避免“引用传递”？
//                return
//            }
//            for(let i = startindex; i<=n; i++){
//                path.push(i)
//                backtraking(n,k,i+1)                    /* backtracking（递归函数）通过不断调用自己一直往深处遍历，总会遇到叶子节点，遇到了叶子节点就要返回。
//                                                              backtracking的下面部分就是回溯的操作了，撤销本次处理的结果。 */
//                path.pop()

//            }
//         }

// 229. 求众数II
// 给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
const arr = [3,2,3];
// const arr = [1, 1, 1, 3, 3, 2, 2, 2];
// a. 哈希统计
// let majorityElement = function (nums) {
//     const count = new Map();
//     for (i = 0; i < nums.length; i++) {
//         if (count.has(nums[i])) {
//             count.set(nums[i], count.get(nums[i]) + 1);
//         } else {
//             count.set(nums[i], 1);
//         }
//     }
//     const result = [];
//     count.forEach((value, key) => {
//         if (value > nums.length / 3) {
//             result.push(key);
//         }
//     });
//     return result;
// }

// b. 摩尔投票法
var majorityElement = function (nums) {
    let element1 = 0;
    let element2 = 0;
    let vote1 = 0;
    let vote2 = 0;

    for (const num of nums) {
        if (vote1 > 0 && num === element1) {        // 加票
            vote1++;
        } else if (vote2 > 0 && num === element2) { // 加票
            vote2++;
        } else if (vote1 <= 0) {    // 换候选项、加票
            element1 = num;
            vote1++;
        } else if (vote2 <= 0) {    // 换候选项、加票
            element2 = num;
            vote2++;
        } else if (num !== element1 && num !== element2) {  // 抵消
            vote1--;
            vote2--;
        }
    }

    let count1 = 0;
    let count2 = 0;
    nums.forEach(element => {
        if (vote1 > 0 && element === element1) {    // 统计候选项1的个数
            count1++;
        }
        if (vote2 > 0 && element === element2) {    // 统计候选项1的个数
            count2++;
        }
    });

    const result = [];
    if (vote1 > 0 && count1 > nums.length / 3) { result.push(element1) }; // 判断是否大于n/3
    if (vote2 > 0 && count2 > nums.length / 3) { result.push(element2) };

    return result;
}

function F() {
    document.getElementById('demo').innerHTML = majorityElement(arr);
};