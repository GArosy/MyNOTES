# Python+selenium环境搭建指南

## 0、所需文件

- Python 3.10 下载

  链接：https://pan.baidu.com/s/1JQVfSlEpRr_3D9Qe5PacWw 
  提取码：3vca 

- PyCharm 2.3 下载

  - 本体文件

    链接：https://pan.baidu.com/s/1q-9Fc1Wcke9dJacLeXFbnA 
    提取码：ar00 

  - 破解文件

    链接：https://pan.baidu.com/s/1olmQoIVBCjl0HvRUaqnXQQ 
    提取码：vxbo 

- chromedriver 下载

  http://npm.taobao.org/mirrors/chromedriver/



## 1、安装Python解释器

解释器是Python文件得以在计算机上运行的前提。

安装时把能打的√都打上。

## 2、安装PyCharm

PyCharm是配置、编写、调试Python文件的集合平台。

## 3、安装chromedriver

chromedriver是python后台调用chrome浏览器的驱动器，安装之后放在chrome根目录下。

## 4、安装selenium以及一些必备库

安装之前将pip默认安装地址切换至国内镜像网站，

打开PyCharm终端窗口，输入：

``` py
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

显示成功后，依次输入：

```py
pip install selenium
```
```py
pip install xlrd # 用于读取excel表格的库
```
```py
pip install lxml # 用于实现CSS定位的库
```
```py
pip install time # 用于实现延时截图的库
```



