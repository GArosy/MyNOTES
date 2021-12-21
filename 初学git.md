# 初学git

> 详细教程[Git 教程 | 菜鸟教程 (runoob.com)](https://www.runoob.com/git/git-tutorial.html)

## 1. 安装

> 链接：https://pan.baidu.com/s/1ml_izq1k_MTVP60oWu_oqA 
> 提取码：3khr

选好目录后全选next完成安装，打开Git Bash界面，输入 `git version ` 查看git版本（采用Linux指令交互）。

## 2. 配置

- 配置用户和邮箱名，这将显示在git的改动记录中

  > 注意git config命令的--global参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。

```linux命令
$ git config --global user.name "Your Name" #配置用户名
$ git config --global user.email "email@example.com" #配置邮箱名
```

## 3. 创建本地仓库

```
$ cd E:\NOTES #用cd命令切换到想要建立仓库的目录
$ git init #将这个目录设置成git空仓库，产生一个'.git'隐藏文件夹
$ git status #查看仓库目前状态
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

> 版本库：仓库所在目录实际为**工作区**，其中`.git`文件夹为**版本库**，是git负责管理的内容。
>
> 暂存区：版本库中包含一个**临时区域**，保存下一步要提交的文件。
>
> 分支：版本库中包含若干分支，提交的文件存储在分支中。

工作区下的文件并没有被提交至仓库，需要进行提交操作。

```
$ git add . #将工作区所有文件添加进暂存区
$ git commit -m "描述信息" #将暂存区的文件提交，存入分支，形成一个版本
```

大功告成！

## 5. 指令列表

|    指令    |                             说明                             | 备注                                                         |
| :--------: | :----------------------------------------------------------: | :----------------------------------------------------------- |
| git add .  | 监控工作区的状态树，此命令会把工作区的所有变化提交到暂存区，包括文件内容修改(modified)以及新文件(new)，但不包括被删除的文件。 |                                                              |
| git add -u | 他仅监控已经被add的文件（即tracked file），他会将被修改的文件提交到暂存区。add -u 不会提交新文件（untracked file）。（git add --update的缩写）,我们在写一个的新的功能创建了一些新的代码文件，我们暂时不想提交这些代码，这种情况下就可以考虑此命令。 |                                                              |
| git add -a | 是上面两个功能的合集（git add --all的缩写），一般新创建和删除的文件都是要加到暂存区的，所以我们通常直接用这个命令就可以了。 |                                                              |
|  git show  |                      列出最近一次的提交                      | 对于commit：像这样，你不断对文件进行修改，然后不断提交修改到版本库里，就好比玩RPG游戏时，每通过一关就会自动把游戏状态存盘，如果某一关没过去，你还可以选择读取前一关的状态。有些时候，在打Boss之前，你会手动存盘，以便万一打Boss失败了，可以从最近的地方重新开始。Git也是一样，每当你觉得文件修改到一定程度的时候，就可以“保存一个快照”，这个快照在Git中被称为commit。一旦你把文件改乱了，或者误删了文件，还可以从最近的一个commit恢复，然后继续工作，而不是把几个月的工作成果全部丢失。 |
|   git rm   |                           删除文件                           |                                                              |

## 6. 遇到的问题

- 退出vim编辑器模式

  长按`Esc`+`Shift`+`ZZ`

- Linux下复制粘贴的操作与Windows系统不同

  复制：`Ctrl`+`Insert`

  粘贴：`Shift`+`Insert`

- 在本地 `$ git pull origin master`进行获取时发生错误`fatal: refusing to merge unrelated histories`

  用非clone的方式在本地建立远程库时可能发生此问题。

  解决方法：
  
  - 在 pull命令后使用 `--allow-unrelated-histories` ，合并两个独立启动仓库的历史。
  
    ```
    $ git pull origin master --allow-unrelated-histories
    ```

- 键入 `$ git push origin master` 进行提交的时候出现错误：`error: failed to push some refs to 'https://github.com/xxx/`

  由远程库与本地库不一致造成，解决方法：

  - ```
    $ git pull --reabase origin master
    ```

    把远程库中的更新**合并**到（**pull=fetch+merge**）本地库中，**–-rebase**的作用是取消掉本地库中刚刚的commit，并把他们**接到**更新后的版本库之中。

