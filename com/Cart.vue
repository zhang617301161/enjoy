<template>
	<div>
		<div class="three-content" v-if="exist">
			<div class="picture">
				<img src="https://image.ricebook.com/business/21405298623398?imageView2/2/w/750/h/246"/>
			</div>
			<div class="desc">
				<p>邀请好友加入ENJOY，给TA发放价值50元礼券。好友完成首单消费后，你亦可获得价值50元礼券。</p>
			</div>
			<button>即刻邀请</button>
		</div>
	</div>
</template>
<script type="text/javascript">
	import MyAjax from "./../md/MyAjax.js";
	import "./../scss/cart.scss"
	import VueRouter from "vue-router"
	import Vue from "vue"
	Vue.use(VueRouter);
	var router=new VueRouter({

	})
	export default{
		data(){
			return{
				proList:[],
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