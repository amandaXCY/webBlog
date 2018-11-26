### Object.assign
  

1.只拷贝源对象自身的并且可以枚举的属性到目标对象上
2.如果该源上有get，也会被拷贝
  
```js
var obj = {
	foo: 1,
	get name() {
		return 2;
	}
};
  
var target = Object.assign({}, obj);
console.log(target); //{ foo: 1, name: 2 }
```
  