const show = require('./showname');
let name = 'Jerry';
// console.log(show);
// show.showName(name);    // Jerry    由(exports.showName = showName;)导出
show(name);             // Jerry    由(module.exports =  showName ;)导出（建议用法）