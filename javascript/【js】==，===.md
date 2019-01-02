# ==


### 数字和字符串
```
42=='42'//true
42==='42'//false
```

1. 如果 Type(x) 是数字，Type(y)是字符串，则返回x==ToNumber(y)的结果
2. 如果 Type(x) 是字符串，Type(y)是数字，则返回ToNumber（x）==(y)的结果


### 字符串和boolean
```
'42'==true //false

```

1. 如果x是boolean,返回 ToNumber（x）==y的结果
2. 如果y是boolean,返回 x==ToNumber(y) 的结果


### null 和 undefined
```
null == undefined //true
```
null、undefined相等，与其他值不相等y
nlll 和undefined 进行隐式强制类型转换，


### 对象和非对象之间


```
42==[42]//true
```

1. 如果x 是字符串或数字，返回x== ToPrimitive(y)的结果
2. 如果 x是对象，y是字符串或数字，返回ToPrimitive(x) == y


```
{}=={} //false
[]==[] //false
2==[2] // true
""==[null] // true
```


```
{}>={} //true
{}<={} //true
```


