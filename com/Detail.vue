<template>
	<div class="dcontent" v-if="si">
		<div id="mySwiper" class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in product_images">
					<img :src="item.img_url" />
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>

		<div id="content-con">
			<p class="proName">{{proList.basic.name}}-{{proList.basic.spec}}</p>
			<p class="desc">{{proList.basic.description}}</p>
			<h5>
				<a class="proPrice">{{proList.basic.price/100}}元</a>
				<a>/{{proList.basic.show_entity_name}}</a>
				<a>￥{{proList.basic.origin_price/100}}</a>
			</h5>
			<div class="old">
				<a v-for="oldShop in display_property_group">{{oldShop.name}}</a>
			</div>
			<!--存在-->
			<div v-if="zai" class="exist">
				<div class="msg">
					<div class="blank">
					</div>
					<div class="msg-one">
						<h4>商户信息</h4>
						<ul v-for="menu in proList.modules[0].data.restaurants">
							<li>{{menu.restaurant_name}}</li>
							<li>{{menu.restaurant_address}}</li>
							<li v-for="num in menu.restaurant_phone_numbers">{{num}}</li>
						</ul>
					</div>
					<div class="blank">
					</div>
					<div class="msg-two">
						<h4>MENU</h4>
						<div v-for="menu1 in proList.modules[1].data.contents">
							<h6>{{menu1.sub_title}}</h6>
							<p v-for="pl in menu1.text">{{pl}}</p>
						</div>
					</div>
					<div class="blank">
					</div>
					<div class="msg-three">
						<h4>亮点</h4>
						<div v-for="menu2 in proList.modules[2].data.lights">
							<img :src='menu2.img_url' />
							<p>{{menu2.title}}</p>
							<p>{{menu2.content}}</p>
						</div>
					</div>
					<div class="blank">
					</div>
					<div class="msg-four">
						<h4>使用提示</h4>
						<div v-for="menu3 in proList.modules[3].data.contents">
							<a href="">{{menu3.text}}</a>
						</div>
					</div>
					<div class="blank">
					</div>
					<div class="msg-five">
						<h4>猜你喜欢</h4>
						<ul v-for="menu4 in proList.modules[4].data.recommend">
							<li>
								<div class="left">
									<img :src='menu4.product_image_url' />
								</div>
								<div class="right">
									<p>{{menu4.product_name}}</p>
									<p class="red">
										<a>{{menu4.price/100}}</a>
										<a>{{menu4.show_entity_name}}</a>
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div v-if="!zai" class="unexist">
				<div class="msg">
					<div class="prodetail">
						<h4>商品详情</h4>
						<ul>
							<li v-for="menu5 in proList.modules[0].data.menu_attributes">
								<a>{{menu5.key}}</a>
								<span>{{menu5.value}}</span>
								</span>
							</li>
						</ul>
					</div>
					<div class="msg-three">
						<h4>亮点</h4>
						<div v-for="menu2 in proList.modules[1].data.lights">
							<img :src='menu2.img_url' />
							<p>{{menu2.title}}</p>
							<p>{{menu2.content}}</p>
						</div>
					</div>
					<div class="blank">
					</div>
					<div class="msg-four">
						<h4>使用提示</h4>
						<div v-for="menu3 in proList.modules[2].data.contents">
							<a href="">{{menu3.text}}</a>
						</div>
					</div>
					<div class="blank">
					</div>
					<div class="msg-five">
						<h4>猜你喜欢</h4>
						<ul v-for="menu4 in proList.modules[3].data.recommend">
							<li>
								<div class="left">
									<img :src='menu4.product_image_url' />
								</div>
								<div class="right">
									<p>{{menu4.product_name}}</p>
									<p class="red">
										<a>{{menu4.price/100}}</a>
										<a>{{menu4.show_entity_name}}</a>
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="sub-area">
				<div class="sub-one" @click="goSelect()" v-if="cancle">
					<p>已选择：{{proList.basic.spec}}({{size}}份)</p>
					<p>切换商品
						<i class="iconfont">&#xe616;</i>
					</p>
				</div>
				<div class="sub-one" v-if="!cancle" @click="goCancle()">
					<p>已选择：{{proList.basic.spec}}({{size}}份)</p>
					<p>关闭
						<i class="iconfont">&#xe603;</i>
					</p>
				</div>
				<ul class="sub-two">
					<li v-for="sub in proList.basic.sub_product_array">
						<p>{{sub.spec}}</p>
						<p>{{sub.price/100}}元/{{sub.show_entity_name}}</p>
					</li>
				</ul>

				<div class="sub-three">
					<p>选择数量</p>
					<p></p>
					<p>
						<span @click="jian()">-</span>
						<span>{{size}}</span>
						<span @click="jia()">+</span>
					</p>
				</div>

			</div>

			<div class="sub-btn">
				<div class="add surea">
					<div class="add-one" @click="shop()">
						<i class="iconfont">&#xe600;</i>
						<a v-if="red"></a>
					</div>
					<div class="add-two" @click="goShopping()">
						<p>加入购物车</p>

					</div>
					<div class="add-three" @click="goApply()">
						<p>立即购买</p>
					</div>
				</div>

				<div class="add sure">
					<p @click="goCancle()">确定</p>
				</div>

			</div>

		</div>

	</div>
</template>
<script type="text/javascript">
import MyAjax from "./../md/MyAjax.js";
import "./../scss/detail.scss";
import VueRouter from "vue-router"
import Vue from "vue"
Vue.use(VueRouter);
var router = new VueRouter({

})
export default {
	data() {
		return {
			proList: [],
			product_images: [],
			display_property_group: [],
			si: false,
			zai: true,
			buy: true,
			cancle: true,
			red: false,
			money: 0,
			size: 1
		}
	},
	methods: {
		goApply() {
			var that = this;
			var a = []
			var obj = {
				"img": that.proList.basic.product_images[0].img_url,
				"name": that.proList.basic.name,
				"price": that.proList.basic.price,
				"num": 1
			}
			a.push(obj)
			that.money = obj.price / 100 * obj.num
			localStorage.setItem("money", that.money)
			localStorage.setItem("goods", JSON.stringify(a))
			router.push({ path: "apply" })
		},
		jia() {
			this.size++
		},
		jian() {
			if (this.size == 1) {
				this.size = 1
			} else {
				this.size--
			}
		},
		goSelect() {
			var that = this
			$(".sub-area").animate({ bottom: "60px" });
			that.cancle = false;
			$(".surea").animate({ opacity: "0" }, function() {
				$(".surea").css({
					display: 'none'
				})
			})
			$(".sure").animate({ opacity: "1" })
		},
		goCancle() {
			var that = this
			$(".sub-area").animate({ bottom: "-190px" })
			that.cancle = true
			$(".surea").animate({ opacity: "1" }, function() {
				$(".surea").css({
					display: 'flex',

				})
			})
			$(".sure").animate({ opacity: "0" })
		},
		goShopping() {
			var that = this
			var proName = that.proList.basic.name;
			that.red = true
			var open = true
			if (localStorage.getItem("goods")) {
				var a = JSON.parse(localStorage.getItem("goods"))
				for (var i in a) {
					if (a[i].name == proName) {
						a[i].num = a[i].num + that.size
						open = false
					}
				}
				localStorage.setItem("goods", JSON.stringify(a))
				if (open) {
					var obj = {
						"img": that.proList.basic.product_images[0].img_url,
						"name": that.proList.basic.name,
						"price": that.proList.basic.price,
						"num": that.size
					}
					a.push(obj)
					localStorage.setItem("goods", JSON.stringify(a))
				}

			} else {
				var a = []
				var obj = {
					"img": that.proList.basic.product_images[0].img_url,
					"name": that.proList.basic.name,
					"price": that.proList.basic.price,
					"num": 1
				}
				a.push(obj)
				localStorage.setItem("goods", JSON.stringify(a))
			}
		},
		shop() {
			router.push({ path: 'shop' })
		}
	},
	mounted() {
		var that = this;
		var concat = that.$route.query.url.slice(29);
		var url = "https://api.ricebook.com/product/info/product_detail.json?product_id=" + concat;
		MyAjax.vueJson(url, function(data) {
			//				console.log(data)
			that.proList = data;
			that.product_images = data.basic.product_images
			that.display_property_group = data.basic.display_property_group
			that.si = true
			if (!data.modules[4]) {
				that.zai = false
			}
		}, function(err) {
			console.log(err)
		});
	},

	updated() {
		var swiper = new Swiper('#mySwiper', {
			pagination: ".swiper-pagination",
			paginationClickable: true,
			autoplay: 2000,
			loop: true,
			autoplayDisableOnInteraction: false
		});
	}
}
</script>