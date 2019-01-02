
# Js中的null、undefined、NaN和Infinity

### null

null的类型是object。对于内置方法，如果无法获取到正确的返回结果，则会返回null

### undfined

在Js中，对于任何未初始化的东西，它的值都是undefined。undefined的类型就是undefined

###  NaN

1. Js中使用NaN（通常被称为非数字，Not a Number）来表示它无法表示的数值结果，如0/0
2.  NaN是Js中唯一一个与自身不相等的值，即`NaN != NaN`。实际上，NaN与任何东西（包括它自身）都不相等，因此在检查时，不能通过`if(xx == NaN)`这种方式判断，而需要使用特殊函数isNaN（当值为NaN时，返回true）
3. NaN的类型是number，所以与其把NaN叫做“不是数字”，还不如称之为“无法表示的数字”


判断是否一个NaN，使用 `Number.isNaN()`


### Infinity

在Js中，Infinity指的是任何超过浮点数上限（1.7976931348623157E+10308）的值，对于-Infinity则是指超过浮点数下限（-1.7976931348623157E+10308）的值。Infinity的类型为number。
当怀疑某个值过大时，可以检查它是否为Infinity：


```
if (tamale == Infinity){
    alert("That's a big tamale");
}
```

特殊的是，将Infinity与它自己相减时，结果为NaN（这点从数学上即可理解）

