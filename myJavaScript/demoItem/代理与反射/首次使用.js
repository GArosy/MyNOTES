// // 1. 定义
// // 目标对象
// const target = {
//     foo: 'bar'
// };
// // 处理程序对象
// const handler = {
//     // 定义捕获器
//     get() {
//         return 'handler override';
//     }
// }

// // 创建代理
// let proxy = new Proxy(target, handler);
// console.log(proxy.foo); // handler override

// 2. Proxy实例方法：
// 1) get
// const target = {
//     foo: 'bar',
//     name: 'Tom'
// };
// const handler = {
//     get(trapTarget,     // 目标对象
//         propertyKey,    // 要查询的属性
//         receiver        // 代理对象
//     ) {
//         console.log(trapTarget === target);
//         console.log(propertyKey);
//         console.log(receiver === proxy);
//         // 重构get的原始行为
//         return trapTarget[propertyKey];
//     }
// }
// const proxy = new Proxy(target, handler);
// proxy.foo;  // true foo true
// console.log(proxy.name);    // Tom

// 3. Reflect 反射
// 以上重构原始行为的代码并不需要如此繁琐，全局对象Reflect已经封装了所有原始行为
// 调用Reflext API可以轻松实现重构js的大多数原始方法
const target = {
    foo: 'bar',
    name: 'Tom'
};

// const handler = {
//     get() {
//         return Reflect.get(...arguments);
//     }
// }

// 甚至可以再简单一点
const handler = {
    get: Reflect.get
}

const proxy = new Proxy(target, handler);
console.log(proxy.name);    // Tom