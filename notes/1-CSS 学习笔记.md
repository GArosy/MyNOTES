# CSS

- 什么是 `flex` 布局

  [弹性布局（display:flex;）属性详解 - cdgogo - 博客园 (cnblogs.com)](https://www.cnblogs.com/hellocd/p/10443237.html)

- 带阴影的圆角边框

  [CSS3 box-shadow 属性 | 菜鸟教程 (runoob.com)](https://www.runoob.com/cssref/css3-pr-box-shadow.html)

- `background-image` 属性

   [CSS background-image 属性 | 菜鸟教程 (runoob.com)](https://www.runoob.com/cssref/pr-background-image.html)

- `width : 100%` 的含义
  [正确使用"width:100%" - 简书 (jianshu.com)](https://www.jianshu.com/p/7d565f14f98e)

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