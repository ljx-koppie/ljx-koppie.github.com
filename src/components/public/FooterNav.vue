<template>
	<div>
		<nav class="mui-bar mui-bar-tab">
			<ul id="nav">
				<li class="gove" id="gove">
					<i></i>
					<span>政务</span>
				</li>
				<li class="city" id="city">
					<i></i>
					<span>城市</span>
				</li>
				<li class="message" id="message">
					<i></i>
					<span>我的</span>
				</li>
			</ul>
		</nav>		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		mounted(){
			this.tab();
			this.path();
		},
		methods:{
			active(){
				var nav = document.getElementById('nav')
				var Activeclass= nav.querySelectorAll('li');
				for(var i=0; i<Activeclass.length;i++){
					Activeclass[i].classList.remove('mui-active')
				}
			},
			tab(){
				var _this= this;
				let RUNFLAG = true; // true 相应请求。false 不相应请求
				mui('.mui-bar').on('touchstart','.gove',function(){
					_this.active();
					this.classList.add('mui-active');
					_this.$router.push({path:'/home'});
				});
				mui('.mui-bar').on('touchstart','.city',function(){	
					_this.active();
					this.classList.add('mui-active');
					_this.$router.push({path:'/community'});
				});
				mui('.mui-bar').on('touchstart','.message',function(){
					_this.active();
					this.classList.add('mui-active');
					_this.$router.push({path:'/message'});
					// if(sessionStorage.getItem('islogin')){
						
					// }else{
					// 	_this.$router.push({path:'/login'});
					// }
				});
			},
			path(){
				var url = this.$route.path;
				if(url == '/home'){
					document.getElementById('gove').classList.add('mui-active');
				}else if(url == '/community'){
					document.getElementById('city').classList.add('mui-active');
				}else if(url == '/message' || url == '/message/inprocess' || url == '/message/already'){
					document.getElementById('message').classList.add('mui-active');
				}
			}
		}
	}
</script>

<style scoped>
.mui-bar-tab {
	height: 2.4rem;
	background:#efefef;
	border: none;
}
li{
	width: 33.33%;
	float: left;
	text-align: center;
	font-size: 0.6rem;
	color: #737373;
}
li i{
	display:block;
	margin: 0.40rem auto 0.2rem;
	width: 1.025rem;
	height: 1.025rem;
}
li:first-child i{
	background: url('../../assets/image/inter.png') no-repeat;
	background-size: 100%;
}
li:nth-child(2) i{
	background: url('../../assets/image/city.png') no-repeat;
	background-size: 100%;
}
li:last-child i{
	background: url('../../assets/image/user.png') no-repeat;
	background-size: 100%;
}

li:first-child.mui-active i{
	background: url('../../assets/image/inter1.png') no-repeat;
	background-size: 100%;
}
li:nth-child(2).mui-active i{
	background: url('../../assets/image/city1.png') no-repeat;
	background-size: 100%;
}
li:last-child.mui-active i{
	background: url('../../assets/image/user1.png') no-repeat;
	background-size: 100%;
}
li:first-child.mui-active span,li:nth-child(2).mui-active span,li:last-child.mui-active span{
	color: #00a1e2;
}
</style>













