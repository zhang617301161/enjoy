<template>
<div  @scroll="scroll()" ref="content" id="scroll">
	<header class="header">
		<div class="commonHeader">
			<div class="header-one" @click="goList()">
				<p>分类</p>
			</div>
			<div class="header-two">
				<p>ENJOY</p>
				<b @click="cityKind()">{{name}}</b>
			</div>
			<div class="header-three">
				<p v-if="!people" @click="goLogin()">登录</p>
				<p v-if="people" class="iconfont" @click="goUnLogin()">&#xe635;</p>
				
			</div>
			<ul class="unLogin">
				<li>我的订单</li>
				<li>我的礼券</li>
				<li @click="goQuit()">退出</li>
				<i class="iconfont">&#xe607;</i>
			</ul>
			
			
			
			<div class="header-four" @click="goSearch()">
				<p class="iconfont">&#xe6ae;</p>
			</div>
		</div>
		
		<div class="search">
			<div class="search-con">
				<input type="text" id="search_text" value="" placeholder="搜索本地精选/快递到家" ref="search_text"/>
				<input type="button" id="" value="搜索" @click="goSearchList()"/>
			</div>
		</div>
	</header>
	
	
	
	<div class="hcontent" v-if="si">
		<div class="week" v-for="item in proList">
			<div class="title">
				<h5>{{item.group_section.title}}</h5>
				<p>{{item.group_section.desc}}</p>
			</div>
			<ul>
				<li v-for="lis in item.tabs">
					<!--<img src="/img/login.png" alt="Photo" :data-echo="lis.url">-->
					<img :src='lis.url' @click="goDetail(lis.enjoy_url)"/>
					<p>{{lis.title}}</p>
					<p>{{lis.desc}}</p>
				</li>
			</ul>
		</div>
		
		<div class="citycontent">
			<h5>本地服务开通城市</h5>
			<ul class="cityKind">
				<li @click="goHome(104,'上海')">上海</li>
				<li @click="goHome(140,'北京')">北京</li>
				<li @click="goHome(144,'南京')">南京</li>
				<li @click="goHome(185,'天津')">天津</li>
				<li @click="goHome(216,'广州')">广州</li>
				<li @click="goHome(235,'成都')">成都</li>
				<li @click="goHome(260,'杭州')">杭州</li>
				<li @click="goHome(299,'深圳')">深圳</li>
				<li @click="goHome(347,'苏州')">苏州</li>
				<li @click="goHome(362,'西安')">西安</li>
				<li @click="goHome(388,'重庆')">重庆</li>
				<li @click="goHome(401,'长沙')">长沙</li>
			</ul>
		</div>
	</div>
	
	<footer class="footer">
		<ul>
			<li><router-link to="/home"><i class="iconfont">&#xe66d;</i></router-link></li>
			<li><router-link to="/kind"><i class="iconfont">&#xe618;</i></router-link></li>
			<li><router-link to="/cart"><i class="iconfont">&#xe662;</i></router-link></li>
			<li><router-link to="/user"><i class="iconfont">&#xe6c2;</i></router-link></li>
		</ul>
	</footer>
</div>
</template>
<script type="text/javascript">
	import VueRouter from "vue-router"
	import Vue from "vue"
	Vue.use(VueRouter);
	var router=new VueRouter({

	})
	import "./../scss/home.scss"
	import MyAjax from "./../md/MyAjax.js";
	export default{
		data(){
			return{
				proList:[],
				cityid:140,
				si:false,
				people:true,
				page:0,
				name:"北京"
			}
		},
		methods:{
			goDetail(id){
				router.push({path:'detail', query:{ url: id }})
			},
			goUnLogin(){
				$(".unLogin").toggle()
			},
			goQuit(){
				localStorage.removeItem("isLogin")
				$(".unLogin").toggle()
			},
			goSearchList(){
				var that=this;
				var keyWord=that.$refs.search_text.value;
				router.push({path:'searchlist',query:{keyWord:keyWord}})
			},
			goHome(cityId,name){
				var that=this
				that.proList=[];
				that.cityid = cityId;
				localStorage.setItem("name",name)
				that.name=name;
				var url = "https://api.ricebook.com/hub/home/v1/web/week_choice.json?city_id="+cityId+"&page=0";
				MyAjax.vueJson(url,function(data){
//					console.log(data)
					that.proList=data;
					that.si=true
				},function(err){
					console.log(err)
				});
				$(".week").css("display","block")
				$(".citycontent").css("display","none")
				$(".footer").css("display","block")
				
				console.log(that.cityid)
				localStorage.setItem("cityId",that.cityid)
				
			},
			goList(){
				router.push({ path: 'list' })
				
			},
			goLogin(){
				router.push({ path: 'login' })
			},
			cityKind(){
				$(".week").css("display","none")
				$(".citycontent").css("display","block")
				$(".footer").css("display","none")
			},
			goSearch(){
				$(".search").toggle()
			},
			scroll(){
//				 echo.init({
//				    offset: 100,
//				    throttle: 250,
//				    unload: false,
//				    callback: function (element, op) {
//				      console.log(element, 'has been', op + 'ed')
//				    }
//				  });

				var that = this;
				var cityID = that.cityid;
				var top=this.$refs.content.scrollTop;
				var height=this.$refs.content.offsetHeight;
				var iHeight=this.$refs.content.scrollHeight;
				console.log(top,height,iHeight)
				if(iHeight-height-top<=100){
					var that=this
					that.page++;
                    var url = "https://api.ricebook.com/hub/home/v1/web/week_choice.json?city_id="+cityID+"&page="+that.page;
					MyAjax.vueJson(url,function(data){
						console.log(data)
						for(var itm of data){
                        	that.proList.push(itm)
                        	that.si=true
                       }
					},function(err){
						console.log(err)
					});
				}
				
			}
		},
		updated(){
//			echo.init({
//				    offset: 100,
//				    throttle: 250,
//				    unload: false,
//				    callback: function (element, op) {
//				      console.log(element, 'has been', op + 'ed')
//				    }
//				  });
		},
		mounted(){
			if(localStorage.getItem("name")){
				this.name=localStorage.getItem("name")
				this.cityid=localStorage.getItem("cityId")
			}else{
				
			}
			var that = this;
			var cityId = that.cityid;
			
			var url = "https://api.ricebook.com/hub/home/v1/web/week_choice.json?city_id="+cityId+"&page=0";
			MyAjax.vueJson(url,function(data){
//				console.log(data)
				that.proList=data;
				that.si=true
			},function(err){
				console.log(err)
			});			
//			console.log(that.cityid)
			localStorage.setItem("cityId",that.cityid)
			
			if(localStorage.getItem("isLogin")){
				that.people=true;
			}else{
				that.people=false
			}
		}
		
		
	}
</script>
<style scoped>
	.router-link-exact-active.router-link-active{
		color:#01172C;
	}
</style>