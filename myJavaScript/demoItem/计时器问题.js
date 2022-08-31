/**
 * 计时器问题
 */
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i);
// }
/**
 * 过一秒后同时输出5个5
 * 同时设定了5个setTimeout宏任务
 * 它们在开始计时之后就立即执行下一个宏任务
 * 这意味着它们几乎同时开始计时，且同时结束
 */

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }
/**
 * 改进计时器后每秒输出一个5
 * 因为每个迭代共享同一个作用域中的i
 */

/**
 * 1. IIFE方法  --------------------------------------------------
 */
// for (var i = 0; i < 5; i++) {
//   (function () {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   })();
// }
/**
 * 使用IIFE
 * 输出结果同上
 * 虽然IIFE为每次迭代创建了函数，每个函数自动拥有了独立的词法作用域
 * 但它们访问的仍是上级作用域中的同一个i
 */

// for (var i = 0; i < 5; i++) {
//   (function (j) {
//     setTimeout(() => {
//       console.log(j);
//     }, j * 1000);
//   })(i);
// }
/**
 * 使用带参数的IIFE
 * 输出结果0，1，2，3，4
 * IIFE不仅创建了独立词法作用域
 * 每个作用域中还保存了独立的变量储存i值，互不干扰
 */

/**
 * 2. setTimeout方法  --------------------------------------------------
 */
// for (var i = 0; i < 5; i++) {
//   setTimeout((j) => {
//     console.log(j);
//   }, i * 1000, i);
// }
/**
 * 使用setTimeOut方法的第三参数
 * 这个参数拥有独立作用域，会在定时器结束时传给函数
 */

/**
 * 3. Promise方法  --------------------------------------------------
 */
// const tasks = []; // 存放异步操作的Promise
// const output = (i) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(i);
//       resolve();
//     }, i * 1000);
//   });

// for (var i = 0; i < 5; i++) {
//   tasks.push(output(i));
// }

/**
 * 4. async await方法  --------------------------------------------------
 */
const sleep = timeout => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, timeout);
});
(async (i) => {
  for (var i = 0; i < 5; i++) {
    console.log(i);
    await sleep(1000)
  }
})();
