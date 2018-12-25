# Event loop


macro-task: script（整体代码）, setTimeout, setInterval, setImmediate, I/O, UI rendering
micro-task: process.nextTick, Promises（这里指浏览器实现的原生 Promise）,Object.observe, MutationObserver



```
    async function async1() {
        console.log( 'async1 start' )
        await async2()
        console.log( 'async1 end' )
    }



    async function async2() {
        console.log( 'async2' )
    }



    console.log( 'script start' )


    setTimeout( function () {
        console.log( 'setTimeout' )
    }, 0 )



    async1();

    new Promise( function ( resolve ) {
        console.log( 'promise1' )
        resolve();
    } ).then( function () {
        console.log( 'promise2' )
    } )

    console.log( 'script end' )
```



```
    script start
    async1 start
    async2
     promise1
     script end
     promise2
     async1 end
     setTimeout
```

The only 

