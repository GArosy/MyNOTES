# JS中的客户端储存

## cookie

为解决cookie存储空间不足的问题（仅有4KB），HTML5 中加入了 `localStorage` 特性，它提供5MB的容量用于储存字符串数据



## Web Storage

有时客户端需要储存一些本地数据，这些数据不需要频繁发送回服务器，而且它们的体积可能会比较大，这时使用cookie并不是一个合适的做法（仅有4KB容量）。HTML5的 Web Storage 提供了 cookie 之外的储存会话数据的途径，可以实现持久储存大量数据（大多为5MB）的机制。Web Storage 提供了两个对象，其主要区别在于生存期：

- 永久储存机制—— `localStorage` 
- 跨会话储存机制—— `sessionStorage` 

全部浏览器在 **window** 对象上支持 `localStorage` 和 `sessionStorage` 。

### Storage 类型

Storage 类型用于保存键值对数据（只支持字符串数据），它的实例有以下额外的方法：

- clear() 清楚所有数据
- getItem(*name*) 获取指定键的值
- key(*index*) 获取指定值的键
- removeItem(*name*) 删除指定键值对
- setItem(*name, value*) 设置指定键值对

#### sessionStorage 对象

sessionStorage 是 Storage 类型的实例，继承Storage类型的所有方法。

生存期：只储存会话数据，这意味着数据在浏览器关闭（也包括关闭浏览器的标签页）时会清空，但不受页面刷新影响。

作用域：数据必须在**同一窗口**下使用，所以它在多页项目下用处有限。

应用：适用于储存只在会话期间有效的小块数据。

#### localStorage 对象

localStorage 同样是 Storage 类型的实例，使用方法上并无差别。

生存期：理论上永久有效，数据会保留至主动通过js清空或用户清除浏览器缓存，不受浏览器刷新、关闭、重启的影响。

作用域：页面来自同一个域、在相同的端口使用相同的协议，即可访问同一个 localStorage 对象。

应用：适用于储存只在会话期间有效的小块数据。

### 储存事件

Storage 的实例发生变化时，都会在window上触发 `storage` 事件，这个事件的事件对象有4个属性：

- domain：变化对应的域；
- key：变化的键；
- newValue：键被设置的新值，如被删除则为null；
- oldValue：键变化之前的值；



## IndexedDB