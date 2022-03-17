// 使用递归来创建一个数字序列
function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    } else {
        const arr = rangeOfNumbers(startNum, endNum - 1);
        arr.push(endNum);
        return arr;
    }
};
console.log(rangeOfNumbers(6, 9));