## 规则

 `box-shadow` 属性用于在元素的框架上添加阴影效果。 你可以在同一个元素上设置多个阴影效果，并用  ` ,` 将他们分隔开。 该属性可设置的值包括阴影的`X轴偏移量`、`Y轴偏移量`、`模糊半径`、`扩散半径`和`颜色`。 

```
box-shadow: [inset] <offset-x> <offset-y> [<blur-radius>] [<spread-radius>] color [,]
```

```
/* x偏移量 | y偏移量 | 阴影颜色 */
box-shadow: 60px -16px teal;

/* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影颜色 */
box-shadow: 10px 5px 5px black;

/* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* 插页(阴影向内) | x偏移量 | y偏移量 | 阴影颜色 */
box-shadow: inset 5em 1em gold;

/* 任意数量的阴影，以逗号分隔 */
box-shadow: 3px 3px red, -1em 0 0.4em olive;

/* 全局关键字 */
box-shadow: inherit;
box-shadow: initial;
box-shadow: unset;
```

 当给出两个、三个或四个值时 ：

- 如果只给出两个值, 那么这两个值将会被当作 `  <offset-x> ` 来解释。 ` <offset-y > ` 设置水平偏移量，**正值**阴影则位于元素**右边**，**负值**阴影则位于元素**左边** `` 设置垂直偏移量，**正值**阴影则位于元素**下方**，**负值**阴影则位于元素**上方**

- 如果给出了第三个值, 那么第三个值将会被当作`<blur-radius>`解释。 值越大，模糊面积越大，阴影越大越淡。**不能为负值**。

- 如果给出了第四个值, 那么第四个值将会被当作`spread-radius`解释。 取**正值**时，阴影**扩大**；取**负值**时，阴影**收缩**。默认为0，此时阴影与元素同样大。需要考虑 inset。

- 可选，`inset`关键字。默认阴影在边框外，即阴影向外扩散。使用 `inset` 关键字 会使得阴影落在盒子内部。 此时阴影会在**边框之内 、背景之上、内容之下**。

- 可选，`color` 值。

 **! 第三个数值（模糊半径）控制模糊程度，不改变阴影大小；第四个数值（扩散半径）会改变阴影大小，正值->阴影扩展，负值->阴影收缩。** 



## 使用例

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>box-shadow-all</title>
</head>
<style>
  .shadow div {
    float: left;
    margin: 50px 120px;
    width: 100px;
    height: 100px;
    border: 2px solid yellowgreen;
    text-align: center;
    line-height: 100px;
  }
  
  .top {
    box-shadow: 0px -5px 10px -5px red;
  }
  
  .right {
    box-shadow: 5px 0 10px -5px red;
  }
  
  .bottom {
    box-shadow: 0 5px 10px -5px red;
  }

  .left {
    box-shadow: -5px 0 10px -5px red;
  }

  .left-top {
    box-shadow: -5px -5px 10px -4px red;
  }

  .right-top {
    box-shadow: 5px -5px 10px -4px red;
  }

  .right-bottom {
    box-shadow: 5px 5px 10px -4px red;
  }
  
  .left-bottom {
    box-shadow: -5px 5px 10px -4px red;
  }

  .no-top {
    /* .left-bottom, .right-bottom 组合 */
    box-shadow: -5px 5px 10px -4px red, 5px 5px 10px -4px red;
  }

  .no-right {
    /* .left-top, .left-bottom 组合 */
    box-shadow: -5px -5px 10px -4px red, -5px 5px 10px -4px red;
  }

  .no-bottom {
    /* .left-top, .right-top 组合 */
    box-shadow: -5px -5px 10px -4px red, 5px -5px 10px -4px red;
  }
  
  .no-left {
    /* .right-bottom, .right-top 组合 */
    box-shadow: 5px 5px 10px -4px red, 5px -5px 10px -4px red;
  }
</style>

<body>
  <div class="shadow">
    <div class="top">顶部阴影</div>
    <div class="right">右部阴影</div>
    <div class="bottom">底部阴影</div>
    <div class="left">左边阴影</div>
    <div class="left-top">左上阴影</div>
    <div class="right-top">右上阴影</div>
    <div class="right-bottom">右下阴影</div>
    <div class="left-bottom">左下阴影</div>
    <div class="no-top">无上阴影</div>
    <div class="no-right">无右阴影</div>
    <div class="no-bottom">无下阴影</div>
    <div class="no-left">无左阴影</div>
  </div>
</body>

</html>

```

