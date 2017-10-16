<template>
	<div class="lcontent" v-if="si">
		<div class="thing" v-for="item in classList">
			<h5>{{item.name}}</h5>
			<ul>
				<li v-for="lis in item.sub_category_list" @click="goPowerList(lis.id,lis.city_id)">{{lis.name}}</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
//https://api.ricebook.com/4/tab/category_product_list.json?category_id=25&sort=1&from_id=0&city_id=401&page=0
	import VueRouter from "vue-router"
	import Vue from "vue"
	Vue.use(VueRouter);
	var router=new VueRouter({

	})
	import "./../scss/list.scss"
	import MyAjax from "./../md/MyAjax.js";
	export default{
		data(){
			return{
				classList:[],
				si:false
			}
		},
		methods:{
			goPowerList(id,city_id){
				router.push({path:'powerlist', query:{ url: id ,city_id:city_id}})
			}
		},
		mounted(){
			var that = this;
//			console.log(localStorage.getItem("cityId"))
			var city_id=localStorage.getItem("cityId");
			var url = "https://api.ricebook.com/hub/home/v1/virtual/category.json?city_id="+city_id+"&is_new_local=true";
			MyAjax.vueJson(url,function(data){
//				console.log(data)
				that.classList=data;
				that.si=true
			},function(err){
				console.log(err)
			});
			
			
			
			 
		}
	}
</script>