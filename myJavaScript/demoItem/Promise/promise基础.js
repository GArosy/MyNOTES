// let p = new Promise(()=>{});
// // console.log(p); // Promise {[[PromiseState]]: 'pending',...} 期约是有状态的对象

// const p1 = new Promise((resolve, reject)=>resolve());
// // console.log(p1);   // [[PromiseState]]: 'fulfilled' 
// const p2 = new Promise((resolve, reject)=>reject());
// // console.log(p2);   // [[PromiseState]]: 'rejected' 

// const p3 = new Promise((resolve, reject)=>resolve());
// const p4 = Promise.resolve()
// console.log(p3,p4);

// console.log(Promise.resolve(3).value);
// setTimeout(() => {
//     console.log(Promise.resolve(3))
// }, 0);

// function timeout(delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, delay, 'done');
//     });
// }
// timeout(100).then((value) => {
//     console.log(value);
// });

// let promise = new Promise(function(resolve, reject) {
//     console.log('Promise');
//     resolve();
//   });

//   promise.then(function() {
//     console.log('resolved.');
//   });

//   console.log('Hi!');

//   // Promise
//   // Hi!
//   // resolved

// 同步任务
// let p = new Promise((resolve, reject) => {
//     console.log("first");
//     resolve();
// });

// p.then(() => {
//     console.log('second');
//     setTimeout(reject(), 5000);
//     // reject();
// })
// .catch(() => console.log("third"))
// .finally(()=> console.log("fourth"));

// console.log("主线任务");


// 异步任务
// let p = new Promise((resolve, reject) => {
//     console.log('1秒过去了……');
//     setTimeout(resolve, 1000);
// })

// p.then(() => new Promise((resolve, reject) => {
//     console.log('2秒过去了……');
//     setTimeout(resolve, 1000);
// }))
// .then(() => new Promise((resolve, reject) => {
//     console.log('3秒过去了……');
//     setTimeout(resolve, 1000);
// }))
// .then(() => new Promise((resolve, reject) => {
//     console.log('4秒过去了……');
//     setTimeout(resolve, 1000);
// }));

// 利用生成Promise的工厂函数简化代码
// function delayedResolve(str) {
//     return new Promise((resolve, reject) => {
//         console.log(str);
//         setTimeout(resolve, 1000);
//     });
// }

// delayedResolve('1秒过去了……')
//     .then(() => delayedResolve('2秒过去了……'))
//     .then(() => delayedResolve('3秒过去了……'))
//     .then(() => delayedResolve('4秒过去了……'))

// 生成一个0-2之间的随机数，如果小于1，则等待一段时间后返回成功，否则返回失败：
// function randomNum(resolve, reject) {
//     let timeOut = Math.random() * 2;
//     console.log(`set timeout to: ${timeOut} seconds.`);
//     setTimeout(() => {
//         if (timeOut < 1) {
//             console.log('call resolve...');
//             resolve('随机数小于1');
//         } else {
//             console.log('call reject...');
//             reject(`随机数大于1`)
//         }
//     }, timeOut * 1000);
// }

// let p = new Promise(randomNum);
// p.then((value) => console.log(`成功！${value}`))
//     .catch((reason) => console.log(`失败！${reason}`))

// 期约图
// 	 	 A
//	    / \
//	  B     C
//	 / \   / \
//  D   E F   G
// let A = new Promise((resolve, reject) => {
//     console.log('A');
//     resolve();
// });
// let B = A.then(()=>console.log('B'));
// let C = A.then(()=>console.log('C'));

// B.then(()=> console.log('D'));
// B.then(()=> console.log('E'));
// C.then(()=> console.log('F'));
// C.then(()=> console.log('G'));

// Promise.all()
// 1.
// let p = Promise.all([
//     Promise.resolve('item1'),
//     Promise.resolve(),
//     Promise.resolve(2)
// ])
// p.then((values)=> console.log(values));
// 2.
// let p = Promise.all([
//     Promise.resolve(),
//     Promise.reject('已拒绝'),
//     Promise.reject('再次拒绝')
// ])

// setTimeout(console.log, 0, p);  // Promise {<rejected>: '已拒绝'}
// // Uncaught (in promise) undefined

// p.catch((reason) => setTimeout(console.log, 0, reason))

// const p = Promise.race([
//     fetch('https://api.github.com/users/garosy'),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error('请求超时')), 5000))
// ]);
// p
//     .then((val) => setTimeout(console.log, 0, val))
//     .catch((res) => setTimeout(console.log, 0, res));

// 期约合成
function addTwo(x) { return x + 2 };
function addThree(x) { return x + 3 };
function addFive(x) { return x + 5 };


// function addAll(x) {
//     return Promise.resolve(x)
//         .then(addTwo)
//         .then(addThree)
//         .then(addFive);
// }
// addAll(8).then(console.log);

// 利用reduce简化
// function addAll(x) {
//     return [addTwo, addThree, addFive]
//         .reduce((prom, fn)=> prom.then(fn), Promise.resolve(x));
// }
// addAll(8).then(console.log)

//  提炼出一个通用合成函数
// function compose(...fns) {
//     return function(x) {
//         return fns.reduce((prom, fn)=> prom.then(fn), Promise.resolve(x));
//     }
// }

// let addAll = compose(addTwo, addThree, addFive);
// addAll(8).then(console.log)