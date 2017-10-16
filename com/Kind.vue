<template>
	<div class="kcontent" v-if="si">
		<div class="kind-one">
			<div class="caption">
				<h5>{{proList[0].data.group_section.title}}</h5>
				<p>{{proList[0].data.group_section.desc}}</p>
			</div>
			<div class="swiper-container" id="swiper-one">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide" v-for="item in proList[0].data.tabs">
		            	<img :src="item.url"/>
		            	<p>{{item.tag}}</p>
		            	<p>{{item.title}}</p>
		            	<p>{{item.desc}}</p>
		            </div>
		            
		        </div>
		        <div class="swiper-pagination" id="pagination-one"></div>
		    </div>
		    <div class="swiper-container" id="swiper-two">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide" v-for="item in proList[1].data.tabs" @click="goLunbo(item.enjoy_url)">
		            	<div class="opacity">
		            		<p>{{item.title}}</p>
		            		<p>{{item.desc}}</p>
		            	</div>
		            </div>		            
		        </div>
		    </div>

		</div>
		<div class="kind-two">
	    	<h5>
	    		<a>{{proList[2].data.group_section.title}}</a>
	    		<span @click="goLunbo(proList[2].data.group_section.enjoy_url)">{{proList[2].data.group_section.enjoy_url_text}}</span>
	    	</h5>
	    	<p>{{proList[2].data.group_section.desc}}</p>
	    	<div class="pics">
	    		<img :src="pic.url" v-for="pic in proList[2].data.tabs" @click="goDetail(pic.enjoy_url)"/>
	    	</div>
	    </div>
	    <div class="kind-three">
	    	<h5>
	    		<a>{{proList[3].data.group_section.title}}</a>
	    		<span @click="goLunbo(proList[3].data.group_section.enjoy_url)">{{proList[3].data.group_section.enjoy_url_text}}</span>
	    	</h5>
	    	<p>{{proList[3].data.group_section.desc}}</p>
	    	<div class="pics">
	    		<img :src="pic.url" v-for="pic in proList[3].data.tabs" @click="goDetail(pic.enjoy_url)"/>
	    	</div>
	    </div>
	    <div class="kind-four">
	    	<h5>
	    		<a>{{proList[4].data.group_section.title}}</a>
	    		<span @click="goLunbo(proList[4].data.group_section.enjoy_url)">{{proList[4].data.group_section.enjoy_url_text}}</span>
	    	</h5>
	    	<p>{{proList[4].data.group_section.desc}}</p>
	    	<div class="pics">
	    		<img :src="pic.url" v-for="pic in proList[4].data.tabs" @click="goDetail(pic.enjoy_url)"/>
	    	</div>
	    </div>
		
	</div>
</template>
<script type="text/javascript">
	import VueRouter from "vue-router"
	import Vue from "vue"
	Vue.use(VueRouter);
	var router=new VueRouter({

	})
	import "./../scss/kind.scss"
	import MyAjax from "./../md/MyAjax.js";
	export default{
		data(){
			return{
				proList:[],
				si:false
			}
		},
		methods:{
			goLunbo(url){
				router.push({ path: 'lunbo', query:{ enjoy_url: url } })
			},
			goDetail(id){
				router.push({ path: 'detail', query:{ url: id } })
			}
		},
		mounted(){
			var that=this;
//			console.log(localStorage.getItem("cityId"))
			var city_id=localStorage.getItem("cityId");
			var url="https://api.ricebook.com/hub/home/v1/web/explore.json?city_id="+city_id;
			MyAjax.vueJson(url,function(data){
//				console.log(data)
				that.proList=data;
				that.si=true
			},function(err){
				console.log(err)
			});
		},
		updated(){
			var swiper = new Swiper('#swiper-one', {
		        pagination: "#pagination-one",
				paginationClickable: true,
				slidesPerView: 1,
				paginationType: 'fraction',
				centeredSlides: true
		    });
		    var swiper = new Swiper('#swiper-two', {
				slidesPerView: 2,
		    });
		}
	}
</script>