# 设计模式

参考：
https://juejin.im/post/5c282b8a51882538472091ba?utm_source=gold_browser_extension

### 观察者模式


```
function observer(){
    eventPool ={};
    listen = function(event,fn){
        if(eventPool[event]){
            eventPool.push(event)
        }else{
            eventPool=[event]
        }
    }
    trigger = function(){
        var key = Array.prototype.shift.call(arguments);
        var fns = eventPool[event];
        if(!fns || !fns.length){
            return false;
        }

        fns.forEach(fn => {
            fn.apply(arguments)
        });
       

    }
    remove = function(key,fn){
        var fns = eventPool[event];
        if(!fn || !fn.length){
            return false
        }
        if(!fn){
            fns && (fns.length = 0);
        }else{
            for(var i=0;i<fns.length;i++){
                var item = fns[i]
                if(item === fn){
                    fns.splice(i,1)
                }
            }
        }
    }
    return {
        trigger,
        remove,
        listen
    }
}
```

### 单利模式

方式一：
```
function CreateDiv(){

}
function Single(){

    if(!CreateDiv.instance){
        CreateDiv.instance = new CreateDiv();
    }
    return CreateDiv.instance
}
```


方式二
```
function CreateDiv(){

}
var Singleton = (function(){
    var instance;
    return function(){
        if(instance){
            instance = new CreateDiv();
        }
        return instance
    }
})()

var a = Singleton()
var b = Singleton()
console.log(a === b)
```

### 懒加载

### 底部跟随地位

### 订阅发布模式

### 柯里化

