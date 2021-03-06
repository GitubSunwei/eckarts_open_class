// hello.js 通过 exports 对象把 world 作为模块的访问接口
// exports.world = function() {
//     console.log('Hello World');
// }


// 模块接口的唯一变化是使用 
// module.exports = Hello 代替了exports.world = function(){}。
// 在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，
// 而不是原先的 exports。
//hello.js 
function Hello() { 
    var name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 
}; 
module.exports = Hello;