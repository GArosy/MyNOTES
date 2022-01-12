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

## JavaScript语法

### 语句

在HTML中，JavaScript通过语句向浏览器发出命令，语句间用`;`分隔。



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
> 没有被声明的变量默认为全局变量。



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

