//继承
// Shape - 父类(superclass)
function Shape() {
	this.x = 0;
	this.y = 0;
}

// 父类的方法
Shape.prototype.move = function(x, y) {
	this.x += x;
	this.y += y;
	console.info('Shape moved.');
};

function Rectangle() {
	Shape.call(this);
}

Rectangle.prototype = new Shape();
Rectangle.prototype.add = function() {
	console.log('add');
};
var rectangle = new Rectangle();
var shape = new Shape();
rectangle.move();

var obj = {
	get name() {
		return 2;
	}
};
