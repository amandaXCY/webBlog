# Url回车之后

1.浏览器根据URL进行DNS查询
> DNS（Domain Name System，域名系统）
    * 首先从DNS缓存中查询
    * 若未在缓存中找到，则不停的向上一级级请求DNS服务器
2.取得IP地址，建立TCP连接
> TCP（Transmission Control Protocol 传输控制协议）是一种面向连接的、可靠的、基于字节流的传输层通信协议
3.构造HTTP请求报
    添加一些HTTP首部
    根据同源政策添加cookie
4.在TCP连接上发送HTTP报文，等待响应

5.服务器处理HTTP请求报文，返回响应HTTP响应报文
6.浏览器处理服务器返回的HTTP响应报文，若为HTML则渲染页面，不包括脚本的简单渲染流程如下
    
    * 处理 HTML 标记并构建 DOM 树。
    * 处理 CSS 标记并构建 CSSOM 树。
    * 将 DOM 与 CSSOM 合并成一个渲染树。
    * 根据渲染树来布局，以计算每个节点的几何信息。
    * 将各个节点绘制到屏幕上。


