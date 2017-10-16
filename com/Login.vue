<template>
	<div>
		<div class="login_content">
			<div class="login_one">
				<img src="../img/login.png" id="logo"/>
			</div>
			<div class="phone">
				<input type="text" ref="userName" placeholder="手机号"/>
				<input type="password" ref="password" placeholder="密码"/>
				<input type="button" id="" value="登录" @click="goEntry()"/>
			</div>
			<div class="login_two">
				<p>未注册的用户登录后自动创建账户</p>
				<p>登录即表示您同意<a>用户协议</a></p>
			</div>
			<div id="toast"></div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Toast from "./Toast";
	import "./../scss/login.scss"
	import VueRouter from "vue-router"
	import Vue from "vue"
	Vue.use(VueRouter);
	var router=new VueRouter({

	})
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			goEntry(){
				var that=this;
				var userName=that.$refs.userName.value;
				var passWord=that.$refs.password.value;
				if(userName==""||passWord==""){
					Toast.makeText("信息不完善",3000);
				}else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(userName))){
					Toast.makeText("手机号不正确",3000)
				}else{
					var obj={
						userName:userName,
						passWord:passWord
					}
					localStorage.setItem("user",JSON.stringify(obj));
					localStorage.setItem("isLogin",1)
					router.go(-1)
				}				
				
				
				
			}
		}
	}
</script>
