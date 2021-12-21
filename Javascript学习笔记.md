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

### 字面量

在编程语言中，一般**固定值**称为字面量。

- 数字字面量 $Number$ ：`3.14` `1001` `123e5`
- 字符串字面量 $String$ ：`"Hello"` `'Hello'`
- 表达式字面量：`1 + 2` `2 * 3`
- 数组字面量 $Array$ ：`[1, 2, 3, 5, 1001]`
- 对象字面量 $Object$ ：`{ Name:"Arosy", Age:"23" }`
- 函数字面量 $Function$ ：`function myFunction(a, b) {return a + b;}`

### 变量

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

