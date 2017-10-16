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
					<p>{{titleList.sub_category_list[0].name}}</p>
				</div>
				<div class="title-right" @click="goBlock()">
					<p>{{titleList.sort[0].sort_name}}</p>
				</div>
				<ul class="title-sort">
					<li v-for="(lis,index) in titleList.sort" @click="goSort(lis.sort_id,index)">{{lis.sort_name}}</li>
				</ul>
			</div>
			<ul class="pList">
				<li v-for="item in classList" @click="goDetail(item.enjoy_url)">
					<div class="left">
						<img :src="item.product_image"/>
					</div>
					<div class="right">
						<p>{{item.name}}</p>
						<p><a>{{item.price/100}}元/{{item.show_entity_name}}</a><a>{{item.original_price/100}}</a></p>
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
			goBlock(){
				$(".title-sort").toggle();
			},
			goDetail(id){
				router.push({path:'detail', query:{ url: id }})
			},
			goSort(sort_id,index){
				console.log(index)
				$(".title-sort li").eq(index).addClass("titleActive").siblings().removeClass("titleActive");
				var sortId=sort_id;
				var that=this;
				var category_id=that.$route.query.url;
				var city_id=that.$route.query.city_id;
				var url = "https://api.ricebook.com/4/tab/category_product_list.json?category_id="+category_id+"&sort="+sortId+"&from_id=0&city_id="+city_id+"&page=0";
				MyAjax.vueJson(url,function(data){
//					console.log(data)
					that.classList=data;
					that.si=true
				},function(err){
					console.log(err)
				});
				$(".title-sort").css("display","none")
			}
		},
		mounted(){
			var that=this;
			if(localStorage.getItem("isLogin")){
				that.people=true;
			}else{
				that.people=false
			}
			var category_id=that.$route.query.url;
			var city_id=that.$route.query.city_id;
			var url = "https://api.ricebook.com/4/tab/category_product_list.json?category_id="+category_id+"&sort=1&from_id=0&city_id="+city_id+"&page=0";
			MyAjax.vueJson(url,function(data){
//				console.log(data)
				that.classList=data;
				that.si=true
			},function(err){
				console.log(err)
			});
			
			var url1="https://api.ricebook.com/4/tab/sub_category.json?category_id="+category_id+"&city_id="+city_id+"&from_id=0"
			MyAjax.vueJson(url1,function(data){
//				console.log(data)
				that.titleList=data;
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