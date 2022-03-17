# JavaScript Note

## 基本用法

### 内联脚本

可放置于HTML的`<head>`或`<body>`

```JS
<script> 
    alert("我的第一个JavaScript"); 
</script>
```

### 外部脚本

在HTML中声明并调用外部`.JS`，外部文件可被多个网页使用。
```JS
<script src="myScript.js"></script>
```

> - 在标签中填写 onclick 事件调用函数时，不是 **`onclick=函数名`**， 而是 **`onclick=函数名+()`**
> - 外部 `.js`文件不使用 `<script>` 标签，直接写代码

## JavaScript 语法

### 语句

在HTML中，JavaScript通过语句向浏览器发出命令

- 一条语句通常用`;` 作为结束符。
- 复杂语句：
  - 将左花括号放在第一行的结尾。
  - 左花括号前添加一空格。
  - 将右花括号独立放在一行。
  - 不要以分号结束一个复杂的声明。

函数：

```
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

// ES6 里允许给函数传入默认参数
function greeting(name = "Anonymous") {
	return "Hello" + name;
}
```

循环：

```js
for (i = 0; i < 5; i++) {
    x += i;
}

/* 遍历对象属性 */
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  let i = 0;
  for (let user in usersObj) {
    if (usersObj[user].online) {
      i++;
    }
  }
  return i;
}

console.log(countOnline(users));
```

条件语句：

```js
if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
```

逻辑运算符：

| 逻辑运算 | 符号 |
| -------- | ---- |
| 与       | &&   |
| 或       | \|\| |
|          |      |
|          |      |
|          |      |



###  关键字

| abstract | else       | instanceof | super        |
| -------- | ---------- | ---------- | ------------ |
| boolean  | enum       | int        | switch       |
| break    | export     | interface  | synchronized |
| byte     | extends    | let        | this         |
| case     | false      | long       | throw        |
| catch    | final      | native     | throws       |
| char     | finally    | new        | transient    |
| class    | float      | null       | true         |
| const    | for        | package    | try          |
| continue | function   | private    | typeof       |
| debugger | goto       | protected  | var          |
| default  | if         | public     | void         |
| delete   | implements | return     | volatile     |
| do       | import     | short      | while        |
| double   | in         | static     | with         |



### 注释

```
//这是一条注释
```



### 数据类型

JavaScript 是一种**弱类型**语言（**动态**语言）。这意味着你不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。这也意味着你可以使用同一个变量保存不同类型的数据。

最新的 ECMAScript 标准定义了 8 种数据类型：

- 7种**原始类型**（可使用 `typeof` 运算符检查）
  - 字符串 `String` : `typeof "John" === "string"`
  - 数字 `Number` : `typeof 3.14 === "number"`
  - 大整数 `BitInt` : `typeof 90000512482415n === "bigint"`
  - 布尔 `Boolean` : `typeof false === "boolean"`
  - 对空 `Null` : `typeof null === "object"`
  - 未定义 `Undefined` : `typeof v === "undefined"`
  - `Symbol` : `typeof v === "symbol"`

- 对象 `Object` ：任何 `constructed` 对象实例的特殊非数据结构类型，也用做数据结构：`new Object`，`new Array`，`new Map`，`new Date`，和几乎所有通过 `new keyword` 创建的东西。

如果对象是数组 `Array`、日期 `Date` 、`null`，我们无法通过 `typeof` 判断其类型，因为返回值都是 `object`。

> - `undefined`：是所有没有赋值变量的默认值，自动赋值；
>
> - `null`：表示一个空对象引用，类型为 `object`，通常在主动释放一个应用对象时使用；

#### 字面量

在编程语言中，一般**固定值**称为字面量。

- 数字字面量 $Number$ ：`3.14` `1001` `123e5`
- 字符串字面量 $String$ ：`"Hello"` `'Hello'`
- 表达式字面量：`1 + 2` `2 * 3`
- 数组字面量 $Array$ ：`[1, 2, 3, 5, 1001]`
- 对象字面量 $Object$ ：`{ Name:"Arosy", Age:"23" }`
- 函数字面量 $Function$ ：`function myFunction(a, b) {return a + b;}`

#### 变量

在编程语言中，变量是用于储存数据值的**名称**。JavaScript使用关键字`var`定义变量，使用`=`为变量赋值：

```javascript
var age, height;
age = 23;
height = 175;
```

在ES6中， 引入了名为 `let` 和 `const` 的关键字，这是对 JavaScript 的一次重大更新，以解决与 `var` 关键字有关的潜在问题.

**你应该总是用 `let` 或 `const` 声明你的变量。** 

`let` 声明的变量只在 `let` 命令所在的**代码块** `{}` 内有效，同名的变量只能声明一次，不可被覆盖。

`const` 声明一个只读的**常量**，声明时必须进行**初始化**，一旦声明，常量的值就不能改变。

> const 的本质: const 定义的变量并非常量，并非不可变，它定义了一个常量引用一个值。使用 const 定义的**对象**或者**数组**，其实是可变的。下面的代码并不会报错：
>
> ```
> // 创建常量对象
> const car = {type:"Fiat", model:"500", color:"white"};
> // 修改属性:
> car.color = "red";
> // 添加属性
> car.owner = "Johnson";
> ```

 对于不可变值，开发人员通常使用**大写变量**命名，对可变值（对象和数组）使用小写或驼峰命名 。

> 常见的JavaScript变量命名规则：
>
> `firstName //小驼峰`，`FirstName //大驼峰`，`first_name //下划线法`

> 字面量是一个**值**，变量是一个**名称**。

> 作用域：
>
> JavaScript中，作用域为可访问的变量、对象、函数的集合。
>
> 在函数内部声明的变量，为**局部变量**，具有局部作用域。局部变量在函数开始执行时创建，在执行完成后销毁。局部变量只作用于函数内，所以不同函数可以使用相同名称的变量。
>
> 在函数外部定义的变量，为**全局变量**，具有全局作用域，网页中所有脚本和函数均可使用。全局变量在页面关闭时销毁。
>
> 一个程序中有可能具有相同名称的局部变量和全局变量。 在这种情况下，局部变量将会优先于全局变量。
>
> 没有被声明的变量默认为**全局变量**。



### 转义字符

| 代码 | 输出   |
| ---- | ------ |
| `\'` | 单引号 |
| `\"` | 双引号 |
| `\\` | 反斜杠 |
| `\n` | 换行符 |
| `\r` | 回车符 |
| `\t` | 制表符 |
| `\b` | 退格   |
| `\f` | 换页符 |



### 对象

JavaScript中，几乎所有事物都可以是对象。

对象是可以包含多个值的变量，其中多个值以 `name:value` **键值对**的形式呈现，键值对之间以 `,` 分隔：

```
var John = {
	sexual: "male", 
	height: 175, 
	weight: 70
}；
```

以上实例将三个**值 value** `male` `175` `70` 赋予变量 `John`，每个值有对应的 **键 key**，key + value = 键值对 = 属性。

 JavaScript 对象中：

- **键值对 **通常被称作 **对象属性**；
- 键值对中的 **值（变量）**通常被称作 **属性变量**；

> 键必须为**字符串**，值可以为任意基本数据类型。 如果键包含非字符串的话，JavaScript 会自动将它们转为字符串。
>
> 可以说，**JavaScript对象是键值对的容器**；也可以说，**JavaScript对象是属性变量的容器**。

#### 对象属性

访问对象属性有两种方法：

```javascript
John.height		// 点操作符：静态的。右侧必须是一个以属性名称命名的标识符。
John[weight]	// 方括号操作符：动态的。括号里必须是一个结果为字符串的表达式，在程序运行时可以修改和创建。可以省略单个单词/数字的引号
Jhon["his friends"]	// 如果属性名中包含空格，就必须使用引号将它们包裹起来

```

测试对象属性的方法：

- `.hasOwnProperty()`  检查对象是否有指定的属性。 找到该属性时返回 `true`，找不到该属性时返回 `false` 

  ```
  const myObj = {
    top: "hat",
    bottom: "pants"
  };
  
  myObj.hasOwnProperty("top");
  ```

   `hasOwnProperty` 是定义在 `Object.prototype` 上的一个方法

#### 对象方法

对象**方法**定义了一个**函数**，并储存为对象的**属性**，通过 `()` 调用。

```javascript
<script>
var person = {
	firstName : "John",
	lastName : "Doe",
	fullName : function(){
		return this.firstName + " " + this.lastName
	}
};
document.getElementById("demo").innerHTML = person.fullName();
</script>
```

以上实例访问了对象 `person` 的 `fullName()` 方法。

> 方法也是对象的属性之一。
>
> JavaScript对象是**属性**和**方法**的容器。
>
> 属性（包括方法）具有唯一性，如果出现两个重复属性，则以最后赋值的属性为准。



### 类型转换

#### constructor 属性

constructor 属性返回所有 JavaScript 变量的**构造函数**：

```
"John".constructor                 // 返回函数 String()  { [native code] }
(3.14).constructor                 // 返回函数 Number()  { [native code] }
false.constructor                  // 返回函数 Boolean() { [native code] }
[1,2,3,4].constructor              // 返回函数 Array()   { [native code] }
{name:'John', age:34}.constructor  // 返回函数 Object()  { [native code] }
new Date().constructor             // 返回函数 Date()    { [native code] }
function () {}.constructor         // 返回函数 Function(){ [native code] }
```

因此，可以使用 constructor 属性来判断对象的数据类型（例如是否包含字符串“Array”）：

```
<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = isArray(fruits);
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}
</script>
```

#### JavaScript类型转换

JavaScript变量可以使用**函数**或**自动转换**成为一个新变量或其他数据类型。

- 数字 > 字符串

  全局方法 `String()` 可将任何类型的数字、字母、表达式转换为字符串：

  ```
  String(x)
  String(123)
  String(100 + 23)
  ```

  `Number` 方法 `toString()` 具有同样的效果

  ```
  x.toString()
  (123).toString()
  (100 + 23).toString()
  ```

- 日期 > 字符串

  - `Date()` 直接返回字符串

  - 全局方法 `String(new Date())`

  - ```
    obj = new Date()
    obj.toString()
    ```

  更多 `Date` 方法：

  | 方法              | 描述                                        |
  | :---------------- | :------------------------------------------ |
  | getDate()         | 从 Date 对象返回一个月中的某一天 (1 ~ 31)。 |
  | getDay()          | 从 Date 对象返回一周中的某一天 (0 ~ 6)。    |
  | getFullYear()     | 从 Date 对象以四位数字返回年份。            |
  | getHours()        | 返回 Date 对象的小时 (0 ~ 23)。             |
  | getMilliseconds() | 返回 Date 对象的毫秒(0 ~ 999)。             |
  | getMinutes()      | 返回 Date 对象的分钟 (0 ~ 59)。             |
  | getMonth()        | 从 Date 对象返回月份 (0 ~ 11)。             |
  | getSeconds()      | 返回 Date 对象的秒数 (0 ~ 59)。             |
  | getTime()         | 返回 1970 年 1 月 1 日至今的毫秒数。        |

- 字符串 > 数字

  全局方法 `Number()`

  ```
  Number("3.14")		//3.14
  Number(" ")			//0
  Number("12 23")		//NaN 非数字
  ```

  另，此方法也可将布尔值转换为数字：

  ```
  Number(false)		//0
  Number(true)		//1
  ```

- 一元运算符 `+`

   `+` 可用于将变量转换为数字，如果变量不能被转换，结果仍为数字，但值为 `NaN` ：

  ```
  var x = "5"
  var y = "abc"		
  var z = + x			// 返回 5
  var z = + y			// 返回 NaN
  ```

- 自动转换类型

  当 JavaScript 尝试操作一个 "错误" 的数据类型时，会自动转换为 "正确" 的数据类型

  ```
  5 + null    		// 返回 5         null 转换为 0
  "5" + null  		// 返回"5null"   	null 转换为 "null"
  "5" + 1     		// 返回 "51"      1 转换为 "1" 
  "5" - 1     		// 返回 4         "5" 转换为 5
  ```

  > 减法>字符串>加法

- 自动转换为字符串

  当尝试输出一个变量时，JavaScript会自动调用变量的 `toString()` 方法：

  ```
  document.getElementById('demo').innerHTML = myVar;
  myVar = {name:"John"}	// toString 转换为 "[object Object]"
  myVar = [1,2,3,4]		// toString 转换为 "1,2,3,4"
  myVar = new Date()		// toString 转换为 "Fri Jan 18 2021 09:08:55 GMT+0200"
  myVar = 123				// toString 转换为 "123"
  myVar = true			// toString 转换为 "true"
  ```



### 正则表达式

```
var re = /表达式主体/修饰符
```

#### 常用方法

JavaScript 中，正则表达式通常用于两个字符串方法：

- `search()` 方法用于检索与正则式相匹配的字符串，并返回字符串的起始位置：

```
var str = "Hello world!";
var n = str.search(/World/i);
document.getElementById("demo").innerHTML = n;
// 返回 6
```

- `replace()` 方法用于替换在字符串中与正则式相匹配的字符串；

```
<p id="demo">Hello world</p>
<button onclick="myFunction()">Click me</button>
<script>
function myFunction(){
	var str = document.getElementById("demo").innerHTML;//replace()方法接收字符串并作为参数
	var txt = str.replace(/World/i,"John");				//替换字符串
	document.getElementById("demo").innerHTML = txt;	//输出替换后的字符串
}
</script>
// 点击按钮后Hello world被替换为Hello John
```

`test()` 方法是一个正则表达式方法，用于检测字符串是否匹配某个模式，返回**布尔值**。

```
/e/.test("hello world")		//返回 ture
```

`exec()` 方法是一个正则表达式方法，用于检测字符串的匹配，返回一个**数组**存放匹配结果，未匹配则返回 `null`。

```
/e/.exec("hello world")		// 返回 e
```

#### 修饰符与表达式模式

| 修饰符 | 描述                                                     |
| :----- | :------------------------------------------------------- |
| i      | 执行对大小写不敏感的匹配。                               |
| g      | 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。 |
| m      | 执行多行匹配。                                           |

| 元字符 | 描述                                        |
| :----- | :------------------------------------------ |
| \d     | 查找数字。                                  |
| \s     | 查找空白字符。                              |
| \b     | 匹配单词边界。                              |
| \uxxxx | 查找以十六进制数 xxxx 规定的 Unicode 字符。 |

| 量词 | 描述                                  |
| :--- | :------------------------------------ |
| n+   | 匹配任何包含至少一个 *n* 的字符串。   |
| n*   | 匹配任何包含零个或多个 *n* 的字符串。 |
| n?   | 匹配任何包含零个或一个 *n* 的字符串。 |

`[]` 用于查找某个范围内的字符

| 表达式 | 描述                       |
| :----- | :------------------------- |
| [abc]  | 查找方括号之间的任何字符。 |
| [0-9]  | 查找任何从 0 至 9 的数字。 |
| (x\|y) | 查找任何以 \| 分隔的选项。 |

#### RegExp 对象

#### 实例

```
/*校验邮件地址是否合法*/
function isEmail(str){
	var reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
	return reg.test(str)
}

/*校验是否中文名称组成 */
function ischina(str) {
    var reg=/^[\u4E00-\u9FA5]{2,4}$/;
    return reg.test(str);
}
```



### JavaScript 表单

#### JavaScript 表单验证

判断表单字段(`fname`)值是否存在，如果不存在，就弹出信息阻止表单提交：

```
<scirpt>
function validateForm() {
	var x = document.forms["myForm"]["fname"].value;
	if (x == null || x == "") {
		alert("需要输入名字");
		return false;
	}
}
</script>
```

通过 HTML 代码调用以上代码：

```
<form name="myForm" action="demo_form.php" onsubmit="return validateForm()" method="post">
名字 <input type="text" name="fname">
<input type="submit" value="提交">
</form>
```

#### HTML 约束验证

HTML5 新增了 HTML 表单的验证方式：约束验证。基于：

- HTML 输入属性
- CSS 伪类选择器
- DOM 属性和方法



### JavaScript 验证 API

> APIs (application programming interfaces)，即应用程序编程接口。API由服务器（Server）提供，通过API，计算机可以读取、编辑网站的数据。

==待补充==



### 随机数

使用 `Math.random()` 生成一个在 0（**包括0**）到 1（**不包括1**）之间的随机**小数**。

可以搭配 `Math.floor()` 向下取整得到随机整数：

```
integer = Math.floor(Math.random() * 10);	// 0-10的随机整数
integer = Math.floor(Math.random() * (max - min + 1) + min)	// min-max的随机整数
```





### forEach

[(17条消息) JavaScript forEach()的用法_路虽远，行则必至！-CSDN博客_前端foreach用法](https://luckylifes.blog.csdn.net/article/details/99290078?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-1.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-1.pc_relevant_default&utm_relevant_index=2)





### 数值取整

[JavaScript四种数值取整方法 - 后除 - 博客园 (cnblogs.com)](https://www.cnblogs.com/mazey/p/8447093.html)



### JSON

JSON （**J**ava**S**cript **O**bject **N**otation）是用于存储和传输数据的轻量级数据交换格式，通常用于服务端向网页传递数据 。

可以理解为，**JSON** 是 **JS对象** 的字符串表示法。它使用文本表示一个 JS 对象的信息，JSON本质是一个**字符串**（，这里仅仅指结构上的同一性，要在`{...}` 前后加上`'` 才能成为 JSON 字符串）。

```
{"sites":[
    {"name":"Runoob", "url":"www.runoob.com"}, 
    {"name":"Google", "url":"www.google.com"},
    {"name":"Taobao", "url":"www.taobao.com"}
]}
```

#### 语法规则

- 数据为 `键:值` 对
- 数据由 `,` 分隔。
- 大括号`{}`保存对象
- 方括号`[]`保存数组

附 [JSON格式验证](https://c.runoob.com/front-end/53/) 工具

#### 转换方法

```
var text = '{ "sites" : [' +
'{ "name":"Runoob" , "url":"www.runoob.com" },' +
'{ "name":"Google" , "url":"www.google.com" },' +
'{ "name":"Taobao" , "url":"www.taobao.com" } ]}';	// 创建JSON格式的数据

var obj = JSON.parse(text);	// 使用JavaScript内置函数将JSON字符串转换为JS对象
```

**注意**： `parse()` 方法只能解析**字符串格式**的JSON 。

```
var obj = { sites : [
{ name:"Runoob" , url:"www.runoob.com" },
{ name:"Google" , url:"www.google.com" },
{ name:"Taobao" , url:"www.taobao.com" } ]};	// 创建JS对象

var text = JSON.stringify(obj);	// 使用JavaScript内置函数将JS对象转换为JSON字符串
```



### void

`void()` 操作符指定计算一个表达式但不返回值，括号内的表达式始终会被运行。

```
void(func())
javascript:void(func())
```





### 错误

`try` 语句允许执行错误的代码块，`catch` 语句在 `try` 代码块发生错误时将被执行， `try` 和 `catch` 是**成对出现**的。

```
try {
	...		// 抛出异常
}
catch(e) {
	...		// 异常的捕获与处理
}
finally {
	...		// 结束处理
}
```

`throw` 语句用于抛出一个用户自定义的异常，而当前函数的执行将被停止（`throw` 之后的语句并不会被执行）。通常配合 `try` 和 `catch` 一起使用，起到控制程序流的作用。

例如：

```
function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try { 
    if(x == "") throw "值是空的";
    if(isNaN(x)) throw "值不是一个数字";
    x = Number(x);
    if(x > 10) throw "太大";
    if(x < 5) throw "太小";
  }
  catch(err) {
    message.innerHTML = "错误: " + err + ".";
  }
  finally {
    document.getElementById("demo").value = "";
  }
}
```





## JS HTML DOM

通过 HTML DOM，可访问 JavaScript HTML 文档的所有元素。

### HTML DOM

当网页被加载时，浏览器会创建页面的**文档对象模型** (Document Object Model)。

HTML DOM 模型被构造为**对象**的树：

![HTML DOM 树](https://www.runoob.com/images/pic_htmltree.gif)



## 函数

###  **立即调用函数表达（IIFE）** 

JavaScript 中的一个常见模式就是，函数在声明后立刻执行：

```js
(function () {
  console.log("Chirp, chirp!");
})();
```

 这是一个匿名函数表达式，立即执行并输出 `Chirp, chirp!`。  函数表达式末尾的两个括号（）会让它被立即执行或调用。 这种模式被叫做立即调用函数表达式（immediately invoked function expression) 或者IIFE。 

## 面向对象编程

### 创建对象

#### 1. 构造函数模式

 `Constructors` 是**创建对象**的函数。 函数给这个新对象定义属性和行为。 可将它们视为创建的新对象的蓝图。 

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let blueBird = new Bird("Albert", "blue");
```

 **构造函数遵循一些惯例规则** ：

- 构造函数函数名的**首字母大写**，这是为了方便我们区分构造函数（ `constructors`）和其他非构造函数。
- 构造函数使用 `this` 关键字来给它将创建的这个对象设置新的属性。 在构造函数里面，`this` 指向的就是它新创建的这个对象。
- 构造函数定义了属性和行为就可创建对象，而不是像其他函数一样需要设置返回值。

 并且，通过构造函数创建对象的时候要使用 `new` 操作符。 只有这样，JavaScript 才知道要给 `Bird` 这个构造函数创建一个新的实例：`blueBird`。 如果不使用 `new` 操作符来新建对象，那么构造函数里面的 `this` 就无法指向新创建的这个对象实例，从而产生不可预见的错误。 

**验证对象的构造函数**：

 凡是通过构造函数创建出的新对象，这个对象都叫做这个构造函数的**实例** `instance` ，可以通过 `instanceof`  操作符，将对象与构造函数之间做比较，根据对象是否通过这个构造函数创建返回 `true` 或者 `false` 。以上文代码为例：

```js
let crow = new Bird("Alex", "black");
crow instanceof Bird;	// 返回 true

let canary = {
	name: "Mike",
    color: "yellow",
    numLegs: 2
}
canary instanceof Bird;	// 返回 false
```

由于 `constructor` 可以被改写，不建议通过判断 `instance.constructor === Func` 验证对象的构造函数。

**构造函数的问题**：

构造函数定义的方法会在每个实例上都创造一遍，包括重复的变量（如上文的 `numLegs: 2`）。如果实例规模巨大，这会产生许许多多的重复变量。

#### 2. 原型模式

每个函数都会存在一个 `prototype` 属性，它是一个可以在所有实例之间共享的对象。在 `Bird.prototype` 中为 `numLegs` 属性赋值，可以使 `Bird` 构造的所有实例拥有共同的 `numLegs` 属性和值。

```js
Bird.prototype.numLegs = 2;
```

>  [帮你彻底搞懂JS中的prototype、__proto__与constructor（图解）_码飞_CC的博客-CSDN博客_prototype](https://chen-cong.blog.csdn.net/article/details/81211729?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-2.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-2.pc_relevant_default&utm_relevant_index=5) 

![图解原型]( https://img-blog.csdnimg.cn/20190311194017886.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NjMTg4Njg4NzY4Mzc=,size_16,color_FFFFFF,t_70#pic_center )

无论何时，只要创建一个函数，JavaScript 就会为其创建一个 `prototype` 属性，指向该函数的**原型对象** `Bird.prototype` 。而原型对象会自动获得一个名为 `constructor` 的属性，指回其对应的构造函数 `Bird` 。

此外，原型对象（凡是对象都）会包含一个隐藏属性 `[[prototype]]` ，浏览器通过定义 `__proto__` 实现了对它的访问（`[[prototype]]` 是官方所定义的属性，而 `__proto__` 是浏览器其所做的实现，两者意义相同）。 `[[prototype]]` 指向这个对象的原型对象（可以理解为它的父对象），被指向的原型对象的 `[[prototype]]` 又指向更上一层的原型对象（祖父对象），以此类推，直到顶端的 `Object.prototype` ，它的 `[[prototype]]` 指向 `null` 。

实例的父对象即是构造函数的原型对象，实例与构造函数之间并没有直接联系，而与构造函数的原型对象有继承关系。

当访问一个对象的属性时，如果该对象不存在这个属性，那么就会去它的 `[[prototype]]` 属性指向的父对象中寻找，如果父对象也不存在这个属性就继续向上寻找直到返回 `null` 为止。这就是通过原型对象定义的属性和方法可以传递至所有实例的原理，每个实例只是继承了其构造函数的原型对象的属性。

以上通过 `[[prototype]]` 属性来连接各个对象直到 `null` 的过程即所谓的 **原型链**。JavaScript 所调用的各种方法都是靠 `[[prototype]]` 继承而来的。

```js
function Bird() {};

console.log(Bird.prototype);
// {
// 	constructor: f Bird(),
// 	__proto__: Object
// }

/*  [[prototype]]是官方所定义的属性，而__proto__是浏览器其所做的实现，两者意义相同 */

console.log(Bird.prototype.constructor === Bird);
// true
// 构造函数 和 原型对象可以循环引用  

console.log(Bird.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.constructor === Object);
console.log(Bird.prototype.__proto__.constructor === Object);
console.log(Object.__proto__ === null);
console.log(Bird.prototype.__proto__.__proto__ === null);
// true
```

通过对原型对象调用 `isPrototypeOf()` 方法，验证传入对象的原型对象是否为此原型对象：

```js
console.log(Bird.prototype.isPrototypeOf(Alex));		// true
console.log(Object.prototype.isPrototypeOf(Alex));		// true
// 只要原型链中包含这个原型，就返回 true，instanceof()同理
```



### 继承

#### 1. 原型链

(1) 原型链继承

原型链是ECMAScript的主要继承方式，其基本思想就是通过原型继承多个引用类型的属性和方法。每个构造函数都有一个原型对象，原型有一个属性指回构造函数，而实例有一个内部指针指向原型。如果这个原型是另一个构造函数的实例，那就意味着他有一个指针指向这一构造函数的原型。这样就在实例和原型之间构造了一条**原型链**。

```js
function SuperType() {									// 定义SuperType
	this.prop = true;									// 定义属性
}

SuperType.prototype.getSuperValue = () => this.prop;	// 定义方法

function SubType() {									// 定义SuperType
    this.subprop = false;								// 定义属性
}

SubType.prototype = new SuperType();					// 继承SuperType

SubType.prototype.getSubValue = () => this.subprop;		// 定义方法

let instance = new SubType();
console.log(instance.getSuperValue)						// true
```

以上代码分别定义了两个类型：`SuperType` `SubType` ，并分别定义了属性和方法。`SubType` 通过将 `SuperType` 的实例赋值给自己的 `SubType.prototype` ，实现了对 `SuperType` 的继承。这意味着 `SuperType` 实例可以访问的所有属性和方法也会存在于 `SubType.prototype` 。

此例实现继承的关键是 `SubType` 没有使用默认原型，而是替换成了 `Supertype` 的实例。

还要注意，将 `SuperType` 的实例赋值给 `SubType.prototype ` 后，`SubType.prototype.constructor` 属性也被重写为指向 `SuperType` 。

(2) 默认原型

默认情况下，所有引用类型都继承自 `Object` ，任何函数的默认原型都是一个 `Object` 实例，其 `[[prototype]]` 属性指向 `Object.prototype` 。这也是为什么自定义类型能够继承 `toString()` `valueOf()` 等默认方法的原因。

(3) 关于方法

- 子类需要覆盖或添加父类没有的方法时，必须在原型赋值之后进行。

- 以对象字面量方式创建原型方法会破坏原型链，这相当于重写了原型链：

  ```js
  function SuperType() {
      this.superproperty = true;
  };
  function SubType() {};
  
  SubType.prototype = new SuperType();
  
  SubType.prototype = {
      getSubValue() {},
      someOtherMethod() {}
  };
  
  let instance = new SubType();
  console.log(instance.superproperty);	// 出错！
  ```

(4) 原型链的问题

- 父类型的实例属性会变成子类型的原型属性，这导致子类型的所有实例都会共享这个原型上的引用值，而针对某一实例的修改等于直接修改了原型，其他实例都会被改动；（**只能共享不能独享**）

  ```js
  function SuperType() {
  	this.colors = ["red", "blue"];
  }
  function SubType() {};
  
  SubType.prototype = new SuperType();
  
  let instance1 = new SubType();
  instance1.colors.push("green");
  console.log(instance1.colors);	// 'red, blue, green'
  
  let instance2 = new SubType();
  console.log(instance2.colors);	// 'red, blue, green'
  ```

  

- 子类型在实例化时不能给父类型的构造函数传参；

以上问题导致原型链基本不会被单独使用。

#### 2. 借用构造函数

(1) 解决继承

为解决原型属性包含父类引用值的继承问题，可在子类构造函数中调用父类构造函数。

```js
function SuperType() {
    this.colors = ["red", "blue"];
}

function SubType() {
    SuperType.call(this);	// 继承SuperType
}

let instance1 = new SubType();
instance1.colors.push("green");
console.log(instance1.colors);	// "red,blue,green"

let instance2 = new SubType();
console.log(instance2.colors);	// "red,blue"
```

通过使用 `call()` 方法，在执行 `new SubType()` 创建实例时，会自动运行 `SuperType` 构造函数中的所有初始化引用类型值的代码，这样每个实例都会有自己的 `color` 属性了。

(2) 解决传参

借用构造函数可以在子类构造函数中向父类构造函数传参：

```js
function SuperType(name) {
    this.name = name;
}

function SubType() {
    SuperType.call(this, "Nicholas");	// 继承SuperType并传参
    this.age = 29；
}
```

(3) 借用构造函数的问题

- 借用构造函数的缺点也是构造函数模式的缺点：必须在构造函数中定义方法，因此函数不能复用；（**只能独享不能共享**）

 因此借用构造函数基本上也不能单独使用。

#### 3. 组合继承

组合继承（伪经典继承）综合了原型链和构造函数，将属性和方法分别继承，使用原型链继承传递方法，使用借用构造函数传递属性：

```js
function SuperType(name) {						// 定义父类型
    this.name = name;
    this.colors = ["red", "blue"];
}

SuperType.prototype.sayName = function() {
    console.log(this.name);
}

function SubType(name, age) {					// 定义子类型
    SuperType.call(this, name);					// 借用构造函数继承属性，二次调用
    this.age = age;
}

SubType.prototype = new SuperType();			// 原型链继承方法，一次调用

SubType.prototype.sayAge = function() {
    console.log(this.age);
};

let instance1 = new SubType("Niko", "29");
instance1.colors.push("green");
console.log(instance1.colors);
instance1.sayName();

let instance2 = new SubType("Greg", "27");
console.log(instance2.colors);
instance2.sayName();
```

此例使用原型链继承继承父类型原型上的方法，使用借用构造函数继承父类型的引用值属性。虽然 `SuperType` 的实例属性依旧成为了 `SubType` 的原型属性，但由于在构造 `instance1` 实例的过程中间接调用了 `SuperType()` ，在 `instance1` 中创建了 `colors` 和 `name` 属性，屏蔽了原型上的同名属性，所以 `instance1.colors.push("green");` 是在实例内部直接修改实例的，不会再到原型链中搜寻 `colors` 属性，原型链继承的独享问题得到了解决。

组合继承保留了 `instanceof` 操作符和 `isPrototypeOf()` 方法识别合成对象的能力。

然而以上代码中最后出现了两组 `colors` 和 `name` 属性，一组在 `SubType` 的原型上，一组在实例上， 这是**调用了两次父类函数**的结果。因此组合式继承可能存在性能问题。

#### 4. 原型式继承

```js
// Crockford 给出的函数
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}
```

这个 `object()` 函数会创建一个临时构造函数 `F()`，将传入的对象赋值给这个构造函数的原型，然后返回这个临时类型的一个实例。本质上，`object()` 是对传入对象进行了一次浅拷贝。

```js
let person = {
    name: "Nicholas",
    friends: ["Tom", "Jerry"]
};

let anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Bob");

let yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

console.log(person.friends);
// ['Tom', 'Jerry', 'Bob', 'Barbie']
```

ES5通过添加 `Object.create()` 方法将原型式继承的概念规范化了，这个方法接收两个参数：作为新对象原型的对象，和给新对象定义额外属性的对象（可选）。只有第一个参数时：

```js
let person = {
    name: "Nicholas",
    friends: ["Tom", "Jerry"]
};

let anotherPerson = Object.create(person);		// 与上文代码的object()效果相同
anotherPerson.name = "Greg";
anotherPerson.friends.push("Bob");

let yetAnotherPerson = Object.create(person);	// 与上文代码的object()效果相同
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

console.log(person.friends);
// ['Tom', 'Jerry', 'Bob', 'Barbie']
```

第二个参数中，每个新增属性都通过各自的描述符来描述。这种方式添加的属性会**屏蔽**原型对象上的同名属性：

```js
let person = {
    name: "Nicholas",
    friends: ["Tom", "Jerry"]
};

let anotherPerson = Object.create(person,{
    name: {
        value: "Greg"
    }
});

console.log(anotherPerson.name);
// Greg
```

原型式继承无需单独创建构造函数，而是直接通过 `Object.create()` 方法针对模板对象进行复制，避免了实例间的相互影响。（**不仅可以共享，也可利用属性屏蔽做到独享**）

#### 5. 寄生式继承

与原型式继承类似，寄生式继承将对基准对象浅拷贝和对其的改动打包成一个函数，形成 `拷贝->增强->返回` 的工厂模式：

 ```js
function createAnother(original) {
    let clone = Object.create(original);		// 通过调用函数创建一个新对象
    clone.sayHi = function() {					// 增强这个对象
        console.log("hi");
    };
    return clone;								// 返回这个对象
}

let person = {
    name: "Nicholas",
    friends: ["Tom", "Jerry"]
};

let anotherPerson = createAnother(person);		// 注意createAnother()，不是构造函数，不需new操作符

anotherPerson.sayHi();							// Hi
console.log(anotherPerson.friends);				// ['Tom', 'Jerry']
 ```

与构造函数模式类似，通过寄生式继承为对象添加函数会导致函数无法重用。

#### 6. 寄生式组合继承

寄生式组合继承在组合式继承的基础上，将原型式继承的拷贝思想加入其中，再利用寄生式继承的工厂模式思想打包了一个函数，以代替组合式继承中原型链继承的代码，解决了重复调用父类型的问题：

```js
function inheritPrototype(subType, superType) {
	let superPrototype = Object.create(superType.prototype);	// 创建对象
    superPrototype.constructor = subType;						// 重新指向
    subType.prototype = superPrototype;							// 赋值对象
}
```

我们知道原型链继承需要对父类进行一次实例化才能赋值，这是组合式继承重复调用问题的根源。而 `inheritPrototype` 函数创建父类原型的一个副本，再赋值给子类的原型，在不调用父类型的情况下将两个类型连接形成原型链，避免了 `SubType.prototype` 上出现不必要的属性。

调用 `inheritPrototype()` 就可以实现前面例子中的子类型原型赋值：

```js
function inheritPrototype(subType, superType) {
	let superPrototype = Object.create(superType.prototype);	// 创建对象
    superPrototype.constructor = subType;						// 重新指向
    subType.prototype = superPrototype;							// 赋值对象
}

function SuperType(name) {						// 定义父类型
    this.name = name;
    this.colors = ["red", "blue"];
}

SuperType.prototype.sayName = function() {
    console.log(this.name);
}

function SubType(name, age) {					// 定义子类型
    SuperType.call(this, name);					
    this.age = age;
}

/* SubType.prototype = new SuperType(); */		// 原型链继承方法导致重复调用父类型
inheritPrototype(SubType, SuperType);			// 调用inheritPrototype实现子类型原型赋值

SubType.prototype.sayAge = function() {
    console.log(this.age);
};

let instance1 = new SubType("Niko", "29");
instance1.colors.push("green");
console.log(instance1.colors);
instance1.sayName();

let instance2 = new SubType("Greg", "27");
console.log(instance2.colors);
instance2.sayName();
```

寄生式组合继承可以算是引用类型继承的最佳模式。

###  this 指针

面向对象语言中 this 表示当前对象的一个**引用**。

this指向的是该this所在的最里层的object对象。

- 在方法中，this 表示该方法所属的对象。
- 如果单独使用，this 表示全局对象。
- 在函数中，this 表示全局对象。
- 在函数中，在严格模式下，this 是未定义的(undefined)。
- 在事件中，this 表示接收事件的元素。
- 类似 call() 和 apply() 方法可以将 this 引用到任何对象。

> [JS中this关键字详解 - 沙沙起 - 博客园 (cnblogs.com)](https://www.cnblogs.com/lisha-better/p/5684844.html)





## JavaScript 特性

### 调试

#### console.log() 方法

JavaScript 中，`print` 功能可由 `alert()` 和 `console.log()` 实现，但 `alert()` 会将所有内容隐式转换为字符串，且弹窗会阻塞后续的脚本执行，因此推荐使用 `console.log()` 在控制台中调试代码。

#### debugger 关键字

用于停止执行 JavaScript，并调用调试函数。（等于设置断点）



### 变量提升

JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明。因为JS具有 **hoisting 声明提升** 的特性：函数声明和变量声明总是会被解释器悄悄地被"提升"到方法体的最顶部。

需要注意的是，只有声明的变量会提升，初始化的则不会：

```js
var x = 5; // 初始化 x

elem = document.getElementById("demo"); // 查找元素
elem.innerHTML = x + " " + y;           // 显示 x 和 y

var y = 7; // 初始化 y
```

以上代码中的 `y` 输出了 `undefined` ，因为初始化的 `y=7` 并不会被提升

```js
var x = 5; // 初始化 x
var y;     // 声明 y

elem = document.getElementById("demo"); // 查找元素
elem.innerHTML = x + " " + y;           // 显示 x 和 y

y = 7;    // 设置 y 为 7
```



### 严格模式

通过在脚本或函数的头部添加 `use strict;` 表达式来声明，严格模式下不能使用未声明的变量。

严格模式的限制有：

- 不允许使用未声明的变量
- 不允许删除变量或对象
- 不允许删除函数
- 不允许变量重名
- 不允许使用八进制
- 不允许使用转义字符
- 不允许对只读属性赋值
- ……

> 为什么使用严格模式:
>
> - 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
> - 消除代码运行的一些不安全之处，保证代码运行的安全；
> - 提高编译器效率，增加运行速度；
> - 为未来新版本的Javascript做好铺垫。



## ES6 新特性

### 箭头函数 =>

ES6提供了定义匿名函数的语法糖：

```
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

 当不需要函数体，只返回一个值的时候，箭头函数允许你省略 `return` 关键字和外面的大括号。 这样就可以将一个简单的函数简化成一个单行语句 :

```
const myFunc = () => "value";	// 这段代码默认会返回字符串 value
```

 给箭头函数传递参数 :

```
const doubler = (item) => item * 2;
doubler(4);	// 8
```

 如果箭头函数只有一个参数，则可以省略参数外面的括号 :

```
const doubler = item => item * 2;
```

[(17条消息) ES6新特性箭头函数语法、如何正确使用箭头函数_Hayley2016的博客-CSDN博客_箭头函数](https://blog.csdn.net/qq_32614411/article/details/80897256)



### `...` 运算符

 在ES6中，`...` 有2个含义，分别表示 `扩展运算符（spread）` 和 `剩余运算符（rest）`。 



- 剩余运算符：传入参数数量不确定时，rest参数...args` 将离散的参数合成数组，可以使用任意的数组方法。

  ```
  const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
  console.log(a, b);
  console.log(arr);
  // 1, 2
  // [3, 4, 5, 7]
  // rest 操作符只能对数组列表最后的元素起作用
  ```

  

- 扩展运算符： 把数组或类数组对象解压成一组用逗号隔开的参数。

- `...` 运算符在形参上，为剩余运算符；在实参上，为扩展运算符。

 [剩余参数 - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters) 



### 解构赋值

 解构赋值是 ES6 引入的新语法，用来从数组和对象中提取值，并优雅地对变量进行赋值 

解构对象：

```js
const user = { name: 'John Doe', age: 34 };

// 解构并提取对象的值
// ES5
const name = user.name;
const age = user.age;
// ES6
const { name, age } = user;	// 自动创建 name 和 age 变量，并将 user 对象相应属性的值赋值给它们

// 将值分配给新变量
const { name: userName, age: userAge } = user;	// 获取 user.name 的值，将它赋给一个新的变量 userName，userAge 同理

// 在函数的参数中直接解构对象
const stats = {
  max: 56.78,
  min: -0.75,
  average: 35.85
};
const half = ({max, min}) => (max + min) / 2.0; 
console.log(stats);
```

解构数组：

```
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);	// 1, 2, 5
```



### 简洁的声明

 **对象字面量声明** 

构造一个简单的 ` getMousePosition ` 函数，返回拥有 `x` `y` 属性的对象：

```js
/* ES5 */
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});

/* ES6 */
const getMousePosition = (x, y) => ({x, y});
```

  ES6 提供了一个语法糖，消除了类似 `x: x` 这种冗余的写法。 你可以只写一次 `x`，解释器会自动将其转换成 `x: x` ：

```js
const createPerson = (name, age, gender) => {
  return ({name, age, gender});
};
```

**函数声明** 

 用 ES6 的语法在对象中定义函数的时候，可以删除 `function` 关键词和冒号 `:` 

```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```



### class 定义构造函数 

==待补充==



### 代码复用

**导出函数**

- 方法一：

  ```js
  export const add = (x, y) => {
    return x + y;
  }
  ```

- 方法二：

  ```js
  const add = (x, y) => {
    return x + y;
  }
  export { add };
  ```

- 默认导出：

   `export default` 用于为模块或文件声明一个返回值，在每个文件或者模块中应当只默认导出一个值。 

  ```js
  export default function add(x, y) {	// 命名函数
    return x + y;
  }
  
  export default function(x, y) {		// 匿名函数
    return x + y;
  }
  ```

  

**导入所有内容** 

```js
import * as myMathModule from "./math_functions.js";
```

 `import` 语句会创建一个叫作 `myMathModule` 的对象。 这只是一个变量名，可以随便命名。 对象包含 `math_functions.js` 文件里的所有导出，可以像访问对象的属性那样访问里面的函数。 

**导入模块** 

```js
import { add, subtract } from './math_functions.js';
```

 `import` 会在 `math_functions.js` 里找到 `add`，只导入这个函数，忽略剩余的部分。

**导入默认导出** 

```js
import add from "./math_functions.js";
```

被导入的 `add` 值没有被花括号（`{}`）所包围。 `add` 只是一个变量的名字，对应 `math_functions.js` 文件的任何默认导出值。 在导入默认导出时，可以使用任何名字。 



### 模板字符串

` ${variable} ` 占位符

```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!	
I am ${person.age} years old.`;	// 反引号`直接输出多行字符串

console.log(greeting);
```





## 参考手册

### JavaScript 对象

#### String

##### 对象方法

`.parseInt(string, radix)` 

 解析一个字符串 `string` ，`radix` 指定字符串中数字的基数（进制），返回一个整数。

```
const a = parseInt("11", 2);
// 返回值为 3
```



#### Array

##### 对象方法

`.slice()` 

从已有的数组中返回选定的元素，不会改变原始数组。

```
const arr = [1, 2, 3, 4];
const sli = arr.slice(1,3);
// sli 现在值为 [2, 3]
// array.slice(start, end) 包含 start 但不包含 end 
```

`.shift()`

用来弹出一个数组**头部**的值

`.pop()`

用来弹出一个数组**末尾**的值

```
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
// threeArr 现在值为 [1, 4]
// oneDown 现在值为 6
```

`.unshift()` 

将一个值压入到数组的**头部**。

```
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
// ourArray 现在值为 ["Happy", "J", "cat"]
```

`.push()`

将一个值压入到数组的**末尾**。

```
const arr1 = [1, 2, 3];
arr1.push(4);
// arr1 现在值为 [1, 2, 3, 4]
```

`.concat()` 

连接两个数组。

```
const myConcat = (arr1,arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));	// [1, 2, 3, 4, 5]
```

