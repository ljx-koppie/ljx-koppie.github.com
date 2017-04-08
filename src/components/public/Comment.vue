
<template>
	<div>
		<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back"></a>
		    <h1 class="mui-title">发表评论</h1>
		</header>

		<div class="tedalist_title">
			<div class="tedalist_title_view">
				<div class="user_logo">
				<img src="../../assets/image/my2.png" class="logo" alt="">
				</div>
				<dl>
					<dt>{{bandleTitle}}</dt>
					<dd>2017.03.22 21:00</dd>
				</dl>
			</div>
		</div>

		<div class="comment white">
			<ul>
				<li>
					<span>1.业务办理内容详细程度</span>
					<div>
						<i></i>
						<i></i>
						<i></i>
						<i></i>
						<i></i>
					</div>
				</li>
				<li>
					<span>2.政务中心服务满意程度</span>
					<div>
						<i></i>
						<i></i>
						<i></i>
						<i></i>
						<i></i>
					</div>
				</li>
			</ul>
			<div class="comment_text">
				<span>发表评语</span>
				<textarea name="" placeholder="诚心接受您的建议和批评"></textarea>
			</div>
		</div>

		<button class="Gobandle" @tap="submit();">提交</button>
	</div>
</template>

<script>
export default{
	data(){
		return {
			bandleTitle:''
		}
	},
	mounted(){
		this.title();
	},
	methods:{
		title(){
			this.bandleTitle = sessionStorage.getItem('bandleTitle');
		},
		submit(){
			var _this= this;
			mui.alert('评论成功', '提示', function() {
				_this.$router.go(-1);
			});
		}
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
.tedalist_title{
	height: 4.82rem;
	background: #f5f5f5;
	margin-top: 2.0rem;
	padding-bottom: 5.3rem;
	
}
.tedalist_title_view{
	width: 100%;
	height: 4.82rem;
	display: flex;
	align-items: center;
	background: #fff;
}
img.logo{
	width: 3.15rem;
	height: 3.15rem;
	border-radius: 50%;
	-webkit-border-radius: 50%;
	margin: 0 0.875rem;
}
.tedalist_title dt{
	font-size: 0.7rem;
	color: #161616;
	margin-bottom: 0.6rem;
}
.tedalist_title dd{
	font-size: 0.6rem;
	color: #737373;
}
.Gobandle{
	width: 100%;
	height: 2rem;
	position: fixed;
	bottom: 0;
	font-size: 0.75rem;
	color: #fff;
	background: #ff6600;
}

.comment{
	margin-top: 0.45rem;
	width: 100%;
}
.comment ul{
	width: 95%;
	margin: 0 auto;
}
.comment ul li{
	width: 100%;
	height: 3.9rem;
	border-bottom: 1px solid #eee;
}
.comment ul li:last-child{
	border: none;
}
.comment ul li span{
	display: inline-block;
	color: #4b4b4b;
	font-size: 0.65rem;
	margin: 1.0rem 0.65rem 0.5rem;
}
.comment li div{
	display: flex;
	align-items: center;
	margin-left: 1.25rem;
}
.comment li div i{
	width: 0.70rem;
	height: 0.70rem;
	background: url('../../assets/image/star1.png') no-repeat;
	background-size: cover;
	margin-left: 0.15rem;
}
.comment_text{
	width: 90%;
	margin: 0.4rem auto 0;
	font-size: 0.65rem;
	color: #4b4b4b;
}
.comment_text span{
	display: inline-block;
	height: 2.05rem;
	line-height: 2.05rem;
}
.comment_text textarea{
	width:100%;
	border:0.05rem solid #eee;
	height: 4.3rem;
	border-radius: 0.3rem;
	-webkit-border-radius: 0.3rem;
	font-size: 0.6rem;
	color: #9a9a9a;
	padding: 0.2rem 0 0 0.2rem;
}
</style>






