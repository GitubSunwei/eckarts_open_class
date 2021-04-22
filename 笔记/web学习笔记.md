# 一、作用域

## 1.什么是作用域

```
我们可以这样理解：作用域就是一个独立的地盘，让变量不会外泄、暴露出去。
也就是说作用域最大的用处就是隔离变量，不同作用域下同名变量不会有冲突。
```

## 2.全局作用域和函数作用域

- 所有末定义直接赋值的变量自动声明为拥有全局作用域

- 所有 window 对象的属性拥有全局作用域

  一般情况下，window 对象的内置属性都拥有全局作用域，例如 window.name、window.location、window.top 等等。

函数作用域,是指声明在函数内部的变量，和全局作用域相反，局部作用域一般只在固定的代码片段内可访问到，最常见的例如函数内部。 

值得注意的是：**块语句（大括号“｛｝”中间的语句），如 if 和 switch 条件语句或 for 和 while 循环语句，不像函数，它们不会创建一个新的作用域**。在块语句中定义的变量将保留在它们已经存在的作用域中。 

```
if (true) {
    // 'if' 条件语句块不会创建一个新的作用域
    var name = 'Hammad'; // name 依然在全局作用域中
}
console.log(name); // logs 'Hammad'
```



## 3. 块级作用域

块级作用域可通过新增命令 let 和 const 声明，所声明的变量在指定块的作用域外无法被访问。块级作用域在如下情况被创建：

```
1. 在一个函数内部
2. 在一个代码块（由一对花括号包裹）内部
```

let 声明的语法与 var 的语法一致。你基本上可以用 let 来代替 var 进行变量声明，但会将变量的作用域限制在当前代码块中。块级作用域有以下几个特点：

- ==声明变量不会提升到代码块顶部==

  let/const 声明并不会被提升到当前代码块的顶部，因此你需要手动将 let/const 声明放置到顶部，以便让变量在整个代码块内部可用。

  ```
  var count = 30;
  let count = 40; // Uncaught SyntaxError: Identifier 'count' has already been declared
  ```

  

- 禁止重复声明

  如果一个标识符已经在代码块内部被定义，那么在此代码块内使用同一个标识符进行 let 声明就会导致抛出错误。例如：

## 4.作用域链

当前作用域没有定义的变量，这成为 自由变量 。自由变量的值如何得到 —— 向父级作用域寻找 ；

如果父级也没呢？再一层一层向上寻找，直到找到全局作用域还是没找到，就宣布放弃。这种一层一层的关系，就是 作用域链 。 

# 二、原型与原型链

## 1.prototype 

在JavaScript中，每个函数都有一个prototype属性，这个属性指向函数的原型对象。 

```
function Person(age) {
    this.age = age       
}
Person.prototype.name = 'kavin'
var person1 = new Person()
var person2 = new Person()
console.log(person1.name) //kavin
console.log(person2.name)  //kavin
```

原型的概念：每一个javascript对象(除null外)创建的时候，就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型中“继承”属性。 

## 2.__proto__ 

这是每个对象(除null外)都会有的属性，叫做__proto__，这个属性会指向该对象的原型。 

```
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
```

![1619060521651](D:\gbili\eckarts_open_class\笔记\assets\1619060521651.png)

## 3.constructor 

**每个原型都有一个constructor属性，指向该关联的构造函数。** 

```
function Person() {

}
console.log(Person===Person.prototype.constructor)  //true
```

所以再更新下关系图： 

![1619060680299](D:\gbili\eckarts_open_class\笔记\assets\1619060680299.png)

## 4.实例与原型

 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。

```
function Person() {

}
Person.prototype.name = 'Kevin';
var person = new Person();

person.name = 'Daisy';
console.log(person.name) // Daisy

delete person.name;
console.log(person.name) // Kevin
```

在这个例子中，我们给实例对象 person 添加了 name 属性，当我们打印 person.name 的时候，结果自然为 Daisy。

但是当我们删除了 person 的 name 属性时，读取 person.name，从 person 对象中找不到 name 属性就会从 person 的原型也就是 person.__proto__ ，也就是 Person.prototype中查找，幸运的是我们找到了 name 属性，结果为 Kevin。

5.原型链

![1619061950370](D:\gbili\eckarts_open_class\笔记\assets\1619061950370.png)

# 三、闭包

换句话说，正是由于 **JS 的函数内部**可以使用**函数外部的变量**，所以这段代码正好符合了闭包的定义。而不是 JS 故意要使用闭包。 

## 关于闭包的谣言

闭包会造成内存泄露？

错。

说这话的人根本不知道什么是内存泄露。==内存泄露==是指你用不到（访问不到）的变量，依然占居着内存空间，不能被再次利用起来。



# 四、ES6新特性

## 01.const 与 let 变量

- 使用`let`声明的变量可以重新赋值,但是不能在同一作用域内重新声明
- 使用`const`声明的变量必须赋值初始化,但是不能在同一作用域类重新声明也无法重新赋值.

## 02.模板字面量

模板字面量本质上是包含嵌入式表达式的字符串字面量. 模板字面量用倒引号 `( `` )`（而不是单引号 `( '' )` 或双引号`( "" )`）表示，可以包含用 `${expression}` 表示的占位符 

## 03.解构

在ES6中,可以使用**解构**从数组和对象提取值并赋值给独特的变量 

```
const point = [10, 25, -34];
const [x, y, z] = point;
console.log(x, y, z);
```

## 04.对象字面量简写方法

```
const gemstone = {
  type,
  color,
  carat,
  calculateWorth: function() {
    // 将根据类型(type)，颜色(color)和克拉(carat)计算宝石(gemstone)的价值
  }
};
```

**匿名函数被分配给属性 calculateWorth，但是真的需要 function 关键字吗？在 ES6 中不需要** 

```
let gemstone = {
  type,
  color,
  carat,
  calculateWorth() { ... }
};
```

## 05. for of

`for...of`循环是最新添加到 JavaScript 循环系列中的循环。
 它结合了其兄弟循环形式 `for` 循环和 `for...in` 循环的优势，可以循环任何可迭代（也就是遵守可迭代协议）类型的数据。默认情况下，包含以下数据类型：`String`、`Array`、`Map` 和 `Set`，注意不包含 `Object` 数据类型（即 `{}`）。**默认情况下，对象不可迭代**。

for循环 

```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}
```

`for` 循环的最大缺点是需要跟踪计数器和退出条件。 虽然 `for` 循环在循环数组时的确具有优势，但是某些数据结构不是数组，因此并非始终适合使用 loop 循环。 



for...in循环 

```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}
```

**依然需要使用 index 来访问数组的值**
 当你需要向数组中添加额外的方法（或另一个对象）时，`for...in` 循环会带来很大的麻烦。因为 `for...in` 循环循环访问所有**可枚举的属性**，意味着如果向数组的**原型中添加任何其他属性**，这些属性也会出现在循环中。

```
<script>
        Array.prototype.decimalfy = function() {
            for (let i = 0; i < this.length; i++) {
                this[i] = this[i].toFixed(2);
            }
        };
        
        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        for (const index in digits) {
        	console.log(digits[index]);
        }
    </script>
```

![1619072197439](D:\gbili\eckarts_open_class\笔记\assets\1619072197439.png)

**forEach**

```
forEach 循环 是另一种形式的 JavaScript 循环。但是，forEach() 实际上是数组方法，因此只能用在数组中。也无法停止或退出 forEach 循环。如果希望你的循环中出现这种行为，则需要使用基本的 for 循环。

作者：Showdy
链接：https://www.jianshu.com/p/87008f4f8513
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```



**for...of循环** 

`for...of` 循环用于循环访问任何可迭代的数据类型。 `for...of` 循环的编写方式和 `for...in` 循环的基本一样，只是将 `in` 替换为 `of`，可以忽略索引。 



## 06.展开运算符

**展开运算符**（用三个连续的点 (`...`) 表示）是 ES6 中的新概念，使你能够将字面量对象展开为多个元素 

```
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);
```

展开运算符的一个用途是结合数组。

如果你需要结合多个数组，在有展开运算符之前，必须使用 `Array`==的 `concat()` 方法。==  

```
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = fruits.concat(vegetables);
console.log(produce);
```

Prints: ["apples", "bananas", "pears", "corn", "potatoes", "carrots"] 



使用展开符来结合数组 

```
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = [...fruits,...vegetables];
console.log(produce);
```

##  07.剩余参数

使用展开运算符将数组展开为多个元素, 使用剩余参数可以将多个元素绑定到一个数组中. 剩余参数也用三个连续的点 ( `...` ) 表示，使你能够将不定数量的元素表示为数组. 

**用途1: 将变量赋数组值时:** 

```
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);
```

**用途2: 可变参数函数** 

对于参数不固定的函数,ES6之前是使用**参数对象(arguments)**处理: 

```
function sum() {
  let total = 0;  
  for(const argument of arguments) {
    total += argument;
  }
  return total;
}
```

在ES6中使用剩余参数运算符则更为简洁,可读性提高: 

```
function sum(...nums) {
  let total = 0;  
  for(const num of nums) {
    total += num;
  }
  return total;
}
```



## 08. ES6箭头函数

ES6之前,使用普通函数把其中每个名字转换为大写形式： 

```
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name) { 
  return name.toUpperCase();
});
```

箭头函数表示: 

```
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
  name => name.toUpperCase()
);
```



普通函数可以是**函数声明**或者**函数表达式**, 但是箭头函数始终都是**表达式**, 全程是**箭头函数表达式**, 因此因此仅在表达式有效时才能使用，包括： 

- 存储在变量中，
- 当做参数传递给函数，
- 存储在对象的属性中。

```
const greet = name => `Hello ${name}!`;
可以如下调用:
greet('Asser');
```

**如果函数的参数只有一个,不需要使用`()`包起来,但是只有一个或者多个, 则必须需要将参数列表放在圆括号内:** 

```
// 空参数列表需要括号
const sayHi = () => console.log('Hello Udacity Student!');

// 多个参数需要括号
const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle');
```

一般箭头函数都只有一个表达式作为函数主题: 

```
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
  name => name.toUpperCase()
);
```



- 在函数主体周围没有花括号,
- 自动返回表达式

但是如果箭头函数的主体内需要多行代码, 则需要使用**常规主体语法**:

- 它函数主体放在花括号内
- 需要使用 return 语句来返回内容。

```
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
  name = name.toUpperCase();
  return `${name} has ${name.length} characters in their name`;
});
```

## 09. Javascript类

ES5创建类: 

```
function Plane(numEngines) {
  this.numEngines = numEngines;
  this.enginesActive = false;
}

// 由所有实例 "继承" 的方法
Plane.prototype.startEngines = function () {
  console.log('starting engines...');
  this.enginesActive = true;
};
```

ES6类只是一个语法糖,原型继续实际上在底层隐藏起来, 与传统类机制语言有些区别. 

```
class Plane {
  //constructor方法虽然在类中,但不是原型上的方法,只是用来生成实例的.
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }
  //原型上的方法, 由所有实例对象共享.
  startEngines() {
    console.log('starting engines…');
    this.enginesActive = true;
  }
}

console.log(typeof Plane); //function
```

- 关键字class带来其他基于类的语言的很多思想,但是没有向javascript中添加此功能
- javascript类实际上还是原型继承
- 创建javascript类的新实例时必须使用new关键字

## ES7 

- 求幂运算符（**），这是一个中缀例子，效仿自Ruby等语法，使用更简洁 

```
Math.pow(3, 2) === 3 ** 2    // 9
```

- Array.prototype.includes() 

> 数组原型的方法,查找一个数值是否在数组中，只能判断一些简单类型的数据，对于复杂类型的数据无法判断。该方法接受两个参数，分别是查询的数据和初始的查询索引值。
>
> ```
> [1, 2, 3].indexOf(3) > -1 // true
> 等同于：
> [1, 2, 3].includes(3) // true
> ```

> 两者的优缺点和使用场景
>
> - 简便性
>
>   > includes方法略胜一筹，直接返回bool。indexOf需要返回数组下标，我们需要对下标值在进行操作，进而判断是否在数组中。
>
> - 精确性
>
>   > 两者这都是通过===进行数据处理，但是对NaN数值的处理行为不同。includes对NaN的处理不会遵循严格模式去处理，所以返回true。indexOf会按照严格模式去处理，返回-1。
>   >
>   > ```
>   > [1, 2, NaN].includes(NaN)     // true
>   > [1, 2, NaN].indexOf(NaN)  // -1
>   > ```
>   >
>   > 
>
> - 使用场景
>
>   > 如果仅仅查找数据是否在数组中，建议使用includes，如果是查找数据的索引位置，建议使用indexOf更好一些

#  

# 网络协议http和https

 **http和https**

 http协议和baihttps协议的区别：传输信息安全性不同、连接方式不同、端口不同、证书申请方式不同 

**1、传输信息安全性不同**

1.0 http协议：是超文本传输协议，信息是明文传输。如果攻击者截取了Web浏览器和网站服务器之间的传输报文，就可以读懂其中的信息。

2.0 https协议：是具有安全性的 ssl 加密传输协议，为浏览器和服务器之间通信加密，确保数据传输的安全。

**2、连接方式不同**

1.0 http协议：http的连接很简单，是无状态的。

2.0 https协议：是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议。

**3、端口不同**

1.0 http协议：使用的端口是80

2.0 https协议：使用的端口是443

**4、证书申请方式不同**

1.0  证书申请方式不同

2.0 https协议：需要到ca申请证书，一般免费证书很少，需要交费。

 

#  前后台ajax请求库：axios

## axios的使用

```
1）安装 npm install axios 

2）引用 <script src="axios.min.js"></script>  

document.querySelector('.get').onclick = function() {
                axios.get('...url').then(
                    function(response) {
                        console.log(response)
                      // console.log(ret.data) data是固定写法
                    },
                    function(err) {
                        console.log(err)
                    }
                )

            }

```

##  特征

- 在浏览器中创建XMLHttpRequest
- 支持Promise API
- 提供并发请求接口`axios.all([ ])`
- node.js创建http请求
- 客户端支持防止CSRF（每个请求都带cookie中的key）
- 请求/响应拦截器
- 自动转换json数据

## **请求拦截器** 

```
axios.interceptors.request.use(function(req){
	...// 对请求信息处理
	return req

},function(err){
	console.log(err)
})

```

## **响应拦截器** 

```
axios.interceptors.response.use(function(res) {
            console.log(res)
			// 对获取的数据进行处理
            return res
        }, function(err) {
            console.log(err)
        })

```







