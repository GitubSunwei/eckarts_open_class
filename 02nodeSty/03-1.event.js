var events = require('events');

// 创建 eventEmitter 对象
    // var event = new events.EventEmitter();
    // event.on('some_event', function(){
    //     console.log('some_event事件触发');
    // })

    // setTimeout(function(){
    //     event.emit('some_event')
    // },1500)


// 创建 eventEmitter 对象
    // var emitter = new events.EventEmitter(); 
    // emitter.on('someEvent', function(arg1, arg2) { 
    //     console.log('listener1', arg1, arg2); 
    // }); 
    // emitter.on('someEvent', function(arg1, arg2) { 
    //     console.log('listener2', arg1, arg2); 
    // }); 
    // emitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); 

    // var eventListeners = emitter.listenerCount('someEvent');


    // var eventEmitter = new events.EventEmitter();
    // // 监听器 #1
    // var listener1 = function listener1() {
    //     console.log('监听器 listener1 执行。');
    // }
    
    // // 监听器 #2
    // var listener2 = function listener2() {
    //     console.log('监听器 listener2 执行。');
    // }
    
    // // 绑定 connection 事件，处理函数为 listener1 
    // eventEmitter.addListener('connection', listener1);  //为指定事件添加一个监听器到监听器数组的尾部。
    
    // // 绑定 connection 事件，处理函数为 listener2
    // eventEmitter.on('connection', listener2);

    // // 移除监绑定的 listener2 函数
    // eventEmitter.removeListener('connection', listener2);
    // console.log("listener2 不再受监听。");

    // var eventListeners2 = eventEmitter.listenerCount('connection');
    // console.log(eventListeners2 + " 个监听器监听连接事件。");

    // // 处理 connection 事件 
    // eventEmitter.emit('connection');

    // console.log("程序执行完毕。");

   




