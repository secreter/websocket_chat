# 基于vue和websocket的多人在线聊天室
* author： So
------

最近看到一些关于websocket的东西，就决定写一个在线聊天室尝试一下。最终决定配合vue来写，采用了官方的vue脚手架vue-cli和官方的router，在本例中呢，我是用了CHAT这个对象来存储app的数据的，但后来一想，虽然项目很小，但如果用官方的vuex会更好，方便以后扩展，比如可以加上私信功能，可以在对方不在线的时候缓存发送的消息，这些都是可以的。（现在比较尴尬的就是，我把聊天室写好放到公众号号redream里，但是很少有人会同时在线，所以你会经常发现你进去的时候只有你一个人，就导致群聊不起来）

### 1.好吧，先来看一下我们的效果图
![login](http://item.redream.cn/chat/0.jpg )
![login](http://item.redream.cn/chat/447.jpg )
![login](http://item.redream.cn/chat/445.jpg )
详细见[redream文章](http://mp.weixin.qq.com/s?__biz=MzAwMjAzNDU1NQ==&mid=2650166098&idx=1&sn=8ea7fda842823a1a0528742589f9f238&chksm=82d26d46b5a5e4503e830de7f41469b5fe93a08058bf839838f13597914037230ea114a57f3a#rd)

### 2.用到的一些东西
> * nodejs node服务器运行环境
> * express 搭建node服务器
> * websocket 本例核心，推送服务器消息到所有人
> * socketio websocket第三方库
> * vue + router 视图层双向数据绑定框架，用来简化开发、组件化开发的
> * es6语法 就是好用简洁哈哈
> * https 因为像websocket和很多h5的新功能，浏览器为了安全起见都仅支持https下开发
关于nodejs搭建express服务器可以看[这里](http://www.plhwin.com/2014/05/28/nodejs-socketio/)我就是在这里学的，代码里也借鉴了很多，关于搭建https服务器就不简介了，内容太多，推荐阿里云一年的免费证书，可以访问[我的站点](https://node.redream.cn)查看

### 3.代码架构简介
* server里是需要运行在node服务器上的js文件，监听websocket连接
* src/api/client是客户端连接服务器的核心js
* src/components下是页面的组件。我分成了三大部分，login组件(登录页面)，chat组件（聊天页面），groupinfo组件（群信息页面），其实是单页应用，反应速度更快，接近原生app，只不过用router联系在了一起。像chat组件，又又head、body、foot组件组成，组件化是很好的习惯和架构方式，条理清晰，而且在大项目里很多可以复用。
具体都在代码了，大家可以下载下来在本地跑一跑。

### 4.运行代码
* install dependencies
> npm install

* serve with hot reload at localhost:8080
> npm run dev

* build for production with minification
> npm run build

这是在我站点上跑着的[例子](http://item.redream.cn/chat/),大家可以看一看，在手机上效果更加，最近校招比较忙，就花了两天，没考虑兼容，欢迎大家提出意见。

-------
> 这是我第一次写技术介绍文章，其实我也并没有介绍什么细节。不过感觉上面提到的每一个知识点都可以讲很多。一想写起来那么多就没耐心了，看来还是太毛躁。希望大家多多包涵，我会慢慢改进的，大家一起进步！

https://github.com/secreter/websocket_chat
