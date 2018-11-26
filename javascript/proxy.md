###  创建Proxy
new Proxy(targe,handler)

targe:

目标对象,{},[],()=>{}
如果一个属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性，否则通过 Proxy 对象访问该属性会报错。


handler:

是一个对象，用来定制拦截行为
如果handler没有设置任何拦截，那就等同于直接通向原对象。


### 撤销proxy 
Proxy.revocable(target, handler);

target:
用Proxy包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。


handler:
一个对象，其属性是当执行一个操作时定义代理的行为的函数。


```
const weakMap = {};

const proxy = new Proxy(weakMap, {
	get: function(target, property, receiver) {
		console.log(receiver === proxy);
		return receiver;
	}
});
console.log(proxy.getReceiver === proxy);// true
```
