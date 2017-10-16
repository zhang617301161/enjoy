<template>
	<div>
		<div class="ucontent" v-if="exist">
			<div class="avatar">
				<img src="https://image.ricebook.com/avatar/1?imageView2/1/w/140/h/140"/>
				<h4>ENJOY_65yq0SeH</h4>
			</div>
			<div class="nav-panel">
				<p>Code消费码</p>
			</div>
			<div class="nav-panels">
				<p>我的礼券</p>
				<p>地址管理</p>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import "./../scss/user.scss"
	import VueRouter from "vue-router"
	import Vue from "vue"
	Vue.use(VueRouter);
	var router=new VueRouter({

	})
	export default{
		data(){
			return{
				exist:false
			}
		},
		mounted(){
			var that=this
			if(localStorage.getItem("isLogin")){
				that.exist=true;
			}else{
				router.push({ path: 'login' })
			}
		}
	}
</script>