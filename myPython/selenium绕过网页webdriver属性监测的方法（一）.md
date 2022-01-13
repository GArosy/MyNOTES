# selenium绕过网页webdriver属性监测的方法（一）

> 爬虫程序可以借助渲染工具从动态网页中获取数据，“借助”其实是通过对应的浏览器驱动（及Webdriver）向浏览器发出指令的行为。也就是说，开发者可以根据**客户端是否包含浏览器驱动**这一特征来区分正常用户和爬虫程序。



### 识别原理

网页只要设置了检查webdriver的JavaScript方法，识别到Navigator对象的webdriver属性异常，即认为客户端目前被机器控制，不返回数据（例如Chrome上方显示的自动化控制状态）。

`navigation.webdriver`的返回值有三种，分别是：

- `true`
- `false`
- `undefined`

正常访问的情况下其值为`undefind`；自动化控制下返回值为`true`。



### 设置JS实现反爬

```html
<script>
	if(window.navigator.webdriver == true){
	    document.write("<span>看到这段就代表你是爬虫</span>")
	}else{
	    document.write("<span>真正的信息在这儿呢</span>")
	}
</script>
```



### 绕过WebDriver识别的方法

在触发网页的Javascript方法前，将`navigation.webdriver`的返回值改为`false`或者`undefind` ，即可绕过监测。

在Chrome`79.0.3945.16`版本之后，需要调用`execute_cdp_cmd`函数来改变webdriver属性，该函数在文档加载前注入一段JS代码以消去webdriver值。

> [cdp即Chrome DevTools Protocal，Chrome开发者工具协议。](https://chromedevtools.github.io/devtools-protocol/)

``` python
#!/usr/bin/env python3
# -*- coding: UTF-8 -*-

from selenium import webdriver

driver = webdriver.Chrome()
script = "Object.defineProperty(navigator, 'webdriver', {get: () => undefined})"
driver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {"source": script})
driver.get("YOUR_URL")
# 在控制台中验证window.navigator.webdriver的值为undefined。
driver.quit()
```



### PS: selenium打开浏览器会产生的其余特征码

 ```html
 webdriver  
 __driver_evaluate  
 __webdriver_evaluate  
 __selenium_evaluate  
 __fxdriver_evaluate  
 __driver_unwrapped  
 __webdriver_unwrapped  
 __selenium_unwrapped  
 __fxdriver_unwrapped  
 _Selenium_IDE_Recorder  
 _selenium  
 calledSelenium  
 _WEBDRIVER_ELEM_CACHE  
 ChromeDriverw  
 driver-evaluate  
 webdriver-evaluate  
 selenium-evaluate  
 webdriverCommand  
 webdriver-evaluate-response  
 __webdriverFunc  
 __webdriver_script_fn  
 __$webdriverAsyncExecutor  
 __lastWatirAlert  
 __lastWatirConfirm  
 __lastWatirPrompt  
 ```
