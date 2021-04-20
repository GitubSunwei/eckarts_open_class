// 引入events模块
var events = require('events');

// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 绑定事件处理程序
eventEmitter.on('eventName',function(){
    console.log('连接成功');

    // 触发 data_received 事件 
    eventEmitter.emit('data_received')
})

var dataHandler = function(){
    console.log('数据接收成功。');
 }

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', dataHandler);

//  触发 eventName 事件
eventEmitter.emit('eventName');

console.log("执行完毕")
