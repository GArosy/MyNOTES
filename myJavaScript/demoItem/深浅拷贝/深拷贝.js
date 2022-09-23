let obj = {
  shallowProperty: "shallow",
  deepProperty: {
    a: 1,
    b: 2,
  },
};
let arr = [1, 2, ["a", "b"]];

// 简单深拷贝
const cloneDeepSimple = function (source) {
  if (typeof source === "object" && source !== null) {
    // null和Array都返回object
    let target = Array.isArray(source) ? [] : {}; // 判断是否为数组
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (typeof source[key] === "object") {
          target[key] = cloneDeepSimple(source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }
    return target;
  } else {
    return source;
  }
};

// obj.deepProperty.a = obj;
// const clone = cloneDeepSimple(obj)
// Uncaught RangeError RangeError: Maximum call stack size exceeded
// 存在循环引用会出现爆栈问题


// 使用Map类型解决循环引用问题
// 设置一个数组或者哈希表存储已拷贝过的对象，当检测到当前对象已存在于哈希表中时，取出该值并返回即可。
const cloneDeepCircular = function (source, map = new Map()) {
  if (typeof source === "object" && source !== null) {
    if (map.has(source)) return map.get(source);

    let target = Array.isArray(source) ? [] : {};
    map.set(source, target); // 利用了Map类型可以以对象做键名的特性

    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (typeof source[key] === "object" && source[key] !== null) {
          target[key] = cloneDeepCircular(source[key], map);
        } else {
          target[key] = source[key];
        }
      }
    }

    return target;
  }
};

// obj.deepProperty.a = obj;
// const clone = cloneDeepCircular(obj)
// console.log(clone);
