// let arr = [5,3,6,2,1,8,7,9,4];
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let min = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j;
//             }
//         }
//         let = arr[i];
//         arr[i] = arr[min];
//         arr[min] = let;
//     }
//     return arr;
// }
// console.log(selectionSort(arr));

// let observer = new MutationObserver((a) => console.log(a));
// observer.observe(document.body, { attributes: true });
// document.body.className = "cls";

function addURLParam(url, name, value) {
    url += (url.indexOf("?") == -1 ? "?" : "&");
    url+=encodeURIComponent(name)+"="+encodeURIComponent(value);
    return url;
}
console.log(addURLParam("example.php","aaa","bbb"));
