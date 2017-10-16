import Vue from "vue"
import VueRouter from "vue-router"
import VueResource from "vue-resource"

Vue.use(VueRouter)
Vue.use(VueResource)

import "./scss/main.scss"

import App from "./com/App.vue";

//定义的路由规则
import routes from "./routes/routes.js";

import router from "./router/router.js"





new Vue({
	el:"#app",
	router:router,
	components:{
		"v-app":App
	}
})
