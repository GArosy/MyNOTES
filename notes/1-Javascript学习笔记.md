# JavaScript Note

## 零、基本用法

### 内联脚本

可放置于HTML的`<head>`或`<body>`

```JS
<script> 
    alert("我的第一个JavaScript"); 
</script>
```

### 外部脚本

在HTML中声明并调用外部`.js`，外部文件可被多个网页使用。
```JS
<script src="myScript.js"></script>
```

> - 在标签中填写 onclick 事件调用函数时，不是 **`onclick=函数名`**， 而是 **`onclick=函数名+()`**
> - 外部 `.js`文件不使用 `<script>` 标签，直接写代码

## 一、JavaScript 语言基础

### 语法

在HTML中，JavaScript通过**语句**向浏览器发出命令

- 一条语句通常用`;` 作为结束符。
- 复杂语句：
  - 将左花括号放在第一行的结尾。
  - 左花括号前添加一空格。
  - 将右花括号独立放在一行。
  - 不要以分号结束一个复杂的声明。

注释：

```
//这是一条注释
/* 这是多行注释 */
```

### 语句

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

转义字符：

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



### 函数

```js
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

// ES6 里允许给函数传入默认参数
function greeting(name = "Anonymous") {
	return "Hello" + name;
}
```



### 数据类型

#### 基本类型

JavaScript 是一种**弱类型**语言（**动态**语言）。这意味着你不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。这也意味着你可以使用同一个变量保存不同类型的数据。

最新的 ECMAScript 标准定义了 8 种数据类型：

- 7种**原始类型**（可使用 `typeof` 运算符检查）
  - 字符串 `String` : `typeof "John" === "string"`
  - 数字 `Number` : `typeof 3.14 === "number"`
  - 大整数 `BitInt` : `typeof 90000512482415n === "bigint"`
  - 布尔 `Boolean` : `typeof false === "boolean"`
  - 对空 `Null` : `typeof null === "object"`
  - 未定义 `Undefined` : `typeof v === "undefined"`
  - 符号（ES6新增） `Symbol` : `typeof v === "symbol"`
- 引用类型
  - 对象 `Object` ：任何 `constructed` 对象实例的特殊非数据结构类型，也用做数据结构：`new Object()`，`new Array()`，`new Map()`，`new Date()`，和几乎所有通过 `new [keyword]` 创建的东西。
  - 数组 `Array`
  - `Map` 
  - `Set` 

如果对象是数组 `Array`、日期 `Date` 、`null`，我们无法通过 `typeof` 判断其类型，因为返回值都是 `object`。

> - `undefined`：是所有没有赋值变量的默认值，自动赋值；
>
> - `null`：表示一个空对象引用，类型为 `object`，通常在主动释放一个应用对象时使用；

#### 类型转换

##### constructor 属性

constructor 属性返回所有 JavaScript 变量的**构造函数**：

```js
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

##### JavaScript类型转换

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

- 数组 <-> 字符串

  >  [JS数组转字符串（3种方法）和字符串转数组（2种） - 云+社区 - 腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1847208) 



## 二、变量、作用域与内存

### 变量

在编程语言中，变量是用于储存数据值的**名称**。JavaScript使用关键字`var` **声明**变量，使用`=`为变量**赋值**：

```js
var age, height;		// 声明
age = 23;
height = 175;			// 赋值

var v1,v2,v3 = 'hello';	// 声明了v1,v2,声明并赋值了v3
var v4=v5=v6='hello';	// 声明并赋值了v4,v5,v6

console.log(v1,v2,v3); 	// undefined undefined "hello"
console.log(v4,v5,v6); 	// hello hello hello
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

### 作用域

JavaScript中，作用域为可访问的变量、对象、函数的集合。

在函数内部声明的变量，为**局部变量**，具有局部作用域。局部变量在函数开始执行时创建，在执行完成后销毁。局部变量只作用于函数内，所以不同函数可以使用相同名称的变量。

在函数外部定义的变量，为**全局变量**，具有全局作用域，网页中所有脚本和函数均可使用。全局变量在页面关闭时销毁。

一个程序中有可能具有相同名称的局部变量和全局变量。 在这种情况下，局部变量将会优先于全局变量。

没有被声明的变量默认为**全局变量**。

### 垃圾回收

==待补充==



## 三、基本引用类型

### 正则表达式

ECMAScript 通过 `RegExp` 类型支持正则表达式：

```
let expression = /pattern/flags;
```

#### 常用方法

1. 字符串方法：

   - `search()` 方法用于检索与正则式相匹配的字符串，并返回字符串的起始位置：

     ```js
     let str = "Hello world!";
     let n = str.search(/World/i);
     console.log(n);	//6
     ```

   - `match()` 方法用于提取找到的实际匹配项：

     ```js
     let ourStr = "Regular expressions";
     let ourRegex = /expressions/;
ourStr.match(ourRegex); // expressions
     ```

   - `replace()` 方法用于替换在字符串中与正则式相匹配的字符串。第一个参数接收正则表达式匹配模式 ，第二个用于替换匹配的字符串或用于执行某些操作的函数。

     ```js
     let wrongText = "The sky is silver.";
     let silverRegex = /silver/;
     wrongText.replace(silverRegex, "blue");
     // The sky is blue.
     ```
     
      还可以使用 `$` 访问替换字符串中的捕获组。 
     
     ```js
     "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
     // Camp Code
     ```
   


2. RegExp 实例方法：

   - `test()` 用于检测字符串是否匹配某个模式，返回**布尔值**。常用于验证用户输入。

   ```js
   let text = "000-00-0000";
   let pattern = /\d{3}-\d{2}-\d{4}/;
   
   if(pattern.test(text)) {
       return "The pattern was matched."
   };
   ```

   - `exec()` 用于检测字符串的匹配，返回一个**数组**存放匹配结果，数组中第一个元素是匹配整个模式的字符串，其他元素是与表达式中的**捕获组**匹配的字符串。如果未匹配则返回 `null`。

     返回的数组包含两个额外的属性：

     - `index` 字符串中匹配模式的起始位置；

     - `input` 要查找的字符串；

   ```js
   let text = "mom and dad and baby";
   let pattern = /mom( and dad( and baby)?)?/gi;
   
   let matches = pattern.exec(text);
   
   console.log(matches.index);		// 0
   console.log(matches.input);		// "mom and dad and baby"
   console.log(matches[0]);		// "mom and dad and baby"
   console.log(matches[1]);		// " and dad and baby"
   console.log(matches[2]);		// " and baby"
   ```

   如果没有设置全局标记，`exec()` 只会返回第一个匹配项。

#### 修饰符与表达式模式

| 修饰符 | 描述                                                     |
| :----- | :------------------------------------------------------- |
| i      | 执行对大小写不敏感的匹配。                               |
| g      | 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。 |
| m      | 执行多行匹配。                                           |
| y      | 粘附模式，只查找从 `lastIndex` 及之后的字符串。          |
| s      | dotAll 模式，表示元字符 `.` 匹配任何字符。               |

| 元字符 | 描述                                                         |
| :----- | :----------------------------------------------------------- |
| \      | 将下一字符标记为特殊字符、文本、反向引用或八进制转义符。     |
| [ ]    | 字符集。匹配包含的任一字符。例如，“[abc]”匹配“plain”中的“a”。 |
| ( )    | 匹配括号中的 *pattern* 并捕获该匹配的子表达式。可以使用 \$0…\$9 属性从结果“匹配”集合中检索捕获的匹配。 |
| { }    | *n* 和 *m* 是非负整数，其中 *n* <= *m*。匹配至少 *n* 次，至多 *m* 次。例如，“o{1,3}”匹配“fooooood”中的头三个 o。'o{0,1}' 等效于 ‘o?'。 |
| ^      | 匹配输入字符串开始的位置。                                   |
| $      | 匹配输入字符串结尾的位置。                                   |
| \|     | 匹配 *x* 或 *y*。例如，`z|food` 匹配“z”或“food”。`(z|f)ood` 匹配“zood”或“food” |
| +      | 一次或多次匹配前面的字符或子表达式。例如，“zo+”与“zo”和“zoo”匹配，但与“z”不匹配。+ 等效于 `{1,}`。 |
| *      | 零次或多次匹配前面的字符或子表达式。例如，zo* 匹配“z”和“zoo”。* 等效于 `{0,}`。 |
| ?      | 零次或一次匹配前面的字符或子表达式。例如，“do(es)?”匹配“do”或“does”中的“do”。? 等效于 `{0,1}`。 |
| .      | 匹配除 \n 以外的任何字符                                     |
| \n     | 换行符匹配                                                   |
| \d     | 查找数字。                                                   |
| \D     | 非数字字符匹配。等效于 `[^0-9]`                              |
| \s     | 匹配任何空白字符。包括空格、制表符、换页符等。与 `[ \f\n\r\t\v]` 等效。 |
| \S     | 匹配任何非空白字符。与 `[^ \f\n\r\t\v]` 等效。               |
| \w     | 匹配任何字类字符，包括下划线。与 `[A-Za-z0-9_]` 等效。       |
| \W     | 与任何非单词字符匹配。与 `[^A-Za-z0-9_]` 等效。              |
| \b     | 匹配单词边界。                                               |
| \uxxxx | 查找以十六进制数 xxxx 规定的 Unicode 字符。                  |
| \num   | 匹配 *num*，此处的 *num* 是一个正整数。到捕获匹配的反向引用。例如，`(.)\1` 匹配两个连续的相同字符。 |

#### 贪婪匹配和惰性匹配

 贪婪（greedy）匹配会匹配到符合正则表达式匹配模式的字符串的最长可能部分，并将其作为匹配项返回。 另一种方案称为惰性（lazy）匹配，它会匹配到满足正则表达式的字符串的最小可能部分。 

例如正则表达式 `/t[a-z]*i/` 应用于字符串 `"titanic"`。 这个正则表达式是一个以 `t` 开始，以 `i` 结束，并且中间有一些字母的匹配模式。 **正则表达式默认是贪婪匹配**，因此匹配返回为 `["titani"]` 。 

可以使用 `?` 字符来将其变成惰性匹配，调整后的正则表达式 `/t[a-z]*?i/` 匹配字符串 `"titanic"` 返回 `["ti"]`。

又例如：

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/;					// 贪婪匹配
let result = text.match(myRegex);		// <h1>Winter is coming</h1>

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;					// 加入问号变惰性匹配
let result = text.match(myRegex);		// <h1>
```

#### 先行断言

先行断言 （Lookaheads）是告诉 JavaScript 在字符串中向前查找的匹配模式。 当想要在同一个字符串上搜寻多个匹配模式时，这可能非常有用。

有两种先行断言：正向先行断言（positive lookahead）和负向先行断言（negative lookahead）。

正向先行断言会查看并确保搜索匹配模式中的元素存在，但实际上并不匹配。 正向先行断言的用法是 `(?=...)`，其中 `...` 就是需要存在但不会被匹配的部分。

另一方面，负向先行断言会查看并确保搜索匹配模式中的元素不存在。 负向先行断言的用法是 `(?!...)`，其中 `...` 是希望不存在的匹配模式。 如果负向先行断言部分不存在，将返回匹配模式的其余部分。

先行断言的更实际用途是检查一个字符串中的两个或更多匹配模式。 这里有一个简单的密码检查器，密码规则是 3 到 6 个字符且至少包含一个数字：

```js
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
```

大于 5 个字符且有两个连续数字的密码：

```js
let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);
```

####  捕获组重用

当你想要匹配一个像下面这样多次出现的单词，

```js
let repeatStr = "row row row your boat";
```

你可以使用 `/row row row/`。但如果你不知道重复的特定单词，怎么办？ **捕获组**可以用于找到重复的子字符串。

捕获组是通过把要捕获的正则表达式放在括号中来构建的。 在这个例子里， 目标是捕获一个包含字母数字字符的词，所以捕获组是将 `\w+` 放在括号中：`/(\w+)/`。

分组匹配的子字符串被保存到一个临时的“变量”， 可以使用同一正则表达式和反斜线及捕获组的编号来访问它（例如：`\1`）。 捕获组按其开头括号的位置自动编号（从左到右），从 1 开始。

下面的示例是匹配被空格隔开的两个相同单词：

```js
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
```

在字符串上调用 `.match()` 方法将返回一个数组，其中包含它最终匹配到的子字符串及其捕获组。

##### 实例

```js
/* 删除开头和结尾的空白 */
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // 注意添加全局模式
let result = hello.replace(wsRegex, ""); 


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

#### RegExp 对象

==待补充==

### 原始值包装类型

#### Boolean

#### Number

#### String

`.parseInt(string, radix)` 

 解析一个字符串 `string` ，`radix` 指定字符串中数字的基数（进制），返回一个整数。

```
const a = parseInt("11", 2);
// 返回值为 3
```

`.split(separator, limit)` 

将给定字符串拆分为字符串数组，使用第一个参数中提供的指定分隔符将其分隔为子字符串，第二个参数用于指定返回的数组的最大长度。 

```js
var str="Hello world";
var n=str.split("", 5);
var m=str.split(" ");
console.log(n);
console.log(m);
// ['H', 'e', 'l', 'l', 'o']
// ['Hello', 'world']
```



### 单例内置对象

#### Global

#### Math

##### 数值取整

[JavaScript四种数值取整方法 - 后除 - 博客园 (cnblogs.com)](https://www.cnblogs.com/mazey/p/8447093.html)

##### 随机数

使用 `Math.random()` 生成一个在 0（**包括0**）到 1（**不包括1**）之间的随机**小数**。

可以搭配 `Math.floor()` 向下取整得到随机整数：

```js
integer = Math.floor(Math.random() * 10);	// 0-10的随机整数
integer = Math.floor(Math.random() * (max - min + 1) + min)	// min-max的随机整数
```



## 四、集合引用类型

 遍历`Array`可以采用下标循环，遍历`Map`和`Set`就无法使用下标。为了统一集合类型，ES6标准引入了新的`iterable`类型，`Array`、`Map`和`Set`都属于`iterable` （可迭代）类型。 



### Object

`Object.keys()` 

 传入一个对象作为参数，生成包含对象所有键的数组。 

`Object.prototype.toString()` 

  每个对象都有一个 `toString()` 方法返回一个表示该对象的字符串。 

### Array

`.slice()`

从已有的数组中返回选定的元素，不会改变原始数组。

```js
const arr = [1, 2, 3, 4];
const sli = arr.slice(1,3);
// sli 现在值为 [2, 3]
// array.slice(start, end) 包含 start 但不包含 end 
```

`.splice()` 

向/从数组添加/删除项目，并返回删除的项目。会改变原始数组。

- `index` 必需。整数，指定在什么位置添加/删除项目，使用负值指定从数组末尾开始的位置。 
- `howmany` 可选。要删除的项目数。如果设置为 0，则不会删除任何项目。 
- `item1, ..., itemX` 可选。要添加到数组中的新项目。 

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
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

`.from()` 

对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。 可用于将字符串转为数组。

- `arrayLike`想要转换成数组的伪数组对象或可迭代对象。

- `mapFn` 可选，如果指定了该参数，新数组中的每个元素会执行该回调函数。
- `thisArg` 可选参数，执行回调函数 `mapFn` 时 `this` 对象。

```js
// 从 String 生成数组
Array.from('foo');
// [ "f", "o", "o" ]
```

`.join()` 

用于把数组中的所有元素放入一个字符串。参数用于指定分隔符：

```js
var a = ["00", "01", "02", "03", "04"];
var b = a.join();
var c = a.join('');
var d = a.join('-');
console.log(b,c,d);
// 00,01,02,03,04
// 0001020304
// 00-01-02-03-04
```

`.reverse()` 

 将数组中元素的位置颠倒，并返回该数组。 

`.reduce()` 

这是一个常用的「函数式编程」技术。

**语法：**

```js
arr.reduce(function(prev,cur,index,arr){...}, init);
```

reduce() 的参数包含一个「回调函数」和一个「初始值 init」，其中回调函数包含四个参数：

- `prev` 上一次调用回调时的返回值，或者初始值 init；不提供初始值时为第一项的值；
- `cur` 当前正在处理的数组元素； 
- `index` 当前正在处理的数组元素的索引，若提供 init 值，则索引为0，否则索引为1； 
- `arr` 原数组 ；

其中常用的是 `prev` `cur` 参数。

**使用例：** 

```js
const arr = [3, 9, 4, 3, 6, 0, 9];

// 求数组各项之和
let sum = arr.reduce(function(prev, cur) {
	return prev + cur
},0);
// init为0，所以prev开始时为0，cur的值为第一项3，相加之后返回3作为下一轮回调的prev值，再与下一项cur相加，直至完成所有数组项的求和

// 求数组项最大值
let max = arr.reduce(function(prev, cur) {
	return Math.max(prev, cur);
})
// 未传入初始值，所以prev为第一项3，cur为第二项9，取两值最大值进入下一轮回调
```

### Map

JavaScript中默认的对象表达方式 `{}` 可以视为其他语言中的 `Map` 或 `Dic` 数据结构，即一组键值对。但JavaScript的键必须是字符串，在需要使用其他数据类型作为键时引发了诸多不便。

为解决这个问题，ES6引入了新的数据结构 `Map` 。

`Map` 是键值对的集合，并且能够记住键的原始插入顺序。比起 `Object` 结构的「字符串——值」对应，`Map` 提供了「值——值」的对应。此外，`Map` 具有极快的查找速度。

|          | Map                                   | Object                                     |
| -------- | ------------------------------------- | ------------------------------------------ |
| 键值类型 | 键值可以是任意值                      | 键值只能是String或者Symbols                |
| 是否有序 | √                                     | ×                                          |
| 查询特性 | size可属性直接获取一个Map的键值对个数 | 键值对个数只能手动计算                     |
| 迭代特性 | 可迭代                                | 需要先获取键的数组然后再进行迭代           |
| 意外的键 | 默认情况不包含任何键                  | 原型链上的键名有可能和对象上的键名产生冲突 |

#### 初始化

初始化 `Map` 需要一个二维数组，或者直接初始化一个空`Map`。其构造函数为 `Map()` 。

```js
new Map([iterable])
```

- `iterable`  一个数组或者其他可迭代对象，其元素为键值对（两个元素的数组，例如: `[[ 1, 'one' ], [ 2, 'two' ]]`）。 每个键值对都会添加到新的 Map。`null` 会被当做 `undefined。` 

```js
// 示例
let myMap = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])

let m = new Map(); 	// 空Map
m.set('Adam', 67); 	// 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); 		// 是否存在key 'Adam': true
m.get('Adam'); 		// 67
m.delete('Adam'); 	// 删除key 'Adam'
m.get('Adam'); 		// undefined
```

 一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值覆盖掉： 

```js
var m = new Map();
m.set('Adam', 67);
m.set('Adam', 88);
m.get('Adam'); // 88
```

#### 属性

- `Map.prototype.size` 

  可访问属性，用于返回一个`Map` 对象的成员数量， 表示 `Map` 对象有多少个键值对。 

  ```js
  const map1 = new Map();
  
  map1.set('a', 'alpha');
  map1.set('b', 'beta');
  map1.set('g', 'gamma');
  
  console.log(map1.size);
  // expected output: 3
  ```

  

#### 方法

- `Map.prototype.clear()` 

   移除Map对象中的所有元素。 

  

- `Map.prototype.delete()` 

   移除 `Map` 对象中指定的元素。 

  ```js
  myMap.delete(key);
  ```

  *key* ： 必须。从 `Map` 对象中移除的元素的**键**。 

  返回值： 存在该元素，则移除它并返回 `true`；否则如果该元素不存在则返回 `false`。 

  

- `Map.prototype.forEach()` 

   按照插入顺序依次对 `Map` 中每个键值对执行一次给定的函数。

  ```js
  myMap.forEach(callback([value][,key][,map])[, thisArg])
  ```

  `callback` 接收**三个参数**：

  - 当前的 `value`
  - 当前的 `key`
  - 正在被遍历的 **`Map` 对象** 

  如果 `forEach` 中含有 `thisArg` 参数，那么每次 `callback` 被调用时，都会被用作 `this` 的值。否则，`undefined` 将会被用作 `this` 的值。 

- `Map.prototype.get()`

   返回某个 `Map` 对象中的一个指定元素。 

  ```js
  myMap.get(key);
  ```

- `Map.prototype.has()`

   返回一个bool值，用来表明map 中是否存在指定元素。

- `Map.prototype.set()` 

   为 `Map` 对象添加或更新一个指定了键（`key`）和值（`value`）的（新）键值对。 

  ```js
  myMap.set(key, value);
  ```

### Set

 `Set`和`Map`类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在`Set`中，没有重复的key。 

 要创建一个`Set`，需要提供一个`Array`作为输入，或者直接创建一个空`Set`： 

```js
var s1 = new Set(); // 空Set
var s2 = new Set([1, 2, 3]); // 含1, 2, 3

// 重复元素在Set中自动被过滤：
var s = new Set([1, 2, 3, 3, '3']);
s; // Set {1, 2, 3, "3"}
```

#### 属性

- `Set.prototype.size` 

  返回 Set 对象中的值的个数 

#### 方法

- `Set.prototype.add(value)` 

  在`Set`对象尾部添加一个元素。返回该`Set`对象。 

- `Set.prototype.values()` / `keys()`

  按照元素插入顺序返回一个具有 `Set` 对象每个元素值的全新 `Iterator` 对象。 



### for...of 循环 

`for...of` 和 `for...in` 相似，都用来遍历集合：

```js
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历Array
    console.log(x);
}
for (var x of s) { // 遍历Set
    console.log(x);
}
for (var x of m) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
}
// A B C
// A B C
// 1=x 2=y 3=z
```

 `for ... in`循环由于历史遗留问题，它遍历的实际上是对象的**属性名称**。一个`Array`数组实际上也是一个对象，它的每个元素的索引被视为一个属性。

当我们手动给`Array`对象添加了额外的属性后，`for ... in`循环将带来意想不到的意外效果：

```js
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x in a) {
    console.log(x); // '0', '1', '2', 'name'
}
```

 `for ... in`循环将把`name`包括在内，但`Array`的`length`属性却不包括在内。

 `for ... of`循环则完全修复了这些问题，它只循环集合本身的元素： 

```js
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x of a) {
    console.log(x); // 'A', 'B', 'C'
}
```

### forEach() 方法

 具有`iterable`类型的集合都可以通过  `forEach()` 方法进行迭代：

```js
// Array 为例：
var a = ['A', 'B', 'C'];
a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向对象本身
    console.log(element + ', index = ' + index);
});
// A, index = 0
// B, index = 1
// C, index = 2

// Set 为例：
var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, sameElement, set) {
    console.log(element);
});
// A
// B
// C

// Map 为例：
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    console.log(value);
});
// x
// y
// z
```



## 五、JavaScript 表单脚本

### JavaScript 表单验证

判断表单字段(`fname`)值是否存在，如果不存在，就弹出信息阻止表单提交：

```js
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

```js
<form name="myForm" action="demo_form.php" onsubmit="return validateForm()" method="post">
名字 <input type="text" name="fname">
<input type="submit" value="提交">
</form>
```

### HTML 约束验证

HTML5 新增了 HTML 表单的验证方式：约束验证。基于：

- HTML 输入属性
- CSS 伪类选择器
- DOM 属性和方法



### JavaScript 验证 API

> APIs (application programming interfaces)，即应用程序编程接口。API由服务器（Server）提供，通过API，计算机可以读取、编辑网站的数据。

==待补充==







### forEach

[(17条消息) JavaScript forEach()的用法_路虽远，行则必至！-CSDN博客_前端foreach用法](https://luckylifes.blog.csdn.net/article/details/99290078?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-1.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-1.pc_relevant_default&utm_relevant_index=2)



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





## 五、JS HTML DOM

通过 HTML DOM，可访问 JavaScript HTML 文档的所有元素。

### HTML DOM

当网页被加载时，浏览器会创建页面的**文档对象模型** (Document Object Model)。

HTML DOM 模型被构造为**对象**的树：

![HTML DOM 树](https://www.runoob.com/images/pic_htmltree.gif)



## 六、函数

###  立即调用函数表达（IIFE）

JavaScript 中的一个常见模式就是，函数在声明后立刻执行：

```js
(function () {
  console.log("Chirp, chirp!");
})();
```

 这是一个匿名函数表达式，立即执行并输出 `Chirp, chirp!`。  函数表达式末尾的两个括号（）会让它被立即执行或调用。 这种模式被叫做立即调用函数表达式（immediately invoked function expression) 或者IIFE。 

## 七、面向对象编程

### 理解对象

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





## 八、JavaScript 特性

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



## 九、ES6 新特性

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

  ```js
  const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
  console.log(a, b);
  console.log(arr);
  // 1, 2
  // [3, 4, 5, 7]
  // rest 操作符只能对数组列表最后的元素起作用
  ```

  

- 扩展运算符： 把数组或类数组对象解压成一组用逗号隔开的参数。

  ```js
  let thisArray = ['rosemary', 'parsley'];
  
  let thatArray = ['cilantro', ...thisArray, 'coriander'];
  
  console.log(thatArray);
  //['cilantro', 'rosemary', 'parsley', 'coriander']
  ```

  

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



### Map

JavaScript中默认的对象表达方式 `{}` 可以视为其他语言中的 `Map` 或 `Dic` 数据结构，即一组键值对。但JavaScript的键必须是字符串，在需要使用其他数据类型作为键时引发了诸多不便。

为解决这个问题，ES6引入了新的数据结构 `Map` 。

`Map` 是键值对的集合，并且能够记住键的原始插入顺序。比起 `Object` 结构的「字符串——值」对应，`Map` 提供了「值——值」的对应。此外，`Map` 具有极快的查找速度。

|          | Map                                   | Object                                     |
| -------- | ------------------------------------- | ------------------------------------------ |
| 键值类型 | 键值可以是任意值                      | 键值只能是String或者Symbols                |
| 是否有序 | √                                     | ×                                          |
| 查询特性 | size可属性直接获取一个Map的键值对个数 | 键值对个数只能手动计算                     |
| 迭代特性 | 可迭代                                | 需要先获取键的数组然后再进行迭代           |
| 意外的键 | 默认情况不包含任何键                  | 原型链上的键名有可能和对象上的键名产生冲突 |

#### 初始化

初始化 `Map` 需要一个二维数组，或者直接初始化一个空`Map`。其构造函数为 `Map()` 。

```js
new Map([iterable])
```

- `iterable`  一个数组或者其他可迭代对象，其元素为键值对（两个元素的数组，例如: `[[ 1, 'one' ], [ 2, 'two' ]]`）。 每个键值对都会添加到新的 Map。`null` 会被当做 `undefined。` 

```js
// 示例
let myMap = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])

let m = new Map(); 	// 空Map
m.set('Adam', 67); 	// 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); 		// 是否存在key 'Adam': true
m.get('Adam'); 		// 67
m.delete('Adam'); 	// 删除key 'Adam'
m.get('Adam'); 		// undefined
```

 一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值覆盖掉： 

```js
var m = new Map();
m.set('Adam', 67);
m.set('Adam', 88);
m.get('Adam'); // 88
```

#### 属性

- `Map.prototype.size` 

  可访问属性，用于返回一个`Map` 对象的成员数量， 表示 `Map` 对象有多少个键值对。 

  ```js
  const map1 = new Map();
  
  map1.set('a', 'alpha');
  map1.set('b', 'beta');
  map1.set('g', 'gamma');
  
  console.log(map1.size);
  // expected output: 3
  ```

  

#### 方法

- `Map.prototype.clear()` 

   移除Map对象中的所有元素。 

  

- `Map.prototype.delete()` 

   移除 `Map` 对象中指定的元素。 

  ```js
  myMap.delete(key);
  ```

  *key* ： 必须。从 `Map` 对象中移除的元素的**键**。 

  返回值： 存在该元素，则移除它并返回 `true`；否则如果该元素不存在则返回 `false`。 

  

- `Map.prototype.forEach()` 

   按照插入顺序依次对 `Map` 中每个键值对执行一次给定的函数。

  ```js
  myMap.forEach(callback([value][,key][,map])[, thisArg])
  ```

  `callback` 接收**三个参数**：

  - 当前的 `value`
  - 当前的 `key`
  - 正在被遍历的 **`Map` 对象** 

  如果 `forEach` 中含有 `thisArg` 参数，那么每次 `callback` 被调用时，都会被用作 `this` 的值。否则，`undefined` 将会被用作 `this` 的值。 

- `Map.prototype.get()`

   返回某个 `Map` 对象中的一个指定元素。 

  ```js
  myMap.get(key);
  ```

- `Map.prototype.has()`

   返回一个bool值，用来表明map 中是否存在指定元素。

- `Map.prototype.set()` 

   为 `Map` 对象添加或更新一个指定了键（`key`）和值（`value`）的（新）键值对。 

  ```js
  myMap.set(key, value);
  ```

### Set

 `Set`和`Map`类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在`Set`中，没有重复的key。 

 要创建一个`Set`，需要提供一个`Array`作为输入，或者直接创建一个空`Set`： 

```js
var s1 = new Set(); // 空Set
var s2 = new Set([1, 2, 3]); // 含1, 2, 3

// 重复元素在Set中自动被过滤：
var s = new Set([1, 2, 3, 3, '3']);
s; // Set {1, 2, 3, "3"}
```

#### 属性

- `Set.prototype.size` 

  返回 Set 对象中的值的个数 

#### 方法

- `Set.prototype.add(value)` 

  在`Set`对象尾部添加一个元素。返回该`Set`对象。 

- `Set.prototype.values()` / `keys()`

  按照元素插入顺序返回一个具有 `Set` 对象每个元素值的全新 `Iterator` 对象。 



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



## 错误处理与调试

### try/catch 语句

`try` 语句允许执行错误的代码块，`catch` 语句在 `try` 代码块发生错误时将被执行， `try` 和 `catch` 是**成对出现**的。

```js
try {
	...		// 可能出错的代码
}
catch(error) {
	...		// 出错后要做什么
}
finally {
	...		// 结束处理
}
```

如果 `try` 块有代码发生错误，代码会立即退出执行，并跳到 `catch` 块中。`catch` 块此时会接收到一个包含错误发生信息的对象（必须为其定义名称），可以通过访问其 `message` 属性输出错误信息：

 ```js
try {
    
} catch(error) {
    console.log(error.message);
}
 ```

#### 1. finally 子句

`finally` 块会在抛出错误后继续运行，包括 `return` 语句：

```js
function testFinally() {
    return 2;
} catch(e) {
    return 1;
} finally {
    return 0;
}	// 无论如何都会返回0
```

> 只要代码中包含了 finally 子句，try 或 catch 中的 return 语句就会被忽略。

#### 2. 抛出错误

`throw` 操作符用于抛出一个用户自定义的异常，而当前函数的执行将被停止（`throw` 之后的语句并不会被执行）。通常配合 `try` 和 `catch` 一起使用，起到控制程序流的作用。

例如：

```js
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

### 调试技术

#### 1. 控制台

`console` 对象包含如下方法

- `error()` 在控制台中记录错误消息；

- `info()` 在控制台中记录信息性内容；

- `log()` 在控制台中记录常规消息；

- `warn()` 在控制台中记录警告消息；

- `clear()` 清除日志；

- `group()` 建立console命令组；

  ```js
  console.group("test group")
  console.log(1)
  console.log(2)
  console.groupEnd("test group")
  // 1
  // 2
  ```

- `time()` 输出代码执行时间：

  ```js
  console.time()
  f();
  console.timeEnd()
  // default: 0.1658465123ms
  ```

- `table()` 以表格形式输出对象：

  ```js
  console.table(
      [
          {id: 1, name: 'Jack'}, 
          {id: 2, name:'Mary'}
      ]
  )
  ```

  输出：

  | (索引) | id   | name   |
  | :----- | :--- | :----- |
  | 0      | 1    | 'Jack' |
  | 1      | 2    | 'Mary' |

- 

#### 2. debugger  打断点

#### 3. 使用 chrome devtools

#### 4.  vscode debugger for chrome 



## 函数式编程

「函数式编程」是一种方案简单、功能独立、对作用域外没有任何副作用的编程范式（方法论），它属于「结构化编程」的一种。

```
输入 -> 处理 -> 输出
```

### 1. 特点

- 功能独立——不依赖于程序的状态，低耦合度；
- 纯函数——同一个输入永远能得到同一个输出；
- 副作用小——可以严格地限制函数外部对状态的改变；

### 2. 术语

- `Callbacks` 是被传递到另一个函数中调用的函数。例如在 `filter` 中，回调函数告诉 JavaScript 以什么规则过滤数组。 
- `first class` 函数就像其他正常值一样，可以赋值给变量、传递给另一个函数，或从其它函数返回，这种函数叫做「头等函数」（一等公民）。 在 JavaScript 中，所有函数都是头等函数。
- `higher order` 将函数为参数或返回值的函数叫做「高阶函数」。 
- `lambda` 当函数被传递给另一个函数或从另一个函数返回时，那些传入或返回的函数可以叫做 lambda。

### 3. 实现

- 函数应避免改变传入的参数、全局变量等数据；
- 应总是**显式声明依赖关系**：如果函数依赖于一个变量或对象，那么将该变量或对象作为参数直接传递到函数中。 



## 附、参考手册

### JavaScript 对象

#### Object

`Object.keys()` 

 传入一个对象作为参数，生成包含对象所有键的数组。 

`Object.prototype.toString()` 

  每个对象都有一个 `toString()` 方法返回一个表示该对象的字符串。 

#### String

`.parseInt(string, radix)` 

 解析一个字符串 `string` ，`radix` 指定字符串中数字的基数（进制），返回一个整数。

```
const a = parseInt("11", 2);
// 返回值为 3
```

`.split(separator, limit)` 

将给定字符串拆分为字符串数组，使用第一个参数中提供的指定分隔符将其分隔为子字符串，第二个参数用于指定返回的数组的最大长度。 

```js
var str="Hello world";
var n=str.split("", 5);
var m=str.split(" ");
console.log(n);
console.log(m);
// ['H', 'e', 'l', 'l', 'o']
// ['Hello', 'world']
```



#### Array

`.slice()`

从已有的数组中返回选定的元素，不会改变原始数组。

```js
const arr = [1, 2, 3, 4];
const sli = arr.slice(1,3);
// sli 现在值为 [2, 3]
// array.slice(start, end) 包含 start 但不包含 end 
```

`.splice()` 

向/从数组添加/删除项目，并返回删除的项目。会改变原始数组。

- `index` 必需。整数，指定在什么位置添加/删除项目，使用负值指定从数组末尾开始的位置。 
- `howmany` 可选。要删除的项目数。如果设置为 0，则不会删除任何项目。 
- `item1, ..., itemX` 可选。要添加到数组中的新项目。 

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
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

`.from()` 

对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。 可用于将字符串转为数组。

- `arrayLike`想要转换成数组的伪数组对象或可迭代对象。

- `mapFn` 可选，如果指定了该参数，新数组中的每个元素会执行该回调函数。
- `thisArg` 可选参数，执行回调函数 `mapFn` 时 `this` 对象。

```js
// 从 String 生成数组
Array.from('foo');
// [ "f", "o", "o" ]
```

`.join()` 

用于把数组中的所有元素放入一个字符串。参数用于指定分隔符：

```js
var a = ["00", "01", "02", "03", "04"];
var b = a.join();
var c = a.join('');
var d = a.join('-');
console.log(b,c,d);
// 00,01,02,03,04
// 0001020304
// 00-01-02-03-04
```

`.reverse()` 

 将数组中元素的位置颠倒，并返回该数组。 

`.reduce()` 

这是一个常用的「函数式编程」技术。

**语法：**

```js
arr.reduce(function(prev,cur,index,arr){...}, init);
```

reduce() 的参数包含一个「回调函数」和一个「初始值 init」，其中回调函数包含四个参数：

- `prev` 上一次调用回调时的返回值，或者初始值 init；不提供初始值时为第一项的值；
- `cur` 当前正在处理的数组元素； 
- `index` 当前正在处理的数组元素的索引，若提供 init 值，则索引为0，否则索引为1； 
- `arr` 原数组 ；

其中常用的是 `prev` `cur` 参数。

**使用例：** 

```js
const arr = [3, 9, 4, 3, 6, 0, 9];

// 求数组各项之和
let sum = arr.reduce(function(prev, cur) {
	return prev + cur
},0);
// init为0，所以prev开始时为0，cur的值为第一项3，相加之后返回3作为下一轮回调的prev值，再与下一项cur相加，直至完成所有数组项的求和

// 求数组项最大值
let max = arr.reduce(function(prev, cur) {
	return Math.max(prev, cur);
})
// 未传入初始值，所以prev为第一项3，cur为第二项9，取两值最大值进入下一轮回调
```



