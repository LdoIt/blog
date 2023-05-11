
# JavaScript闭包

## 什么是闭包？

网上关于闭包的定义还不少，但是最核心的思想就是：子函数引用了父级函数的变量或数据，该过程就形成了一个闭包；这里引用《Javascript高级程序设计》中闭包的概念：闭包是指有权访问另一个函数作用域中变量的函数。即使这个内部函数被返回后在其他地方调用，它仍然可以访问这个变量。之前看到网上很多其他文章说闭包是一个函数返回另一个函数，其实这种说法是不准确的。例如一下代码片段：

```javascript
(function() {
    let a = 0;
    function foo() {
        console.log(a); // 这里也形成了闭包，可以从控制台中看出
	}
	foo();
})()
```

![](<> "点击并拖拽以移动")

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/665f2a88837e442d93432760d79bf06c~tplv-k3u1fbpfcp-zoom-1.image)![](<> "点击并拖拽以移动")

函数返回另一个函数（使用外部函数的变量）的形式，是存在闭包的，但是不能作为闭包的定义。例如：

```javascript
function fn1() {
	let num = 0;
	function add() {
		num++;
		console.log(num)
	}
	return add;
}
let res = fn1(); // 该函数就是一个闭包
```

![](<> "点击并拖拽以移动")

## 闭包的作用

1、闭包能够使变量的值始终保存在内存中，不被GC（垃圾回收）机制回收

        tips：关于垃圾回收机制此处做简短介绍：在 JavaScript 中，如果一个对象不再被引用，那这个对象就会被 GC 回收，否则这个对象会一直保存在内存中

```javascript
function fn1() {
	let num = 0;
	function add() {
		num++;
		console.log(num)
	}
	return add;
}
let res = fn1();
res(); // 1
res(); // 2
res(); // 3
res(); // 4
```

![](<> "点击并拖拽以移动")

-   该代码定义了一个fn1函数，其内部又定义了add函数，并且返回该函数
-   当调用fn1() 时返回add，res就是一个闭包，闭包会携带包含它的函数的作用域，该作用域包含了一个num变量，第一次调用res时，执行add函数，num = 1
-   第二次调用时，因为num并没有被销毁，所以执行完成后，num = 2，依次类推

2、可以读取函数内部的变量，进行相应操作

## 闭包的缺点

1、因为函数执行上下文AO执行完不被释放，所以会导致内存消耗很大，增加了内存消耗量，影响网页性能出现问题

-   解决办法：

    -   1、直接将闭包清空，以上面代码为例：res = null;

    -   2、在fn1函数中在定义一个方法，用来清空该变量，例如：

```javascript
        function fn1() {
        	let num = 0;
        	return {
        		// 删除局部变量
        		delVariable: function() {
        			num = null;
        		},
        		add: function() {
        			num++;
        			console.log(num)
        		}
        	}
        }
        let res = fn1();
        res.add(); // 1
        res.add(); // 2
        // 释放闭包中的变量
        res.delVariable()
        res.add(); // 1，证明释放成功
```


2、容易造成内存泄漏（IE9之前版本的bug）

## 测试

```javascript
function fn1() {
	let num = 0;
	return function() {
		num++;
		console.log(num)
	}
}
fn1()(); // 1
fn1()(); // 1
let res = fn1();
res(); // 1
res(); // 2
```

![](<> "点击并拖拽以移动")

如果能够理解以上代码就基本掌握了闭包的知识。注意：闭包之间是相互独立的。

本文对JavaScript闭包进行一个简短的介绍，如果想要看详细的解释可以参考以下的文章：

[从来都没有理解JS闭包？我非把你教会不可！看这一篇就够了大白话！](https://baijiahao.baidu.com/s?id=1725372480643262722&wfr=spider&for=pc "从来都没有理解JS闭包？我非把你教会不可！看这一篇就够了大白话！")

​