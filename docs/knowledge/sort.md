#  sort的作用

sort用来对数组中的元素进行排序，并返回相同数组的引用，接收一个函数作为参数，如果没有参数，默认按照字典（先比较第一个字符，如果第一个字符相等，再比较第二个字符依次类推，从小到大排列）排序，将元素转换为字符串，然后比较它们的 UTF-16 代码单元值序列。

注意：该方法会改变原数组；

```
let months = ['March', 'Jan', 'Feb', 'Dec'];
let monthsCopy = months.sort();
console.log(monthsCopy) // [ 'Dec', 'Feb', 'Jan', 'March' ]
// 此处改变了monthsCopy，导致months也发生了改变
monthsCopy[0] = 'bbbb';
console.log(months) // [ 'bbbb', 'Feb', 'Jan', 'March' ]
```

![](<> "点击并拖拽以移动")

## sort接收参数时的用法

sort接收一个函数作为参数，该函数用来决定排序的顺序（升序还是降序），注意：

```
const numberItems = [1, 30, 4, 21, 100000]

// 该函数的a和b表示items中的任意一个元素
// 如果该函数返回一个正数则 a 排在后面
// 如果该函数返回一个负数则 a 排在前面
function comparefn(a, b) {
    if(a > b) { // 此处判断语句就表示了升序排列，因为a > b 时，该函数返回一个正数，a排在后面
	    return 1
    }
    if(a < b) { // 同上理由
	    return -1
    }
    return 0 // 保持原来顺序
}

console.log(numberItems.sort(comparefn)) // [ 1, 4, 21, 30, 100000 ]
```

![](<> "点击并拖拽以移动")

因为上面的代码是对数组中的元素都是number类型的所以可以简写为：（原理跟上面的代码是一样的）

```
const numberItems = [1, 30, 4, 21, 100000]
function comparefn(a, b) {
    // return b - a // 降序
    return a - b // 升序
}

console.log(numberItems.sort(comparefn)) // [ 1, 4, 21, 30, 100000 ]
```

![](<> "点击并拖拽以移动")

## 对象数组的排序

对象数组可以通过比较它们的某个属性的值来排序：

```
const objItems = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
  { name: "Zeros", value: 14 },
];
// 根据里面的value及升序排序
// 注意：因为这里比较数字而非字符串，比较函数可以简单的用 a 减 b 的形式
// console.log(items.sort( (a, b) => a.value - b.value ))

// 根据name进行排序
function comparefn(a, b) {// a和b 是数组中的任意两个元素
	const aName = a.name.toUpperCase(); // 忽略大小写
	const bName = b.name.toUpperCase(); // 忽略大小写
	
	// 这个判断语句的意思是：a中的name属性值与b中name值进行比较，如果aName < bName 则 a就排在后面
	if(aName < bName) { 
		return 1
	}
	// 这个判断语句的意思是：a中的name属性值与b中name值进行比较，如果aName > bName 则 a就排在前面
	if(aName > bName) { // 如果返回负数 则 a 排在前面
		return -1
	}
	
	// 如果以上两个判断语句都没执行，表明：aName === bName 则保持原来位置不变
	return 0; // 如果返回 0 a和b位置不变
}
// 注意：javascript的字符串大小比较是按照字符串中对应的字符在编码表(UTF-16)中的数值的大小来进行比较的，比如'abcd'和'abaa'进行比较，先比较第一个字符，发现他们都是a大小一样，然后就会比较第二个发现都是b,然后比较第三个字符c的编码大于a,比较出了大小，所以字符串abcd大于字符串abaa
console.log(items.sort(comparefn))
```

![](<> "点击并拖拽以移动")

本文参考以下文章：

[mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort "mdn")

[javascript的字符串大小比较](https://www.cnblogs.com/ZiYangZhou/p/8407346.html "javascript的字符串大小比较")

​