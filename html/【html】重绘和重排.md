# 重绘和重排

参考：
https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650588825&idx=1&sn=9ce03764375441ef0a8eb4fbce702e7a&chksm=8891d6bdbfe65fab0e76b1f86ec807ab0d13dec92951604c59fd1fe23ab0619257bf1dfa32bf&mpshare=1&scene=23&srcid=1230Cx2e4Pz4LEwd3cZqrFx0%23rd
 
### 网页生成的过程

1. HTML被HTML解析器解析成DOM 树
2. css则被css解析器解析成CSSOM 树
3. 结合DOM树和CSSOM树，生成一棵渲染树(Render Tree)
4. 生成布局（flow），即将所有渲染树的所有节点进行平面合成
5. 将布局绘制（paint）在屏幕上


### 重排

当DOM的变化影响了元素的几何信息(DOM对象的位置和尺寸大小)，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做重排。

### 重排大于重绘

1. 添加或者删除可见的DOM元素；
2. 元素尺寸改变——边距、填充、边框、宽度和高度
3. 内容变化，比如用户在input框中输入文字
4. 浏览器窗口尺寸改变——resize事件发生时
5. 计算 offsetWidth 和 offsetHeight 属性
6. 设置 style 属性的值



### 重排影响的范围

1. 全局范围：从根节点html开始对整个渲染树进行重新布局。
2. 局部范围：对渲染树的某部分或某一个渲染对象进行重新布局


### 重绘

当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘。

