```js
const array = [1, 2, 3, 4, 5];
// 数组求和-reduce-建议用法
function sum(arr) {
    return arr.reduce((x, y) => x+y);
}

sum(array); // 15

// 数组求和-forEach
function sum(arr) {
    let n = 0;
    arr.forEach(x => n += x);	// forEach 无返回值，因此引入n计算累计值
    return n;
}

sum(array); // 15

// 数组求和-map
function sum(arr) {
    let n = 0;
    arr.map(x => n += x);	// map返回新数组，因此引入n计算累计值
    return n;
}

sum(array); //15
```

