

// 政务 - Govern(首页) Vehicle(业务分类) Bandle(业务办理详情页) Calculation(日程计算)

// 我的- Message(我的) DetaList(办理清单)
import Message from './components/mymessage/Message.vue'
import Notbandle from './components/mymessage/Notbandle.vue'
import Inprocess from './components/mymessage/Inprocess.vue'
import Already from './components/mymessage/Already.vue'

// public  Comment(评论) Login(登陆)

export default [
	{
		path:'/home',
		component:resolve=>require(['./components/govern/govern.vue'],resolve)
	},
	{
		path:'/community',
		component:resolve=>require(['./components/Community/Community.vue'],resolve)
	},
	{
		path:'/message',
		component:Message,
		children:[
			{path:'/message',component:Notbandle,name:'message'},
			{path:'inprocess',component:Inprocess,name:'inprocess'},
			{path:'already',component:Already,name:'already'}
		]
	},
	{
		path:'/vehicle/:type',
		component:resolve=>require(['./components/govern/Vehicle.vue'],resolve)
	},
	{
		path:'/bandle/:type/:id',
		component:resolve=>require(['./components/govern/Bandle.vue'],resolve)
	},
	{
		path:'/calculation',
		component:resolve=>require(['./components/govern/Calculation.vue'],resolve)
	},
	{
		path:'/detalist/:id',
		component:resolve=>require(['./components/mymessage/DetaList.vue'],resolve)
	},
	{
		path:'/comment',
		component:resolve=>require(['./components/public/Comment.vue'],resolve)
	},
	{
		path:'/login',
		component:resolve=>require(['./components/public/Login.vue'],resolve)
	},
	{
		path:'/register',
		component:resolve=>require(['./components/public/Register.vue'],resolve)
	},
	{
		path:'/',
		redirect:'/home'
	},
	{
		path:'*',
		redirect:'/home'
	}
]