function createArray(...elemnts) {
	var target = [];
	target.push(...elemnts);
	let handler = {
		get(target, ProxyKey, receiver) {
			var index = Number(ProxyKey);
			if (index < 0) {
				propKey = String(target.length + index);
			}
			return Reflect.get(target, propKey, receiver);
			return 0;
		}
	};
	return new Proxy(target, handler);
}
let arr = createArray('a', 'b', 'c');
console.log(arr[-4]);
