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
		
		<div id="bcontent" v-if="si">
			<div class="banner">
				<img :src="proList.list[0].data.url"/>
				<div class="mask">
					<p>{{proList.group_section.title}}</p>
					<p>{{proList.group_section.desc}}</p>
				</div>
			</div>
			<ul class="type">
				<li class="type-one"><a class="active" @click="choice(proList.columns[0].alias)">{{proList.columns[0].text}}</a></li>
				<li class="type-two"><a @click="newly(proList.columns[1].alias)">{{proList.columns[1].text}}</a></li>
			</ul>
			
			<ul class="list">
				<li v-for="item in proList.list" @click="goDetail(item.data.enjoy_url)">
					<div class="left">
						<p>{{item.data.title}}</p>
						<p>{{item.data.desc}}</p>
						<p><a>{{item.data.price/100}}元/{{item.data.entity_name}}</a></p>
					</div>
					<div class="right">
						<img :src="item.data.url"/>
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
	import "./../scss/lunbo.scss"
	import MyAjax from "./../md/MyAjax.js";
	export default{
		data(){
			return{
				proList:[],
				si:false,
				people:true,
				name:"北京"
			}
		},
		methods:{
			goHome(){
				router.push({path:'home'})
			},
			goLogin(){
				router.push({ path: 'login' })
			},
			goDetail(id){
				router.push({path:'detail', query:{ url: id }})
			},
			choice(choice){
				var that=this;
				that.proList=[];
				$('.type-one a').addClass("active")
				$(".type-two a").removeClass("active")				
				var choice=choice;
				var str=that.$route.query.enjoy_url;
				var category_id=str.slice(51)
				var city_id=localStorage.getItem("cityId")
				var url="https://api.ricebook.com/hub/home/v1/web/category_detail.json?city_id="+city_id+"&category_id="+category_id+"&type="+choice+"&page=0"
				MyAjax.vueJson(url,function(data){
//					console.log(data)
					that.proList=data;
					that.si=true
				},function(err){
					console.log(err)
				});
			},
			newly(newly){
				var that=this;
				that.proList=[];
				$(".type-two a").addClass("active")
				$(".type-one a").removeClass("active")				
				var choice=newly;
				var str=that.$route.query.enjoy_url;
				var category_id=str.slice(51)
				var city_id=localStorage.getItem("cityId")
				var url="https://api.ricebook.com/hub/home/v1/web/category_detail.json?city_id="+city_id+"&category_id="+category_id+"&type="+choice+"&page=0"
				MyAjax.vueJson(url,function(data){
//					console.log(data)
					that.proList=data;
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
			var str=that.$route.query.enjoy_url;
//			console.log(str.slice(51))
			var category_id=str.slice(51)
			var city_id=localStorage.getItem("cityId")
			var url="https://api.ricebook.com/hub/home/v1/web/category_detail.json?city_id="+city_id+"&category_id="+category_id+"&type=choice&page=0"
			MyAjax.vueJson(url,function(data){
//				console.log(data)
				that.proList=data;
				that.si=true
			},function(err){
				console.log(err)
			});
			if(localStorage.getItem("name")){
				that.name=localStorage.getItem("name")
			}else{
				that.name=that.name
			}
//https://api.ricebook.com/hub/home/v1/web/category_detail.json?city_id=140&category_id=61&type=choice&page=0
//https://api.ricebook.com/hub/home/v1/web/category_detail.json?city_id=216&category_id=8&type=choice&page=0
		}
	}
</script>