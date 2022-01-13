# selenium绕过网页webdriver属性监测的方法（二）

>上一篇阐述了通过修改 `navigation.webdriver` 返回值绕过WebDriver识别的方法，但在实际运用中仍有局限，因为Selenium、Puppeteer 一众模拟浏览器在爬取时有十几个特征值可被检测到，仅仅修改 webdriver 这一值意义不大。
>
>本篇会介绍一个基于 Node.js 上的 `puppeteer` 插件，通过在selenium中加载一个 `.js` 文件来实现隐藏模拟浏览器指纹特征，可解决绝大部分基于访问监测的反爬。
>
>参考文章：[https://mp.weixin.qq.com/s/Bge-_yiatSq4CQq7fRvjdQ](https://mp.weixin.qq.com/s/Bge-_yiatSq4CQq7fRvjdQ)

## 工作原理

 `Node.js` 版本的 `puppeteer`  有一套叫做 `puppeteer-extra`  的插件，其中 `puppeteer-extra-plugin-stealth` 插件就是用来让 `puppeteer` 隐藏模拟浏览器指纹特征的，其运作的本质就是生成一个用于隐藏特征值的 `stealth.min.js` 脚本文件，在打开网页之前运行这个文件。

既然这个插件的作用就是生成js脚本，我们就可以单独提取这个 `stealth.min.js` 在Selenium中使用了，理论上可以达到相同的效果。

## 示例

首先介绍一个可以查看特征值情况的测试网页 [Antibot (sannysoft.com)](https://bot.sannysoft.com/) 

如果使用浏览器手动打开此网页，其结果应该是这样：

![image.png](https://s2.loli.net/2021/12/31/of1yRYvz9thrbIx.png)

而通过selenium使用Chrome的无头模式打开，其结果是一大片红色：

![](https://mmbiz.qpic.cn/mmbiz_png/ohoo1dCmvqeia3RNTkWwYascfe3WlcOqRqKkceiaORxPfibUb73YRgI9jS0YN8YSmEB15o8gGicNZVdaNUGibficUkSg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

可见模拟浏览器产生的诸多特征值都暴露无遗。

---

那么加载`stealth.min.js` 之后的效果呢？

在 Python 中运行如下代码：

```python
import time
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument('user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36')

driver = Chrome('./chromedriver', options=chrome_options)

with open('stealth.min.js') as f:
    js = f.read()

driver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
  "source": js
})
driver.get('https://bot.sannysoft.com/')
time.sleep(5)
driver.save_screenshot('walkaround.png')

# 你可以保存源代码为 html 再双击打开，查看完整结果
source = driver.page_source
with open('result.html', 'w') as f:
    f.write(source)

```

得到结果如下：

![](https://mmbiz.qpic.cn/mmbiz_png/ohoo1dCmvqewxPw0Dc5M9dPYAotOUiaj09IiaVlq8bwiaJCuBt4on85MSUicj6VzbTP88Gn2l0KrNPutFbibuFITG3g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

可见与手动打开的结果无异，大功告成！

## 附件

`stealth.min.js`文件

链接：https://pan.baidu.com/s/1LKX__oyldD7iRC15N17gcQ 
提取码：lht4 