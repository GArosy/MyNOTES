# 初学git

## 1. 安装

> 链接：https://pan.baidu.com/s/1ml_izq1k_MTVP60oWu_oqA 
> 提取码：3khr

选好目录后全选next完成安装，打开Git Bash界面（采用Linux指令交互）。

## 2. 配置

- 配置用户和邮箱名，这将显示在git的改动记录中

  > 注意git config命令的--global参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。

```linux命令
$ git config --global user.name "Your Name" #配置用户名
$ git config --global user.email "email@example.com" #配置邮箱名
```

## 3. 创建仓库

```
$ cd E:\NOTES #用cd命令切换到想要建立仓库的目录
$ git init #将这个目录设置成git空仓库，产生一个'.git'隐藏文件夹
$ touch readme.md #在仓库中创建一个readme文档
```

其中：

- `cd`指令实现切换目录

  ```
  cd /root/Docements # 切换到目录/root/Docements
  cd ./path          # 切换到当前目录下的path目录中，“.”表示当前目录  
  cd ../path         # 切换到上层目录中的path目录中，“..”表示上一层目录
  ```

- `init`指令实现建立git库

- `touch`指令实现在当前目录新建文件

- 其余常用Linux命令可参考：[linux常用命令（50个） - 后知、后觉 - 博客园 (cnblogs.com)](https://www.cnblogs.com/xuxinstyle/p/9609551.html)

## 4. 提交文件

