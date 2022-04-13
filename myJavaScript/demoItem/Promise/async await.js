// var fetch = require('node-fetch');

const { resolve } = require("path");

// function* gen(){
//   var url = 'https://api.github.com/users/github';
//   var result = yield fetch(url);
//   console.log(result.bio);
// }

// var g = gen();
// var res = g.next();
// console.log(1);

// let p = new Promise((resolve, reject) => setTimeout(resolve, 3000, "3秒过去了……"));
// p.then((x) => console.log(x));

// async function foo() {
//     console.log(1);
// }
// foo();
// console.log(2);

// async function foo() {
//     let p = new Promise((resolve, reject)=> setTimeout(resolve, 3000, "3秒过去了……"));
//     console.log(await p);
// }
// console.log(1);
// foo();

// async function foo() {
//     let p = new Promise((resolve, reject) => setTimeout(resolve, 3000, "3秒过去了……"));
//     console.log(await p);
// }
// foo();

// async function foo() {
//     await 1
// }

// function foo() {
//     return Promise.resolve(1).then(() => { })
// }

// eg1
// async function foo() {
//     const result1 = await new Promise((resolve) => setTimeout(resolve, 1000, '1'));
//     console.log(result1);
//     const result2 = await new Promise((resolve) => setTimeout(resolve, 1000, '2'));
//     console.log(result2);
// }
// foo();

// eg2
// async function timeout(ms) {
//     await new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   }

//   async function asyncPrint(value, ms) {
//     await timeout(ms);
//     console.log(value);
//   }

//   asyncPrint('hello world', 500);

// 错误处理
// async function f() {
//   throw new Error("出错了！")
// }

// f().catch(console.log);

// sleep
// function sleep(delay) {
//   return new Promise(resolve=>setTimeout(resolve, delay));
// }

// async function foo(num) {
//   for (let index = 0; index < num; index++) {
//     console.log(index);
//     await sleep(1000);
//   }
// }

// foo(5);

// async function f() {
//   await Promise.reject("Error!");
//   await Promise.resolve("Hello");
// }
// f();

// async function f() {
//   try {
//     await Promise.reject("Error!");
//   } catch (error) { }
//   return await Promise.resolve("Hello!");
// }
// f().then(console.log);

// async function f() {
//   await Promise.reject("Error!")
//     .catch(e => { });
//   return await Promise.resolve("Hello!");
// }
// f().then(console.log);

// async function f() {
//   await new Promise((resolve, reject)=> {
//     throw new Error("Error!");
//   })
// }

// f()
// .then(console.log)
// .catch(console.log);

// 使用`try...catch`结构，实现多次重复尝试:
// const superagent = require('superagent');
// const NUM_RETRY = 3;

// async function test() {
//   let i;
//   for (i = 0; i < NUM_RETRY; i++) {
//     try {
//       await superagent.get('https://www.bilibili.com/');
//       break;
//     } catch (error) { }
//   }
//   console.log(i);
// }

// test();

// async function randomDelay(id) {
//   const delay = Math.random() * 1000;
//   return new Promise(resolve=> {
//     return setTimeout(()=> {
//       console.log(`During ${delay}ms, ${id} finished.`);
//       resolve();
//     }, delay);
//   });
// }

// async function foo() {
//   const timeStart = Date.now();
//   await randomDelay(0);
//   await randomDelay(1);
//   await randomDelay(2);
//   await randomDelay(3);
//   await randomDelay(4);
//   console.log(`${Date.now() - timeStart}ms elapsed.`);
// }

// foo();

// async function randomDelay(id) {
//   const delay = Math.random() * 1000;
//   return new Promise(resolve=> {
//     return setTimeout(()=> {
//       console.log(`During ${delay}ms, ${id} finished.`);
//       resolve();
//     }, delay);
//   });
// }

// async function foo() {
//   const timeStart = Date.now();
//   // 一次性初始化所有Promise，延迟程序同时并发，各个程序何时结束是随机的
//   const p0 = randomDelay(0);
//   const p1 = randomDelay(1);
//   const p2 = randomDelay(2);
//   const p3 = randomDelay(3);
//   const p4 = randomDelay(4);
//   // await按完成的先后顺序输出消息
//   console.log(`awaited ${await p0}`);
//   console.log(`awaited ${await p1}`);
//   console.log(`awaited ${await p2}`);
//   console.log(`awaited ${await p3}`);
//   console.log(`awaited ${await p4}`);
//   console.log(`${Date.now() - timeStart}ms elapsed.`);
// }

// foo();

// eventloop、宏任务与微任务机制
// async function async1() {
//   console.log("async1 start");
//   await async2(); 
//   // await处理async2()返回的Promise时，
//   // 会调用其then接口，生成一个返回undefined的微任务，压入微任务队列末尾
//   console.log("async1 end");
// }

// async function async2() {
//   console.log("async2");
// }

// console.log("script start");

// setTimeout(() => {
//   console.log("setTimeout")
// }, 0);

// async1();

// new Promise(resolve => {
//   console.log("Promise1");
//   resolve();
// }).then(() => {
//   console.log("Promise2");
// })

// console.log("script end");


// eventloop、宏任务与微任务机制2
// 解释 https://segmentfault.com/a/1190000011198232
// 练习 https://blog.csdn.net/qq_36667170/article/details/105126891
// async function async1() {
//   console.log('1')
//   const data = await async2()
//   console.log('5')
// }

// async function async2() {
//   return Promise.resolve().then(()=> console.log('2'))  
    // return Promise.resolve()背后机制涉及V8源码，目前难理解
    // 详见https://www.zhihu.com/question/453677175
// }

// async1()

// new Promise(function (resolve) {
//   resolve()
// }).then(function () {
//   console.log('3')
// }).then(function () {
//   console.log('4')
// }).then(function () {
//   console.log('6')
// })
// 打印结果： 1 2 3 4 5 6

// async function async1() {
//   console.log('1')
//   const data = await Promise.resolve()
//       .then(data => {
//         console.log('2')
//       })
//   console.log('5')
// }

// async1()

// Promise.resolve()
// .then(function () {
//   console.log('3')
// }).then(function () {
//   console.log('4')
// }).then(function () {
//   console.log('6')
// })
// // 123546

// 练习1
// console.log('script start')
// async function async1() {
//   await async2()
//   console.log('async1 ')
//   await async3()
//   console.log('async1 end')
// }
// async function async3() {
//   console.log('async3')
// }
// function async2() {
//   console.log('async2')
// }
// setTimeout(function () {
//   console.log('setTimeout')
// }, 0)
// new Promise(resolve => {
//   console.log('Promise')
//   resolve()
// })
//   .then(function () {
//     console.log('promise1')
//   })
//   .then(function () {
//     console.log('promise2')
//   })
//   .then(function () {
//     console.log('promise3')
//   })
// async1()
// console.log('script end')

// 练习2
// async function async1() {
//   console.log('async1.1');
//   await async2();
//   console.log('async1.2');
// }
// async function async2() {
//   console.log('async2.1');
//   await new Promise(function (resolve, reject) {
//     console.log('promise1.1');
//     resolve();
//   }).then(() => {
//     console.log('promise1.2');
//   });
//   setTimeout(() => {
//     console.log('settimeout1');
//   });
//   console.log('async2.2');
// }
// new Promise(function (resolve, reject) {
//   console.log('promise2.1');
//   resolve();
//   console.log('promise2.2');
// }).then(() => {
//   console.log('promise2.3');
//   setTimeout(() => {
//     console.log('settimeout2');
//     new Promise(function (resolve, reject) {
//       resolve();
//       console.log('promise3.1');
//     }).then(function () {
//       console.log('promise3.2');
//     });
//   });
// });
// console.log('script');
// async1();
