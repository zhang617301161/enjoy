<template>
	<div>
		<header class="header">
			<div class="commonHeader">
				<div class="header-one" @click="goHome()">
					<p>首页</p>
				</div>
				<div class="header-two">
					<p>ENJOY</p>
					<b>{{name}}</b>
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
		
		<div class="pcontent" v-if="si">
			<div class="title">
				<div class="title-left">
					<p class="active" @click="goLocal()">本地服务</p>
				</div>
				<div class="title-right">
					<p @click="goCountry()">全国送</p>
				</div>
			</div>
			<ul class="pList">
				<li v-for="item in classList.products" @click="goDetail(item.enjoy_url)">
					<div class="left">
						<img :src="item.product_image"/>
					</div>
					<div class="right">
						<p>{{item.name}}</p>
						<p><a>{{item.price/100}}元/{{item.show_entity_name}}</a><a>￥{{item.original_price/100}}</a></p>
					</div>
				</li>
			</ul>
		</div>
		
	</div>
</template>
<script type="text/javascript">
	import VueRouter from "vue-router"
	import Vue from "vue"
	Vue.use(VueRouter);
	var router=new VueRouter({

	})
	import "./../scss/powerList.scss"
	import MyAjax from "./../md/MyAjax.js";
	export default{
		data(){
			return{
				classList:[],
				si:false,
				titleList:[],
				people:true,
				name:"北京"
			}
		},
		methods:{
			goHome(){
				router.push({ path: 'home' })
				
			},
			goLogin(){
				router.push({ path: 'login' })
			},
			goLocal(){
				$(".title-left p").addClass("active")
				$(".title-right p").removeClass("active")
				var that=this;
				var word=that.$route.query.keyWord;
				var city_id=localStorage.getItem("cityId")
				var url="https://api.ricebook.com/3/enjoy_product/search.json?city_id="+city_id+"&keyword="+word+"&page=0"
				MyAjax.vueJson(url,function(data){
					that.classList=data;
					that.si=true
				},function(err){
					console.log(err)
				});
			},
			goDetail(id){
				router.push({ path: 'detail',query:{url:id} })
			},
			goCountry(){
				$(".title-right p").addClass("active")
				$(".title-left p").removeClass("active")
				var that=this
				var word=that.$route.query.keyWord;
				var url1="https://api.ricebook.com/3/enjoy_product/search.json?city_id=1&keyword="+word+"&page=0"
				MyAjax.vueJson(url1,function(data){
					that.classList=data;
					that.si=true
				},function(err){
					console.log(err)
				});
			}
		},
		mounted(){
			var that=this;
			if(localStorage.getItem("isLogin")){
				that.people=true;
			}else{
				that.people=false
			}
			var word=that.$route.query.keyWord;
			var city_id=localStorage.getItem("cityId")
			var url="https://api.ricebook.com/3/enjoy_product/search.json?city_id="+city_id+"&keyword="+word+"&page=0"
			MyAjax.vueJson(url,function(data){
				that.classList=data;
				that.si=true
			},function(err){
				console.log(err)
			});
			if(localStorage.getItem("name")){
				that.name=localStorage.getItem("name")
			}else{
				that.name=that.name
			}
		}
	}
</script>