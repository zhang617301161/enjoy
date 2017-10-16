//1
import Home from "./../com/Home.vue"
import Kind from "./../com/Kind.vue"
import Cart from "./../com/Cart.vue"
import User from "./../com/User.vue"
import Detail from "./../com/Detail.vue";
import List from "./../com/List.vue";
import Login from "./../com/Login.vue";
import Lunbo from "./../com/Lunbo.vue";
import PowerList from "./../com/PowerList.vue";
import SearchList from "./../com/SearchList.vue";
import MainFooter from "./../com/MainFooter.vue";
import Shop from "./../com/Shop.vue"
import Apply from "./../com/Apply.vue"



import KindHeader from "./../com/KindHeader.vue"
import DetailHeader from "./../com/DetailHeader.vue"
import ListHeader from "./../com/ListHeader.vue"


//2
const routes=[
	{path:"/",redirect:"/home"},
	{path:"/home",components:{
		default:Home
	}},
	{path:"/kind",components:{
		default:Kind,
		header:KindHeader,
		footer:MainFooter
	}},
	{path:"/lunbo",components:{
		default:Lunbo
	}},
	{path:"/shop",components:{
		default:Shop
	}},
	{path:"/cart",components:{
		default:Cart,
		footer:MainFooter
	}},
	{path:"/apply",components:{
		default:Apply
	}},
	{path:"/list",components:{
		default:List,
		header:ListHeader
	}},
	{path:"/powerlist",components:{
		default:PowerList
	}},
	{path:"/searchlist",components:{
		default:SearchList
	}},
	{path:"/user",components:{
		default:User,
		footer:MainFooter
	}},
	{path:"/login",components:{
		default:Login
	}},
	{path:"/detail",components:{
		default:Detail,
		header:DetailHeader
	}}
]

export default routes
