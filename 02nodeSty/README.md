## 1、fs.readFile

fs.readFile() 是异步函数用于读取文件。
    如果在读取文件过程中发生错误，错误 err 对象就会输出错误信息。

    如果没发生错误，readFile 跳过 err 对象的输出，文件内容就通过回调函数输出。



## 2、EventEmitter 类

引入 events 模块

```
var events = require('events');
```

**EventEmitter 的核心就是事件触发与事件监听器功能的封装**。你可以通过require("events");来访问该模块。



创建 eventEmitter 对象

```
var eventEmitter = new events.EventEmitter();
```

Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。

==on 函数用于绑定事件函数，emit 属性用于触发一个事件==。



## 3、Node.js模块系统

Node.js 提供了 exports 和 require 两个对象，

```
其中 exports 是模块公开的接口，
require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。 
```

## 4、全局对象

==**__filename**== 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径， 

==**__dirname**== 表示当前执行脚本所在的目录。 