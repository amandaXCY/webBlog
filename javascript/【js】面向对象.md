# 面向对象（OOP）

Object Oriented Programming，OOP

命名空间只是另一个包含方法，属性，对象的对象

**面向对象编程:**
就是一种思维,你把你需要解决的需求抽象为一个对象或者类,再根据这个对象分析它具备什么特性(属性)与动作(方法).

### 特点：

* 封装
* 继承
* 多态


### 好处

* 封装的好处: 隐藏细节,减少思维的负担。
* 继承的好处: 复用代码,避免内存空间的浪费。
* 多态好处: 让代码更灵活通用。例如div既是是节点,也是元素。(这个我也理解欠佳)



### 与class的区别


1. class和自定义类型的区别

    ```
    new Foo(); // ReferenceError
    class Foo {}
    ```
2. class的声明不会提升，与let类似
3. class的声明自动运行于严格模式之下
4. class声明的方法不可枚举
5. class的内部方法有 constructor,通过new命令生成对象实例时,自定义类没有
6. 调用class的构造函数必须new
7. class内部方法不能同名
8. class 拥有name属性


 ### 多态
 
 > 同一操作作用于不同的对象，可以有不同的解释，产生不同的执行结果。换句话说，给不同的对象发送同一个消息的时候，这些对象会根据这个消息分别给出不同的反馈。（某某百科）
本质上也就如题主说描述的“将‘做什么’和‘谁去做以及怎样去做’分开”，归根结底就是先消除不同对象的耦合关系。

“多态”的js代码

```
var makeSound = function(an) {
    if(an instanceof Duck) {
        console.log("嘎嘎嘎");
    } else if(an instanceof Dog) {
        console.log("汪汪汪");
    }
}

var Dog = function(){};
var Duck = function(){};

makeSound(new Dog());
makeSound(new Duck());
```

当更多的类型出现时，我们要不断的修改makeSound函数，后期makeSound函数也会变得十分巨大
优化后


```
var Duck = function(){}
Duck.prototype.sound = function(){
    console.log( '嘎嘎嘎' );
};
var Chicken = function(){}
Chicken.prototype.sound = function(){
    console.log( '咯咯咯' );
};
makeSound( new Duck() ); // 嘎嘎嘎
makeSound( new Chicken() );
```

