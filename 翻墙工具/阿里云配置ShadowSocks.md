
登录阿里云购买ESC一台云服务，目前我购买的香港地区的，

### 1.安装pip
由于安装的是python 版本的 shadowsocks，所以首先安装pip

```
$ curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
$ python get-pip.py
```

### 2.安装shadowsocks

```
$ pip install --upgrade pip
$ pip install shadowsocks
```

### 3.创建配置文件
创建文件所在目录:/etc

###### 创建文件命令,

```
$ vi /etc/shadowsocks.json
```

###### 若进入了etc目录

```
$ vi shadowsocks.json
```

配置文件内容：
单端口：

```js
{
 "server":"0.0.0.0",      --服务器IP，直接用0.0.0.0也可
 "server_port":8888,      --端口端口
 "local_address": "127.0.0.1", --本地地址，可省略
 "local_port":1080,       --本地端口，可省略
 "password":"password",     --密码
 "timeout":300,         --超时时间，可省略
 "method":"aes-256-cfb",    --加密策略，有多重策略，具体自查
}
```

多端口：

```js
{
  "server":"0.0.0.0",
  "local_address":"127.0.0.1",
  "local_port":1080,
  "port_password":{      --每个端口对应一个密码
    "1111":"password1",
    "1112":"password2",
    "1113":"password3"
  },
  "timeout":300,
  "method":"aes-256-cfb",
  "fast_open":false
}
```

### 4.启动shadowsocks

##### 启动

```
ssserver -c /etc/shadowsocks.json -d start
```

##### 停止

```
ssserver -c /etc/shadowsocks.json -d stop
```

##### 重启

```
ssserver -c /etc/shadowsocks.json -d restart

```

通过以下命令注册，启动服务

```
$ systemctl enable shadowsocks
$ systemctl start shadowsocks
```
启动后可以查看服务状态

```
$ systemctl status shadowsocks -l

```
若启动成功：

```
● shadowsocks.service - Shadowsocks
   Loaded: loaded (/etc/systemd/system/shadowsocks.service; enabled; vendor preset: disabled)
   Active: active (running) since Sun 2017-08-13 18:03:41 CST; 1h 29min ago
 Main PID: 9567 (ssserver)
   CGroup: /system.slice/shadowsocks.service
           └─9567 /usr/bin/python2 /usr/bin/ssserver -c /etc/shadowsocks.json
```



### 6.关闭防火墙
centos7用的firewalld，若不进行设置，可能会导致SS无法使用

启动一个服务：systemctl start firewalld.service
关闭一个服务：systemctl stop firewalld.service
重启一个服务：systemctl restart firewalld.service
显示一个服务的状态：systemctl status firewalld.service
在开机时启用一个服务：systemctl enable firewalld.service
在开机时禁用一个服务：systemctl disable firewalld.service
查看服务是否开机启动：systemctl is-enabled firewalld.service
查看已启动的服务列表：systemctl list-unit-files|grep enabled
查看启动失败的服务列表：systemctl --failed



### 7 下载安装ShadowSocks,配置
