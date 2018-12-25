# for、for...in、for...of的区别

### for

用来遍历数组,可以使用break跳出，continue跳过

```
Array.prototype.method=function(){
　　console.log(this.length);
}
var myArray=[1,2,4,5,6,7]
myArray.name="数组"
for (var index in myArray) {
  console.log(myArray[index]);
}

//1,2,4,5,6,7,数组,funtciotn(){}
```


### for...in

1. index索引为字符串型数字，不能直接进行几何运算
2. 遍历顺序有可能不是按照实际数组的内部顺序
3. 使用for in会遍历数组所有的可枚举属性，包括原型。例如上栗的原型方法method和name属性


```
Array.prototype.method=function(){
　　console.log(this.length);
}
var myArray=[1,2,4,5,6,7]
myArray.name="数组";
for (var value of myArray) {
  console.log(value);
}

```


### for...of

遍历Iterator类型的数据



