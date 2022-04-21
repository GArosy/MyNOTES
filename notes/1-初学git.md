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

## 3. 创建仓库并连接GitHub

连接GitHub前，需要生成本机的SSH的Key，上传至GitHub账号：

```
ssh-keygen -t rsa -C "gitHub上注册时用的邮箱" 
    Generating public/private rsa key pair.(/Users/your_user_directory/.ssh/id_rsa)直接敲回车
    Enter passphrase (empty for no passphrase):<enter a passphrase>  直接敲回车
    Enter same passphrase again:<enter passphrase again>直接敲回车
    生成类似于下面的内容
+--[ RSA 2032]----+  
|     .+   +      |  
|      ssssssss   |  
|        = * *    |  
|       o = +     |  
|     ssss .      |  
|     o oss       |  
|      o .sE      |  
|                 |  
|                 |  
+-----------------+  
```

生成后，在本机.ssh文件夹中找到id_rsa.pub文件，复制里面的内容。打开gitHub的settings选项选择Deploy keys点击add deploy key 添加key，title填写用户名称+SSHkey，然后把刚才复制的内容直接粘贴到key里面，点选Allow write access。然后点击add key。
```
# 在本地创建仓库并连接至远程仓库
$ cd E:\NOTES 					#用cd命令切换到想要建立仓库的目录
$ git init 						#将这个目录设置成git空仓库，产生一个'.git'隐藏文件夹
$ git add README.md				#添加README文档
$ git commit -m "first commit" 	#首次提交
$ git branch -M main 			#添加一个main分支
$ git status 					#查看仓库目前状态
$ git remote add origin [GitHub库地址]
$ git push -u origin main 		# -u 把本地库的所有内容推送到远程库上

# 直接提交本地仓库的内容至远程仓库
$ git remote add origin [GitHub库地址]
$ git branch -M main
$ git push -u origin main
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

## 5. 拷贝仓库

**git clone** 拷贝一个 Git 仓库到本地，让自己能够查看该项目，或者进行修改。

拷贝项目命令格式如下：

```
 git clone [url]
```

[url]是需要拷贝的项目。 默认情况下，Git 会按照你提供的 URL 所指向的项目的名称创建你的本地项目目录。 通常就是该 URL 最后一个 / 之后的项目名称。如果你想要一个不一样的名字， 你可以在该命令后加上你想要的名称。 

```
$ git clone https://github.com/xxx/tom jerry
Cloning into 'jerry'...
remote: Enumerating objects: 12, done.
remote: Total 12 (delta 0), reused 0 (delta 0), pack-reused 12
Unpacking objects: 100% (12/12), done.
```

 拷贝完成后，在当前目录下会生成一个 jerry 目录。

## 5. 指令列表

### 分支管理

- 创建分支

  git branch test: 基于当前commit创建test分支。.git/HEAD 文件中记录了当前分支名字。

- 删除分支

  git branch -d test：删除本地test分支
  git branch -D test： test分支还没有合入当前分支，所以要用-D参数才能删掉。
  git push origin --delete test 删除远程test分支
  git push origin :test 删除远程test分支

- 查看分支
  it branch 列出当前分支清单
  git branch -a 查看远程分支和本地分支
  git branch -v 查看各个分支最后一个提交信息
  git branch --merged 查看哪些分支已经合并入当前分支

- 拉取分支
  git fetch origin 同步远程服务器的数据到本地
  git checkout -b test origin/test_remote 将远程分支test_remote拉取下来到本地test分支
  git checkout test 将远程分支test拉取下来到本地test分支
  git pull test从远程分支test 中checkout下来的本地分支test成为跟踪分支，使用git pull或者git push就会操作到对应的远程分支test

- 切换分支
  git checkout -b B origin/A
  切换到origin/A分支命令本地分支为”B”

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

- `pull` 代码时报错 `error: Your local changes to the following files would be overwritten by merge:` 

  警告本地库中的文件会被git服务器上的代码覆盖，解决方法：

  - 方法1：保留本地代码，并把git上的代码pull到本地，本地代码会被暂时封存：

    ```
    git stash
    git pull origin master
    git stash pop
    ```

  - 方法2：完全覆盖本地代码，直接回退到上一个版本，再pull：

    ```
    git reset --hard
    git pull origin master
    ```

    
