<template>
	<div style="height: 100%;">
		<ul class="mui-table-view bandle_table_view">
			<li v-for="item in bandle">
				<div class="user_logo">
					<img :src="item.userImg" class="logo" alt="">
				</div>
				<dl>
					<dt>{{item.Title}}</dt>
					<dd>{{item.Time}}</dd>
				</dl>
				<router-link to="/comment" tag="div" class="detaList">
					<span>评价</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import my1 from '../../assets/image/my1.png'
import my3 from '../../assets/image/my3.png'
import my4 from '../../assets/image/my4.png'
export default{
	data(){
		return {
			bandle:[
				{
					'userImg':my1,'Title':'护照办理','Time':'2017.03.20 16:00','Data':'10'
				},
				{
					'userImg':my3,'Title':'婚姻登记','Time':'2017.03.20 16:00','Data':'10'
				},
				{
					'userImg':my4,'Title':'台湾通行证','Time':'2017.03.20 16:00','Data':'10'
				}
			]
		}
	},
	mounted(){
		//alert('已完成')
	}
}
</script>
<style scoped>
</style>