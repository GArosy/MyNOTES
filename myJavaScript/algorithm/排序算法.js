var arr = [6, 2, 5, 3, 7, 9, 1, 4, 8];
var len = arr.length;

function display() {
    document.getElementById('demo1').innerHTML=bubbleSort();
    document.getElementById('demo2').innerHTML=selectionSort();
    document.getElementById('demo3').innerHTML=insertionSort();
    document.getElementById('demo4').innerHTML=shellSort();
    document.getElementById('demo5').innerHTML=mergeSort(arr);
};

// 1. 冒泡排序
function bubbleSort() {
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort());

// 2. 选择排序
function selectionSort() {
    for (var i = 0; i < len - 1; i++) {
        var min = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}
// console.log(selectionSort());

// 3. 插入排序
// 共执行了15次move
function insertionSort() {
    for (var i = 1; i < len; i++) {
        var j = i - 1;
        var insertion = arr[i]; // 提取出要插入的无序数列的值
        while (j >= 0 && arr[j] > insertion) { // 将前一项的值与插入值对比
            arr[j + 1] = arr[j]; // 将对比项的值向后移动一位
            // console.log("move")
            j--; // 继续对比前一项
        }
        arr[j + 1] = insertion; // 将插入值插至对比项后
    }
    return arr;
}
// console.log(insertionSort());

// 4. 希尔排序
// 插入排序的高效实现，共执行了9次move
function shellSort() {
    var gap = 1;
    while (gap < len / 2) { // 动态定义增量间隔
        gap = gap * 2;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 2)) { // 使用 Math.floor() 对gap的缩小量取整
        console.log(gap);
        for (var i = gap; i < len; i++) { // i为组索引，对每个组逐一进行插入排序
            var j = i - gap;
            var insertion = arr[i];
            while (j >= 0 && arr[j] > insertion) {
                arr[j + gap] = arr[j];
                j -= gap;
                // console.log("move")
            }
            arr[j + gap] = insertion;
        }
    }
    return arr;
}
// console.log(shellSort());


// 5. 归并排序
// “分而治之”，性能不受输入数据的影响，时间复杂度始终为 n*logn
function mergeSort(a) { // 自上而下的递归方法，函数带参数
    // console.log("_______________ slice begin _______________");
    var leng = a.length; // 重新设置数组长度变量
    if (leng < 2) {
        return a;
    }
    var middle = Math.floor(leng / 2),
        left = a.slice(0, middle),
        right = a.slice(middle);
    // console.log("leftArray:" + left + "\n" + "rightArray:" + right + "\n" + "_______________ slice over _______________");
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    // console.log("___ merge begin ___");
    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    // console.log("result:" + result+"\n"+"___ merge over ___");
    return result;
}
// console.log(mergeSort(arr));


// 6. 快速排序

// 7. 堆排序

// 8. 计算排序

// 9. 桶排序

// 10. 基数排序

// LeetCode - 回文数
x = 121;
var isPalindrome = function(x) {
    const ARR = [];
    let sum, y = 0;
    for (let i = 1; x / i >= 1; i *= 10) {
        let m = ((x - sum) / i) % 10;
        ARR.push(m);
        sum += m * i;
    };
    for (let j = 0 ; j < ARR.length; j++) {
        y += ARR[j] * 10 ^ (ARR.length - j - 1);
    }
    if (x == y) {
        return true;
    } else {
        return false;
    }
};

function F() {
    document.getElementById('x').innerHTML=bubbleSort();
};

