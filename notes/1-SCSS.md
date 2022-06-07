# SCSS

## flex布局

- display: flex 写在父容器声明一个弹性盒子，它的所有子元素自动成为容器成员（项目），容器属性主要控制项目的**伸缩方向**和**对齐方式**，容器属性有：
  - flex-direction 主轴方向 
  - justify-content 主轴对齐方式 
  - align-items 交叉轴对齐方式 
  - align-content 多轴线对齐方式 
  - flex-wrap 换行方式 
- 各个容器成员的**排列顺序**、**伸缩比例**、**预设大小**和**独立特性**，由项目属性属性控制：
  - flex-grow 当前项目的伸展比例，默认0，即如果存在剩余空间，也不伸展
  - flex-shrink 当前项目的缩小比例，默认1，即如果空间不足，该项目将缩小
  - flex-basis 当前项目在伸缩之前，预设占据的主轴空间，浏览器根据这个属性，计算主轴是否有多余空间。默认auto，即项目的本来大小
  - flex 以上三个属性的缩写，默认值为 0 1 auto。该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。设置为一个无单位**数**时，flex: [number] 1 0
  - order 当前项目的排列顺序，默认0
  - align-self 当前项目有与其他项目不一样的对齐方式，可覆盖align-items属性，默认auto

> [Flex 布局教程：语法篇 - 阮一峰的网络日志 (ruanyifeng.com)](http://ruanyifeng.com/blog/2015/07/flex-grammar.html) 

## grid 网格

1. 创建网格 `display: grid` 

2. 添加多列 `grid-template-columns: auto 50px 2fr 1fr 10% ` 

3. 添加多行 `grid-template-rows: auto 50px 2fr 1fr 10%` 

4. 添加间距 `grid-gap: [row] [column]` / `grid-column-gap: 10px` / `grid-row-gap: 10px` 

5. 跨列占据 `grid-column:[n]/[m]` ( `n/m` 为网格线编号，跨行占据同上)

6. 将网格划分为区域模板

    ```
    .grid {
        grid-template-areas:
            "header header header"
            "advert content content"
            "footer footer footer";
    }
    ```

7. 放置项目于区域模板

   ```
   .item1 {
   	grid-area: header;
   }
   ```

   若未定义区域模板，可直接为项目添加模板，其中 a-b 为水平网格线，A-B 为垂直网格线

   ```
   .item1 {
   	grid-area: [a]/[A]/[b]/[B];
   }
   ```

8. repeat 函数

   ```
   .grid {
       grid-template-column: repeat(3, 1fr);
   }
   ```

9. 限制项目大小

   ```
   .grid {
   	grid-template-column: repeat(3, minmax(90px, 1fr));
   }
   ```

10. 自动填充 

    auto-fill 以最小大小填充（留空）: `repeat(auto-fill, minmax(90px, 1fr))` 

    auto-fit 自动拉伸（填满）: `repeat(auto-fit, minmax(90px, 1fr))`

## CSS3

- `pointer-events: none;`禁用鼠标事件（看得见摸不着）

## 其他

- 带阴影的圆角边框

  [CSS3 box-shadow 属性 | 菜鸟教程 (runoob.com)](https://www.runoob.com/cssref/css3-pr-box-shadow.html)

- `background-image` 属性

  [CSS background-image 属性 | 菜鸟教程 (runoob.com)](https://www.runoob.com/cssref/pr-background-image.html)

- `width : 100%` 的含义
  [正确使用"width:100%" - 简书 (jianshu.com)](https://www.jianshu.com/p/7d565f14f98e)