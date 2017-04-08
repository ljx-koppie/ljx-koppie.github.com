<template>
	<div>
		<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back"></a>
		    <h1 class="mui-title">业务分类</h1>
		</header>

		<div class="subject_list white">
			<ul class="ceshi">
				<li v-for="(item,index) in arr"> 
					<router-link :to="'/bandle/'+ceshi+'/'+item.id">
						<img :src="item.userImg" alt="">
						<dl>
							<dt class="title">{{item.Title}}</dt>
							<dd>预计办理:{{item.Data}}个工作日</dd>
						</dl>
					</router-link>
				</li>
			</ul>
		</div>
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
			Text:'',
			arr:[],
			ceshi:[],
			subjectList:[
				{
					"type":0,"classification":[
						{'id':0,'userImg':car1,'Title':'补领机动车驾驶证','Data':'6','Time':'2017.03.13'},
						{'id':1,'userImg':car2,'Title':'机动车换领牌照','Data':'10','Time':'2017.03.20'},
						{'id':2,'userImg':car3,'Title':'注销机动车驾驶证','Data':'7','Time':'2017.03.22'}
					]
				},
				{
					"type":1,"classification":[
						{'id':0,'userImg':churu1,'Title':'台湾居民口岸签注网上申请','Data':'1','Time':'2017.03.12'},
						{'id':1,'userImg':churu2,'Title':'往来港澳通行证','Data':'1','Time':'2017.03.03'},
						{'id':2,'userImg':churu3,'Title':'护照','Data':'20','Time':'2017.03.12'}
					]
				},
				{
					"type":2,"classification":[
						{'id':0,'userImg':perple,'Title':'新生儿户口预申报','Data':'1','Time':'2017.03.21'}
					]
				}
			],

		}
	},
	mounted(){
		this.fetchData(this.$route.params.type);
	},
	methods:{
		fetchData(type){
			this.arr = this.subjectList[type].classification;
			this.ceshi = this.subjectList[type].type;
		}
	},
	beforeRouteLeave(to,from,next){
		next();
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
.subject_list{
	margin-top: 2.0rem;
	width: 100%;
}
.subject_list ul{
	width: 90%;
	margin: 0 auto;
}
.subject_list li{
	width: 100%;
	height: 4.55rem;
	border-bottom: 0.05rem solid #f6f6f6;
	
}
.subject_list li a{
	height: 4.55rem;
	display: flex;
	align-items: center;
}
.subject_list li dt{
	color: #161616;
	font-size: 0.75rem;
	margin-bottom: 0.5rem;
}
.subject_list li dd{
	font-size: 0.6rem;
	color: #737373;
}
.subject_list li img{
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	-webkit-border-radius: 50%;
	margin: 0 0.6rem;
}
</style>









 