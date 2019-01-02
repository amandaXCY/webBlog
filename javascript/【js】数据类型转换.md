# 数据类型转换

### Boolean

false 

```
Boolean(null);
Boolean(+0);
Boolean(-0);
Boolean('')
Boolean(undefined)
Boolean(NaN)

```

true
```
Boolean('0')
Boolean({})
Boolean([])
```


### Stirng,自动转换为string

JavaScript 遇到预期为字符串的地方，就会将非字符串的值自动转为字符串。具体规则是，先将复合类型的值转为原始类型的值，再将原始类型的值转为字符串。

```
'5' + 1 // '51'
'5' + true // "5true"
'5' + false // "5false"
'5' + {} // "5[object Object]"
'5' + [] // "5"
'5' + function (){} // "5function (){}"
'5' + undefined // "5undefined"
'5' + null // "5null"
[] + {} //'[Object,Object]'
{} + [] //0
```

### to Number 
除了加法运算符（+）有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值。

```
'5' - '2' // 3
'5' * '2' // 10
true - 1  // 0
false - 1 // -1
'1' - 1   // 0
'5' * []    // 0
false / '5' // 0
'abc' - 1   // NaN
null + 1 // 1
undefined + 1 // NaN
+'abc' // NaN
-'abc' // NaN
+true // 1
-false // 0
```

### Number

```
// 数值：转换后还是原来的值
Number(324) // 324

// 字符串：如果可以被解析为数值，则转换为相应的数值
Number('324') // 324

// 字符串：如果不可以被解析为数值，返回 NaN
Number('324abc') // NaN

// 空字符串转为0
Number('') // 0

// 布尔值：true 转成 1，false 转成 0
Number(true) // 1
Number(false) // 0

// undefined：转成 NaN
Number(undefined) // NaN

// null：转成0
Number(null) // 0

//NAN
Number({}) //NaN
Number([]) //NaN
```

### 装换过程

Number([5])

```
Number({
    valueOf:function(){
        return 2
    }
    toString:function(){
        return 3
    }
})//2
```

1. 第一步，调用对象自身的valueOf方法。如果返回原始类型的值，则直接对该值使用Number函数，不再进行后续步骤。

2. 第二步，如果valueOf方法返回的还是对象，则改为调用对象自身的toString方法。如果toString方法返回原始类型的值，则对该值使用Number函数，不再进行后续步骤。

3. 第三步，如果toString方法返回的是对象，就报错。

### toString

```
var a = 1;a.toString();//'1'
var b = {};b.toString();//[object Object]
var c =[];b.toString();//[object Object]
var d =NaN;b.toString() //'NAN';
var e= undefined;e.toString();//error：Cannot read property 'toString' of undefined
var f = new Symbol();f.toString() //Symbol is not a constructor
[1,2,3].toString() // '1,2,3'
```


### JSON.stringify()

```
console.log(JSON.stringify({}))//'{}'
console.log(JSON.stringify([]))//'[]'
console.log(JSON.stringify(undefined))//undefined
console.log(JSON.stringify(function(){})) // undefined
console.log('0=',JSON.stringify(0)) // '0'
var a = JSON.stringify(false); //'false'
console.log('false=',a) 
console.log(JSON.stringify('1')) //'1'
console.log(JSON.stringify([1,function(){},2])) //`[1,null,2]`
```

JSON.stringify()在对象中遇到undefined、function、symbol时，会自动将其忽略，在数组中返回null,保证单元的为位置不变

