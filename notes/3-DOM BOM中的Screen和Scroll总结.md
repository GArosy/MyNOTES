## `window`对象（BOM）

- 宽高：和页面的位置、滚动与否无关，只表示页面宽高
  - `innerWidth`/`innerHeight` 页面所在浏览器视口的宽度/高度，包含滚动条，不包含未在页面中显示的可滚动部分；
  - `outerWidth`/`outerHeight` 页面所在浏览器窗口的宽度/高度，不包含未在页面中显示的可滚动部分；
- scroll
  - `scrollX`/`scrollY` 以html页面左上角为基点，以浏览器视口左/上边界为界限，页面滚动过的水平/垂直距离（也可理解为页面向左/向上滑出的浏览器视口的长度）；
  - `pageXOffset`/`pageYOffset` 以上两个属性的别名；
  - `scroll(x, y)`/`scrollTo(x, y)` 将页面滚动到文档中的坐标`x, y`；
  - `scrollBy(x, y)` 在窗口中按指定的偏移量滚动文档；

- screen

  - `screenX`/`screenY` 返回浏览器窗口左/上边界到操作系统桌面左/上边界的水平距离；

  - `screenLeft`/`screenTop` 以上两个属性的别名；

    

## `element`对象（DOM）

- 宽高：和元素的位置、滚动与否无关，只表示元素宽高
  - `clientWidth`/`clientHeight` 元素可见内容的内部宽高。包含padding，不包含border、水平滚动条与margin（height+padding）；
  - `offsetWidth`/`offsetHeight` 元素可见内容的整体宽高。包含padding、border与水平滚动条，不包含margin；
- scroll
  - `scrollWidth`/`scrollHeight` 元素（包含不可见内容）的宽高。当本元素的子元素宽/高大于本元素，且 `overflow=scroll` 时，会出现水平/垂直滚动条，导致部分子元素被隐藏，此时。`scrollWidth/Height` 代表不可见部分的元素宽高，包含padding。scrollHeight/Width >= clientHeight/Width 恒成立；
  - `scrollLeft`/`scrollTop` 有滚动条时，元素向左/向上滑出boder外的长度；
- 距离
  - `offsetLeft`/`offsetTop` 当前元素左边/顶部padding距离父元素左边/顶部padding的距离；