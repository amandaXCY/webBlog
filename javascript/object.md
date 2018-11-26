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

### Object.freeze 
冻结，冻结之后不能修改,不能枚举

### Object.isFrozen
判断一个对象是否可以冻结

### Object.defineProperty

```js
//prop是要修改的属性
Object.defineProperty(obj,prop,{
    enumerable:false,
    value:'value',
    writable:false,
    configurable:false,
    get:()=>{},
    set:()=>{}
})
```

当 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。


### Object.entries()
返回一个给定对象自身可枚举属性的键值对数组

###  Object.fromEntries()
与上面的相反

### Object.getOwnPropertyDescriptor(obj,pro)
返回Obj上的 自有属性的描述


### Object.is 比较
如果下列任何一项成立，则两个值相同


* 两个值都是 undefined
* 两个值都是 null
* 两个值都是 true 或者都是 false
* 两个值是由相同个数的字符按照相同的顺序组成的字符串
* 两个值指向同一个对象
* 两个值都是数字并且
    * 都是正零 +0
    * 都是负零 -0
    * 都是 NaN
    * 都是除零和 NaN 外的其它同一个数字

注意：在===中，0===-0(false)，Number.NaN===NAN(false)



### Object.isExtensible()
判断是否是一个可扩展对象




### Object.preventExtensions
返回的原对象，不能添加，但可以修改
让一个对象变的不可扩展，也就是永远不能再添加新的

仅阻止添加自身的属性。但属性仍然可以添加到对象原型。

### Object.keys
返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 。


### Object.seal 
封闭一个对象

### Object.isSealed 
判断一个对象是否为密封的，
密封对象是指那些不可 扩展 的，且所有自身属性都不可配置且因此不可删除（但不一定是不可写）的对象。
