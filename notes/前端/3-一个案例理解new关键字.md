# 为什么要引入new？

假设，我需要造一批克隆人，他们有着相同的名字，并且都会奔跑，唯一不同是各自的ID。

```js
const clonePerson = {
	id = 1,
	name = 'Jame',
	run = function() {
		console.log("running")
	}
}
```

现在开始制造一百个克隆人：

```js
const clonePersons = [];
let clonePerson = {};
for(let i = 0; i < 100; i++) {
	clonePerson = {
		id = i,
		name = 'Jame',
		run = function() {
			console.log("running")
        }
	}
	clonePersons.push(clonePerson);
}
```

这样看似简单粗暴又美好，实则白白浪费了很多内存。因为每个克隆人的名字和动作都是一样的，只需创建一次再引用即可，没必要重复创建100次。

那我们尝试利用原型链解决这个问题：

```js
const clonePersons = [];
let clonePerson = {};
// 相同的属性放在原型里
const clonePersonPrototype = {
    name = 'Jame',
    run = function() {
        console.log("running")
    }
}

// 添加唯一id后引用原型，再批量制造
for (let i = 0; i < 100; i++) {
    clonePerson = {
        id = i;
    }
    clonePerson.__proto__ = clonePersonPrototype;
    clonePersons.push(clonePerson);
}
```

这样做基本解决了属性的复用问题，但麻烦的是每次批量制造还要再写一遍赋予id的过程。那不如将赋予id和引用原型的代码打包在一个函数里，这样每次制造只需调用这个函数即可：

```js
const clonePersons = [];
let clonePerson = {};
// 克隆原型
const clonePersonPrototype = {
    name = 'Jame',
    run = function() {
        console.log("running")
    }
}
// 制造函数
function clonePerson(id) {
    let onePerson = {};		// 创建一个临时对象
    onePerson.id = id;		// 赋予id
    onePerson.__proto__ = clonePersonPrototype;	// 引用原型
    return onePerson;		// 返回临时对象并销毁
}

for (let i = 0; i < 100; i++) {
    clonePersons.push(clonePerson(i));
}
```

如此一来，我们通过一个临时对象，打包出一个用来制造克隆人的函数。

在实际生产环境中，类似的「批量制造」是最常见的需求之一，这种函数有其专门的名字：「**构造函数**」，而由它创造出来的「克隆人」即是我们常说的构造函数「实例」。

既然构造函数如此常见，上面的代码是否有必要再精简一下？我们的主角new关键字由此诞生了。

# new做了些什么？

所有由构造函数创建实例的过程都离不开这几个环节：

1. 创建临时对象用于存放属性
2. 为临时对象绑定`__proto__`原型
3. 为临时对象赋值属性和方法
4. 返回这个临时对象

JS将这一过程打包为一个关键字：`new`，它可以极大精简我们的代码。让我们用new重写一遍之前的代码：

```js
function clonePerson(id) {
    this.id = id;
}
const clonePerson.prototype = {
    name = 'Jame',
    run = function() {
        console.log("running")
    }
}

let clonePerson001 = new clonePerson(1);
```

其中，new帮我们做了以下工作：

1. 创建了一个空的临时对象，可以用this访问这个对象；
2. 将此对象的`__proto__`隐式指向构造函数的原型`prototype`，并向`prototype`添加`constructor`属性，它的值指回构造函数；
3. 执行构造函数，将其中的属性和方法写入临时对象中；
4. 判断构造函数是否有return：
   - 有：如果返回值是原始类型，则忽略并返回临时对象；如果是引用类型，则返回这个值（new操作被覆盖）；
   - 没有：返回临时对象。

# new的意义

我们常用万物皆对象来概括JS，而new不仅是实例化对象的基本操作，更是JS实现原型链的基石。可以说，new关键字是实现「继承」这一编程思想的核心要素之一。