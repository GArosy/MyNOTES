# 解决 Vue 重复点击相同路由，出现 Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation 问题

## 原因

重复点击相同路由时会发生重复跳转，导致报错

## 解决

### 方法一

在 router 文件夹下，添加如下代码： 

```js
const router = new VueRouter({
    mode: 'history',
    routes
})

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
```

### 方法二

在跳转时，判断是否跳转路由和当前路由是否一致，避免重复跳转产生问题 ： 

```js
toMenu (item) {‘
    // 注意route/router拼写
  if (this.$route.path !== item.url) {
    this.$router.push({ path: item.url })
  }
}
```

### 方法三

使用 catch 方法捕获 router.push 异常 ： 

```js
this.$router.push(route).catch(err => {
  console.log('输出报错',err)
})
```