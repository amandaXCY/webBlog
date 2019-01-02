# {}+[],[]+{}

参考：
https://segmentfault.com/a/1190000008038678

{}+[] //0
{a:1}+[] //0

> {} 被当成代码块，相当于+[]

```
[]+{} //'[object,Object]'

[]+{a:1} //"[object Object]"
NaN === NaN //false
```


### +

如果 + 的其中一个是字符串，则进行字符串拼接，否则执行数字加法


```
operand + operand = result
```

1. 使用`toPrimitive`进行类型转换，运算转换左与右运算元为原始数据类型值(primitive)
2. 如果运算出现字符串类型，另一运算元作强制转换为字符串，然后作字符串的连接运算
3. 在其他情况时，所有运算元都会转换为原始数据类型的"数字"类型值，然后作数学的相加运算(addition)


ToPrimitive这个抽象的内部运算

```js
ToPrimitive(input, PreferredType?)
```

**input**代表代入的值

**PreferredType**可以使数字(Number)或字符串(String)的一种，代表优先

当`PreferredType`为Number时，

* 如果input是原始数据类型，则直接返回input。
* 否则，如果input是个对象时，则调用对象的`valueOf()`方法，如果能得到原始数据类型的值，则返回这个值。
* 否则，如果input是个对象时，调用对象的`toString()`方法，如果能得到原始数据类型的值，则返回这个值。
* 否则，抛出TypeError错误。


当PreferredType为String时:

* 如果input是原始数据类型，则直接返回input。
* 否则，如果input是个对象时，调用对象的`toString()`方法，如果能得到原始数据类型的值，则返回这个值。
* 否则，如果input是个对象时，则调用对象的`valueOf()`方法，如果能得到原始数据类型的值，则返回这个值。
* 否则，抛出TypeError错误。


### JS对于Object与Array的设计
在JS中所设计的Object纯对象类型的`valueOf`与`toString`方法，它们的返回如下:

valueOf方法返回值: 对象本身。

toString方法返回值: "[object Object]"字符串值，不同的内建对象的返回值是"[object type]"字符串，"type"指的是对象本身的类型识别，例如Math对象是返回"[object Math]"字符串。但有些内建对象因为覆盖了这个方法，所以直接调用时不是这种值。(注意: 这个返回字符串的前面的"object"开头英文是小写，后面开头英文是大写)





