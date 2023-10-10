## Flutter环境搭建

> MacOS：https://flutter.cn/docs/get-started/install/macos
>
> Windows：https://flutter.cn/docs/get-started/install/windows

以mac为例：

### 1. 下载SDK

https://docs.flutter.dev/get-started/install/macos

下载完成后解压到任意文件夹，这里的目标文件夹是`~/development`

```zsh
cd ~/development
unzip ~/Downloads/flutter_macos_arm64_3.13.2-stable.zip
```

### 2. 配置环境变量

通过 `echo $0` 获取终端类型 `-zsh` / `-bash` ，打开对应的 `.zshrc` / `.bashrc` 文件，添加如下指令：

```zsh
export PATH="$PATH:~/development/flutter/bin"
```

以zsh为例，在终端运行如下代码刷新窗口：

```zsh
source $HOME/.zshrc
```

最后验证 `flutter/bin` 文件夹是否已经添加到 PATH 环境变量中

```zsh
echo $PATH
```

验证flutter指令是否可用

```zsh
which flutter
```

如果PATH变量有flutter，但无法执行flutter指令，考虑flutter文件没有执行权限，试用以下指令添加权限：

```zsh
sudo chmod +x ~/development/flutter/bin/flutter
```

> chmod是一个Linux和Unix命令，用于更改文件或目录的访问权限。它允许用户设置不同的权限位，以控制文件的读、写和执行访问级别。

### 3. 安装其他依赖

使用doctor指令来查看当前环境是否需要安装其他的依赖：

```zsh
flutter doctor
```

这个命令会检查你当前的配置环境，并在命令行窗口中生成一份报告。安装 Flutter 会附带安装 Dart SDK，所以不需要再对 Dart 进行单独安装。你需要仔细阅读上述命令生成的报告，看看别漏了一些需要安装的依赖，或者需要之后执行的命令（这个会以 **加粗的文本** 显示出来）。

### 4. 配置iOS开发环境

##### 安装Xcode

在AppStore安装Xcode应用后，安装xcode命令行工具：

```
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -runFirstLaunch
```

输入agree确认xcode协议后即可安装。安装 Xcode 之后，就可以在 iOS 真机或者模拟器上运行 Flutter 应用了

##### 配置iOS模拟器

使用以下命令打开模拟器

```
open -a Simulator
```

### 5. 配置Android开发环境

##### 安装Android Studio

下载并安装 https://developer.android.com/studio

运行后进入Android Studio Setup Wizard，自动安装Android SDK及工具。完成后运行 `flutter doctor` 确保 Flutter 已经定位到了你的 Android Studio 的安装位置。如果 Flutter 并未定位到Android Studio，运行 `flutter config --android-studio-dir <directory>` 设置你的 Android Studio 的安装目录。

> 如果flutter doctor报错 `cmdline-tools component is missing` ，可能是SDK工具安装不完整。
>
> 在Android Studio设置中找到Android SDK选项，在SDK Tools的Tab中勾选SDK Build-Tools、SDK Command-line Tools、SDK Platform-Tools、SDK Tools(Obsolete)，点击Apply自动安装后，再次运行flutter doctor即可。

##### 许可协议

在SDK Command-line Tools成功安装的前提下，运行以下代码许可Android SDK协议：

```
flutter doctor --android-licenses
```

最后为Android Studio安装Dart和Flutter插件并重启（汉化插件在IntelliJ Platform应用市场下载：https://plugins.jetbrains.com/plugin/13710-chinese-simplified-language-pack----，在插件页面setting中找到Install Plugin from Disk...安装）

### 6. 其它必需工具

##### cocoapods

> 参考：https://www.jianshu.com/p/f43b5964f582

`flutter doctor` 后如果显示缺少cocoapods依赖。cocoapods是Ruby的包管理工具，我们需要确保Ruby环境的完整才能安装：

- 安装Ruby版本管理工具rvm：

  ```zsh
  curl -L get.rvm.io | bash -s stable 
  source ~/.bashrc
  source ~/.bash_profile
  ```

  查看rvm版本验证安装：

  ```zsh
  rvm -v
  #rvm 1.29.12 (latest) by Michal Papis, Piotr Kuczynski, Wayne E. Seguin [https://rvm.io]
  
  # 列出ruby可安装的版本信息
  rvm list known
  ```

- 安装ruby

  如果要安装指定版本的Ruby，请输入 `rvm install 3.2.2 ` 安装，这一步可能需要耗费些时间。

  安装之后设置默认版本：

  ```zsh
  rvm use 3.2.2 --default
  ```

  > 注意，这里必须提前安装好homebrew，这里使用的是ARM架构的M1芯片，国内镜像安装指令如下：
  >
  > ```
  > /bin/bash -c "$(curl -fsSL https://gitee.com/ineo6/homebrew-install/raw/master/install.sh)"
  > ```
  >
  > 安装成功后重启终端即可。
  >
  > 参考：https://zhuanlan.zhihu.com/p/341831809

- 更新gem和更换源

  ```zsh
  sudo gem update --system
  gem sources --remove https://rubygems.org/
  gem sources --add https://gems.ruby-china.com/
  gem sources -l
  # *** CURRENT SOURCES ***
  #
  #https://gems.ruby-china.com/
  ```

- 安装cocoapods

  ```zsh
  sudo gem install -n /usr/local/bin cocoapods
  ```

  完成后使用 `pod --version` 验证。

  

### 7. 创建Flutter项目

启动Android Studio，如果安装了Flutter和Dart插件，即可看到New Flutter Project按钮，填入项目基本信息后，选择SDK路径为flutter安装的根目录（上文中的 `~/development/flutter` ），点击Next创建项目。

编辑器会默认打开 `lib/main.dart` 文件，在上方工具栏选择设备型号，打开模拟器后点击run，即可看到运行的demo

#### 热重载

在打开的文件中做些改动并保存，即可立即在模拟器中看到改动的效果。IDE控制台会展示此次热重载的时间开销情况：

```
Performing hot reload...
Syncing files to device iPhone 14 Pro...
Reloaded 1 of 689 libraries in 126ms (compile: 23 ms, reload: 44 ms, reassemble: 41 ms).
```

可以看到flutter的热重载在百毫秒级别。