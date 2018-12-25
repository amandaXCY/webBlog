# new 运算符

下面返回的的什么？

```
function Person(name) {
    this.name = name
    return name;
}
let p = new Person('Tom'); // Person{name:'Tome'}
```

```
function Person(name) {
    this.name = name
    return {'name':name};
}
let p = new Person('Tom'); // {name:'Tome'}
```




### new 的定义

> new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

### 当代码 new Foo(...) 执行时，会发生以下事情：

1. 一个继承自 Foo.prototype 的新对象被创建。
2. 使用指定的参数调用构造函数 Foo ，并将 this 绑定到新创建的对象。new Foo 等同于 new Foo()，也就是没有指定参数列表，Foo 不带任何参数调用的情况。
3. 由构造函数返回的对象就是 new 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。（一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）


### new的模拟实现

```
function objectFactory() {
  var obj = new Object(),
  cons = [].shift.call(arguments)
  obj.__proto__ = cons.prototype
  var ret = cons.apply(obj, arguments)
  return typeof ret === 'object' ? ret|| obj : obj
}
function Person(name) {
  this.name = name;
  return {a: 1}
}
var p = objectFactory(Person, 'fefeng')

```


