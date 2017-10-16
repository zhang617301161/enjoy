<template>
	<div class="acontent">
		<div class="acontent-one">
			<h6><i class="iconfont">&#xe6dd;</i><a>本地精选</a></h6>
			<ul>
				<li v-for="item in dataList">
					<a>{{item.name}}</a>
					<a>{{item.price/100*item.num}}元</a>
					<a>{{item.num}}份</a>
				</li>
			</ul>
			<div class="blank">				
			</div>
			<p class="jacket">礼券</p>
			<div class="blank">				
			</div>
			<p class="money"><a>商品金额</a><a>{{money}}元</a></p>
			<div class="blank">				
			</div>
		</div>
		
		<div class="apply">
			<div class="apply-left">
				<p>合计：{{money}}元</p>
			</div>
			<div class="apply-right">
				<p@click="goFn()">去支付</p>
			</div>
		</div>
		
		<div class="apply-mask" v-if="show">
			<div class="mask-blank">
				<p><a>支付订单</a><span @click="goCancle()">&times;</span></p>
				<h4>￥{{money}}</h4>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import "./../scss/apply.scss"
	export default{
		data(){
			return{
				dataList:[],
				money:0,
				show:false
			}
		},
		methods:{
			goCancle(){
				var that=this;
				that.show=false
			},
			goFn(){
				var that=this;
				that.show=true
			}
		},
		mounted(){
			var that=this;
			that.dataList=JSON.parse(localStorage.getItem("goods"))
			that.money=localStorage.getItem("money")
		}
	}
	
</script>
