let arr = [5,3,6,2,1,8,7,9,4];
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let = arr[i];
        arr[i] = arr[min];
        arr[min] = let;
    }
    return arr;
}
console.log(selectionSort(arr));