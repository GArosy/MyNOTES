process.stdin.resume();
process.stdin.setEncoding('utf-8');
let input = '';
process.stdin.on('data', (data) => {
    input += data;
})
process.stdin.on('end', () => {
    let inputArray = input.split('\n');
    // let readline = require('readline');
    let arr = inputArray[0].split('');
    let result = [];

    function swap(p, q) {
        [arr[p], arr[q]] = [arr[q], arr[p]] //ES6解构，交换两个元素
    }

    function dfs(p, q) {
        if (p === q) {
            result.push(arr.join(''));
            return
        }  //如果只剩一个字符，不用交换，将该排列推入res
        for (let i = p; i <= q; i++) { //先自己跟自己交换，下一轮跟索引号+1交换，一直到和最后一个元素交换
            swap(p, i)
            dfs(p + 1, q) //深度遍历
            swap(p, i) //回溯
        }
    }

    dfs(0, arr.length - 1);
    result = Array.from(new Set(result)) //利用Set去重
    return result.length;

    console.log(doFunc(arr[0]));

    console.log(doFunc('ABC'));

    process.exit();
})


