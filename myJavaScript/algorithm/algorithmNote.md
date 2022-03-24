# 算法学习笔记

### 1. 反转字符串

反转传入函数的字符串，返回结果应为字符串。

```js
// 通常解法
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// 连续使用'.'一行解决
function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString("hello");
```

### 2. [回文数](https://leetcode-cn.com/problems/palindrome-number/)

给你一个整数 `x` ，如果 `x` 是一个回文整数，返回 `true` ；否则，返回 `false` 。

```js
// 反转一半数字
var isPalindrome = function(num) {
    if (num < 0 || (num != 0 && num % 10 == 0)) {
        return false;
    }

    let revNum = 0;

    while (num > revNum) {
        revNum = revNum * 10 + num % 10;
        num = Math.floor(num / 10);
    }

    return num == revNum || (num == Math.floor(revNum / 10));
};

// 连续使用'.'一行解决
var isPalindrome = function(x) {
    return Number(x.toString().split('').reverse().join('')) === x;
};
```

### 3. 计算整数的阶乘

```js
// 循环法
function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}

// 递归法
function factorialize(num) {
    if (num ===0) {
        return 1;
    }
    return num*factorialize(num-1);
  }

factorialize(5); //120
```

### 4.  找出字符串中的最长单词

返回给出的句子中，最长单词的长度（ 返回值应是一个数字 ）。

```js
// 方法一
function findLongestWordLength(str) {
  const arr = str.split(' ');	// 切分出单词成数组
  let lengthArr = [];
  for (let i = 0; i<arr.length; i++) {
    lengthArr.push(arr[i].length);	// 存放单词长度的数组
  }
  return Math.max(...lengthArr);	// .max 加展开操作符，返回最大值
}

// reduce() 方法
function findLongestWordLength(str) {
    return str.split(' ').reduce(function(longest, word) {
        return Math.max(longest, word.length)
    }, 0);
}


console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
```

### 5. [无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

 给定一个字符串 `s` ，请你找出其中不含有重复字符的 **最长子串** 的长度。 





> [递归与迭代的区别 - 简书 (jianshu.com)](https://www.jianshu.com/p/32bcc45efd32)	
>
> 迭代可以转换为递归，但递归不一定能转换为迭代。