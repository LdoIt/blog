
# var、let和const的区别

## 一、var和let

var和let都是用来声明变量的两个关键字。他们之间的区别有以下几点：

        1、var和let作用域范围不同

                var 声明一个函数范围或全局范围的变量

                let 声明一个块级作用域（ES6新增）的局部变量

```javascript
{
    let a = 12;
	var b = 23;
	console.log(a, b) // 12 23
}
console.log(b) // 23 b不存在块级作用域，再外面依旧能够访问到
console.log(a) // 报错，只能作用域内部访问a，外部访问不了
```

 var不存在块级作用域的概念，所以上面的 变量b 实际上就是全局变量

        2、var存在变量提升，而let不会

因为let存在暂时性死区：从一个代码块的开始直到代码执行到声明变量的行之前，该变量处于暂时性死区，该变量尚未被初始化，如果在这区域尝试访问变量将抛出错误。

变量提升我们可以理解为变量可以在声明之前进行初始化和使用。值得注意的是：JavaScript 只会提升声明，不会提升其初始化。如果一个变量先被使用再被声明和赋值的话，使用时的值是 undefined。如下代码：

```javascript
console.log(a) // undefined
var a = 22;

// 上面的代码在编译后相当于
// var a;
// console.log(a)
// a = 22
```

        3、var可以重复声明同一个变量，而let不允许在相同的作用域内声明同一个变量（报错）

```javascript
var a = 23;
var a = 12;
console.log(a); // 12

let b = 11;
let b = 23;
console.log(b) // 报错
```

4、` let  `不会在全局声明时（在最顶层的作用域）创建 window 对象的属性

```javascript
let obj1 = {a: 0}
console.log(window.obj1) // undefined
```

![](<> "点击并拖拽以移动")

4、关于var的注意点：当不声明变量，直接初始化，会使该变量变为全局变量

## 二、关于变量提升的注意点

tips：这里（参考下面代码）运行后发现控制台中并没有打印出a的值，而是直接报错了：“ Identifier 'b' has already been declared”，难道b被提升了吗？但是前文中说到用let声明的变量不会被提升，这里怎么矛盾了？

原因：严格来讲，let 在 JavaScript 运行时中也会被提升，但由于“暂时性死区”(temporal dead zone)的 缘故，实际上不能在声明之前使用 let 变量。因此，从写 JavaScript 代码的角度说，let 的提升跟 var 是不一样的，出自红宝书中的解释。

```javascript
// 运行下面代码和，控制台实际上会报错： Identifier 'b' has already been declared
var a = 23;
var a = 12;
console.log(a);
let b = 11;
let b = 23;
console.log(b)
```

## 三、const

const声明一个只读的常量。一旦声明，常量的值就不能改变。

        1、具有块级作用域，不提升，同样存在暂时性死区、不可重复声明、类似于let

        2、常量值不能被改变（意味着声明后要立即初始化），注意引用类型的数据

```javascript
const obj1 = {a: 0}
const obj2 = {a: 0}
obj1.a = 32;
console.log(obj1); // {a: 0}
obj1 = obj2 // 报错： Assignment to constant variable.
console.log(obj1) 
```

        3、全局常量不会变为 window 对象的属性

```javascript
const obj1 = {a: 0}
console.log(window.obj1) // undefined
```

注意：

        1、常量在声明的时候通常情况下全部用大写字母

        2、当常量定义为数组或对象的时候，里面的内容是可以改变的，但不能改变其引用的地址值

        

​