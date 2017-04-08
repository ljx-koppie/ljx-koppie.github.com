
<template>
	<div>
		<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back"></a>
		    <h1 class="mui-title">业务办理</h1>
		</header>

		<div class="tedalist_title">
			<div class="user_logo">
				<img :src="arr.userImg"  class="logo" alt="">
			</div>
			<dl>
				<dt>{{arr.title}}</dt>
				<dd>
					<span>服务质量:</span>
					<div>
						<i></i>
						<i></i>
						<i></i>
						<i></i>
						<i></i>
					</div>
				</dd>
			</dl>
			<div class="Calculation">
				<router-link to="/calculation">
					<span>日程计算</span>
				</router-link>
				<i>在线办理</i>
			</div>
		</div>
		<div>
			<div class="tech">
				<div class="white">
					<ul class="clearFix" id="tech_tab">
						<li class="active tab_first">办事流程</li>
						<li class="tab_two">申请条件</li>
						<li class="tab_three">所需材料</li>
						<li class="tab_four">电话地址</li>
					</ul>
				</div>
			</div>
			<div class="tech_con" style="overflow-y: auto; height:24rem; position:relative;">
				<div class="scrollTech">
					<ul>
						<li class="backColor first">
							<div class="white">
								<h4>
									<i></i>
									<span>办理流程</span>
								</h4>
								<!-- <ol>
									<li v-for="item in tech">
										<span>{{item}}</span>
										<i></i>
									</li>
								</ol> -->
								<img :src="arr.LCImg" alt="" class="liucheng">
								<p class="number">{{arr.lcText}}</p>
							</div>
						</li>
						<li class="backColor two">
							<div class="white">
								<h4>
									<i></i>
									<span>申请条件</span>
								</h4>
								<p>{{arr.tiaojian}}</p>
							</div>
						</li>
						<li class="backColor three">
							<div class="white">
								<h4>
									<i></i>
									<span>所需材料</span>
								</h4>
								<p>{{arr.cailiao}}</p>
							</div>
						</li>
						<li class="backColor four">
							<div class="white">
								<h4>
								<i></i>
								<span>电话地址</span>
								</h4>
								<p>{{arr.tel}}</p>
								<p>{{arr.dizhi}}</p>	
							</div>
						</li>
						<li class="backColor five">
							<div class="white">
								<h4>
								<i></i>
								<span>办理时长</span>
								</h4>
								<p>{{arr.time}}</p>
							</div>
						</li>
					</ul>
					<div class="comment white">
						<h4>
							<i></i>
							<span>用户评论</span>
						</h4>
						<ul>
							<li v-for="item in comment">
								<img :src="item.userImg"  alt="">
								<div class="comment_con">
									<dl>
										<dt>{{item.userName}}</dt>
										<dd>{{item.text}}</dd>
									</dl>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<button class="Gobandle" @click="guide()">我要办理</button>
	</div>
</template>

<script>
import my1 from '../../assets/image/my1.png'
import my2 from '../../assets/image/my2.png'
import car1 from '../../assets/image/car1.png'
import car2 from '../../assets/image/car2.png'
import car3 from '../../assets/image/car3.png'
import carL1 from '../../assets/image/carL1.png'
import carL2 from '../../assets/image/carL2.png'
import carL3 from '../../assets/image/carL3.png'
import carL4 from '../../assets/image/carL4.png'

import churu1 from '../../assets/image/churu1.png'
import churu2 from '../../assets/image/churu2.png'
import churu3 from '../../assets/image/churu3.png'

import perple from '../../assets/image/perple.png'
import perpleL from '../../assets/image/perpleL.png'
export default{
	data(){
		return {
			bandleTitle:'',
			Data:'',
			Time:'',
			userImg:'',
			id:'',
			arr:[],
			bandleText:[
				{
					"type":0,"classification":[
						{
					    "id":0,
					    "title":"补领机动车驾驶证",
					    "Data":"1",
					    "Time":"2017.03.13",
					    "LCImg":carL1,
					    "userImg":car1,
					    "lcText":"1.申请（窗口或者网上预约); 2.受理; 3.发证; 4.办结",
					    "tiaojian":"服务对象：个人。1、持嘉兴市公安局车辆管理所核发的有效驾驶证，且符合公安部第123号令第五十四条规定的；2、办理此项业务，需将您的违法行为处理完毕.",
					    "cailiao":"1.机动车驾驶证申请表(注：正面和反面需打印在同一张纸上)；2. 申请人身份证明原件和复印件；3.申请人白底一寸照片2张；4.委托代理的还应当提交代理人的身份证明原件及复印件和驾驶人与代理人共同签名的机动车驾驶证申请表；5.如不是桐乡籍户口，申请人的暂住证证明原件和复印件。",
					    "tel":"0573-88113502",
					    "dizhi":"桐乡市梧桐街道茅盾东路172号一舟车城后面",
					    "time":"1个工作日"
					  },
					  {
					    "id":1,
					    "title":"机动车换领牌照",
					    "Data":"4",
					    "Time":"2017.03.12",
					    "LCImg":carL2,
					    "userImg":car2,
					    "lcText":"1.申请（窗口或者网上预约);2.受理;3.发证;4.办结",
					    "tiaojian":"服务对象：个人",
					    "cailiao":"1.机动车驾驶证申请表(注：正面和反面需打印在同一张纸上)；2. 申请人身份证明原件和复印件；3.申请人白底一寸照片2张；4.委托代理的还应当提交代理人的身份证明原件及复印件和驾驶人与代理人共同签名的机动车驾驶证申请表；5.如不是桐乡籍户口，申请人的暂住证证明原件和复印件。",
					    "tel":"0573-88113502",
					    "dizhi":"桐乡市梧桐街道茅盾东路172号一舟车城后面",
					    "time":"4个工作日"
					  },
					  {
					    "id":2,
					    "title":"注销机动车驾驶证",
					    "Data":"10",
					    "Time":"2017.03.23",
					    "LCImg":carL3,
					    "userImg":car3,
					    "lcText":"1.申请；2.受理；3.审查：对提交的凭证进行审核，是否符合规定；4.办结：制作发放证书。",
					    "tiaojian":"服务对象：个人。持嘉兴市公安局车辆管理所核发的有效驾驶证。",
					    "cailiao":"1、机动车驾驶证申请表;2、机动车驾驶人的身份证原件及复印件 ;3、机动车驾驶证; 4、申请人一寸白底照片1张;5、委托代理的还应当提交交代理人的身份证明原件及复印件和驾驶人与代理人共同签名的机动车驾驶证申请表",
					    "tel":"0573-88113502",
					    "dizhi":"桐乡市梧桐街道茅盾东路172号一舟车城后面",
					    "time":"2个工作日"
					  }
					]
				},
				{
					"type":1,"classification":[
						{
					    "id":3,
					    "title":"台湾居民口岸签注网上申请",
					     "Data":"5",
					    "Time":"2017.03.19",
					    "LCImg":carL3,
					    "userImg":churu1,
					    "lcText":"1. 申请；2.受理；3.审查：对提交的凭证进行审核，是否符合规定；4.办结：制作发放证书。",
					    "tiaojian":"服务对象：台湾居民。1、事先未办妥入境证件或签注直抵口岸的台湾居民。",
					    "cailiao":"1、台湾居民来往大陆通行证、签注（口岸）申请表；2、台湾居民身份证；3、台湾居民来往大陆通行证；4、近期本人两寸彩色免冠照片两张。",
					    "tel":"0571-87286318",
					    "dizhi":"桐乡市振东新区利民路",
					    "time":"10个工作日"
					  },
					  {
					    "id":4,
					    "title":"往来港澳通行证",
					     "Data":"7",
					    "Time":"2017.03.04",
					    "LCImg":carL3,
					    "userImg":churu2,
					    "lcText":"1.申请（窗口或者网上预约);2.受理;3.发证;4.办结",
					    "tiaojian":"服务对象：个人。具有浙江省常住户口的居民（法律规定的不批准出境对象除外）",
					    "cailiao":"1、本人居民身份证；在居民身份证领取、换领、补领期间，可提交临时居民身份证；2、已登记备案的国家工作人员须提交人事主管部门出具的同意办理内地居民往来港澳通行证（签注）的函（浙江省常住户口居民）；3、不满十六周岁的公民，已申领居民身份证的，应提交居民身份证，未申领居民身份证的，应提交户口簿；须由监护人或者监护人委托他人陪同申请，监护人应当提交监护证明（《出生医学证明》、户口簿或者监护关系公证书）、居民身份证，监护人委托他人陪同的，还须提交委托书以及陪同人的居民身份证；4、本省非我市常住户口的，还应提交公安机关出具的居住6个月（含）以上的居住证或临时居住证；5、已持有《往来港澳通行证》的，请一并提交",
					   "tel":"0571-87286318",
					    "dizhi":"桐乡市振东新区利民路",
					    "time":"1个工作日"
					  },
					  {
					    "id":5,
					    "title":"护照",
					     "Data":"10",
					    "Time":"2017.03.14",
					    "LCImg":carL4,
					    "userImg":churu3,
					    "lcText":"1.申请：网上填写申请表（提前5个工作日）；2.审核：出入境管理局进行网上初审；3.预约受理：对提交的凭证进行审核，是否符合规定；4.预约成功：电话告知预约时间；5.到出入境管理局申请、缴费；6受理审核：对上交的材料进行实质审核； 7发证。",
					    "tiaojian":"服务对象：个人。1、具有浙江省常住户口的居民（法律规定的不批准出境对象除外）2、预约日期适逢国家法定假日除外；3、申请人为需办理证件的人员，网上预约表格由申请人或其监护人填写；4、工作日时间提供预约服务，须经出入境管理部门审核确认，申请人未在预约的时间前来办理，本次预约自动作废，如需办理须再次预约；5、预约申请成功后工作人员会与您联系；6、户口在嘉兴市本级，且因长期工作或居住在外省、市确需前来办理的，须出示单位工作证明或外省、市的居住证明；",
					    "cailiao":"1、具有浙江省常住户口的居民身份证 2、	已登记备案的国家工作人员须提交人事主管部门出具的同意办理护照的函； 3、	不满十六周岁的公民，已申领居民身份证的，应提交居民身份证，未申领居民身份证的，应提交户口簿；须由监护人或者监护人委托他人陪同申请，监护人应当提交监护证明（《出生医学证明》、户口簿或者监护关系公证书）、居民身份证，监护人委托他人陪同的，还须提交委托书以及陪同人的居民身份证； 4、本省非我市常住户口的，还应提交公安机关出具的居住6个月（含）以上的居住证或临时居住证；5、浙江省外户口居民：我市户籍人员的非本省户籍配偶、未满16周岁的子女，可异地办理普通护照。提交",
					    "tel":"0571-87286318",
					    "dizhi":"桐乡市振东新区利民路",
					    "time":"1个工作日"
					  }
					]
				},
				{
					"type":2,"classification":[
						{
					    "id":6,
					    "title":"新生儿户口预申报",
					     "Data":"2",
					    "Time":"2017.03.12",
					    "LCImg":perpleL,
					    "userImg":perple,
					    "lcText":"1.申请；2.受理：民警核实资料真实，给予办理并告知情人；3.批准；4.办结；",
					    "tiaojian":"服务对象：个人。未上户口新生儿",
					    "cailiao":"1、父母双方身份证 ;2、结婚证 ;3、新生儿医学证明（出生证）;4、计划生育证明（准生证）",
					    "tel":"0573-88102024  0573-88112025",
					    "dizhi":"户口所在地的派出所户籍窗口",
					    "time":"15个工作日"
					  }
					]
				}
			],
			comment:[
				{'userName':'张三','text':'这是一段测试文字，一段很长很长的测试文字。反馈很快，办理流程也很详细','userImg':my1},
				{'userName':'岳小乐','text':'一款很好的应用,为用户解决了很多不必要的麻烦。所有的流程很清晰.','userImg':my2}
			],
			Prompt_one:'是否为本地户口?',
			Prompt_two:'是否年满18周岁?',
			scrolled:true
		}
	},
	mounted(){
		this.tab();
		this.handleScroll();
		this.fetchData(this.$route.params.type,this.$route.params.id);
	},
	methods:{
		// 通过type,id 来打开业务办理的详情页
		fetchData(type,id){
			this.arr = this.bandleText[type].classification[id];
			this.id = this.arr.id;
			this.bandleTitle = this.arr.title;
			this.Data = this.arr.Data;
			this.Time = this.arr.Time;
			this.userImg = this.arr.userImg;
			sessionStorage.setItem('bandleTitle',this.bandleTitle);
		},
		//回复评论
		// Reply(){
		// 	var btnArray = ['取消', '确定'];
		// 	mui.prompt('请输入你的回复：', '效率高', '手机城市', btnArray, function(e) {
		// 		if(e.index == 1) {
		// 			mui.alert('回复成功', '提示', function() {
						
		// 			});
		// 		} else {
		// 			console.log('您取消了啦');
		// 		}
		// 	})
		// },
		//办事引导
		guide(){
			var Business =JSON.parse(sessionStorage.getItem('Business')) || [];
			var bussionCon = {
				"id":this.id,
				"Title":this.bandleTitle,
				"Time":this.Time,
				"Data":this.Data,
				"userImg":this.userImg
			};
			var _this =this;
			var btnArray = ['是', '否'];
			mui.confirm(_this.Prompt_one, '办事引导', btnArray, function(e) {
				if(e.index==0){
					mui.confirm(_this.Prompt_two, '办事引导',btnArray,function(e){
						if(e.index == 0){
							// 将业务数据共享到 ‘我的’。代办理中。。 
							Business.push(bussionCon);
							var business = JSON.stringify(Business);
							sessionStorage.setItem('Business',business);

							_this.$router.push({path:'/message'});
						}else{
							mui.alert('您不具备办理此业务的条件', '对不起', function() {
						
							});
						}
					});
				}else{
					mui.alert('您不具备办理此业务的条件', '对不起', function() {
						
					});
				}
			})
		},
		//tab class 问题
		tab(){ 
			var oLi = document.getElementById('tech_tab').querySelectorAll('li');
			for(var i=0; i<oLi.length;i++){
				oLi[i].addEventListener('tap',function(){
					for(var i=0; i<oLi.length;i++){
						oLi[i].classList.remove('active')
					}
					this.classList.add('active');
				});
			}
		},
		handleScroll(){
			var First = $('.first').height();
			var Two = $('.two').height();
			var Three = $('.three').height();
			var ScrollTop = $('.scrollTech');
			$('.tab_first').on('tap',function(){
				ScrollTop.animate({'top':0},300)
			});
			$('.tab_two').on('tap',function(){
				ScrollTop.animate({'top':-(First+20)},300)
			});
			$('.tab_three').on('tap',function(){
				ScrollTop.animate({'top':-(First+Two+20)},300)
			});
			$('.tab_four').on('tap',function(){
				ScrollTop.animate({'top':-(First+Two+Three+20)},300)
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
	height: 5.0rem;
	background: #fff;
	margin-top: 2.0rem;
	display: flex;
	align-items: center;
	position: relative;
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
	margin-bottom: 0.8rem;
}
.tedalist_title dd{
	font-size: 0.6rem;
	color: #737373;
	display: flex;
}
.tedalist_title dd span{
	margin-right: 0.35rem;
}
.tedalist_title dd div{
	display: flex;
	align-items: center;
}
.tedalist_title dd div i{
	width: 0.6rem;
	height: 0.6rem;
	background: url('../../assets/image/star1.png') no-repeat;
	background-size: cover;
	margin-left: 0.15rem;
}
.Calculation{
	position: absolute;
	width: 3.0rem;
	text-align: center;
	right: 1rem;
	top: 50%;
	margin-top:-1.5rem;
}
.Calculation span{
	display: block;
	color: #324173;
	font-size: 0.65rem;
	margin-bottom: 0.8rem;
}
.Calculation i{
	display: inline-block;
	text-align: center;
	line-height: 0.95rem;
	width: 3.4rem;
	height: 1.0rem;
	border: 1px solid #fdab50;
	font-size: 0.5rem;
	color: #fdab50;
	border-radius: 0.2rem;
	-webkit-border-radius: 0.2rem;
}
.tech{
	background: #f5f5f5;
	padding-bottom: 0.5rem;
}
.tech li{
	width: 25%;
	height: 1.8rem;
	line-height: 1.8rem;
	float: left;
	text-align: center;
	font-size: 0.65rem;
	color: #2d2d2d;
}
.tech li.active{
	border-bottom: 0.15rem solid #ff9501;
}
.tech_con li.backColor{
	width: 100%;
	height: 100%;
	background: #f5f5f5;
	padding-bottom: 0.5rem;
}
.tech_con h4,.comment h4{
	height: 1.7rem;
	display: flex;
	align-items: center;
	font-size: 0.65rem;
	color: #2d2d2d;
}
.tech_con h4 i,.comment h4 i{
	width: 0.1rem;
	height: 0.6rem;
	background: #737373;
	margin: 0 0.4rem 0 0.9rem;
}
.tech_con p{
	width: 90%;
	margin:  0 auto;
	font-size: 0.65rem;
	color: #595858;
	line-height: 1.0rem;
	padding-bottom: 0.5rem;
}
.tech_con ol li{
	margin: 0 auto 1.2rem;
	width: 9.05rem;
	height: 1.425rem;
	border: 0.05rem solid #21abe3;
	border-radius: 0.2rem;
	-webkit-border-radius: 0.2rem;
	font-size: 0.65rem;
	color: #21abe3;
	text-align: center;
	line-height: 1.425rem;
	position: relative;
}
.tech_con ol li i{
	position: absolute;
	width:0.65rem;
	height: 0.6rem;
	background: url('../../assets/image/down.png') no-repeat;
	background-size: cover;
	left: 50%;
	margin-left: -0.325rem;
	top: 1.7rem;
}
.tech_con ol li:last-child i{
	background: none;
}
.scrollTech{
	position: absolute;
	/*top: -200px;*/
}
.comment{
	padding-bottom: 2rem;
}
.comment ul{
	width: 90%;
	margin: 0 auto;
}
.comment ul li{
	height: 5.5rem;
	width: 100%;
	border-bottom: 0.05rem solid #f4f4f4;
	display: flex;
}
.comment ul li img{
	/*width: 1.85rem;*/
	height: 1.85rem;
	border-radius: 50%;
	-webkit-border-radius: 50%;
	margin-right: 0.6rem;
	margin-top: 0.7rem;
}
.comment ul li dl{
	margin-top: 0.7rem;
}
.comment ul li dt{
	font-size: 0.7rem;
	color: #161616;
}
.comment ul li dd{
	font-size: 0.6rem;
	color: #595858;
	line-height: 1rem;
}
.comment_con{
	position: relative;
}
.comment_pinl{
	position: absolute;
	right: 0rem;
	bottom: 0.5rem;
	width: 2.1rem;
	height: 1.0rem;
	text-align: center;
	line-height: 1.0rem;
	border: 1px solid #fdab50;
	font-size: 0.5rem;
	color: #fdab50;
	border-radius: 0.2rem;
	-webkit-border-radius: 0.2rem;
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
.mui-popup-button{
	color: red;
}
.liucheng{
	width: 14.15rem;
	height: 12.35rem;
	display: block;
	margin: 0 auto 1rem;
}
</style>











