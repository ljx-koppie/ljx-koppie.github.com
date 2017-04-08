
<template>
	<div>
		<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back"></a>
		    <h1 class="mui-title">登陆</h1>
		</header>

		<div class="login white">
			<div class="information_mui_content">
				<div style="overflow: hidden;">
					<div class="mui-segmented-control">
						<a class="mui-control-item mui-active" href="#news1">个人用户</a>
						<a class="mui-control-item" href="#news2">企业用户</a>
					</div>
				</div>
				<div>
					<div id="news1" class="mui-control-content mui-active">
						<input type="text" name="" placeholder="请输入手机号" v-model="token.user">
						<input type="text" name="" placeholder="请输入密码" v-model="token.pass">
						<input type="button" class="btn" value="登陆" @touchstart="login();"> 
						<div class="register clearFix">
							<router-link to="/register">
								<span class="left">马上注册</span>
							</router-link>
							<span class="right">忘记密码?</span>
						</div>
					</div>
					<div id="news2" class="mui-control-content">
						<input type="text" name="" placeholder="请输入邮箱号码" v-model="token.user">
						<input type="text" name="" placeholder="请输入密码" v-model="token.pass">
						<input type="button" class="btn" value="登陆" @touchstart="login();">
						<div class="register clearFix">
							<router-link to="/register">
								<span class="left">马上注册</span>
							</router-link>
							<span class="right">忘记密码?</span>
						</div>
					</div>
				</div> 
			</div>
		</div>
		<Coty></Coty>
	</div>
</template>

<script>
import Coty from './Copy.vue'
export default{
	data(){
		return {
			token:{
				islogin:true,
				user:'',
				pass:''	
			}
		}
	},
	methods:{
		login(){
			let xinxi = JSON.parse(sessionStorage.getItem('xinxi')) || {};
			const USERNAME = xinxi.userName;
			const PASSWOED = xinxi.passWord;
			const SESSION = xinxi.sesSion;
			
			const username = this.token.user;
			const password = this.token.pass;
			if(username == '' && password == ''){
				mui.toast('账号或密码不能为空!');
			}else if(username===USERNAME && password ===PASSWOED){
				sessionStorage.setItem('islogin','true');
				sessionStorage.setItem('username',username);
				if(SESSION =='1'){
					mui.toast('个人用户-登录成功');
				}else if(SESSION == '2'){
					mui.toast('企业用户-登录成功');
				}
				setTimeout(function(){
					this.$router.replace({path:'/home'});
				}.bind(this),2000)
			}else{
				mui.toast('账号或密码错误!');
			}
		}
	},
	components:{
		Coty
	}
}
</script>

<style scoped>
.mui-bar{
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 2rem;
	background: #fafbfd;
}
.mui-bar h1{
	color: #fff;
	font-size: 0.8rem;
	color: #2f2f2f;
}
.mui-action-back{
	width: 0.575rem;
	height: 1.0rem;
	background: url('../../assets/image/back.png') no-repeat;
	background-size: cover;
	margin-left: 0.5rem;
}
/*header*/
.login{
	margin-top: 2rem;
}
.information_mui_content{
	width: 90%;
	margin: 0 auto;
}
.mui-segmented-control{
	border: 1px solid #eee;
	border-radius: 0.3rem;
	-webkit-border-radius: 0.3rem;
	margin: 0.95rem 0 1.2rem;
}
.mui-segmented-control .mui-control-item{
	font-size: 0.65rem;
	color: #656565;
	border: none;
	height: 1.55rem;
	line-height: 1.55rem;
}
.mui-segmented-control .mui-control-item.mui-active{
	background: #656565;
}
.mui-control-content input{
	width: 100%;
	height: 1.625rem;
	border:none;
	background: #f5f5f5;
	border-radius: 0.3rem;
	-webkit-border-radius: 0.3rem;
	font-size: 0.65rem;
	color: #979696;
	margin-bottom: 1.125rem;
}
.mui-control-content .btn{
	background: #ff6600;
	color: #fff;
}
.register{
	font-size: 0.6rem;
	color: #979696;
}
.register .left{
	float: left;
	margin-left: 0.5rem;
}
.register .right{
	float: right;
	margin-right: 0.5rem;
}
</style>












