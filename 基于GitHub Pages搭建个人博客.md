# 基于GitHub Pages搭建个人博客

> 使用GitHub Pages服务可以免费搭建个人博客，无需服务器。
>
> GitHub Pages基于github的版本管理功能，可以方便地进行更新和版本回滚。由于本地库的存在，博客内容可以随意修改、转移、发布至其他平台。

## 1. 创建仓库

## 2. 绑定域名

域名配置最常见有CNAME和A记录两种方式，CNAME填写域名，A记录填写IP，由于不带www方式只能采用A记录，所以必须先ping一下`用户名.github.io`的得到IP，然后到你的域名DNS设置页，将A记录指向你ping出来的IP，将CNAME指向`用户名.github.io`，这样可以保证无论是否添加www都可以访问。

## 3. 同步库

