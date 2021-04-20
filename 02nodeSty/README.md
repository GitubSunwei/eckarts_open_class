### 1、fs.readFile

fs.readFile() 是异步函数用于读取文件。
    如果在读取文件过程中发生错误，错误 err 对象就会输出错误信息。

    如果没发生错误，readFile 跳过 err 对象的输出，文件内容就通过回调函数输出。



### 2、EventEmitter 类

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