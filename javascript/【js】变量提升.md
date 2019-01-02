# 变量提升


```
var a=1;
function foo(){
  a=10;
  return;
  function a(){ }
}
foo();
console.log(a);
//1
```


```
var b=1;
function foo(){
  b=10;
  return;
  function a(){ }
}
foo();
console.log(b);
//10
```

### 原始值

null,number,string,undefined,boolean,smybol


### 引用类型

Arry,Object,Date,RegExp,Math,Function

### js的作用域
 
*  全局
*  函数
*  块

### 执行环境

 执行环境：与作用域相对应，及函数/代码运行时，可访问的变量空间。
 
①.每个函数执行时，都会创建自己的执行环境；当执行到该函数时，函数所属的执行环境会被推入到环境堆栈中去执行；函数执行结束后，将从环境堆栈中弹出销毁，将控制权交给上一级执行环境;

②.代码在环境中执行时，会同时生成作用域链，其作用是用于保证函数执行时具有访问权的变量、函数按需依次向上级进行有序的访问；作用域链的前端，即执行环境的变量对象。 


```
var global='global context';
var inner='global inner context';
function foo(){
  console.log(global); //foo函数内部无global变量,向上级查找global变量
  console.log(inner);  //foo函数内部有inner变量，无需向上查找inner变量，但此时
  var inner='inner context';
  console.log(inner);  
}
foo();// global context
      // undefined
      // inner context
```


### JS中变量进入一个作用域有以下四种方式：

* 变量声明：如：var a;、var fn=function(){};
* 函数声明：如：function foo(){};
* 函数形参：函数的形参存在于函数作用域中；
* 语言自定义构建：所有的作用域都会自动生成this、arguments两个默认变量

    
> JS在执行前会预先创建好执行环境变量，但由于其弱类型语言特征，其变量和函数可同时定义并赋值，为保证执行环境的完整性，及函数执行的有效性，JS会在编译阶段将所有变量、函数的声明事先放入内存，以保证其可访问性。从代码结构来看，好像是把所有变量的声明、函数的声明都放在代码头部事先执行一样；


### 变量提升

1. 将外部函数foo声明提前，foo函数定义提升到代码开始之前;
2. 将 内部函数a提升到foo函数作用域顶部，此时输出：function(){};
3. 将a类型由函数类型重新定义为number类型，并赋值10；
4. 将内部函数执行环境从执行堆栈中弹出销毁；此时外部a值未做改变，仍为1；
5. 输出外部变量a,其值必然为 1;



```
var foo;
var a=1;
function foo(){
  var a=function(){}; 
  a=10;
  return;
}
foo();
console.log(a);//15f
```

### let

使用let，不会在块作用域中进行提升,
let,可以将变量绑定到所在的任意作用域中（通常是{……}内部）

### var 先声明后赋值

### 函数声明和变量声明，谁先谁后

函数会被首先提升


```
foo()

var foo

function foo(){
    console.log(1)
}

foo = function(){
    console.log(2)
}

//1
```

### 函数提升

函数声明会被提升，函数表达式不会被提升


```
console.log(fn)
console.log(dodo)
fn()
var fn = function dodo(){}

//undefined
//ReferenceError: dodo is not defined(引用错误)
// TypeError:fn is not function
```



```
console.log(foo)
function foo()
 
 //function foo()
```


一个普通块内的函数声明通常会被提升到所在作用域的顶部，在chrome 中 68.0.3440.106 , Type Error:foo is not function


```
foo()

if(true){
    function foo(){
        console.log(1)
    }
}else{
    function foo(){
        console.log(2)
    }
}
```


