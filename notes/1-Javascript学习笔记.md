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

> 执行上下文在运行时确定，可能改变；
>
> 作用域在定义时已经确定，不会改变。

### 垃圾回收

==待补充==



## 三、基本引用类型

### 正则表达式

ECMAScript 通过 `RegExp` 类型支持正则表达式：

```js
let expression = /pattern/flags;
/ab+c/i; //字面量形式
new RegExp('ab+c', 'i'); // 首个参数为字符串模式的构造函数
new RegExp(/ab+c/, 'i'); // 首个参数为常规字面量的构造函数
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

在字符串上调用 `.match()` 方法将返回一个数组，其中包含它最终匹配到的子字符串及其捕获组。

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

`some()`

测试数组中是不是**至少有1个**元素通过了回调函数的测试，返回一个布尔值。

```js
arr.some(callback(element[, index[, array]])[, thisArg]);
```

- 数组中一旦有一个元素通过回调函数的测试就会返回**`true`**；所有元素都没有通过回调函数的测试返回值才会为false。 

- `some()` 为数组中的每一个元素执行一次 `callback` 函数，直到找到一个使得 callback 返回一个“真值”（即可转换为布尔值 true 的值）。如果找到了这样一个值，`some()` 将会立即返回 `true`。否则，`some()` 返回 `false`。`callback` 只会在那些”有值“的索引上被调用，不会在那些被删除或从来未被赋值的索引上调用。 

- `some()` 被调用时不会改变数组。 

  

`every()`

与`some()`类似，测试一个数组内的**所有**元素是否都能通过了回调函数的测试，返回一个布尔值。

```js
arr.every(callback(element[, index[, array]])[, thisArg])
```

- `every` 方法为数组中的每个元素执行一次 `callback` 函数，直到它找到一个会使 `callback` 返回 假值的元素。如果发现了一个这样的元素，`every` 方法将会立即返回 `false`。否则，`callback` 为每一个元素返回 `true`，`every` 就会返回 `true`。 
- `every` 不会改变原数组。 



`find()` 

返回数组中满足回调函数的第一个元素的值。否则返回 `undefined`。 

```js
arr.find(callback(element[, index[, array]])[, thisArg])
```

-  `find`方法不会改变数组。 



`findIndex()` 

返回数组中满足提供的测试函数的第一个元素的**索引**。若没有找到对应元素则返回-1。 



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



## 五、表单脚本

用JavaScript来操作表单，可以获得用户输入的内容，或者对一个输入框设置新的内容。 

### 表单基础

1. form元素

   `<form>`元素在js中对应HTMLFormElement类型，其属性和方法有：

- acceptCharset： 一个空格分隔或逗号分隔的列表，此列表包括了服务器支持的字符编码。 
- action： 处理表单提交的 URL。 
- elements：表单中所有控件的HTMLCollection。
- encytype：请求的编码类型。
- length：控件的数量。
- method：HTTP请求方法类型。
- name：表单名字。
- reset()：重置表单字段。
- submit()：提交表单。
- target：用于发送请求和接收响应的窗口的名字。

document.forms集合可以获取页面上所有表单：

```js
let firstForm = document.forms[0];
let Form2 = document.forms["form2"];
```

2. 输入控件

   - 文本框，对应的` <input type="text"> `，用于输入文本；
   - 口令框，对应的` <input type="password"> `，用于输入密码；
   - 单选框，对应的` <input type="radio"> `，用于选择一项；
   - 复选框，对应的` <input type="checkbox"> `，用于选择多项；
   - 下拉框，对应的` <select> `，用于选择一项；
   - 隐藏文本，对应的` <input type="hidden"> `，用户不可见，但表单提交时会把隐藏文本发送到服务器。

   HTML5新增控件：

   - ```html
     <input type="date" value="2022-01-01">
     
     <input type="datetime-local" value="2021-12-02T20:21:12">
     
     <input type="color" value="#ff0000">
     ```

3. 提交表单

   表单通过点击`type`属性为`submit`的`<button>`/`<input>`按钮提交，或是通过type属性为image的`<input>`元素提交。

   ```html
   <!--通用提交按钮-->
   <input type="submit" value="Submit Form">
   
   <!--自定义提交按钮-->
   <button type="submit">Submit Form</button>
   
   <!--图片提交按钮-->
   <input type="image" src="image.jpg">
   ```

   以上方式在向服务器发送请求**之前**触发submit事件，这提供了一个验证表单数据的机会：

   ```js
   let form = document.getElementById("myForm");
   form.addEventListener("submit", (event)=>{
       // 组织表单提交
       event.preventDefault();
   }, false);
   ```

   此外，还能通过js中的submit()方法提交表单，在没有按钮的情况下也可以提交。但是submit事件此时不会触发。

   为防止重复提交，可以在表单提交后禁用提交按钮，或者通过`onsubmit`事件处理程序取消之后的提交。

4. 获取值

   对于type为`text/password/hidden`的input元素或select元素，可以直接调用`value`属性获得输入值；而单选框radio/复选框checkbox的勾选与否要通过`checked`判断：

   ```html
   <input type="text" id="email">
   <label><input type="radio" name="weekday" id="monday" value="1"> Monday</label>
   <label><input type="radio" name="weekday" id="tuesday" value="2"> Tuesday</label>
   
   <script>
   let input = document.getElementById("email");
   input.value;
       
   let mon = document.getElementById('monday');
   var tue = document.getElementById('tuesday');
   mon.value;	// 1
   tue.value;	// 2
   mon.checked;	// true/false
   tue.checked;	// true/false
   </script>
   ```

   

### 表单验证

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





## 五、BOM DOM

DOM描述了**处理网页内容**的方法和接口，BOM描述了**与浏览器进行交互**的方法和接口。 在BOM和DOM结构层次图中，document对象属于window对象，所以**DOM也可以看作是BOM的一部分**。

 

![img](https://pic4.zhimg.com/80/v2-a66d89cf1c74eb65da275e9b6685050f_720w.jpg) 



### BOM

浏览器对象模型（Browser Object Model） 是使用JS开发Web应用程序的核心。

1. window
2. navigator
3. screen
4. location
5. document
6. history

BOM负责的范围：

- **A区** 浏览器的标签页，地址栏，搜索栏，书签栏，窗口放大还原关闭按钮，菜单栏等等 
- **B区 **浏览器的右键菜单
- **C区** document加载时的状态栏，显示http状态码等
- **D区** 滚动条scroll bar

### DOM

文档对象模型（Document Object Model）是HTML和XML/HTML文档的编程接口API。

DOM独立于平台和编程语言。它可被任何编程语言诸如Java、JavaScript 和 VBScript 使用。它提供了与网页无关的浏览器功能对象。它是真正跨平台、语言无关的表示和操作网页的方式。

javascript实现DOM接口的对象对应的是`document`对象，JS通过该对象来对HTML/XML文档进行增删改查。

DOM负责的范围：

- **E区** document。其中包含index.html，CSS和JS等等，部署在服务器上，我们可以通过浏览器的地址栏输入URL然后回车将这个document加载到本地，浏览，右键查看源代码等。 



任何HTML或XML文档都可以用DOM表示一个由**节点**构成的**树**结构。HTML中每种标记都可以表示为这个树形结构中的一个节点（属性、类型、注释甚至换行）。DOM中共有12种节点类型，可在节点的`nodeType`属性中查看（由数值常量表示）。



![HTML DOM 树](https://www.runoob.com/images/pic_htmltree.gif)

#### Node接口

JavaScript通过`Node类型`来实现DOM的Node接口，所有节点类型都继承Node类型的基本属性和方法。开发最常用到的节点是 `Node.ELEMENT_NODE`(1) 、 `Node.ATTRIBUTE_NODE`(2) 和 `Node.TEXT_NODE`(3)。

**有关节点的属性和方法：**

1. 节点信息

   `nodeName` 与 `nodeValue` 属性保存关于节点的信息。

2. 节点关系

   - 节点的 `childNodes` 属性包含一个 `nodeList` 类数组对象，用于有序指向这个节点的子节点，其中第一个和最后一个子节点可用 `firstChild`/`lastChild` 表示。同理，childNodes中所有同胞节点指向同一个 `parentNode`。

   - 同胞节点之间可用 `previousSibling`/`nextSibling` 导航。

   - `hasChildNodes()` 方法可以查询节点是否有一个或多个子节点。

   - `ownerDocument` 属性指向本节点自己所在的文档本身。

3. 操作节点

   DOM中所有关系指针都是**只读的**。DOM提供了一些操作节点的方法：

   - 增：

     `appendChild([newNode])` 用于在childNodes列表末尾添加节点。接收newNode，返回newNode。

     `insertBefore([newNode], [node])` 用于在指定位置插入节点。接收newNode并插至node前面，返回newNode。

   - 删：

     `removeChild([node])` 用于移除指定的node，返回node。

   - 改：

     `replaceChild([newNode], [node])` 用于替换节点。接收newNode，替换node。

   - 复制：

     `cloneNode([Boolean])` 返回与调用它的节点一模一样的节点。接受一个布尔值参数，表示是否深拷贝。

#### Document类型

js中，表示**文档**节点的类型。浏览器中，**文档对象document**是HTMLDocument类型的实例。document是window对象的一个属性，因此是一个全局对象。它具有以下特征：

- nudeType = 9
- nodeName = #document
- nodeValue/parentNode/ownerDocument = null

duocument对象可用于获取页面信息以及操纵其外观和底层结构。

**属性和方法：**

1. 访问子节点
   - `documentElement` 属性指向HTML页面中的`<html>`元素。
   - `body` 属性指向`<body>`元素。
   - `docType` 属性指向`<!doctype>`元素。
2. 访问文档信息
   - `title` 属性指向页面标题。
   - `URL` 包含当前页面完整url。
   - `domain` 包含当前页面域名。
   - `referrer` 包含链接至当前页面的页面的url。

3. 定位元素
   - `getElementById()` 返回文档中匹配到的第一个出现的元素。
   - `getElementsByTagName()` 返回包含0个或多个元素的`NodeList`，它属于一个HTMLColleciton对象。可通过`[]`、`.item()`、`.name()`取得其中某一项的引用。
   - `getElementsByName()` 同上。常用于单选按钮。

4. 特殊集合
   - `anchors` 包含文档中所有**带name属性**的`<a>`元素。
   - `links` 包含文档中所有**带href属性**的`<a>`元素。
   - `form` 包含文档中所有的`<form>`元素。
   - `images` 包含文档中所有的`<img>`元素。

#### Element类型

表示XML/HTML元素，对外暴露访问其子节点和属性的能力。它具有以下特征：

- nodeType = 1
- nodeName = 元素标签名
- nodeValue = null

1. 取得属性

   ```html
   <div id="div1" class="bd" title="myText">
   ```

   以上HTML元素的所有属性都可用以下js代码读取：

   ```js
   let div = document.getElementById("div1");
   
   // 通过访问对象属性取得
   alert(div.id);						// div1
   alert(div.className);				// bd
   alert(div.title);					// myText
   
   // 通过DOM方法取得
   alert(div.getAttribute("id"));		// div1
   alert(div.getAttribute("class"));	// bd
   alert(div.getAttribute("title"));	// myText
   ```

   `getAttribute()` 方法可以取得自定义属性的值，而自定义属性不会成为DOM对象的属性，所以无法通过访问对象属性获取属性值。

   > 通过访问对象属性与通过`getAttribute()`方法获取的值不一定相同：
   >
   > 使用`getAttribute()`访问`style`属性返回的是CSS字符串；使用对象属性访问则返回CSSStyleDeclaration对象。
   >
   > 使用`getAttribute()`访问事件属性（事件处理程序，如onclick）返回的是字符串形式的源代码；使用对象属性访问则返回一个js函数
   >
   > 考虑以上差异，DOM编程中常常会放弃使用`getAttribute()`而只使用对象属性获取属性值。`getAttribute()`主要用于取得自定义属性的值。

   

2. 设置属性

   `setAttribute([name],[value])` 设置属性值。接收要设置的属性名name，将它的值替换/创建为value。

   同理，直接为DOM对象的属性赋值也可以做到设置属性，但无法通过直接添加DOM对象属性做到添加自定义属性。

3. 删除属性

   `removeAttribute()` 将整个属性从元素中移除。

4. attributes属性

5. 创建元素

   `createElement([name])` 方法创建一个新元素。接收元素标签名name。

#### Text类型

它具有以下特征：

- nodeType = 3
- nodeName = “#text”
- nodeValue = 节点中的文本
- 不支持子节点

### DOM编程

1. NodeList对象

   NodeList和相关的NamedNodeMap、HTMLCollection集合类型都是**实时的**类数组类型，它们基于DOM文档的实时查询，因此这里需要注意的是：

   - NodeList只是结构上类似数组，数组的通用方法map()、reduce()等无法使用；

   - 对其使用迭代时可能会导致无穷循环，迭代时最好初始化一个保存当前长度的变量；
   - 每次查询都会遍历整个DOM文档，应尽可能减少操作NodeList的次数。

2. 操作表格

   为方便创建表格，DOM为 `<table>/<tbody>/<tr>` 元素添加了一些属性和方法：

   `<table>`

   - `tBodies`
   - `tFoot`
   - `tHead`
   - `rows`
   - `creatTHead()`
   - `creatTFoot()`
   - `deleteRow()`
   - `insertRow()`

   `<tbody>`

   - `rows`
   - `deleteRow()`
   - `insertRow()`

   `<tr>`

   - `cells`
   - `deleteCell()`
   - `insertCell()`

### MutationObserver接口

MutationObserver可以在DOM被修改时异步执行回调，做到监视整个文档、某个元素甚至一个元素属性。

#### 用法

创建实例：调用构造函数并传入一个回调函数：

```js
let observer = new MutationObserver(() => console.log("DOM was mutated!"));
```

1. `observe([node],[MutationObserverInit])` 

   以上实例并不会关联DOM的任何部分，需要利用observe方法。它接收待观察的节点和一个MutationObserverInit对象。

   MutationObserverInit对象是一个键值对字典，用于配置要观察哪些方面的变化。

   ```js
   // 传入要执行的异步回调函数
   let observer = new MutationObserver(() => console.log("<body> attributes changed"));
   // 监视body节点发生的属性变化
   observer.observe(document.body, { attributes: true });
   
   document.body.className = "cls";
   console.log("change body class");
   
   // change body class
   // <body> attributes changed
   ```

2. `MutationRecord`

   每个回调函数都会收到一个MutationRecord数组，包含发生的变化和受影响部分的信息。如果监视到了多次变化，每次变化的信息会依次传入MutationRecord。上面代码的MutationRecord如下：

   ```js
   [
       {
           addedNodes: NodeList,
           attributeName: "class",
           attributeNamespace: null,
           nextSibling: null,
           oldValue: null,
           previousSibling: null,
           removedNodes: NodeList,
           target: body.cls,
           type: "attributes"
       }
   ]
   ```

3. `disconnect()`

   只要被监视的元素不被回收，回调函数就会响应DOM事件的变化而执行。可以用`disconnect`方法提前终止回调。

   ```js
   let observer = new MutationObserver(() => console.log("<body> attributes changed"));
   observer.observe(document.body, { attributes: true });
   
   document.body.className = "cls";
   
   observer.disconnect();
   // 无输出
   ```

#### MutationObserverInit与观察范围

MutationObserverInit对象用于配置对目标节点的观察范围，有以下属性：

| 属性                  | 说明                                                 |
| --------------------- | ---------------------------------------------------- |
| subtree               | 布尔值，是否观察目标节点的子树                       |
| attributes            | 布尔值，是否观察目标节点的属性变化                   |
| attributeFilter       | 字符串数组，设置要观察哪些属性的变化                 |
| attributeOldValue     | 布尔值，MutationRecord是否要记录属性变化之前的值     |
| characterData         | 布尔值，修改文本节点的字符数据是否触发变化事件       |
| characterDataOldValue | 布尔值，MutationRecord是否要记录字符数据变化之前的值 |
| childList             | 布尔值，修改目标节点的子节点是否触发变化事件         |





## 事件

JavaScript与HTML的交互是通过**事件**实现的。

### 事件流

页面触发一个事件时，会按照一定的顺序来响应事件，事件的响应过程为事件流。

1. 冒泡型

   IE提出的事件流是事件冒泡，即从下至上，从目标触发的元素逐级向上传播，直到window对象。

2. 捕获型

   Netscape提出的事件流是事件捕获，即从document逐级向下传播到目标元素。

   > 由于IE低版本浏览器不支持，所以很少使用事件捕获。 

3. DOM2事件流

   ECMAScript在DOM2中对事件流进行了进一步规范，基本上就是上述二者的结合。

   DOM2级事件规定的事件流包括三个阶段： 

   （1）事件捕获阶段 

   （2）处于目标阶段 

   （3）事件冒泡阶段 



### 事件处理程序

JavaScript在浏览器中以单线程模式运行，页面加载过程中，所有的JavaScript代码会被执行完毕。这时如果需要与HTML元素进行动态交互，就只能依赖**触发事件**来执行**事件处理程序**（事件监听器），事件处理程序是一个函数，可以在事件发生时执行相应的js代码。

事件处理程序的名字以`on`开头，其种类有以下几种：

1. **HTML事件处理程序**

   直接在HTML元素中指定事件处理程序：

   ```html
   <button onclick="show()">show</button>
   // show()函数会在按钮被点击时执行
   ```

   这样做有以下问题：

   - 时间差问题：HTML元素显示并被点击后，js代码还未加载结束，这时会发生错误。

     因此，HTML事件处理程序要被封装在try/catch块中静默失败：

     ```html
     <button onclick="try{show();}catch(error){}">show</button>
     ```

   - 作用域链引发的兼容问题：HTML事件处理程序定义在全局作用域中，对作用域链的扩展在不同浏览器中可能导致不同结果。
   - HTML与js强耦合：如需要修改一个函数，会同时涉及HTML和js的修改。

2. **DOM0事件处理程序**

   DOM0事件处理程序是在js中指定事件处理程序的传统方式。它先取得对操作对象的引用，然后把一个函数赋值给DOM元素的事件处理程序属性。

   ```js
   let btn = document.getElementById("btn-id");
   btn.onclick = function() {
       console.log(this.id);	// "btn-id"
   }
   ```

   以上代码实现了点击按钮输出元素id，这个id通过this.id获取。可见事件处理程序会在元素的作用域中执行，即this等于元素。

   DOM0事件处理程序的问题在于：

   - 不能添加多个事件处理程序；
   - 只支持**冒泡型事件流**；

3. **DOM2事件处理程序**（不支持IE）

   DOM2 Events 为事件处理程序的赋值和移除定义了两个方法：

   - `addEventListener([event],[listener],[options]/[useCapture])` 
   - `removeEventListener([event],[listener],[options]/[useCapture])` 
     - *event* ：表示监听事件类型的字符串；
     - *listener* ：一个实现了EventListener接口的对象，通常为一个函数；
     - *options* ：可选，一个有关listener的属性的参数对象，可用选项如下：
       - *capture* ： Boolean，表示 `listener` 会在该类型的事件捕获阶段传播到该 `EventTarget` 时触发；
       - *once* ：Boolean，表示 `listener` 在添加之后**最多只调用一次**。如果是 `true`，`listener` 会在其被调用之后自动移除；
       - *passive* ：Boolean，设置为true时，表示 `listener` 永远不会调用 `preventDefault()` 
     - *useCapture* ：可选，Boolean，是否使用捕获流。默认为false使用冒泡事件流，ture使用捕获事件流。

   ```html
   <button id="btnId" name="myBtn">button</button>
   
   <script>
   let btn = document.getElementById("btnId");
       
   let showId = function () {
       alert(this.id);
   }
   let sayName = function () {
       alert(this.name);
   }
   
   btn.addEventListener('click', showId, false);
   btn.addEventListener('click', sayName, false);
   // btnId
   // myBtn
   </script>
   ```

   可见DOM2方式的事件处理程序的作用域同样在元素中，而且**可以为同一个事件添加多个事件处理程序**，这是DOM2方式的最主要优势。（**事件触发顺序与事件处理程序添加顺序相同**）

4. **IE事件处理程序**

   IE提供了类似DOM2方法的IE事件处理程序，即`attachEvent()/detachEvent()`。它们接收两个参数：事件处理程序名称（**带on**）、事件处理函数。这里没有DOM2方式中的第三个参数来控制事件流，因为IE9之前的版本**只支持冒泡事件流**。

   ```html
   <button id="btnId" name="myBtn">button</button>
   
   <script>
   let btn = document.getElementById("btnId");
       
   let showId = function () {
       alert(this.id);
   }
   let sayName = function () {
       alert('name');
   }
   
   btn.attachEvent('onclick', showId);
   btn.attachEvent('onclick', sayName);
   // name
   // undefined
   </script>
   ```

   IE事件处理程序中，事件触发顺序与事件处理程序添加顺序相反，不仅如此，IE事件处理程序在**全局作用域**中进行，因此以上代码的this为window对象。

5. **跨浏览器的事件处理程序**

   为兼容IE浏览器和标准浏览器，我们可以自己编写通用的事件处理程序。
   
   这需要创建两个方法：
   
   `addHandler()` 视情况使用DOM0、DOM2或IE方式添加事件处理程序。
   
   `removeHandler()` 移除添加的事件。
   
   它们接收相同的三个参数：要操作的DOM元素、事件名称（不带on）、事件处理程序函数。
   
   ```js
   var EventUtil = {
       addHandler: function (element, event, handler) {
           if (element.addEventListener) { // 检测元素是否有DOM2方法
               element.addEventListener(event, handler, false);
           } else if (element.attachEvent) { // 检测元素是否有IE方法
               element.attachEvent("on" + event, handler);
           } else { // 如果都不存在，使用DOM0方法
               element["on" + event] = handler;
           }
       },
       removeHandler: function (element, event, handler) {
           if (element.removeEventListener) {
               element.removeEventListener(event, handler, false);
           } else if (element.detachEvent) {
               element.detachEvent("on" + event, handler);
           } else {
               element["on" + event] = null;
           }
       }
   }
   
   // 使用方法
   let btn = document.getElementById("btnId");
   let handler = function() {
       console.log("clicked");
   }
   EventUtil.addHandler(btn, "click", handler);
   ```

### 事件对象

DOM中发生的所有事件，其相关信息都会被收集储存在 `event` 对象中。

1. DOM事件对象

   不论以何种方法指定事件处理程序，event对象都会作为事件处理程序函数的唯一参数传入其中。

   ```js
   let btn = document.getElementById("btn");
   btn.addEventListener("click", (event)=>{
   	console.log(event.type);
   }, false);
   // click
   ```

   不同类型的事件生成的事件对象会包含不同的属性和方法，但它们拥有一些公共的属性方法：

   | 属性/方法         | 类型   | 说明                                                      |
   | ----------------- | ------ | --------------------------------------------------------- |
   | bubbles           | 布尔值 | 事件流是否冒泡                                            |
   | cancelable        | 布尔值 | 是否可以取消事件的默认行为                                |
   | currentTarget     | 元素   | 事件处理程序当前所在元素（this始终指向它）                |
   | eventPhase        | 整数   | 事件传播的当前阶段。1：捕获阶段；2：到达目标；3：冒泡阶段 |
   | target            | 元素   | 事件的目标节点                                            |
   | type              | 字符串 | 事件类型                                                  |
   | stopPropagation() | 函数   | 阻断所有后续事件捕获或事件冒泡（bubbles须为true）         |
   | preventDefault()  | 函数   | 阻止事件的默认行为（cancelable须为true）                  |

   > IE中使用事件对象存在一定的兼容性问题

2. 事件委托

   利用事件冒泡，只指定一个事件处理程序，就可以管理某一类的所有事件：

   ```html
   <button id="btnAdd">add</button>
   <ul id="ulList">
       <li>1</li>
       <li>2</li>
       <li>3</li>
   </ul>
   <script>
   // 普通写法
   let num = 3;
   let btn = document.getElementById("btnAdd");
   let ul = document.getElementById("ulList");
   let list = document.getElementsByTagName("li");
   
   btn.addEventListener('click', () => {
       num++;
       let li = document.createElement("li");
       li.innerHTML = num;
       ul.appendChild(li);
   }, false)
   
   let showInner = function () {
       alert(this.innerHTML);
   }
   
   for (let i = 0; i < list.length; i++) {
       list[i].addEventListener("click", showInner, false)
   }
   // 普通写法中，事件不具有继承性，新添加的li元素无法绑定事件；
   </script>
   ```

   ```html
   <button id="btnAdd">add</button>
   <ul id="ulList">
       <li>1</li>
       <li>2</li>
       <li>3</li>
   </ul>
   <script>
   // 事件委托法
   let num = 3;
   let btn = document.getElementById("btnAdd");
   let ul = document.getElementById("ulList");
   
   btn.addEventListener("click", () => {   
       num++;
       let li = document.createElement("li");
       li.innerHTML = num;
       ul.appendChild(li);
   }, false)
   
   let showInner = function (event) {
       let target = event.target;
       if (target.nodeName.toLowerCase() == "li") {    // 这里nodeName返回的是大写LI，要注意转换
           alert(target.innerHTML);
       }
   }
   
   ul.addEventListener('click', showInner, false); // 只监听父级元素ul
   // 新增的li被点击时，时间会冒泡到ul上，ul的点击事件会被触发，如果事件对象的target为li，则触发alert
   </script>
   ```

   要注意的是，不是所有的事件都适用事件委托，只有以下事件可以：

   - click
   - mousedown
   - mouseup
   - keypress
   - keydown
   - keyup

   事件委托可以做到无需遍历子节点，仅监听父级元素即可触发子节点的事件。这种方法常用于需要**为动态新增的节点**添加事件的情况。

### 事件类型

DOM3 Events定义了如下事件类型：

- `用户界面事件UIEvent`：涉及与BOM交互的通用浏览器事件触发；
- `焦点事件FocusEvent`：在元素获得和失去焦点时触发；
- `鼠标事件MouseEvent`：使用鼠标在页面上操作触发；
- `滚轮事件WheelEvent`：使用滚轮或类似设备触发；
- `输入事件InputEvent`：向文档中输入文本时触发；
- `键盘事件KeyboardEvent`：使用键盘在页面上操作触发；
- `合成事件CompositionEvent`：使用IME（Input Method Editor，输入法编辑器）输入字符时触发。
- `专有事件`

#### 用户界面事件

用户界面事件或UI事件不一定与用户操作有关。

1. load事件

   在window对象上，load事件会在整个页面（包括所有外部资源）加载完成后触发。

   可以通过HTML或DOM2方式向load事件添加事件处理程序：

   ```js
   // HTML方式
   // 一般在window发生的事件，都可以通过为body元素对应属性赋值指定
   <body onload="console.log('loaded!')">
   </body>
   
   //js方式
   window.addEventListener("load", ()=>{console.log("loaded!")});
   ```

   另外，图片也会触发load事件。

2. unload事件

   在文档卸载完成后触发。一般在从一个页面导航到另一个页面时触发，常用于清理引用避免内存泄漏。

3. resize事件
4. scroll事件

#### 焦点事件

通常与document.hasFocus()和document.activeElement()一起使用，提供用户在页面中导航的信息。

焦点从页面上的一个元素移动到另一元素时，会依次触发以下事件：

1. focusout：在失去焦点的元素上触发
2. focusin：在获得焦点的元素上触发
3. blur：在失去焦点的元素上触发
4. DOMFocusOut：在失去焦点的元素上触发
5. focus：在获得焦点的元素上触发
6. DOMFocusIn：在获得焦点的元素上触发

#### 鼠标和滚轮事件

- mousedown-mouseup-click-mousedown-mouseup-click-dbclick
- mouseenter-nousemove-mouseout
- mousewheel事件会在任何元素上触发，并冒泡到window对象。它的事件对象还有一个wheelDelta属性记录滚轮方向和距离（向前滚动+120，向后滚动-120）
- 触摸屏设备不支持dbclick事件；mousemove事件也会触发mouseover和mouseout事件

#### 键盘输入事件

- keydown-keypress-keyup
- textInput事件在字符被输入至**可编辑区域**时触发，用以代替keypress
- 对于keydown、keyup事件，event对象的`keyCode`属性会保存一个键码

#### 合成事件

IME可以让用户输入物理键盘上没有的字符。合成事件用于处理IME输入时的复杂输入序列。

#### HTML5事件

- contextmenu事件：自定义右键菜单
- beforeload事件：在window上触发，提供阻止页面被卸载的机会
- DOMContentLoaded事件：与load类似，但它会在DOM树构建完成后立即触发，无需等待外部资源的加载。
- pageshow/pagehide事件：用于暴露**往返缓存**的行为
- hashchange事件：在URL散列值（#后面的部分）发生变化时触发

#### 设备事件

- orientationchange事件：判断设备水平/垂直模式
- deviceorientation事件：设备加速计信息变化时触发
- devicemotion事件：用于判断设备处于移动状态，而非仅仅改变朝向时触发

#### 触摸及手势事件

- touchstart
- touchmove
- touchend
- gesturestart
- gesturechange
- gestureend

#### 模拟事件

JavaScript可以模拟任意事件的触发，这些事件会被当成浏览器创建的事件，这意味着同样会有事件冒泡，也会触发相应的处理程序。

1. DOM事件模拟

   `document.createEvent()`可以创建一个event对象，这个方法接收一个参数，表示要创建的事件类型字符串（DOM2为复数，DOM3为单数形式），可用值有：

   - UIEvent：通用用户界面事件（鼠标、键盘事件继承自这个事件）
   - MouseEvent：通用鼠标事件
   - HTMLEvent：通用HTML事件

   事件模拟需要使用`dispatchEvent()`方法触发事件，它接收要触发事件的event对象。



##  六、函数

### 定义

在 JavaScript 中，**函数是对象的方法**。

如果一个函数不是 JavaScript 对象的方法，那么它就是全局对象的方法。

1. 声明：

```js
function sum (a, b) {
	return a + b;
}	// 末尾不加分号
```

2. 表达式：

```js
let sum = function(a, b) {
	return a + b;
};	// 末尾加分号
```

函数声明会在任何代码执行之前被读取并添加到执行上下文，此过程被称为「**函数声明提升**」。而表达式定义的函数不会被提升。

### 函数名

使用上述方法定义的函数名访问函数，并不会直接访问函数体本身。函数名是指向函数的**指针**，一个函数可以有多个函数名，增删函数名不会对其他指向这个函数的指针产生影响。

因此，使用不带括号的函数名访问的是函数的**指针**，而不会执行函数。

ES6中所有函数对象都会有一个**只读的** `name` 属性，有名函数会对应一个**字符串变量名**，未赋值给其他变量的匿名函数（箭头函数）对应一个**空字符串**，Function创建的函数会对应为 `anonymous` 。

### 箭头函数 =>

ES6提供了定义**匿名函数**的语法糖：

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

 当不需要函数体，只返回一个值的时候，箭头函数允许你省略 `return` 关键字和外面的大括号。 这样就可以将一个简单的函数简化成一个单行语句 :

```js
const myFunc = () => "value";	// 这段代码默认会返回字符串 value
```

 给箭头函数传递参数 :

```js
const doubler = (item) => item * 2;
doubler(4);	// 8
```

 如果箭头函数只有一个参数，则可以省略参数外面的括号 :

```js
const doubler = item => item * 2;
```

要注意的是，箭头函数不能使用 *arguments* 、*super* 和 *new.target* ，也没有 `prototype` 属性。

### 参数

ECMAScript函数的参数在内部表现为一个**数组**。函数被调用时总会接收一个数组，数组元素多寡都无所谓，函数并不会关心其中包含什么。

事实上，我们甚至可以在定义函数（非箭头）时不定义任何参数，直接在函数内部通过访问 `arguments` 对象传参：

```js
function sayHi() {
	console.log('Hello ' + arguments[0] + ', ' + arguments[1]);
}
console.log(sayHi('Mike', 'have a nice day'));
// Hello Mike, have a nice day
```

`arguments` 对象是一个**类数组**对象，可以用方括号访问其中的元素，参数的数量可以用 `arguments.length` 访问。

###  立即调用函数表达（IIFE）

JavaScript 中的一个常见模式就是，函数在声明后立刻执行：

```js
(function () {
  console.log("Chirp, chirp!");
})();
```

 这是一个匿名函数表达式，立即执行并输出 `Chirp, chirp!`。  函数表达式末尾的两个括号（）会让它被立即执行或调用。 这种模式被叫做立即调用函数表达式（immediately invoked function expression) 或者IIFE。 

### 函数内部

#### arguments

除前面讨论的特性外，`arguments` 还有一个 `callee` 属性，它是一个指向 `arguments` 对象所在函数的指针。

```js
// 典型的递归阶乘函数,如果函数名发生了改变，函数将无效
function factorial(num) {
	if(num <= 1) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}

// 使用callee使函数逻辑与函数名解耦
function factorial(num) {
	if(num <= 1) {
		return 1;
	} else {
		return num * arguments.callee(num - 1);
	}
}
```

#### this

JS中，存放在一处的函数是可以在其他地方被调用的，这一特性是JS函数的灵活性和复用性的保证。但这也引发了一个问题：函数在其他地方被调用时，执行函数的上下文发生了变化，函数体内引用的变量脱离了原先的环境就可能失效。

这时this的作用就体现了出来，它能够在函数体内获得函数当前的运行环境并指向它。

在标准函数（非箭头）中，`this` 引用的是**把函数当成方法调用的上下文对象**，具体引用哪一个对象在执行时才会确定；而箭头函数中，`this` 引用的是**定义箭头函数的上下文**，并且这一绑定在执行中永远不会改变：

```js
window.color = 'red';
let o = {
    color: 'blue'
};

function sayColor() {
    console.log(this.color);
}

let printColor = () => console.log(this.color);


sayColor();
printColor();
// red

o.sayColor = sayColor;
o.printColor = printColor;
o.sayColor();
// blue
o.printColor();
// red
```

使用this的5种常见情况：

1. 事件绑定中的this：

   - 行内绑定：

     在html节点内，以节点属性的方式绑定，属性值是一段可执行的 JS 代码段

     ```html
     <input type="button" value="按钮" onclick="clickFun()">
     <script>
         function clickFun(){
             this // 此函数的运行环境在全局window对象下，因此this指向window;
         }
     </script>
     
     <input type="button" value="按钮" onclick="this">
     <!-- 运行环境在节点对象中，因此this指向本节点对象 -->
     ```

   - 动态绑定与事件监听：

     在JS内通过访问DOM获得html节点对象，再为节点对象的onclick属性赋值一个匿名方法。函数在执行时处于节点对象的环境下，this自然就指向了本节点对象。

     ```html
     <input type="button" value="按钮" id="btn">
     <script>
         var btn = document.getElementById('btn');
         btn.onclick = function(){
             this ;  // this指向本节点对象
         }
     </script>
     ```

2. 构造函数中的this：

   执行new关键字创建一个实例时，JS引擎会将构造函数中的this绑定到实例对象中。

3. window 定时器中的this：

   `setInterval()` 是window对象下内置的一个方法，接受两个参数，第一个参数是一个函数或者是一段可执行的 JS 代码，第二个参数则是执行前面函数或者代码的时间间隔（ms）； 

   ```js
   var obj = {
       fun:function(){
           this ;
       }
   }
   
   setInterval(obj.fun, 1000);      // fun不带括号，因此调用的是存放在全局变量的函数体，this指向window对象
   setInterval('obj.fun()', 1000);  // this指向obj对象
   ```

4. call() / apply() 方法:

   强制指定函数调用时this的指向。



#### caller

这个属性引用**调用当前函数的函数**，如果当前函数在全局作用域则为 `Null` ：

```js
function outer() {
    inner();
}
function inner() {
    console.log(inner.caller);
}

outer;
// outer() {
//     inner();
// }
```

#### new.target

ES6新增了**检测函数是否正在被 `new` 关键字调用**的 `new.target` 属性。

如果函数被正常调用，`new.target` 的值为 `undefined` ；如果被 `new` 调用，则 `new.target` 将引用被调用的构造函数。

 ```js
function F() {
    console.log(new.target);
}

F();
// undefined
let o = new F();
// F() {
//     console.log(new.target);
// }
 ```

### 共用属性与方法

每个函数都有两个属性：

#### length

保存函数定义的命名参数个数

```js
function sum(sum1, sum2, sum3) {
	return sum1 +sum2 +sum3;
}
console.log(sum.length);
// 3
```

#### prototype

保存引用类型所有实例方法

还有三个方法：

#### apply()

`apply(this, arguments)`

- *this* 任意**指定**调用函数的上下文对象；

- *arguments* *可选*，参数数组；

#### call()

通过 `call()`，我们能够使用属于另一个对象的方法。

`F.call(thisArg, arg1, arg2...)`

- *thisArg* 指定一个对象，函数`F()`的执行上下文将在这个对象之内；

- *arg* *可选*，对`F()`逐个传入参数；

以上这两个方法作用相同，仅传参形式不同。它们主要用来**控制函数的调用上下文**，即函数体内 `this` 值：

```js
window.color = 'red';			// 全局变量color
let o = {
    color: 'blue'				// 对象o的私有变量color
};

function sayColor() {
    console.log(this.color);	// 输出本函数当前执行上下文的color
}

sayColor();
// red
sayColor.call(this);	// this指向window，在全局作用域下执行，输出全局变量color
// red
sayColor.call(window);	// 在全局作用域下执行，输出全局变量color
// red
sayColor.call(o);		// 在对象o作用域下执行，输出对象o的私有变量color
// blue
```

#### bind()

`bind([object])` 

创建一个新的函数实例，其`this` 值会被直接**绑定**到 `[object]` 对象。

```js
window.color = 'red';
let o = {
    color: 'blue'
};

function sayColor() {
    console.log(this.color);
}

let objectSayColor = sayColor.bind(o);
objectSayColor();
// blue
```

无论在哪里调用 `objectSayColor()` ，它的执行上下文对象始终为 `o` 

### 高阶函数

接收另一个函数作为参数的函数叫做高阶函数（ Higher-order function ）：

```js
function sum(x, y, f) {
	return f(x) + f(y);
}
```

#### map / reduce

`map()` 和 `reduce()` 都定义在 `Array` 对象方法上。

**map:**

 `map()`方法按照原始数组元素顺序依次处理元素，返回一个新的数组，数组中的元素为原始数组调用函数处理后的值。**可看作是对原数组进行映射**。 

```js
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array 
}[, thisArg])
```

*callback*

生成新数组元素的函数，使用三个参数：

- *currentValue*

  `callback` 数组中正在处理的当前元素。

- *index*可选

  `callback` 数组中正在处理的当前元素的索引。

- *array*可选

  `map` 方法调用的数组。

举例说明，比如我们有一个函数 f(x)=x^2^，要把这个函数作用在一个数组`[1, 2, 3, 4, 5, 6, 7, 8, 9]`上，就可以用`map`实现如下： 

 ![map](https://www.liaoxuefeng.com/files/attachments/925425803658112/0) 

```js
function pow(x) {
    return x * x;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = arr.map(pow);
console.log(results);
// [1, 4, 9, 16, 25, 36, 49, 64, 81]
```

事实上，`map()`作为高阶函数，起到了把运算规则抽象的作用，我们不但可以计算简单的f(x)=x^2^，还可以计算任意复杂的函数，比如，把`Array`的所有数字转为字符串：

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(String); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
```

只需要一行代码。

> 扩展： **在原型上实现 map 方法** 
>
> ```js
> const s = [23, 65, 98, 5];
> 
> Array.prototype.myMap = function(callback) {
>   const newArray = [];
>   // this指向Array，forEach() 迭代Array的每一项
>   this.forEach(function(a) {
>     newArray.push(callback(a));
>   })
>   return newArray;
> };
> 
> const new_s = s.myMap(function(item) {
>   return item * 2;
> });
> ```



**reduce:**

 `reduce()`方法是让数组中的**前项和后项做某种计算，并累计最终值**。 

```js
arr.reduce(callback(prev,cur,index,arr){...}, init);
```

reduce() 的参数包含一个「回调函数」和一个「初始值 init」，**初始值init用于初始化prev，可以是对象、数组等等**。其中回调函数包含四个参数：

- `prev` 上一次调用回调时的返回值，或者初始值 init；**不提供初始值时为第一项的值**；
- `cur` 当前正在处理的数组元素； 
- `index` 当前正在处理的数组元素的索引，**若提供 init 值，则索引为0，否则索引为1**； 
- `arr` 原数组 ；

其中常用的是 `prev` `cur` 参数。

`reduce()`把一个函数依次作用在这个`Array`的`[x1, x2, x3...]`上，这个函数必须接收两个参数，`reduce()`把结果继续和序列的下一个元素做**累积计算**，其效果就是：

```js
[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
```

使用例：

```js
const arr = [3, 9, 4, 3, 6, 0, 9];

// 求数组各项之和
let sum = arr.reduce((prev, cur) => prev + cur, 0);
// init为0，所以prev开始时为0，cur的值为第一项3，相加之后返回3作为下一轮回调的prev值，再与下一项cur相加，直至完成所有数组项的求和

// 求数组各项之积
let product = arr.reduce((prev, cur) => prev * cur);

// 求数组项最大值
let max = arr.reduce(function(prev, cur) {
	return Math.max(prev, cur);
})
// 未传入初始值，所以prev为第一项3，cur为第二项9，取两值最大值进入下一轮回调

// 统计各个物品的数量
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const reduce = data.reduce((obj, item) => {
  if (!obj[item]) {  	// 若累加对象中无元素item
    obj[item] = 0;   	// 令累加对象中元素item = 0
  }
  obj[item]++;        	// 累加器item++
  return obj;         	// 返回累加器进入下一轮迭代
}, {});					// 初始化累加器为对象
console.log(reduce);
```

#### forEach() 方法

 `forEach()` 方法用于**遍历数组的每个元素**。（return 将不起作用）

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



#### filter()

创建一个新数组，返回经过滤后的剩余元素，不会改变原数组。

```js
var newArr = arr.filter(callback(element[, index[, array]])[, thisArg])
```

- *callback()* 测试函数，根据返回 true / false 确定元素保留与否。包含参数：
  - *element* 当前元素；
  - *index* 当前元素索引；
  - *array* 被遍历的数组本身；
- *this* 执行回调函数时，用于 `this` 的值，默认为全局对象；

使用例：

```js
// 过滤偶数保留奇数
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var result = arr.filter((x) => x % 2 !== 0);

console.log(result); // [1, 5, 9, 15]

// 数组去重
var arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
// indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
var result = arr.filter((element, index, array) => {
    return array.indexOf(element) === index;
    // 如果遍历到了重复元素，其传入indexOf的返回值为数组中这个元素第一次出现的索引，与当前索引不等。故回调函数返回false，filter会自动删去这个重复元素
});

console.log(result); // ['apple', 'strawberry', 'banana', 'pear', 'orange']
```

#### sort()

这是 JavaScript 自带的排序函数，它可以实现对数组的**原地排序**。但如果直接使用，可能会产生意想不到的后果：

```js
// 理想的结果:
['Google', 'Apple', 'Microsoft'].sort(); 
// ['Apple', 'Google', 'Microsoft'];

// apple排在了最后:
['Google', 'apple', 'Microsoft'].sort(); 
// ['Google', 'Microsoft", 'apple']

// 无法理解的结果:
[10, 20, 1, 2].sort(); 
// [1, 10, 2, 20]
```

第二个排序把`apple`排在了最后，是因为字符串根据ASCII码进行排序，而小写字母`a`的 UTF-16 码在大写字母之后。 

数字排序的错误是因为`sort()`方法**默认把所有元素先转换为String再排序**，结果`'10'`排在了`'2'`的前面，因为字符`'1'`比字符`'2'`的 UTF-16 码小。

事实上，`sort` 是一个高阶函数，它需要接收一个**比较函数**来实现自定义的排序。 

如果指明了 `compareFunction` ，那么数组会按照调用该函数的返回值排序。即 a 和 b 是两个将要被比较的元素（arr[a], arr[b]）：

- 如果 `compareFunction(a, b)` 小于 0 ，那么 a 会被排列到 b 之前；

- 如果 `compareFunction(a, b)` 等于 0 ， a 和 b 的相对位置不变；

- 如果 `compareFunction(a, b)` 大于 0 ， b 会被排列到 a 之前；
- `compareFunction(a, b)` 必须**总是对相同的输入返回相同的比较结果**，否则排序的结果将是不确定的。

使用例：

```js
// 对数字排序
arr = [5,9,6,3,4,8,1,2,7];
arr.sort((a, b) => a - b);
console.log(arr);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 忽略大小写对字符串排序
arr = [
    {name: 'Edward', age: 21}, 
    {name: 'Nicholas', age: 25},
    {name: 'Mike', age: 22}
];
arr.sort((a, b) => {
    nameA = a.name.toUpperCase();
    nameB = b.name.toUpperCase();
    if (nameA === nameB) {
        return 0;
    }
    return nameA > nameB ? 1 : -1;
});
console.log(arr);
```

#### ONTHERS

`every()`

`find()` 

`findIndex()` 

...

**总结：**

- **相同点：** 

1. 都会循环遍历数组中的每一项；
2.  `map()`、`forEach()`和`filter()`方法里每次执行匿名函数都支持3个参数，参数分别是：当前元素、当前元素的索引、当前元素所属的数组； 
3. 匿名函数中的this都是指向window。

-  **不同点：** 

1. map()速度比forEach()快； 
2. map()和filter()会返回一个**新数组**，不对原数组产生影响；forEach()不会产生新数组，返回undefined；reduce()函数是把数组**缩减为一个值**(比如求和、求积)； 
3. map()里可以用return，而forEach()里用return不起作用，forEach()不能用break，会直接报错； 
4. reduce()有4个参数，第一个参数为初始值。



### 闭包

#### 理解闭包

JavaScript 的作用域链机制保证了外层对象无法**直接**引用内层作用域中的对象，这个机制是单向的。这是否意味着内层函数与外部是割裂的？我们永远无法访问一个内层函数中的对象吗？当然不会，闭包的组合可以解决这种割裂现象。

> 引自MDN：一个函数和对其周围状态（**lexical environment，词法环境**）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是**闭包**（**closure**）。也就是说，闭包让你可以**在一个内层函数中访问到包裹它的外层函数的作用域**。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。

```js
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
```

第一眼看上去，也许不能直观地看出这段代码能够正常运行。在一些编程语言中，一个函数中的局部变量仅存在于此函数的执行期间。一旦 `makeFunc()` 执行完毕，你可能会认为 `name` 变量将**不能再被访问**。

然而，JavaScript中的函数在创建时会形成**闭包**：闭包是由函数以及声明该函数的词法环境组合而成的。**该环境包含了这个闭包创建时作用域内的任何局部变量**。在本例子中，`myFunc` 是执行 `makeFunc` 时创建的 `displayName` 函数实例的引用。`displayName` 的实例维持了一个对它的词法环境（变量 `name` 存在于其中）的引用。因此，当 `myFunc` 被调用时，变量 `name` 仍然可用，其值 `Mozilla` 就被传递到`alert`中。 

#### 闭包的意义

在项目开发中，函数式编程是及其常见的编程思想。其中，使用回调函数就是函数式编程的核心之一，而回调函数需要从外部变量中获取其中保存的数据。回调函数使用频繁，它们的外部变量同样数量庞大，那么如何组织这些外部变量成了提高代码质量的关键。闭包即是解决这个问题的关键。

由上文可知，一个函数A如果被另一个函数B包裹，那么函数A会自动创建一个对它所在词法环境的引用，这个引用会包含外层函数B中定义的所有内部变量，这个现象就是闭包。更重要的是，如此一来，函数A（可以理解为回调函数）就拥有了一个私有的封闭作用域，其中所有的变量定义在B函数名下，不仅避免了定义全局变量（易被改写，占用内存），还使函数的封装和复用性更佳。

闭包基于JS的底层原理实现，大量原生的方法都利用了闭包，这使得许多时候我们在使用闭包而不自知。可以说JS中只要使用了回调函数，基本都利用了闭包的特性，例如：

- 常用的 `forEach()` , `map()` , `reduce()` 等方法
- `promise` 与 `Ajax` 请求
- 防抖与节流
- 定时器
- 事件监听器

回调函数无处不在，因此闭包无处不在。

#### 创建闭包

```js
function F() {
    ...;
    return function () {...};
}
    
var obj = F();
obj();
```

如上所示，一个函数的返回值是一个嵌套的内层函数，这个内层函数 `f()` 与其所在的词法环境就构成了闭包。我们可以在外层通过调用 `F()()` 就可以访问 `F()` 中的对象。



#### 性能考量

如果不是某些特定任务需要使用闭包，在其它函数中创建函数是不明智的，因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响。

由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。



## 七、Promise与异步函数

>  [Generator 函数的含义与用法 - 阮一峰的网络日志 (ruanyifeng.com)](https://www.ruanyifeng.com/blog/2015/04/generator.html) 

### Promise

#### 含义

`Promise` 对象是ES6中新增的引用类型，代表一个JS无法预测的结果的替身，通常表示一个异步操作的最终完成（失败）和其结果值。同其他引用类型一样，Promise通过`new`实例化，初始化新Promise时必须传入**执行器函数**作为参数。**Promise 新建后就会立即执行。** 

```js
let p = new Promise( () => {} );
```

`Promise` 对象使得异步方法可以像同步方法那样返回值：异步方法并不会立即返回最终的值，而是会返回一个 *promise*，以便在未来某个时候把值交给使用者。 

一个 `Promise` 必然处于以下几种状态之一：

- ***待定（pending）***: 初始状态，既没有被兑现，也没有被拒绝。
- ***已兑现（fulfilled/resolved）***: 意味着操作成功完成。
- ***已拒绝（rejected）***: 意味着操作失败。

Promise的状态只能通过内部改变，内部操作在**执行器函数**中完成，通过调用它的两个参数可以实现控制Promise的状态。这两个参数通常命名为 `resolve()`（切换为**已兑现状态**）和 `reject()`（切换为**已拒绝状态并抛出错误**）。无论哪个被调用，Promise的状态都不可撤销了，只能改变一次。

> 如果一个 promise 已经被兑现（fulfilled）或被拒绝（rejected），那么我们也可以说它处于*已敲定（settled）*状态，或者为了匹配另一个 promise 的状态被"锁定"了。 

#### 基本用法

1. **生成实例**

   创造一个`Promise`实例，传入**执行器函数**作为参数。该函数的两个参数分别是`resolve`和`reject`。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。 

   ```js
   const promise = new Promise(function(resolve, reject) {
     // ... some code
   
     if (/* 异步操作成功 */){
       resolve(value);
     } else {
       reject(error);
     }
   });
   ```

   `resolve`函数将`Promise`对象的状态从 pending 变为 resolved，并将异步操作的结果`value`作为参数传递出去；

   `reject`函数将`Promise`对象的状态从 pending 变为 rejected，并将异步操作报出的错误`error`作为参数传递出去。

2. 用`then`方法分别指定Promise对象`resolved`状态和`rejected`状态的回调函数。

   ```js
   promise.then((value) => {
     // success
   }, (error) => {
     // failure
   });
   ```

   `then`方法可以接受两个回调函数作为参数。第一个回调函数是`Promise`对象的状态变为`resolved`时调用，第二个回调函数是`Promise`对象的状态变为`rejected`时调用。这两个函数都是可选的，不一定要提供。**它们都接受`Promise`对象传出的值作为参数**。 

下面是几个简单例子：

```js
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then((value) => {
  console.log(value);
});
```

```js
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});

console.log('Hi!');

// Promise
// Hi!
// resolved
// 上面代码中，Promise 新建后立即执行，所以首先输出的是`Promise`。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以`resolved`最后输出。
```

```js
function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    const image = new Image();

    image.onload = function() {
      resolve(image);
    };

    image.onerror = function() {
      reject(new Error('Could not load image at ' + url));
    };

    image.src = url;
  });
}
// 上面代码中，使用Promise包装了一个图片加载的异步操作。如果加载成功，就调用resolve方法，否则就调用reject方法。
```



##### Promise.resolve()/reject()

`Promise.resolve()`可以创建一个已经是resolve状态的Promise实例：

```js
const p1 = new Promise((resolve, reject)=>resolve());
const p2 = Promise.resolve()
// 这两个Promise实例实际上是一样的
```

`Promise.resolve()`方法的参数分四种情况：

1. 如果参数是Promise实例，那么`Promise.resolve`将不做任何修改、原封不动地返回这个实例。 

2. 参数是一个`thenable`对象（指具有`then`方法的对象），`Promise.resolve()`方法会将这个对象转为Promise对象，然后立即执行`thenable`对象的`then()`方法。 

3. 参数不是具有`then()`方法的对象，或根本就不是对象，返回一个新的 Promise 对象，状态为`resolved`，其内部value为该参数。

4. 不带有任何参数，直接返回一个`resolved`状态的 Promise 对象。 

   

`Promise.reject(reason)` 方法也会返回一个新的 Promise 实例，该实例的状态为`rejected`。 

```js
const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
  console.log(s)
});
// 出错了
```

`Promise.reject()`方法的参数，会原封不动地作为`reject`的**理由**，变成后续方法的参数。 

##### Promise.then()

Promise 实例具有`then`方法，也就是说，`then`方法是定义在原型对象`Promise.prototype`上的。它的作用是为 Promise 实例添加状态改变时的回调函数。前面说过，`then`方法的第一个参数是`resolved`状态的回调函数，第二个参数是`rejected`状态的回调函数，它们都是可选的。 

 `then`方法返回的是一个新的`Promise`实例（注意，**不是原来那个`Promise`实例**）。因此可以采用链式写法，即`then`方法后面再调用另一个`then`方法。 

##### Promise.catch()

`Promise.prototype.catch()`方法是`.then(null, rejection)`或`.then(undefined, rejection)`的语法糖，用于指定Promise的拒绝状态的处理程序。

##### Promise.finally()

finally()方法添加的处理程序在Promise为已拒绝或已兑现状态下都会执行。可以避免出现冗余代码，但这个方法无法得知Promise的状态，所以主要用来添加清理代码。

#### 期约连锁与期约合成

##### 期约连锁

因为 `then` `catch` 方法返回的是 `Promise` 对象，所以它们可以被**链式调用**。

 ![img](https://mdn.mozillademos.org/files/8633/promises.png) 

我们可以用 `promise.then()`，`promise.catch()` 和 `promise.finally()` 这些方法将进一步的操作与一个变为已敲定状态的 promise 关联起来。这些方法还会返回一个新生成的 promise 对象，这个对象可以被非强制性的用来做链式调用，就像这样： 

```js
// **同步任务**
let p = new Promise((resolve, reject) => {
    console.log("first");
    resolve();
});

p.then(() => {
    console.log('second');
    reject();
})
.catch(() => console.log("third"))
.finally(()=> console.log("fourth"));

console.log("主线任务");
// first	// Promise实例在创建时立即执行
// 主线任务	// 但是，Promise进入settled状态后，所有与该状态相关的处理程序仅仅会被排期，抛入任务队列
// second	// 这里才开始执行then之后的处理程序
// third
// fourth
```

这段代码执行了一连串的**同步任务**。这显得没那么有用，因为直接顺序执行几个console.log()方法一样可以做到。下面实现一个真正的异步任务：

```js
// **异步任务**
let p = new Promise((resolve, reject) => {
    console.log('1秒过去了……');
    setTimeout(resolve, 1000);
})

p.then(() => new Promise((resolve, reject) => {
    console.log('2秒过去了……');
    setTimeout(resolve, 1000);
}))
.then(() => new Promise((resolve, reject) => {
    console.log('3秒过去了……');
    setTimeout(resolve, 1000);
}))
.then(() => new Promise((resolve, reject) => {
    console.log('4秒过去了……');
    setTimeout(resolve, 1000);
}));

// 1秒过去了……
// 2秒过去了……
// 3秒过去了……
// 4秒过去了……
```

以上代码中，每个执行器函数都返回一个Promise实例，这样就可以让每个后续Promise都等待之前的Promise，实现了**串行化异步任务**。

以上代码中生成新Promise实例的执行器函数都是相同的，因此可以提取到一个**工厂函数**以简化代码：

```js
// 利用生成Promise的工厂函数简化代码
function delayedResolve(str) {
    return new Promise((resolve, reject) => {
        console.log(str);
        setTimeout(resolve, 1000);
    });
}

delayedResolve('1秒过去了……')
    .then(() => delayedResolve('2秒过去了……'))
    .then(() => delayedResolve('3秒过去了……'))
    .then(() => delayedResolve('4秒过去了……'))
```

##### 期约图

链式调用可以构建一个**有向非循环**的结构，每个Promise都是其中的一个节点，处理程序则指向下一个节点：

```js
//		 A
//	    / \
//	  B     C
//	 / \   / \
//  D   E F   G

let A = new Promise((resolve, reject) => {
    console.log('A');
    resolve();
});
let B = A.then(()=>console.log('B'));
let C = A.then(()=>console.log('C'));
B.then(()=> console.log('D'));
B.then(()=> console.log('E'));
C.then(()=> console.log('F'));
C.then(()=> console.log('G'));

// A
// B
// C
// D
// E
// F
// G
```

##### 期约合成

Promise类提供了将两个或多个Promise合成一个的静态方法：`.all()` 和 `.race()`：

1. **Promise.all()**

   ```js
   const p = Promise.all([p1, p2, p3]);
   ```

   `Promise.all()`方法必须接受一个**可迭代对象**作为参数，`p1`、`p2`、`p3`都是 Promise 实例，如果不是，就会先调用`Promise.resolve`方法，将参数转为 Promise 实例，再进一步处理。

   另外，`Promise.all()`方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。 

   合成后`p`的状态由`p1`、`p2`、`p3`决定，分成两种情况：

   **i.**

   只有`p1`、`p2`、`p3`的状态**都**变成`fulfilled`，`p`的状态才会变成`fulfilled`，此时`p1`、`p2`、`p3`的返回值（Promise解决值）组成一个数组，传递给`p`的回调函数。

   ```js
   let p = Promise.all([
       Promise.resolve('item1'),
       Promise.resolve(),
       Promise.resolve(2)
   ])
   p.then((values)=> console.log(values));
   // ['item1', undefined, 2]
   ```

   **ii.**

   只要`p1`、`p2`、`p3`之中有一个被`rejected`，`p`的状态就变成`rejected`，此时**第一个**被`reject`的实例的返回值，会传递给`p`的回调函数。

   ```js
   let p = Promise.all([
       Promise.resolve(),
       Promise.reject('已拒绝'),
       Promise.reject('再次拒绝')
   ])
   
   setTimeout(console.log, 0, p);  // Promise {<rejected>: '已拒绝'}
   // 报错！ Uncaught (in promise) undefined
   // 未使用catch，错误跑掉了
   
   p.catch((reason) => setTimeout(console.log, 0, reason));	// 已拒绝
   // 无报错！
   // 虽然只有第一个拒绝理由进入处理程序catch，但其余错误会被静默处理，不会有错误跑掉
   ```

2. **Promise.race()**

   `Promise.race()`返回一组Promise中**最先解决或拒绝**的Promise的**镜像**。 

   ```javascript
   const p = Promise.race([p1, p2, p3]);
   ```

   只要`p1`、`p2`、`p3`之中有一个实例**率先**改变状态，`p`的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给`p`的处理程序。 

   ```js
   const p = Promise.race([
     fetch('/resource-that-may-take-a-while'),
     new Promise(function (resolve, reject) {
       setTimeout(() => reject(new Error('request timeout')), 5000)
     })
   ]);
   
   p
   .then(console.log)
   .catch(console.error);
   ```

   上面代码中，如果 5 秒之内`fetch`方法无法返回结果，变量`p`的状态就会变为`rejected`，从而触发`catch`方法指定的回调函数。 

3. 串行期约合成

   ```js
   function addTwo(x) { return x + 2 };
   function addThree(x) { return x + 3 };
   function addFive(x) { return x + 5 };
   
   // 直接方法
   function addAll(x) {
       return Promise.resolve(x)
           .then(addTwo)
           .then(addThree)
           .then(addFive);
   }
   addAll(8).then(console.log);	// 18
   
   // reduce简化的方法
   function addAll(x) {
       return [addTwo, addThree, addFive]
           .reduce((prom, fn)=> prom.then(fn), Promise.resolve(x));
   }
   addAll(8).then(console.log);	// 18
   
   // 提炼出一个通用合成函数
   function compose(...fns) {
       return function(x) {
           return fns.reduce((prom, fn)=> prom.then(fn), Promise.resolve(x));
       }
   }
   let addAll = compose(addTwo, addThree, addFive);
   addAll(8).then(console.log)	// 18
   ```

### 异步函数

异步函数，也称为 `async/await`（ES8新增），是ES6期约模式在ECMAScript**函数**中的应用。它使同步方式编写的代码能够以异步方式执行。

```js
// 创建一个在3秒后返回文字的Promise：
let p = new Promise((resolve, reject) => setTimeout(resolve, 3000, "3秒过去了……"));
// 要打印这句文字，必须写一个Promise处理程序，这很不方便：
p.then((x) => console.log(x));
// async/await关键字应运而生
```

#### async/await关键字

`async` 用于**声明异步函数**，可以让函数具有异步特征，并且其中允许使用`await`关键字。`async`和`await`关键字让我们可以用一种更简洁的方式写出基于`Promise`的异步行为，而无需刻意地链式调用`promise`。 

```js
async function foo() {
    console.log(1);
}
foo();
console.log(2);
// 1
// 2
```

async函数一定会返回一个promise对象。如果一个async函数的返回值看起来不是promise，那么它将会被`Promise.resolve()`隐式地包装在一个promise中。

```js
async function foo() {
   return 1
}
// 等同于
function foo() {
   return Promise.resolve(1)
}
```

**await**

正常情况下，`await`命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。另一种情况是，`await`命令后面是一个`thenable`对象（即定义了`then`方法的对象），那么`await`会将其等同于 Promise 对象做处理。

`await` 关键字可以暂停异步函数代码的执行，等待Promise解决。 async函数的函数体可以被看作是由0个或者多个await表达式**分割开来**的。从第一行代码直到（并**包括**）第一个await表达式（如果有的话）都是同步运行的。这样的话，一个不含await表达式的async函数是会同步运行的。然而，如果函数体内有一个await表达式，async函数就一定会异步执行。 

```js
async function foo() {
    await 1
}
// 等价于
function foo() {
    return Promise.resolve(1).then(() => { })
}
```

在await表达式之后的代码可以被认为是**存在在链式调用的then回调中**，多个await表达式都将加入链式调用的then回调中，返回值将作为最后一个then回调的返回值。 

```js
// 之前的例子：
let p = new Promise((resolve, reject) => setTimeout(resolve, 3000, "3秒过去了……"));
p.then((x) => console.log(x));

// 可以写成这样：
async function foo() {
    let p = new Promise((resolve, reject) => setTimeout(resolve, 3000, "3秒过去了……"));
    console.log(await p);
}
foo();
```

使用例1：

```js
async function foo() {
    const result1 = await new Promise((resolve) => setTimeout(resolve, 1000, '1'));
    console.log(result1);
    const result2 = await new Promise((resolve) => setTimeout(resolve, 1000, '2'));
    console.log(result2);
}
foo();
// 1 (1秒后)
// 2 (2秒后)
```

await执行两次promise，整个`foo`函数的执行将会被分为**三个阶段**。

1. `foo`函数的第一行将会同步执行，检测到await关键字，然后暂停通过`foo`的进程，并将控制权交还给调用`foo`的函数（在这里是window对象）。await将会等待promise的结束。
2. 一秒过后，第一个promise的状态改变为fulfilled，控制权将重新回到foo函数内。await关键字会**解包**这个Promise对象，将`1`作为结果返回给await表达式的左边即`result1`。接下来函数会继续进行，到达第二个await区域，此时`foo`函数的进程将再次被暂停。
3. 两秒过后，同样当第二个promise完结的时候，`result2`将被赋值为`2`，之后函数将会正常同步执行，将默认返回`undefined` 。

使用例2：await实现sleep：

```js
function sleep(delay) {
  return new Promise(resolve=>setTimeout(resolve, delay));
}

async function foo(num) {
  for (let index = 0; index < num; index++) {
    console.log(index);
    await sleep(1000);
  }
}

foo(5);	// 间隔一秒输出：0 1 2 3 4 5
```



#### 错误处理

`async`函数内部抛出错误，会导致返回的 Promise 对象变为`reject`状态。抛出的错误对象会被`catch`方法回调函数接收到。

```js
async function f() {
  throw new Error("出错了！")
}

f().catch(console.log);	// 出错了！
```

任何一个`await`语句后面的 Promise 对象变为`reject`状态，那么**整个**`async`函数都会中断执行。 

```js
async function f() {
  await Promise.reject("Error!");
  await Promise.resolve("Hello");	// 不会执行！
}
```

如果我们希望前面的异步操作即使失败，也不要影响后面的异步操作，就可以将前面的await放在 `try...catch` 结构中；或者在await后面的Promise中添加一个`catch`方法处理错误：

```js
// 方法一
async function f() {
  try {
    await Promise.reject("Error!");
	// ...
    // 如果有多个await可以统一放在这里
  } catch (error) { }
  return await Promise.resolve("Hello!");
}
f().then(console.log);	// Hello!

// 方法二
async function f() {
  await Promise.reject("Error!")
    .catch(e => { });
  return await Promise.resolve("Hello!");
}
f().then(console.log);	// Hello!
```

下面的例子使用`try...catch`结构，实现多次重复尝试:

```js
const superagent = require('superagent');
const NUM_RETRY = 3;

async function test() {
  let i;
  for (i = 0; i < NUM_RETRY; i++) {
    try {
      await superagent.get('http://google.com/this-throws-an-error');
      break;
    } catch (error) { }
  }
  console.log(i);
}

test();	// 3
```

#### 平行加速

以下例子中，异步函数会依次暂停等待每个延时完成，虽然保证了执行顺序，但执行时间是每个延时的和：

```js
async function randomDelay(id) {
  const delay = Math.random() * 1000;
  return new Promise(resolve=> {
    return setTimeout(()=> {
      console.log(`During ${delay}ms, ${id} finished.`);
      resolve();
    }, delay);
  });
}

async function foo() {
  const timeStart = Date.now();
  await randomDelay(0);
  await randomDelay(1);
  await randomDelay(2);
  await randomDelay(3);
  await randomDelay(4);
  console.log(`${Date.now() - timeStart}ms elapsed.`);
}

foo();
// During 744.274494217729ms, 0 finished.
// During 974.8883609909567ms, 1 finished.
// During 639.9676673141034ms, 2 finished.
// During 724.521981197168ms, 3 finished.
// During 400.1842126542352ms, 4 finished.
// 3511ms elapsed.
```

如果无需保证执行顺序，那么就可以利用**平行加速**，一次性初始化所有Promise，再分别获取结果：

```js
async function randomDelay(id) {
  const delay = Math.random() * 1000;
  return new Promise(resolve=> {
    return setTimeout(()=> {
      console.log(`During ${delay}ms, ${id} finished.`);
      resolve();
    }, delay);
  });
}

async function foo() {
  const timeStart = Date.now();
  // 一次性初始化所有Promise，延迟程序同时并发，各个程序何时结束是随机的
  const p0 = randomDelay(0);
  const p1 = randomDelay(1);
  const p2 = randomDelay(2);
  const p3 = randomDelay(3);
  const p4 = randomDelay(4);
  // await按完成的先后顺序输出消息
  await p0;
  await p1;
  await p2;
  await p3;
  await p4;
  console.log(`${Date.now() - timeStart}ms elapsed.`);
}

foo();
// During 234.13000289539298ms, 0 finished.
// During 247.81748959957685ms, 2 finished.
// During 535.6425323508205ms, 4 finished.
// During 550.9490298562847ms, 3 finished.
// During 757.8891514420012ms, 1 finished.
// 761ms elapsed.
```





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

#### 1.对象属性

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

#### 2.对象方法

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

SuperType.prototype.getSuperValue = () => this.prop;	// 定义SuperType方法

function SubType() {									// 定义SubType
    this.subprop = false;								// 定义属性
}

SubType.prototype = new SuperType();					// 继承SuperType

SubType.prototype.getSubValue = () => this.subprop;		// 定义SubType方法

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
  instance1.colors.push("green"); // 在实例上的修改实际上已经修改了构造函数
  console.log(instance1.colors);	// 'red, blue, green'
  
  let instance2 = new SubType();
  console.log(instance2.colors);	// 'red, blue, green' 另一实例共享了instance1的改动
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
    SuperType.call(this);	// 执行上下文切换至SubType
}

let instance1 = new SubType();
instance1.colors.push("green");
console.log(instance1.colors);	// "red,blue,green"

let instance2 = new SubType();
console.log(instance2.colors);	// "red,blue"
```

通过使用 `call()` 方法，在执行 `new SubType()` 创建实例时，js会将执行上下文转换至`SuperType`函数内部，然后运行 `SuperType` 构造函数中的所有初始化引用类型值的代码，这样每个实例都会有自己的 `colors` 属性了。

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

- 本质上，此方法仅仅是在构造实例时，将执行上下文从子类函数指向父类函数，

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

这个 `object()` 函数会创建一个临时构造函数 `F()`，将传入的对象赋值给这个构造函数的原型，然后返回这个临时类型的一个实例。本质上，`object()` 是对传入对象进行了一次**浅拷贝**。

```js
let person = {
    name: "Nicholas",				// 原始值属性，直接继承，不共享
    friends: ["Tom", "Jerry"]		// 引用值属性，直接继承，共享
};

let anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Bob");
console.log(anotherPerson);
// { name:"Greg" } 原始值的属性屏蔽
// [[Prototype]]: { name:"Nicholas", friends: ['Tom', 'Jerry', 'Bob', 'Barbie'] }

let yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

console.log(person);
// { name:"Nicholas", friends: ['Tom', 'Jerry', 'Bob', 'Barbie'] }

// 数组作为引用值始终会共享，name作为原始值会
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
    name: "Nicholas",			// 原始值属性，直接继承，不共享
    friends: ["Tom", "Jerry"]	// 引用值属性，直接继承，共享
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

### 类

#### 1.理解类

ES6 引入了「**类**」这个概念，作为对象的模板。通过`class`关键字，可以定义类。基本上，ES6 的`class`可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的`class`写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。 

`constructor()`方法是类的默认方法，通过`new`命令生成对象实例时，自动调用该方法。一个类必须有`constructor()`方法，如果没有显式定义，一个空的`constructor()`方法会被默认添加。 

```js
class Point {
}

// 等同于
class Point {
  constructor() {}
}
```

- 类必须使用`new`调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用`new`也可以执行。 

- 与 ES5 一样，实例的属性除非显式定义在其本身（即定义在`this`对象上），否则都是定义在原型上（即定义在`class`上）。 

- 在类的内部可以使用`get`和`set`关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。 

- 类不存在变量提升（hoist），这一点与 ES5 完全不同。 

-  由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被`Class`继承，包括`name`属性。 

  ```js
  class Point {}
  Point.name // "Point"
  ```

#### 2.静态方法

类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上`static`关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。父类的静态方法，可以被子类继承。 

```js
class Foo {
  static classMethod() {
    return 'hello';
  }
}

Foo.classMethod() // 'hello'

var foo = new Foo();
foo.classMethod()
// TypeError: foo.classMethod is not a function
```

上面代码中，`Foo`类的`classMethod`方法前有`static`关键字，表明该方法是一个静态方法，可以直接在`Foo`类上调用（`Foo.classMethod()`），而不是在`Foo`类的实例上调用。如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法。

注意，如果静态方法包含`this`关键字，这个`this`指的是**类**，而不是实例。

#### 3.静态属性

静态属性指的是Class本身的属性，即`Class.propName`，而不是定义在实例对象（`this`）上的属性。实现方法是在实例属性的前面，加上`static`关键字；或者在外部单独为class赋值属性。 

```js
class Foo {
    static prop = 1;
}
// 或：
class Foo {
}

Foo.prop = 1;
Foo.prop // 1
```

另外， ES2022 引入了[静态块](https://github.com/tc39/proposal-class-static-block)（static block），允许在类的内部设置一个代码块，在类生成时运行一次，主要作用是对静态属性进行初始化。 

```js
class C {
  static x = ...;
  static y;
  static z;

  static {
    try {
      const obj = doSomethingWith(this.x);
      this.y = obj.y;
      this.z = obj.z;
    }
    catch {
      this.y = ...;
      this.z = ...;
    }
  }
}
```

上面代码中，类的内部有一个 static 代码块，这就是静态块。它的好处是将静态属性`y`和`z`的初始化逻辑，写入了类的内部，而且只运行一次。

每个类只能有一个静态块，在静态属性声明后运行。静态块的内部不能有`return`语句。

静态块内部可以使用类名或`this`，指代当前类。

#### 4.私有方法和私有属性

私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。这是常见需求，有利于代码的封装，但 ES6 不提供，只能通过变通方法模拟实现。

- 最简单的方法是在命名上区分：

```js
class Widget {

  // 公有方法
  foo (baz) {
    this._bar(baz);
  }

  // 私有方法
  _bar(baz) {
    return this.snaf = baz;
  }
}
```

上面代码中，`_bar()`方法前面的**下划线**，表示这是一个只限于内部使用的私有方法。但是，这种命名是不保险的，在类的外部，还是可以调用到这个方法。 

- 另一种是将私有方法移出类：

```js
class Widget {
  foo (baz) {
    bar.call(this, baz);	// 通过call访问外部方法
  }
}

function bar(baz) {
  return this.snaf = baz;
}
```

上面代码中，`foo`是公开方法，内部调用了`bar.call(this, baz)`。这使得`bar()`实际上成为了当前类的私有方法。但这种做法不利于代码封装，不推荐使用。

- 还有一种方法是利用`Symbol`值的**唯一性**，将私有方法的名字命名为一个`Symbol`值。 

```js
const bar = Symbol('bar');
const snaf = Symbol('snaf');

export default class myClass{
  // 公有方法
  foo(baz) {
    this[bar](baz);
  }

  // 私有方法
  [bar](baz) {
    return this[snaf] = baz;
  }
};
```

上面代码中，`bar`和`snaf`都是`Symbol`值，一般情况下无法获取到它们，因此达到了私有方法和私有属性的效果。但是也不是绝对不行，`Reflect.ownKeys()`依然可以拿到它们。

- 最后，还可以在属性名之前使用 `#` 

```js
class IncreasingCounter {
  #count = 0;
  get value() {
    console.log('Getting the current value!');
    return this.#count;
  }
  increment() {
    this.#count++;
  }
}

const counter = new IncreasingCounter();
counter.#count // 报错
counter.#count = 42 // 报错
```

上面代码中，`#count`就是私有属性，只能在类的内部使用（`this.#count`）。如果在类的外部使用，就会报错。 

#### 5.类继承

```js
class SuperType {
    constructor (name) {
        this.name = name;
    }
    static showSentence() {
        return `User's name is `;
    }	// 静态方法
    showName() {
        return this.name;
    }
}

class SubType extends SuperType{
    constructor (name, age) {
        super(name);
        this.age = age;
    }
}
let superUser = new SuperType("Jerry");
let user = new SubType("Tom", 23);	// 创建同时覆盖父类name
console.log(SuperType.showSentence() + user.showName() + ", age " + user.age);
// User's name is Tom, age 23
```

类继承与原型继承的区别：

1. **同时存在两条继承链**

   原型继承中只有一条由`[[prototype]]`连接各个**原型对象**形成的继承链，它负责继承方法；而属性的继承要通过在子类上调用`call()`方法实现。

   而class继承中多了一条由`[[prototype]]`连接各个**子类**形成的继承链（原型继承所有类的`[[prototype]]`都指向 `Function.prototype`），子类的`[[prototype]]`会指向**各自的父类**，顶级父类最后指向`Function.prototype`。这条链表示构造函数的继承，负责继承属性。



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

  

- 扩展运算符： 把数组或类数组对象解压成一组用逗号隔开的参数。可以起到浅拷贝的作用。

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



### Symbol

ES6引入了一种新的**原始数据类型** `Symbol`，用于防止属性名冲突，比如向第三方对象中添加属性时。它的值是唯一的，独一无二的不会重复的。

-  Symbol值不能与其他类型的值进行运算，会报错。
-  Symbol值可以显式转为字符串或布尔值，但是不能转为数值。 

#### 声明

声明一个Symbol有两种方式

- 使用`Symbol.for()`会在系统中将Symbol登记
- 使用`Symbol()`则不会登记

```js
// 1）直接定义
let sym = Symbol('your description');
console.log(sym);   // Symbol(your description)
console.log(sym.description);   // your description

// 2）Symbol.for()定义
let sym1 = Symbol('描述一');
let sym2 = Symbol('描述一');
let symFor1 = Symbol.for('描述一');
let symFor2 = Symbol.for('描述一');

console.log(sym1 == sym2);    // false，直接定义的Symbol具有绝对唯一性，传入相同参数Symbol也是独立唯一的，因为参数只是描述而已；但使用Symbol.for则不会
console.log(symFor1 == sym1);   // false，直接定义的Symbol和for定义的相互独立
console.log(symFor1 == symFor2);    // true，for根据描述获取Symbol，如果不存在则新建一个Symbol
```

- `Symbol.keyFor` 

  根据使用`Symbol.for`登记的Symbol返回描述，如果找不到返回undefined 。 

#### 属性名的遍历

Symbol 作为属性名，遍历对象的时候，该属性不会出现在`for...in`、`for...of`循环中，也不会被`Object.keys()`、`Object.getOwnPropertyNames()`、`JSON.stringify()`返回。

但是，它也不是私有属性，有一个`Object.getOwnPropertySymbols()`方法，可以获取指定对象的所有 Symbol 属性名。该方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。此外，也可以用内置对象方法`Reflect.ownKeys()`实现返回所有类型的键名，包括常规键名和 Symbol 键名。

由于以 Symbol 值作为键名，不会被常规方法遍历得到。我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法：

```js
let size = Symbol('size');

class Collection {
  constructor() {
    this[size] = 0;
  }

  add(item) {	// 原型方法
    this[this[size]] = item;
    this[size]++;
  }

  static sizeOf(instance) {	// 静态方法
    return instance[size];
  }
}

let x = new Collection();
Collection.sizeOf(x) // 0

x.add('foo');	// 执行原型方法不改变
Collection.sizeOf(x) // 1

Object.keys(x) // ['0']
Object.getOwnPropertyNames(x) // ['0']
Object.getOwnPropertySymbols(x) // [Symbol(size)]
```

上面代码中，对象`x`的`size`属性是一个 Symbol 值，所以`Object.keys(x)`、`Object.getOwnPropertyNames(x)`都无法获取它。这就造成了一种非私有的内部方法的效果。 



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

# 