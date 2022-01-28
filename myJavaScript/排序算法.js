var arr = [6, 2, 5, 3, 7, 9, 1, 4, 8];
var len = arr.length;

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

// 4. 希尔排序

// 5. 归并排序

// 6. 快速排序

// 7. 堆排序

// 8. 计算排序

// 9. 桶排序

// 10. 基数排序
