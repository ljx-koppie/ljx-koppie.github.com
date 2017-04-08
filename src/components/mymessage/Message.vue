<template>
	<div>
		<header class="mui-bar mui-bar-nav mui-header">
			<h1 class="mui-title">个人中心</h1>
			<div class="mui-pull-right right">
				<b class="logo"></b>
				<span>桐乡市</span>
			</div>
			<i @tap="signOut();">退出</i>
		</header>
		<!-- 头像，用户名 -->
		<div class="message_logo">
			<div class="user">
				<i><img src="../../assets/image/my.png" class="logo" alt=""></i>
				<span>{{username}}</span>
			</div>
		</div>

		<div class="mui-table-view-hie">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-table-hei">
					<img src="../../assets/image/mess1.png" alt=""/>
					<p  class="mui-navigate-right">实名认证</p>
				</li>
			</ul>
			<ul class="mui-table-view" style="margin-top: 0.5rem;">
				<li class="mui-table-view-cell mui-table-hei">
					<img src="../../assets/image/mess2.png" alt="" />
					<p  class="mui-navigate-right">我的收藏</p>
				</li>
				<li class="mui-table-view-cell mui-table-hei">
					<img src="../../assets/image/mess3.png" alt=""/>
					<p  class="mui-navigate-right">我的评论</p>
				</li>
			</ul>
		</div>
		<!-- 业务办理 -->
		<div class="bandle">
			<div class="bandleColor">
				<div id="segmentedControl" class="bandle_tab">
					<ul class="clearFix" id="mess_nav">
						<li class="nobandle" id="nobandle">
							<i></i>
							<span>代办理</span>
						</li>
						<li class="inprocess" id="inprocess">
							<i></i>
							<span>办理中</span>
						</li>
						<li class="already" id="already">
							<i></i>
							<span>已完成</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="bandle_table">
				<router-view></router-view>
			</div>
		</div>
		<Footers class="footer"></Footers>
	</div>
</template>

<script>
import Footers from '../public/FooterNav.vue'
	export default{
		data(){
			return {
				username:'18418388403'
			}
		},
		mounted(){
			this.tab();
			this.path();
		},
		beforeRouteEnter(to,from,next){
			window.scrollTo(0, 0)
			next();
		},
		methods:{
			active(){
				var nav = document.getElementById('mess_nav')
				var Activeclass= nav.querySelectorAll('li');
				for(var i=0; i<Activeclass.length;i++){
					Activeclass[i].classList.remove('active')
				}
			},
			tab(){
				var vm= this;
				mui('#mess_nav').on('touchstart','.nobandle',function(){
					vm.active();
					this.classList.add('active');
					vm.$router.push({path:'/message'});
				});
				mui('#mess_nav').on('touchstart','.inprocess',function(){	
					vm.active();
					this.classList.add('active');
					vm.$router.push({path:'/message/inprocess'});
				});
				mui('#mess_nav').on('touchstart','.already',function(){	
					vm.active();
					this.classList.add('active');	
					vm.$router.push({path:'/message/already'});
				});
			},
			path(){
				var url = this.$route.path;
				if(url == '/message'){
					document.getElementById('nobandle').classList.add('active');
				}else if(url == '/message/inprocess'){
					document.getElementById('inprocess').classList.add('active');
				}else if(url == '/message/already'){
					document.getElementById('already').classList.add('active');
				}
			},
			signOut(){
				var _this =this;
				var btnArray = ['是', '否'];
				mui.confirm('确定要退出么?', '提示', btnArray, function(e) {
					if (e.index !== 1) {
						sessionStorage.setItem('islogin','');
						sessionStorage.setItem('username','');
						sessionStorage.setItem('bandle','');
						_this.$router.replace({path:'/home'});
					}
				})
			}
		},
		components:{
			Footers
		}
	}
</script>

<style>
.mui-header{
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #292929;
	height: 2rem;
}
.mui-pull-right{
	display:flex;
	align-items: center;
}
.mui-pull-right span{
	color: #fff;
	font-size: 0.65rem;
}
.mui-pull-right .logo{
	width: 0.55rem;
	height: 0.675rem;
	background: url('../../assets/image/fixed.png') no-repeat;
	background-size: 100%;
	margin-right: 0.3rem;
	margin-left: 0.5rem;
}
.mui-bar i{
	font-size: 0.6rem;
	color: #fff;
	margin-right: 0.5rem;
}
.mui-bar h1{
	color: #fff;
	font-size: 0.8rem;
}
/*header*/
.message_logo{
	margin-top: 2.0rem;
	width: 100%;
	height: 5.625rem;
	background: url('../../assets/image/mess_bg.png') no-repeat;
	background-size:cover;
	position: relative;
}
.message_logo .user{
	position: absolute;
	bottom: 0.6rem;
	height: 3.15rem;
	width: 100%;
	display: flex;
	align-items: center;
}
.message_logo .user i{
	width: 3.15rem;
	height: 3.15rem;
	border-right: 50%;
	-webkit-border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 0.6rem;
}
.message_logo .user span{
	font-size: 0.8rem;
	color: #fff;
}
img.logo{
	width: 3.15rem;
	height: 3.15rem;
	border-radius: 50%;
	-webkit-border-radius: 50%;
}
/*用户名*/


.mui-table-view-hie{
	padding: 0.5rem 0;
	background: #f5f5f5;
}
.mui-table-view li.bankColor{

}
.mui-table-hei{
	height: 2.25rem;
	display: flex;
	align-items: center;
	position: relative;
}	
.mui-table-hei img{
	width: 1rem;
	height: 1rem;
	position: absolute;
	top: 50%;
	margin-top: -0.5rem;
}	
.mui-table-hei p{
	margin-left: 32px;
	color: #595959;
	font-size: 0.65rem;
}
.mui-header-name{
	height: 4.15rem;
	margin-top: 3.2rem;
	display: flex;
	align-items: center;
}
.mui-header-name img{
	display: block;
	width: 3.225rem;
	height: 3.225rem;
	border: 1px solid #e0dede;
	overflow: hidden;
	border-radius: 0.5rem;
	-webkit-border-radius:0.5rem;
}
.mui-media-body{
	font-size: 0.833rem;
	margin-left: 0.55rem;
	height: 4.15rem;
	line-height: 4.15rem;
}
.mui-navigate-right{
	font-size: 0.8rem;
	color: #000;
}
.update{
	font-size: 0.65rem;
	color: #fa5151;
	margin-right: 1rem;
}

/*业务办理*/
.bandle_tab{
	width: 100%;
	height: 2.4rem;
	background: #fff;
	display: flex;
	align-items: center;
}
.bandleColor{
	width: 100%;
	background: #f5f5f5;
	padding-bottom: 0.4rem;
}
.bandle_tab ul{
	width: 95%;
	margin: 0 auto;
	height: 1.1rem;
}
.bandle_tab li{
	text-align: center;
	float: left;
	width: 33.33%;
	border-right: 1px solid #eee;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
}
.bandle_tab li:last-child{
	border: none;
}
.bandle_tab li span{
	font-size: 0.65rem;
	color: #141414;
	margin-left: 0.45rem;
}
.bandle_tab li.active span{
	color: #fc921b;
}
.bandle_tab li:first-child i{
	width: 1.075rem;
	height: 0.9rem;
	background: url('../../assets/image/bandle1.png') no-repeat;
	background-size: cover;
}
.bandle_tab li:nth-child(2) i{
	width: 1.075rem;
	height: 0.9rem;
	background: url('../../assets/image/bandle2.png') no-repeat;
	background-size: cover;
}
.bandle_tab li:last-child i{
	width: 0.95rem;
	height: 0.95rem;
	background: url('../../assets/image/bandle3.png') no-repeat;
	background-size: cover;
}
.bandle_tab li:first-child.active  i{
	width: 1.075rem;
	height: 0.9rem;
	background: url('../../assets/image/bandle_active1.png') no-repeat;
	background-size: cover;
}
.bandle_tab li:nth-child(2).active  i{
	width: 1.075rem;
	height: 0.9rem;
	background: url('../../assets/image/bandle_active2.png') no-repeat;
	background-size: cover;
}
.bandle_tab li:last-child.active  i{
	width: 0.95rem;
	height: 0.95rem;
	background: url('../../assets/image/bandle_active3.png') no-repeat;
	background-size: cover;
}
.mui-control-content{
	overflow: hidden;
	background: #fff;
}
.bandle_table{
	background: #fff;
	padding-bottom: 2.4rem;
}
.bandle_table_view{
	/*padding-bottom: 2.4rem;*/
	/*margin-bottom: 2.4rem;*/
}
.bandle_table_view li{
	height: 4.2rem;
	border-bottom: 1px solid #eee;
	display: flex;
	align-items: center;
	font-size: 0.65rem;
	color: #696969;
	position: relative;
}
.bandle_table_view li .user_logo{
	margin: 0 0.8rem 0 0.65rem;
}
.bandle_table_view li dl dt{
	margin-bottom: 0.2rem;
}
.bandle_table_view li .prompt{
	width: 3rem;
	height: 2rem;
	position: absolute;
	right: 0.2rem;
	text-align: center;
	top: 50%;
	margin-top: -1rem;
}
.bandle_table_view li .detaList{
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 1.0rem;
	top: 50%;
	margin-top: -0.65rem;
	width: 2.95rem;
	height: 1.3rem;
	border: 1px solid #fdab50;
	font-size: 0.5rem;
	color: #fdab50;
	border-radius: 0.2rem;
	-webkit-border-radius: 0.2rem;
}
.bandle_table_view .prompt i{
	margin: 0 auto;
	display: block;
	width: 0.675rem;
	height: 0.775rem;
	background: url('../../assets/image/porpmt.png') no-repeat;
	background-size: cover;
}
.bandle_table_view .prompt i.active{
	margin: 0 auto;
	display: block;
	width: 0.675rem;
	height: 0.775rem;
	background: url('../../assets/image/porpmt1.png') no-repeat;
	background-size: cover;
}
</style>







