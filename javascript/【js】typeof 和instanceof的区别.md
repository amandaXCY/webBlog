# typeof和instanceof的区别

在 JavaScript 中，判断一个变量的类型尝尝会用 typeof 运算符，在使用 typeof 运算符时采用引用类型存储值会出现一个问题，无论引用的是什么类型的对象，它都返回 “object”。


```
//object
typeof null 
typeof {}
typeof []
typeof new Date()

//number
typeof 0 
typeof NaN

//undefined
typeof undefined 

//string
typeof 'aa'

//boolean
typeof true


//Symbol
typeof Symbol()

//function
typeof function(){}

```


instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。
语法：object instanceof constructor
参数：object（要检测的对象.）constructor（某个构造函数）
描述：instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。


Person的原型在p的原型链中

```
function Person(){};
var p =new Person();
console.log(p instanceof Person);//true
```


检测字符串

```
var str = 'str'
console.log(str instanceof String)   // false
console.log(typeof str)              // string


var str = new String('bbb')
console.log(str instanceof String)   //true


Object.prototype.toString.call('') //[object String]

```


用代码来阐述

```
// let p = new Person()
let p = (function () {
    let obj = {};
    obj.__proto__ = Person.prototype;
    
    // 其他赋值语句...
    
    return obj;
})();

```

下面通过代码阐述instanceof的内部机制，假设现在有 x instanceof y 一条语句，则其内部实际做了如下判断：


```
while(x.__proto__!==null) {
    if(x.__proto__===y.prototype) {
        return true;
        break;
    }
    x.__proto__ = x.__proto__.proto__;
}
if(x.__proto__==null) {return false;}

```



