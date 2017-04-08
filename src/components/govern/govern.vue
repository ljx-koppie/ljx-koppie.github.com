<template>
	<div style="overflow-y: auto;">
		<header class="mui-bar mui-bar-nav mui-bar-header">
			<h1 class="mui-title">智能政务</h1>
			<div class="mui-pull-right right">
				<b class="logo"></b>
				<span>桐乡市</span>
			</div>
			<i @tap="bandle()"></i>
		</header>
		<!-- banner -->
		<div class="mui-content-div" style="margin-top: 2.0rem;">
			<div id="slider" class="mui-slider">
				<div class="mui-slider-group mui-slider-loop">
					
					<div class="mui-slider-item mui-slider-item-duplicate">
						<a href="#">
							<img src="../../assets/image/yuantiao.jpg">
							<div class="banner-title"></div>
							<span class="banner-title-span">手机城市-桐乡</span>
						</a>
					</div>
					<div class="mui-slider-item">
						<a href="#">
							<img src="../../assets/image/tongxiangs.png">
							<div class="banner-title"></div>
							<span class="banner-title-span">静静看世界</span>
						</a>
					</div>
					<div class="mui-slider-item">
						<a href="#">
							<img src="../../assets/image/cbd.jpg">
							<div class="banner-title"></div>
							<span class="banner-title-span">这是一段测试文字</span>
						</a>
					</div>
					<div class="mui-slider-item">
						<a href="#">
							<img src="../../assets/image/yuantiao.jpg">
							<div class="banner-title"></div>
							<span class="banner-title-span">手机城市-桐乡</span>
						</a>
					</div>
						
					<div class="mui-slider-item mui-slider-item-duplicate">
						<a href="#">
							<img src="../../assets/image/tongxiangs.png">
							<div class="banner-title"></div>
							<span class="banner-title-span">静静看世界</span>
						</a>
					</div>
				</div>
				<div class="mui-slider-indicator mui-text-right mui-slider-dian">
					<div class="mui-indicator mui-active"></div>
					<div class="mui-indicator"></div>
					<div class="mui-indicator"></div>
				</div>
			</div>
		</div>

		<!-- 代办事项提醒 -->
		<div class="Agency">
			<h5>
				<i></i>
				<p>提醒 : 您办理的 <span> "港澳通行证" </span> 业务于明日办理完成!</p>
			</h5>
		</div>
	

		<div class="white two">
			<!-- search -->
			<div class="search">
			 	<input type="text" name="" placeholder="请输入搜索关键字" v-model="searchtext">
			 	<i @click="search();"><img src="../../assets/image/search.png" alt=""></i>
			</div>	
			<div class="information">
	   			<div class="information_mui_content">
					<div style="margin-left: 5%;">
						<div class="mui-segmented-control information_tab">
							<a class="mui-control-item mui-active" href="#item1">个人业务</a>
							<a class="mui-control-item" href="#item2">法人业务</a>
						</div>
					</div>
					<div>
						<div id="item1" class="mui-control-content mui-active">
							<ul class="information_tab clearFix">
								<router-link tag="li" :to="'/vehicle/'+0">
									<p>
										<img src="../../assets/image/icon7.png" alt="">	
									</p>
									<span>机动车证件</span>
								</router-link>
								<router-link tag="li" :to="'/vehicle/'+1">
									<p>
										<img src="../../assets/image/icon2.png" alt="">	
									</p>
									<span>出入境</span>
								</router-link>
								<router-link tag="li" :to="'/vehicle/'+2">
									<p>
										<img src="../../assets/image/icon4.png" alt="">	
									</p>
									<span>户籍办理</span>
								</router-link>
								<li>
									<p>
										<img src="../../assets/image/icon5.png" alt="">	
									</p>
									<span>社会组织</span>
								</li>
								<li>
									<p>
										<img src="../../assets/image/icon6.png" alt="">	
									</p>
									<span>公安消防</span>
								</li>
								<li>
									<p>
										<img src="../../assets/image/icon3.png" alt="">	
									</p>
									<span>社会福利</span>
								</li>
								<li>
									<p>
										<img src="../../assets/image/icon1.png" alt="">	
									</p>
									<span>婚姻登记</span>
								</li>
								<li>
									<p>
										<img src="../../assets/image/icon8.png" alt="">	
									</p>
									<span>更多</span>
								</li>
							</ul>
						</div>
						<div id="item2" class="mui-control-content">
							<ul class="information_tab clearFix">
								<li>
									<p>
										<img src="../../assets/image/icon1.png" alt="">	
									</p>
									<span>房屋抵押(法)</span>
								</li>
								<li>
									<p>
										<img src="../../assets/image/icon2.png" alt="">	
									</p>
									<span>婚姻登记</span>
								</li>
								<li>
									<p>
										<img src="../../assets/image/icon3.png" alt="">	
									</p>
									<span>护照</span>
								</li>
								<li>
									<p>
										<img src="../../assets/image/icon4.png" alt="">	
									</p>
									<span>港澳通行证</span>
								</li>
								<li>
									<p>
										<img src="../../assets/image/icon5.png" alt="">	
									</p>
									<span>房屋抵押</span>
								</li>
								<li>
									<p>
										<img src="../../assets/image/icon6.png" alt="">	
									</p>
									<span>婚姻登记</span>
								</li>
								<li>
									<p>
										<img src="../../assets/image/icon7.png" alt="">	
									</p>
									<span>护照</span>
								</li>
								<li>
									<p>
										<img src="../../assets/image/icon8.png" alt="">	
									</p>
									<span>更多</span>
								</li>
							</ul>
						</div>
					</div>
   				</div>
   			</div>
		</div>
		
		<!-- 机器人 -->
		<div class="Robot">
			<div class="Robot_div">
				<div class="Robot_box">
					<div class="Robot_logo">
						<p><img src="../../assets/image/Robot.png" alt=""></p>
						<span>小政</span>
					</div>
					<div class="Robot_title">
						<p>Hi,我是手机城市智能机器人小政,<br />很高兴为您服务!</p>
						<a href="https://ikefu.baidu.com/wise/rntd"><i></i>我要提问</a>
					</div>
				</div>	
			</div>	
		</div>	
		
		<!-- 新闻资讯 -->
		<div class="white news">
			<h2><i></i>新闻资讯</h2>
			<div class="information_mui_content">
				<div>
					<div class="mui-segmented-control information_tab">
						<a class="mui-control-item mui-active" href="#news1">感兴趣的</a>
						<a class="mui-control-item" href="#news2">最新</a>
						<a class="mui-control-item" href="#news3">公告</a>
						<a class="mui-control-item" href="#news4">热门</a>
					</div>
				</div>
				<div>
					<div id="news1" class="mui-control-content mui-active">
						<ul class="news_list">
							<li v-for="item in inter">
								<div>
									<h5>{{item.title}}</h5>
									<p>{{item.here}}&nbsp;&nbsp;{{item.time}}</p>
								</div>
							</li>  
						</ul>
					</div>
					<div id="news2" class="mui-control-content">
						<ul class="news_list">
							<li v-for="item in inter1">
								<div>
									<h5>{{item.title}}</h5>
									<p>{{item.here}}&nbsp;&nbsp;{{item.time}}</p>
								</div>
							</li>  
						</ul>
					</div>
					<div id="news3" class="mui-control-content">
						<ul class="news_list">
							<li v-for="item in inter2">
								<div>
									<h5>{{item.title}}</h5>
									<p>{{item.here}}&nbsp;&nbsp;{{item.time}}</p>
								</div>
							</li>  
						</ul>
					</div>
					<div id="news4" class="mui-control-content">
						<ul class="news_list">
							<li v-for="item in inter3">
								<div>
									<h5>{{item.title}}</h5>
									<p>{{item.here}}&nbsp;&nbsp;{{item.time}}</p>
								</div>
							</li>  
						</ul>
					</div>
				</div> 
			</div>
		</div>
		<Footers></Footers>
	</div>
</template>
<script>
import Footers from '../public/FooterNav.vue'
	export default{
		data(){
			return{
				searchtext:'',
				inter:[
					{'title':'营造良好的税负环境和金融环境','here':'桐乡市政府','time':'2017.03.17'},
					{'title':'市人大常委会专题听取法院执行工作情况汇报','here':'桐乡市政府','time':'2017.03.19'},
					{'title':'嘉兴、桐乡两级政协联动开展深化“五水共治”专项民主监督活动 ','here':'桐乡市政府','time':'2017.03.20'},
					{'title':'只争朝夕，拼搏奋进确保全面完成政府工作年度任务','here':'桐乡市政府','time':'2017.03.22'}
				],
				inter1:[
					{'title':'换届选举唱好“三”字经','here':'桐乡市政府','time':'2017.03.17'},
					{'title':'高桥镇召开2017年全镇综合工作会议 ','here':'桐乡市政府','time':'2017.03.19'},
					{'title':'屠甸小城镇环境综合整治提速前行','here':'桐乡市政府','time':'2017.03.20'},
					{'title':'石门创客演绎别样精彩 ','here':'桐乡市政府','time':'2017.03.22'}
				],
				inter2:[
					{'title':'“抱团亮相”展濮院风采','here':'桐乡市政府','time':'2017.03.17'},
					{'title':'以槜李为媒，打出“文化特色”名片','here':'桐乡市政府','time':'2017.03.19'},
					{'title':'梧桐街道，跑出推进各项工作“新速度”','here':'桐乡市政府','time':'2017.03.20'},
					{'title':'为企业当好“管家”深耕平台建设','here':'桐乡市政府','time':'2017.03.22'}
				],
				inter3:[
					{'title':'关于举办崇福镇第二届“春风行动送岗位”人才招聘会的通知','here':'桐乡市政府','time':'2017.03.17'},
					{'title':'第十七届乌镇香市昨开幕','here':'桐乡市政府','time':'2017.03.19'},
					{'title':'古运河新容貌','here':'桐乡市政府','time':'2017.03.20'},
					{'title':'大麻镇卫计办奏响春节慰问三重奏','here':'桐乡市政府','time':'2017.03.22'}
				],
			}
		},
		mounted(){
			this.slider();
		},
		beforeRouteEnter(to,from,next){
			window.scrollTo(0, 0)
			next();
		},
		methods:{
			slider(){
				var slider = mui('#slider');
				slider.slider({
					interval:5000
				});
			},
			bandle(){
				this.$router.push({path:'/message/inprocess'});
			},
			//search
			search(){
				if(this.searchtext == ''){
					return false;
				}else{
					this.$router.push({path:'/subject'});
				}
			}
		},
		components:{
			Footers
		}
	}
</script>

<style scoped>
.mui-bar{
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #292929;
	height: 2rem;
}
.mui-bar i{
	width: 0.675rem;
	height: 0.775rem;
	background: url('../../assets/image/header.png') no-repeat;
	background-size: 100%;
	margin-right: 0.5rem;
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
.mui-bar h1{
	color: #fff;
	font-size: 0.8rem;
}
/*header*/
.mui-content-div{
	height: 5.575rem;
	margin-bottom: 1.95rem;
}
.mui-slider-item{
	height: 7.575rem;
	width: 100%;
	overflow: hidden;
}
.mui-content-div img{
	height: 7.575rem;
}
.banner-title{
	width: 100%;
	height: 2rem;
	background: #000;
	position: absolute;
	bottom: 0;
	opacity: .5;
}
.banner-title-span{
	position: absolute;
	bottom: 1rem;
	left: 1rem;
	color: #fff;
	font-size: 0.7rem;
}
.mui-slider-indicator .mui-indicator{
	width: 0.3rem;
	height: 0.3rem;
}
.mui-slider-indicator{
	right: 0.5rem;
	bottom: 0.5rem;
}
.mui-slider-indicator .mui-active.mui-indicator{
	width: 0.55rem;
	height: 0.3rem;
	background: #fff;
	border-radius: 0.175rem;
}
/*banner*/
.Agency{
	width: 100%;
	height: 1.85rem;	
	background: #f5f5f5;
	display: flex;
	justify-content: center;
	align-items: center;
}
.Agency h5{
	width: 100%;
	height: 1.4rem;
	line-height: 1.4rem;
	background: #fffed6;
	display: flex;
}
.Agency h5 i{
	width: 0.65rem;
	height: 0.65rem;
	background: url('../../assets/image/Agency.png') no-repeat;
	background-size: 100%;
	position: relative;
	top: 50%;
	margin: -0.325rem 0.425rem 0 0.9rem;
}
.Agency h5 p{
	font-size: 0.65rem;
	color:#595959;
}
.Agency h5 p span{
	color: #fc6a1b;
}
.two{
	padding-top: 0.35rem;
}
.search{
	width: 90%;
	height: 1.55rem;
	line-height: 1.55rem;
	border: 1px solid #eee;
	border-radius: 0.3rem;
	margin: 0rem auto 0.85rem;
	display: flex;
	overflow: hidden;
}
.search input{
	width: 90%;
	height: 1.5rem;
	font-size: 0.7rem;
	border: none;
}
.search i{
	display: inline-block;
	width: 1.65rem;
	height: 1rem;
	border-left: 1px solid #eee;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	top: 50%;
	margin-top: -0.5rem;
}
.search i img{
	width: 0.75rem;
	height: 0.75rem;
}
.information{
	width: 100%;
	height: 11rem;
	margin: 0 auto;
}
.mui-segmented-control{
	border: none;
	display: flex;
}
.information .mui-segmented-control .mui-control-item{
	width: 3rem;
	height: 1.15rem;
	background: #fff;
	font-size: 0.65rem;
	color: #b5b5b5;
	display: block;
	text-align: center;
	line-height: 1.15rem;
	margin-right: 0.6rem;
	border-left: none;
}
.information .mui-segmented-control .mui-control-item.mui-active{
	background: #fff;
	color: #000;
	border-bottom: 2px solid #fc921b;
}
.information_tab{
	width: 100%;
}
.information_tab li{
	float: left;
	width: 25%;
	text-align: center;
	margin-top: 0.7rem;
}
.information_tab li p{
	margin: 0 auto 0.4rem;
	width: 2.65rem;
	height: 2.65rem;
	background: #f7f7f7;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.information_tab li img{
	width: 1.05rem;
	height: 1.05rem;
}
.information_tab li span{
	font-size: 0.6rem;
	color: #595959;
}


.Robot{
	width: 100%;
	height: 5.6rem;
	margin: 0.3rem 0;
	font-size: 0.6rem;
	color: #737373;
	overflow: hidden;
	background: #f5f5f5;
	display: flex;
	align-items: center;
}
.Robot_div{
	width: 100%;
	height: 4.85rem;
	background: #fff;
}
.Robot_box{
	width: 90%;
	margin: 0.55rem auto;
	display: flex;
	align-items: center;
}
.Robot_logo{
	width: 2.85rem;
	text-align: center;
	margin-right: 0.85rem;
}
.Robot_logo p{
	width: 2.85rem;
	height: 2.85rem;
	background: #f3f5f9;
	border-radius: 50%;
	-webkit-border-radius:50%;
	display: flex;
	justify-content: center;
	align-items: center; 
}
.Robot_logo p img{
	width: 1.35rem;
	height: 1.875rem;
}
.Robot_title p{
	width: 13.025rem;
	height: 2.675rem;
	font-size: 0.65rem;
	background: url('../../assets/image/Robot_bg.png') no-repeat;
	background-size: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.Robot_title a{
	display: flex;
	align-items: center;
	margin-left: 9rem;
	color: #737373;
	margin-top: 0.3rem;
}
.Robot_title a i{
	display:inline-block;
	width: 0.675rem;
	height: 0.675rem;
	background: url('../../assets/image/Robot_t.png') no-repeat;
	background-size: 100%;
	margin-right: 0.2rem;
}

.news .mui-segmented-control .mui-control-item{
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	width: 2.4rem;
	height: 1rem;
	border: 2px solid #eee;
	border-radius: 1rem;
	-webkit-border-radius: 1rem;
	font-size: 0.6rem;
	color: #979797;
	margin-right: 0.2rem;
	margin-bottom: 0.75rem;
}
.news .mui-segmented-control .mui-control-item:first-child{
	width: 3.4rem;
	margin-left: 5%;
}
.news .mui-segmented-control .mui-control-item.mui-active{
	border: 2px solid #ebeeef;
	background: #ebeeef;
}
.news h2{
	height: 2rem;
	font-size: 0.7rem;
	margin-left: 5%;
	display: flex;
	align-items: center;
}
.news h2 i{
	display: inline-block;
	width: 0.1rem;
	height: 0.7rem;
	background: #03a9f4;
	margin-right: 0.3rem;
}
.news_list{
	padding-bottom: 2.6rem;
}
.news_list li{
	width: 100%;
	height: 3rem;
	border-bottom: 1px solid #eee;
}
.news_list li div{
	width: 90%;
	margin: 0 auto;
	height: 100%;
	overflow: hidden; 
    text-overflow: ellipsis; 
    white-space: nowrap; 
}
.news_list li h5{
	height: 40%;
	display: flex;
	align-items: center;
	font-size: 0.65rem;
	color: #696969;}
.news_list li p{
	height: 40%;
	display: flex;
	align-items: center;
	font-size: 0.65rem;
	color: #a9a9a9;
}
</style>
















