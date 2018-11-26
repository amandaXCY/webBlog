//getter会被拷贝
var obj = {
	foo: 1,
	get name() {
		return 2;
	}
};

var target = Object.assign({}, obj);
console.log(target); //{ foo: 1, name: 2 }

//不可枚举的，不拷贝
var obj2 = Object.defineProperty({}, 'key', {
	enumerable: false,
	configurable: false,
	writable: true,
	value: 'static'
});

var obj = Object.create(
	{ foo: 1 },
	{
		// foo 是个继承属性。
		bar: {
			value: 2 // bar 是个不可枚举属性。
		},
		baz: {
			value: 3,
			enumerable: true // baz 是个自身可枚举属性。
		}
	}
);

var copy = Object.assign({}, obj);
console.log('继承属性和不可枚举属性是不能拷贝的', copy);

console.log(
	Object.create(
		{},
		{
			bar: {
				value: 1,
				enumerable: true
			}
		}
	)
);
var obj = {};
Object.defineProperties(obj, {
	property1: {
		value: 'property1',
		enumerable: true
	},
	property2: {
		value: 'property2',
		enumerable: true
	}
});
console.log(obj);

var obj = { a: 1, bar: 2 };
var descriptor = Object.getOwnPropertyDescriptor(obj, 'a');
console.log('getOwnPropertyDescriptor=', descriptor);
var descriptors = Object.getOwnPropertyDescriptors(obj);
console.log('descriptors', descriptors);

var obj = { a: 1, bar: 2 };
const object1 = Object.create(obj);
console.log('getPrototypeOf=', Object.getPrototypeOf(object1));

console.log('Object.is 比较');

var obj = { a: 1 };
var b = { a: 1 };
console.log(Object.is(obj, b));

var Person = function(name) {
	this.name = name;
};

Object.preventExtensions(Person);
// 创建原型属性
Person.prototype.age = 26;
console.log(Object.getOwnPropertyNames(Person));

var obj = { a: 1 };
Object.defineProperty(obj, 'new', { vaule: 1 });
console.log(Object.getOwnPropertyNames(obj));
