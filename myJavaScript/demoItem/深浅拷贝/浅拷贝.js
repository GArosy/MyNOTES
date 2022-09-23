let obj = {
  shallowProperty: "shallow",
  deepProperty: {
    a: 1,
    b: 2,
  },
};

/**
 * assign() 方法实现的是首层深拷贝，不是真正的深拷贝
 * 如果对象中含有*引用值*，拷贝的依然是其地址
 * 同理还有展开运算符、数组的slice()/concat()等
 * JSON方法只适用于不含function/undefined的对象，普适性差
 */
let cloneObj = Object.assign({}, obj);
// obj.shallowProperty = "123";
// obj.deepProperty.a = 0;
// console.log("cloneObj", cloneObj);
// console.log("obj", obj);

// 实现一个首层深拷贝
const cloneShallow = function (source) {
  let target = {};
  for (const key in source) {
    if (Object.hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  }
  return target;
};
const clone = cloneShallow(obj);
// clone.shallowProperty = 'aaa';
// clone.deepProperty.a = '999'
// console.log("clone", clone);
// console.log("obj", obj);