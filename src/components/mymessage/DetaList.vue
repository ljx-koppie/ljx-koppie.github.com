
<template>
	<div class="qingd">
		<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back"></a>
		    <h1 class="mui-title">办理清单</h1>
		</header>

		<div class="tedalist_title">
			<div class="tedalist_list_view">
				<div class="user_logo">
					<img :src="userImg" class="logo" alt="">
				</div>
				<dl>
					<dt>{{Title}}</dt>
					<dd>{{Time}}</dd>
				</dl>
			</div>
		</div>
		<div class="tedalist_list">
			<ul class="qingdan">
				<li v-for="item in arr">
					<span>{{item.text}}</span>
					<i class="success" :stuta="item.stuta">完成</i>
				</li>
			</ul>
		</div>
		<div class="loading" v-show="loading">跳转中····</div>
	</div>
</template>

<script>
import car1 from '../../assets/image/car1.png'
import car2 from '../../assets/image/car2.png'
import car3 from '../../assets/image/car3.png'
import churu1 from '../../assets/image/churu1.png'
import churu2 from '../../assets/image/churu2.png'
import churu3 from '../../assets/image/churu3.png'
import perple from '../../assets/image/perple.png'
export default{
	data(){
		return {
			Title:'',
			Time:'',
			userImg:'',
			loading:false,
			successNum:[],
			arr:[],
			Detailed:[
				{
					"id":0,"Title":"补领机动车驾驶证","userImg":car1,"Time":"2017.03.12","List":[
						{"text":"持嘉兴市公安局车辆管理所核发的有效驾驶证，且符合公安部第123号令第五十四条规定的","stuta":1},
						{"text":"办理此项业务，需将您的违法行为处理完毕","stuta":1},
						{"text":"机动车驾驶证申请表(注：正面和反面需打印在同一张纸上)","stuta":1},
						{"text":"申请人身份证明原件和复印件","stuta":1},
						{"text":"申请人白底一寸照片2张","stuta":1},
						{"text":"委托代理的还应当提交代理人的身份证明原件及复印件和驾驶人与代理人共同签名的机动车驾驶证申请表","stuta":1},
						{"text":"如不是桐乡籍户口，申请人的暂住证证明原件和复印件","stuta":0}
					]
				},
				{
					"id":1,"Title":"机动车换领牌照","userImg":car2,"Time":"2017.03.13","List":[
						{"text":"持嘉兴市公安局车辆管理所核发的有效驾驶证，且符合公安部第123号令第五十四条规定的","stuta":1},
						{"text":"办理此项业务，需将您的违法行为处理完毕","stuta":1},
						{"text":"机动车驾驶证申请表(注：正面和反面需打印在同一张纸上)","stuta":1},
						{"text":"申请人身份证明原件和复印件","stuta":1},
						{"text":"申请人白底一寸照片2张","stuta":1},
						{"text":"委托代理的还应当提交代理人的身份证明原件及复印件和驾驶人与代理人共同签名的机动车驾驶证申请表","stuta":1},
						{"text":"如不是桐乡籍户口，申请人的暂住证证明原件和复印件","stuta":0}
					]
				},
				{
					"id":2,"Title":"注销机动车驾驶证","userImg":car3,"Time":"2017.03.14","List":[
						{"text":"机动车驾驶证申请表","stuta":1},
						{"text":"机动车驾驶人的身份证原件及复印件","stuta":1},
						{"text":"机动车驾驶证","stuta":1},
						{"text":"申请人一寸白底照片1张","stuta":1},
						{"text":"委托代理的还应当提交代理人的身份证明原件及复印件和驾驶人与代理人共同签名的机动车驾驶证申请表机动车驾驶证申请表","stuta":0}
					]
				},
				{
					"id":3,"Title":"台湾居民口岸签注网上申请","userImg":churu1,"Time":"2017.03.15","List":[
						{"text":"事先未办妥入境证件或签注直抵口岸的台湾居民","stuta":1},
						{"text":"台湾居民来往大陆通行证、签注（口岸）申请表","stuta":1},
						{"text":"台湾居民身份证","stuta":1},
						{"text":"台湾居民来往大陆通行证","stuta":1},
						{"text":"近期本人两寸彩色免冠照片两张","stuta":0}
					]
				},
				{
					"id":4,"Title":"往来港澳通行证","userImg":churu2,"Time":"2017.03.16","List":[
						{"text":"具有浙江省常住户口的居民（法律规定的不批准出境对象除外）","stuta":1},
						{"text":"本人居民身份证；在居民身份证领取、换领、补领期间，可提交临时居民身份证","stuta":1},
						{"text":"已登记备案的国家工作人员须提交人事主管部门出具的同意办理内地居民往来港澳通行证（签注）的函（浙江省常住户口居民）","stuta":1},
						{"text":"不满十六周岁的公民，已申领居民身份证的，应提交居民身份证，未申领居民身份证的，应提交户口簿；须由监护人或者监护人委托他人陪同申请，监护人应当提交监护证明（《出生医学证明》、户口簿或者监护关系公证书）、居民身份证，监护人委托他人陪同的，还须提交委托书以及陪同人的居民身份证","stuta":1},
						{"text":"本省非我市常住户口的，还应提交公安机关出具的居住6个月（含）以上的居住证或临时居住证","stuta":1},
						{"text":"已持有《往来港澳通行证》的，请一并提交","stuta":0}
					]
				},
				{
					"id":5,"Title":"护照","userImg":churu3,"Time":"2017.03.17","List":[
						{"text":"具有浙江省常住户口的居民（法律规定的不批准出境对象除外）","stuta":1},
						{"text":"预约日期适逢国家法定假日除外","stuta":1},
						{"text":"申请人为需办理证件的人员，网上预约表格由申请人或其监护人填写","stuta":1},
						{"text":"工作日时间提供预约服务，须经出入境管理部门审核确认，申请人未在预约的时间前来办理，本次预约自动作废，如需办理须再次预约","stuta":1},
						{"text":"预约申请成功后工作人员会与您联系","stuta":1},
						{"text":"户口在嘉兴市本级，且因长期工作或居住在外省、市确需前来办理的，须出示单位工作证明或外省、市的居住证明","stuta":1},
						{"text":"具有浙江省常住户口的居民身份证","stuta":1},
						{"text":"已登记备案的国家工作人员须提交人事主管部门出具的同意办理护照的函","stuta":1},
						{"text":"不满十六周岁的公民，已申领居民身份证的，应提交居民身份证，未申领居民身份证的，应提交户口簿；须由监护人或者监护人委托他人陪同申请，监护人应当提交监护证明（《出生医学证明》、户口簿或者监护关系公证书）、居民身份证，监护人委托他人陪同的，还须提交委托书以及陪同人的居民身份证","stuta":1},
						{"text":"本省非我市常住户口的，还应提交公安机关出具的居住6个月（含）以上的居住证或临时居住证","stuta":1},
						{"text":"浙江省外户口居民：我市户籍人员的非本省户籍配偶、未满16周岁的子女，可异地办理普通护照。提交材料：申请人及我市户籍人员双方的户口簿、居民身份证以及亲属关系的证明材料","stuta":1},
						{"text":"在我市就业和就学的非本省户籍人员及其配偶、未满16周岁的子女，可异地办理普通护照。提交材料：申请人及在我市就业和就学的非本省户籍人员双方的户口簿、居民身份证。就业人员还需提交社保部门出具的在就业地连续一年以上缴纳社会保险的证明；就学人员还需提交就读院校出具的在学证明；上述人员的配偶、子女还需提交公安机关出具的居住6个月（含）以上的居住证或临时居住证以及亲属关系证明","stuta":1},
						{"text":"在我市居住6个月（含）以上的60周岁（含）以上非本省户籍老人，可异地办理普通护照。提交材料：本人户口簿、居民身份证以及公安机关出具的居住6个月（含）以上的居住证或临时居住证","stuta":1},
						{"text":"在我市居住6个月（含）以上的非本省户籍人员，可异地换发、补发普通护照。提交材料：本人户口薄、居民身份证以及公安机关出具的居住6个月（含）以上的居住证或临时居住证","stuta":0}
					]
				},
				{
					"id":6,"Title":"新生儿户口预申报","userImg":perple,"Time":"2017.03.19","List":[
						{"text":"未上户口新生儿","stuta":1},
						{"text":"父母双方身份证","stuta":1},
						{"text":"结婚证","stuta":1},
						{"text":"新生儿医学证明（出生证）","stuta":1},
						{"text":"a.	计划生育证明（准生证）","stuta":0}
					]
				},
			]
		}
	},
	mounted(){	
		this.fetchData(this.$route.params.id);
	},
	updated(){
		this.getAttr();
	},
	methods:{
		//同步政务办理的具体业务数据
		fetchData(id){
			var _this = this;
			this.Title = this.Detailed[id].Title;
			this.Time = this.Detailed[id].Time;
			this.userImg = this.Detailed[id].userImg;
			this.arr = this.Detailed[id].List;
			this.arr.id = this.Detailed[id].id;
		},
		//办理清单，点击变为已完成
		getAttr(){
			var _this = this;
			var successArr =JSON.parse(sessionStorage.getItem('successArr')) || [];
			$('.qingdan').on('tap','i',function(event){
				var Num = $('.success').length;
				this.innerHTML = '已完成';
				this.className='stuta1';
				console.log(Num);
				if(Num == 1){
					_this.loading = true ;
					//点击清单 当所有准备材料都变成已完成，跳转至 办理中，并且业务从代办理到办理中
					const ID = _this.arr.id;
					var business = JSON.parse(sessionStorage.getItem('Business'));
					for(var i=0; i<business.length ;i++){
						if(ID == business[i].id){
							successArr.unshift(business[i]);
							business.splice(i,1);
							break;
						}
					}
					sessionStorage.setItem('successArr',JSON.stringify(successArr));
					sessionStorage.setItem('Business',JSON.stringify(business));
					setTimeout(function(){
						_this.$router.push({path:'/message/inprocess'});
					},1000)	
				}
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
	display: flex;
}
.tedalist_list_view{
	width: 100%;
	height: 4.82rem;
	background: #fff;
	display: flex;
	align-items: center;
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
.tedalist_list{
	width: 100%;
	background: #fff;
	margin-top: 0.4rem;
}
.tedalist_list ul{
	width: 95%;
	margin: 0 auto;
}
.tedalist_list li{
	width: 100%;
	min-height: 2.25rem;
	border-bottom: 1px solid #eee;
	display: flex;
	align-items: center;
	position: relative;
}
.tedalist_list li span{
	width: 75%;
	font-size: 0.6rem;
	color: #4b4b4b;
	margin-left: 0.65rem;
}
.tedalist_list li i{
	text-align: center;
	line-height: 0.95rem;
	position: absolute;
	right: 0rem;
	top: 50%;
	margin-top: -0.5rem;
	width: 2.4rem;
	height: 1.0rem;
	border: 1px solid #fdab50;
	font-size: 0.5rem;
	color: #fdab50;
	border-radius: 0.2rem;
	-webkit-border-radius: 0.2rem;
}
.tedalist_list li i.stuta1{
	color: #a1a1a1;
	border: 1px solid #a1a1a1;
}
.loading{
	width: 5rem;
	height: 3rem;
	background: #000;
	opacity: 0.7;
	border-radius: 0.4rem;
	text-align: center;
	line-height: 3rem;
	font-size: 0.7rem;
	color: #fff;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;
}
</style>







