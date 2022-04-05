'use strict';

let name = "Tom";
function showName(name) {
    console.log(name);
}

module.exports =  showName ; // 正确赋值导出（建议用法）

// exports = showName; // 报错！这样exports将不再是对象，必须加{}
// exports = {showName};   // 报错！给exports赋值是无效的，因为赋值后，module.exports仍然是空对象{}
// exports.showName = showName; // 正确赋值导出

// console.log(exports);        //main.js会在模块执行结束之后继续执行这里的代码
// console.log(module.exports); //main.js会在模块执行结束之后继续执行这里的代码