###  Debounce

https://juejin.im/post/5c270ae16fb9a049bb7c69c2

防抖确保函数上次执行后的一段时间内，不会再次执行。当必须进行一些昂贵的计算来响应快速派发的事件时（比如鼠标滚动或键盘事件时）



```
function debounce(delay, fn) {
    var timer;
    return function() {
        var context = this;
        var args = arguments;
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay)
    }
}
```

以上代码不能立即执行，如果想立即执行，可以采取下面的代码

```
function debounce(delay, fn) {
    var timer;
    return function() {
        var context = this;
        var args = arguments;
        if(timer) {
            clearTimeout(timer);
        }
        var doNow = !timer;
        timer = setTimeout(() => {
            timer = null;
        }, delay);
        if(doNow) {
            fn.apply(context, args);
        }
    }
}
```


### Throttle

节流是阻止函数在给定时间内被多次调用。下面这个例子会阻止“click”事件每秒钟的多次调用

    

```
// 时间戳实现
function throttle(delay, fn) {
    var prev = Date.now();
    return function() {
        var curr = Date.now();
        if(curr - prev > delay) {
            fn.apply(this, arguments);
            last = curr;
        }
    }
}

// 定时器实现
function throttle(delay, fn) {
    var timer;
    return function() {
        var context = this; // 函数执行上下文
        var args = arguments;
        console.log('1', new Date());
        if(timer) {
            return;
        }
        timer = setTimeout(() => {
            fn.apply(context, args);
            clearTimeout(timer);
            // setTimeout返回一个整数，clearTimeout后也还是整数，因此需要置空，setInterval也是如此
            timer = null;
        }, delay);
    }
}
```

