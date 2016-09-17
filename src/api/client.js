import io from 'socket.io-client'
const CHAT={
	msgObj:document.getElementsByClassName("body-wrapper")[0],
	username:null,
	userid:null,
	color:null,
	socket:null,
	onlineCount:0,
	onlineUsers:null,
	msgArr:[],
	//让浏览器滚动条保持在最低部
	scrollToBottom:function(){
		// window.scrollTo(0, 900000);
	},
	//退出，本例只是一个简单的刷新
	logout:function(){
		this.socket.disconnect();
		// location.reload();
	},
	//提交聊天消息内容
	submit:function(msg){
		if(msg != ''){
			let obj = {
				userid: this.userid,
				username: this.username,
				msg: msg,
				color: this.color
			};
			this.socket.emit('message', obj);
		}else{
			console.log('msg is null')
		}
		
		return false;
	},
	genUid:function(){
		return new Date().getTime()+""+Math.floor(Math.random()*899+100);
	},
	//更新系统消息，本例中在用户加入、退出的时候调用
	updateSysMsg:function(o, action){
		//当前在线用户列表
		this.onlineUsers=o.onlineUsers;
		//当前在线人数
		this.onlineCount = o.onlineCount;
		//新加入用户的信息
		var user = o.user;
			
		//更新在线人数
		var userhtml = '';
		var separator = '';
		// for(key in onlineUsers) {
	 //        if(onlineUsers.hasOwnProperty(key)){
		// 		userhtml += separator+onlineUsers[key];
		// 		separator = '、';
		// 	}
	 //  }
		// d.getElementById("onlinecount").innerHTML = '当前共有 '+onlineCount+' 人在线，在线列表：'+userhtml;
		
		// //添加系统消息
		// var html = '';
		// html += '<div class="msg-system">';
		// html += user.username;
		// html += (action == 'login') ? ' 加入了聊天室' : ' 退出了聊天室';
		// html += '</div>';
		// var section = d.createElement('section');
		// section.className = 'system J-mjrlinkWrap J-cutMsg';
		// section.innerHTML = html;
		// this.msgObj.appendChild(section);	
		// this.scrollToBottom();
	},
	changeInfo(){
		this.userid = localStorage.getItem('userid');
		this.username = localStorage.getItem('name');
		this.color = localStorage.getItem('color');
		this.weichat = localStorage.getItem('weichat');
		this.socket.emit('changeInfo', {userid:this.userid, username:this.username,color:this.color,weichat:this.weichat});
	},
	init:function(){
		/*
		客户端根据时间和随机数生成uid,这样使得聊天室用户名称可以重复。
		实际项目中，如果是需要用户登录，那么直接采用用户的uid来做标识就可以
		*/
		// this.userid = this.genUid();
		this.userid = localStorage.getItem('userid');
		this.username = localStorage.getItem('name');
		this.color = localStorage.getItem('color');
		this.weichat = localStorage.getItem('weichat');

		if (!this.userid) {return}
		// this.username = Math.floor(Math.random()*10);
		
		//连接websocket后端服务器
		this.socket = io.connect('wss://node.redream.cn');
		
		//告诉服务器端有用户登录
		this.socket.emit('login', {userid:this.userid, username:this.username,color:this.color,weichat:this.weichat});
		//心跳包，30s左右无数据浏览器会断开连接Heartbeat

		setInterval(() => {
			this.socket.emit('heartbeat', 1);
		},10000)
		//监听新用户登录
		this.socket.on('login', function(obj){
			CHAT.updateSysMsg(obj, 'logout');
			CHAT.msgArr.push(obj)	
		});
		
		this.socket.on('changeInfo', function(o){
			CHAT.onlineUsers[o.userid]=o
			console.log(o)	
		});
		//监听用户退出
		this.socket.on('logout', function(o){
			CHAT.updateSysMsg(o, 'logout');
		});
		
		//监听消息发送
		this.socket.on('message', function(obj){
			// var isme = (obj.userid == CHAT.userid) ? true : false;
			CHAT.msgArr.push(obj)	
		});

	}
}	
export default CHAT