
<template>
	<div>
		<ul class="mui-table-view bandle_table_view">
			<li v-for="item in bandle">
				<div class="user_logo">
					<img :src="item.userImg" class="logo" alt="">
				</div>
				<dl>
					<dt>{{item.Title}}</dt>
					<dd>{{item.Time}}</dd>
				</dl>
				<div class="prompt" :class="'Data'+item.Data" >
					<i></i>
					<span>{{item.Data}}天后</span>
				</div>
			</li>
			<li>
				<div class="user_logo">
					<img src="../../assets/image/my3.png" class="logo" alt="">
				</div>
				<dl>
					<dt>婚姻登记</dt>
					<dd>2017.03.22</dd>
				</dl>
				<div class="prompt">
					<i></i>
					<span>2天后</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import my2 from '../../assets/image/my2.png'
import my3 from '../../assets/image/my3.png'
import my4 from '../../assets/image/my4.png'
export default{
	data(){
		return {
			bandle:[]
		}
	},
	mounted(){
		this.bandles();
	},
	methods:{
		bandles(){
			this.bandle = JSON.parse(sessionStorage.getItem('successArr'));
		}
	}
}
</script>
<style scoped>
.Data1 span{
	color: red;
}
.bandle_table_view .Data1 i{
	margin: 0 auto;
	display: block;
	width: 0.675rem;
	height: 0.775rem;
	background: url('../../assets/image/porpmt1.png') no-repeat;
	background-size: cover;
}
</style>









