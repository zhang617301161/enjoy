<template>
	<div class="container">
		
		<router-view name="header"></router-view>
		
		<div id="content">
			<router-view></router-view>
		</div>
		
		<router-view name="footer"></router-view>
		
	</div>
</template>

<script type="text/javascript">
	import MainFooter from "./MainFooter.vue"
	export default{
		data(){
			return{
				
			}
		},
		components:{
			"v-footer":MainFooter
		}
	}
</script>