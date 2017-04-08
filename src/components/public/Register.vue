
<template>
	<div>
		<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back"></a>
		    <h1 class="mui-title">注册</h1>
		</header>
		<div class="register white">
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
						<div class="short">
							<input type="text" class="yzm" placeholder="请输入短信验证码">
							<button>获取验证码</button>
						</div>
						<input type="text" name="" placeholder="请输入密码" v-model="token.pass">
						<input type="text" name="" placeholder="请重新输入密码">
						<div class="mui-input-row mui-checkbox mui-left">
							<label>同意《手机城市服务协议》和《手机城市隐私声明》</label>
							<input name="checkbox"  type="checkbox" checked="checkbox" >
						</div>
						<input type="button" class="btn" value="下一步" @touchstart="next(1);">
					</div>
					<div id="news2" class="mui-control-content">
						<input type="text" name="" placeholder="请输入邮箱号码" v-model="token.user">
						<div class="short">
							<input type="text" class="yzm" placeholder="请输入短信验证码">
							<button>获取验证码</button>
						</div>
						<input type="text" name="" placeholder="请输入密码" v-model="token.pass">
						<input type="text" name="" placeholder="请重新输入密码">
						<div class="mui-input-row mui-checkbox mui-left">
							<label>同意《手机城市服务协议》和《手机城市隐私声明》</label>
							<input name="checkbox"  type="checkbox" checked="checkbox" >
						</div>
						<input type="button" class="btn" value="下一步" @touchstart="next(2);">
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
				session:'',
				user:'',
				pass:''
			}
		}
	},
	methods:{
		next(SESSIONS){
			const username = this.token.user;
			const password = this.token.pass;
			const session = this.token.session;
			if(username =='' && password==''){
				mui.toast('用户名和密码不能为空');
			}else{
				let token = {
					userName : username,
					passWord : password,
					sesSion : SESSIONS
				}
				let Str = JSON.stringify(token);
				sessionStorage.setItem('xinxi',Str);
				mui.alert('注册成功', function(){
					this.$router.go(-1);
				}.bind(this));
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
.register{
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
.short{
	display: flex;
}
.short button{
	margin-left: 0.5rem;
	height: 1.625rem;
	background: #fff4be;
	border-radius: 0.3rem;
	-webkit-border-radius: 0.3rem;
	color: #545454;
	font-size: 0.6rem;
}
.mui-input-row{
	height: 1.5rem;
	display: flex;
	align-items: center;
	margin: -0.5rem 0 0.5rem;
}
.mui-checkbox input[type=checkbox]:before{
	font-size: 1.0rem;
}
.mui-checkbox.mui-left label{
	padding: 0;
	margin-left: 1.2rem;
	font-size: 0.65rem;
}
.mui-checkbox.mui-left input[type=checkbox]{
	left: 0;
}
.mui-checkbox input[type=checkbox]{
	left: 0;
	top: 50%;
	margin-top: -0.5rem;
}
</style>









