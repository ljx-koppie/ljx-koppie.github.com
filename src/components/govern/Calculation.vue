
<template>
	<div>
		<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back"></a>
		    <h1 class="mui-title">日程计算</h1>
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

		<div class="white calculation">
			<!-- search -->
			<div class="search">
			 	<span class="btn" data-options='{"type":"date","beginYear":2017,"endYear":2030}'>{{Time}}</span>
			 	<i @tap="submit()">提交</i>
			</div>	
			<ul v-show="Result">
				<li v-for="item in calcu">
					<i></i>
					<span>{{item.Time}}</span>
					<p>{{item.text}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			bandleTitle:'',
			Result:false,
			Time:'请选择开始办理时间',
			calcu:[
				{'Time':'2017.03.03','text':'请在出入境管理局网上 办事窗口提交申请'},
				{'Time':'2017.03.09','text':'请在出入境管理局网上 办事窗口选择办事时间 和公安局'},
				{'Time':'2017.03.12','text':'携带身份证户口本护照 等证件前往公安局办事 大厅办理'},
				{'Time':'2017.03.15','text':'请携带身份证前往公安局 办事大厅领取证件'}
			]
		}
	},
	mounted(){
		this.FocusTime();
	},
	methods:{
		submit(){
			if(this.Time == '请选择开始办理时间'){
				mui.alert('时间不能为空', '提示', function() {
					
				});
			}else{
				this.Result = true;
			}
		},
		FocusTime(){
			this.bandleTitle = sessionStorage.getItem('bandleTitle');
			var _this =this;
			var btns = mui('.btn');
			btns.each(function(i, btn) {
				btn.addEventListener('tap', function() {
					var optionsJson = this.getAttribute('data-options') || '{}';
					var options = JSON.parse(optionsJson);
					var id = this.getAttribute('id');
					var picker = new mui.DtPicker(options);
					picker.show(function(rs) {
						_this.Time = rs.text;
						picker.dispose();
					});
				}, false);
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

.calculation{
	width: 100%;
	overflow: hidden;
}
.search{
	width: 90%;
	height: 1.55rem;
	line-height: 1.55rem;
	border: 0.05rem solid #eee;
	border-radius: 0.3rem;
	margin: 0.375rem auto 1.175rem;
	display: flex;
	justify-content: space-between;
	overflow: hidden;
}
.search span{
	width: 85%;
	height: 1.5rem;
	font-size: 0.7rem;
	border: none;
	padding-left: 0.5rem;
}
.search i{
	display: inline-block;
	width: 2.65rem;
	height: 1rem;
	border-left: 1px solid #eee;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	top: 50%;
	margin-top: -0.5rem;
	font-size: 0.65rem;
	color: #161616;
}
.calculation ul{
	width: 85%;
	margin: 0 auto;
	border-left: 0.05rem solid #dcdcdc; 
	padding-top: 1.3rem;
}
.calculation li{
	width: 100%;
	height: 4.45rem;
	position: relative;
	color: #737373;
	padding-left: 0.95rem;
}
.calculation li i{
	width: 0.8rem;
	height: 0.8rem;
	background: url('../../assets/image/calcution.png') no-repeat;
	background-size: cover;
	position: absolute;
	top: 0rem;
	left: -0.4rem;
}
.calculation li span{
	font-size: 0.75rem;
}
.calculation li p{
	font-size: 0.65rem;
	color: #737373;
}
.calculation li:last-child i{
	background: url('../../assets/image/calcution1.png') no-repeat;
	background-size: cover;
}
.calculation li:last-child span{
	color: #fbaa58;
}
</style>









