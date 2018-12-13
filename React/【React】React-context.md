# https://juejin.im/post/5bfccbf8f265da61407e97b5?utm_source=gold_browser_extension


React Context

可以减少组件之间的props的传递

怎么使用：

```
const ThemeContext = React.createContext('light');
Class App extends Component{
    render(){
        return (
          <ThemeContext.Provider value="dark">
            <Toolbar />
          </ThemeContext.Provider>
        );
    }
}

const Toobar =()=>{
    return <ThemedButton />
}
```


