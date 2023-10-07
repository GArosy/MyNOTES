# Sass

## 认识Sass

CSS书写代码规模较大的Web应用时，容易造成选择器、层叠的复杂度过高，因此推荐通过 Sass 进行CSS开发：Sass 是一款成熟的**CSS预处理器**，它在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，让CSS的书写更加高效和规范。



从第三代开始，Sass的语法格式放弃了缩进式风格，改用在 CSS3 语法的基础上拓展的 SCSS (Sassy CSS) 格式。它完全向下兼容普通的CSS代码，这一代的 Sass 被称为 **SCSS**。 



Sass 目前有三个版本`Dart Sass`、`libsass`和`Ruby Sass`：

- `Dart Sass`，用`Dart`语言写的`sass`实现，于2016年11月1日发布`alpha`版本，版本`1.23.0`之后完全支持模块化机制。

- `libSass`也就是俗称的`node-sass`，用`c/c++`实现的`sass`版本，使用非常广泛。 `node-sass`是绑定了 `libsass`的`nodejs`库，可以极快的将`.scss` 文件编译为`.css`文件，安装过程过于繁琐，官方不推荐再使用。

- `Ruby Sass`，是最初的`Sass`实现，但是2019年3月26日被停止了，以后也不会再支持，使用者需要迁移到别的实现上。



## 使用Sass

### 部署

推荐使用`npm`安装`Dart Sass` ：



全局安装：

```
npm install -g sass
```

