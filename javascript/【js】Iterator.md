# Iterator


arguments

arguments对象是所有（非箭头）函数中都可用的局部变量

arguments对象不是一个 Array 。它类似于Array，但除了length属性和索引元素之外没有任何Array属性


**转化为数组**

```
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);


// ES2015
const args = Array.from(arguments);

var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));

```

