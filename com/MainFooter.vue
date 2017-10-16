<template>
	<footer class="footer">
		<ul>
			<li><router-link to="/home"><i class="iconfont">&#xe66d;</i></router-link></li>
			<li><router-link to="/kind"><i class="iconfont">&#xe618;</i></router-link></li>
			<li><router-link to="/cart"><i class="iconfont">&#xe662;</i></router-link></li>
			<li><router-link to="/user"><i class="iconfont">&#xe6c2;</i></router-link></li>
		</ul>
	</footer>
</template>
<script type="text/javascript">
	import "./../scss/main.scss"
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.router-link-exact-active.router-link-active{
		color:#01172C;
	}
</style>