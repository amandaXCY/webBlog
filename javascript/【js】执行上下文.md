#  js 执行上下文

参考：
https://juejin.im/post/5c21fd05f265da612c5deb30?utm_source=gold_browser_extension

当 JavaScript 代码执行一段可执行代码(executable code)时，会创建对应的执行上下文(execution context)。


对于每个执行上下文，都有三个重要属性：

* 变量对象(Variable object，VO)
* 作用域链(Scope chain)
* this


### 创建阶段

1. 创建一个全局对象；
2. 创建this对象；
3. 给变量和函数分配内存；
4. 给变量赋默认值undefined，把所有函数声明放进内存。

### 函数执行创建阶段

~~1.创建一个全局对象~~

1.创建一个arguments对象；
2. 创建this对象；；
3. 给变量和函数分配内存；；
4. 给变量赋默认值undefined，把所有函数声明放进内存。

### 直到执行阶段，
Javascript引擎才会一行一行地运行你的代码并执行它们。


