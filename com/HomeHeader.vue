<template>
	<header class="header">
		<div class="commonHeader">
			<div class="header-one" @click="goList()">
				<p>分类</p>
			</div>
			<div class="header-two">
				<p>ENJOY</p>
				<b @click="cityKind()" class="iconfont">&#xe728;</b>
			</div>
			<div class="header-three" @click="goLogin()">
				<p v-if="!people">登录</p>
				<p v-if="people" class="iconfont">&#xe635;</p>
			</div>
			<div class="header-four">
				<p class="iconfont">&#xe6ae;</p>
			</div>
		</div>
	</header>
</template>

<script type="text/javascript">
	import VueRouter from "vue-router"
	import Vue from "vue"
	Vue.use(VueRouter);
	var router=new VueRouter({

	})
	import "./../scss/home.scss"
	export default{
		data(){
			return{
				people:true
			}
		},
		methods:{
			goList(){
				router.push({ path: 'list' })
				
			},
			goLogin(){
				router.push({ path: 'login' })
			},
			cityKind(){
				router.push({ path: 'city' })
			}
		},
		mounted(){
			
		}
	}
</script>