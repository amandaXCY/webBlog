### stopImmediatePropagation

阻止事件冒泡并且阻止相同事件的其他侦听器被调用。




```
var li = document.getElementsByTagName('li');
        var p = li[0]
        p.addEventListener("click", (event) => {
            event.stopImmediatePropagation()
            alert("我是p元素上被绑定的第一个监听函数");
        }, false);
        p.addEventListener("click", (event) => {
              alert("我是p2元素上被绑定的第一个监听函数");
        }, false);
        p.addEventListener("click", (event) => {
              alert("我是p3元素上被绑定的第一个监听函数");
        }, false);
        
//弹出："我是p元素上被绑定的第一个监听函数"
```

