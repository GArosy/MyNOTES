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
```

循环：

```
for (i = 0; i < 5; i++) {
    x += i;
}
```

条件语句：

```
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
var John = {sexual:male, height:175, weight:70}
```

以上实例将三个**值 value** `male` `175` `70` 赋予变量 `John`，每个值有对应的 **键 key**，key + value = 键值对 = 属性。

 JavaScript 对象中：

- **键值对 **通常被称作 **对象属性**；
- 键值对中的 **值（变量）**通常被称作 **属性变量**；

> 键必须为字符串，值可以为任意基本数据类型。
>
> 可以说，**JavaScript对象是键值对的容器**；也可以说，**JavaScript对象是属性变量的容器**。

#### 对象属性

访问对象属性有两种方法：

```javascript
John.height
John["weight"]
```

#### 对象方法

对象**方法**定义了一个**函数**，并储存为对象的**属性**，通过 `()` 调用。

```javascript
<script>
var person = {
	firstName : John,
	lastName : Doe,
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



###  this

面向对象语言中 this 表示当前对象的一个**引用**。

this指向的是该this所在的最里层的object对象。

- 在方法中，this 表示该方法所属的对象。
- 如果单独使用，this 表示全局对象。
- 在函数中，this 表示全局对象。
- 在函数中，在严格模式下，this 是未定义的(undefined)。
- 在事件中，this 表示接收事件的元素。
- 类似 call() 和 apply() 方法可以将 this 引用到任何对象。

> [JS中this关键字详解 - 沙沙起 - 博客园 (cnblogs.com)](https://www.cnblogs.com/lisha-better/p/5684844.html)

### let 和 const

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



### forEach

[(17条消息) JavaScript forEach()的用法_路虽远，行则必至！-CSDN博客_前端foreach用法](https://luckylifes.blog.csdn.net/article/details/99290078?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-1.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-1.pc_relevant_default&utm_relevant_index=2)



### 箭头函数 =>

[(17条消息) ES6新特性箭头函数语法、如何正确使用箭头函数_Hayley2016的博客-CSDN博客_箭头函数](https://blog.csdn.net/qq_32614411/article/details/80897256)

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





## JavaScript 特性

### 调试

#### console.log() 方法

JavaScript 中，`print` 功能可由 `alert()` 和 `console.log()` 实现，但 `alert()` 会将所有内容隐式转换为字符串，且弹窗会阻塞后续的脚本执行，因此推荐使用 `console.log()` 在控制台中调试代码。

#### debugger 关键字

用于停止执行 JavaScript，并调用调试函数。（等于设置断点）



### 变量提升

JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明。因为JS具有 **hoisting 声明提升** 的特性：函数声明和变量声明总是会被解释器悄悄地被"提升"到方法体的最顶部。

需要注意的是，只有声明的变量会提升，初始化的则不会：

```
var x = 5; // 初始化 x

elem = document.getElementById("demo"); // 查找元素
elem.innerHTML = x + " " + y;           // 显示 x 和 y

var y = 7; // 初始化 y
```

以上代码中的 `y` 输出了 `undefined` ，因为初始化的 `y=7` 并不会被提升

```
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

## 参考手册

### JavaScript 对象

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

