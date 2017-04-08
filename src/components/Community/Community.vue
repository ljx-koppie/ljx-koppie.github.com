<template>
	<div style="overflow-y: auto;"> 
		<header class="mui-bar mui-bar-nav">
			<h1 class="mui-title">社区服务</h1>
			<div class="mui-pull-right right">
				<b class="logo"></b>
				<span>桐乡市</span>
			</div>
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

		<!-- tab -->
		<div class="com_tab">
			<div class="com_tab_view">
				<ul class="information_tab clearFix">
					<li>
						<p>
							<img src="../../assets/image/com_icon1.png" alt="">	
						</p>
						<span>生活服务</span>
					</li>
					<li>
						<p>
							<img src="../../assets/image/com_icon2.png" alt="">	
						</p>
						<span>餐饮美食</span>
					</li>
					<li>
						<p>
							<img src="../../assets/image/com_icon3.png" alt="">	
						</p>
						<span>旅游出行</span>
					</li>
					<li>
						<p>
							<img src="../../assets/image/com_icon4.png" alt="">	
						</p>
						<span>医疗卫生</span>
					</li>
					<li>
						<p>
							<img src="../../assets/image/com_icon5.png" alt="">	
						</p>
						<span>商务服务</span>
					</li>
					<li>
						<p>
							<img src="../../assets/image/com_icon6.png" alt="">	
						</p>
						<span>休闲娱乐</span>
					</li>
					<li>
						<p>
							<img src="../../assets/image/com_icon7.png" alt="">	
						</p>
						<span>桐乡黄页</span>
					</li>
					<li>
						<p>
							<img src="../../assets/image/com_icon8.png" alt="">	
						</p>
						<span>更多</span>
					</li>
				</ul>
			</div>
		</div>

		<!-- 政务之窗 -->
		<div class="gove_w">
			<h2><i></i>政务之窗</h2>
			<div id="Gallery" class="mui-slider">
				<div class="mui-slider-group">
					<div class="mui-slider-item">
						<ul class="gove_w_tab clearFix">
							<li>
								<div>
									<img src="../../assets/image/Gove1.png" alt="" style="margin-left:0.2rem;position:relative;z-index: -1;">
									<span>人民政府</span>
								</div>
							</li>
							<li>
								<div>
									<img src="../../assets/image/Gove2.png" alt="">
									<span>发改局</span>
								</div>
							</li>
							<li>
								<div>
									<img src="../../assets/image/Gove3.png" alt="">
									<span>经信局</span>
								</div>
							</li>
							<li>
								<div>
									<img src="../../assets/image/Gove4.png" alt="" style="width:3.8rem;">
									<span>科技局</span>
								</div>
							</li>
							<li>
								<div>
									<img src="../../assets/image/Gove5.png" alt="">
									<span>人民法院</span>
								</div>
							</li>
							<li>
								<div>
									<img src="../../assets/image/Gove6.png" alt="">
									<span>公安局</span>
								</div>
							</li>
						</ul>
					</div>
					<div class="mui-slider-item">
						<ul class="gove_w_tab clearFix">
							<li>
								<div>
									<img src="../../assets/image/Gove3.png" alt="" style="width:3.8rem;">
									<span>人民政府</span>
								</div>
							</li>
							<li>
								<div>
									<img src="../../assets/image/Gove4.png" alt="" style="width:3.8rem;">
									<span>科技局</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="mui-slider-indicator">
					<div class="mui-indicator mui-active"></div>
					<div class="mui-indicator"></div>
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
			return {
				
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
				var Gallslider = mui('#Gallery');
				Gallslider.slider();
				slider.slider({
					interval:5000
				});
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
.com_tab{
	background: #f5f5f5;
	margin: 2rem 0 0rem;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
}
.com_tab_view{
	background: #fff;
	padding-bottom: 0.5rem;
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
	border-radius: 50%;
	-webkit-border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.information_tab li img{
	width: 2.65rem;
	height: 2.65rem;
}
.information_tab li span{
	font-size: 0.6rem;
	color: #595959;
}
/*tab*/
.gove_w{
	background: #fff;
	padding-bottom: 2.4rem;
}
.gove_w h2{
	height: 2rem;
	font-size: 0.7rem;
	margin-left: 5%;
	display: flex;
	align-items: center;
}
.gove_w h2 i{
	display: inline-block;
	width: 0.1rem;
	height: 0.7rem;
	background: #03a9f4;
	margin-right: 0.3rem;
}
.gove_w_tab li{
	text-align: center;
	float: left;
	width: 33.33%;
	display: flex;
	justify-content: center;
	margin-bottom: 0.6rem;
}
.gove_w_tab li div{
	width:4.925rem;
	height: 3.45rem;
	border: 1px solid #f5f5f5;
	text-align: center;
	font-size: 0.6rem;
	color: #696969;
}
.gove_w_tab li img{
	display: block;
	width: 3.85rem;
	height: 1.5rem;
	margin: 0.575rem auto 0.2rem;
}
.gove_w .mui-slider{
	padding-bottom: 1.5rem;
}
.gove_w .mui-slider-indicator{
	bottom:0.6rem;
	right: 0;
}
.gove_w .mui-slider-indicator .mui-indicator{
	background: #ccc;
}
.gove_w .mui-slider-indicator .mui-active.mui-indicator{
	width: 0.9rem;
	background: #9a9a9a;
}
</style>







