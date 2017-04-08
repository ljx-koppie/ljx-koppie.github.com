
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
				<router-link tag="div" class="detaList" :to="'/detalist/'+item.id">
					<span>办理清单</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script >
export default{
	data(){
		return {
			bandle:[]
		}
	},
	mounted(){
		this.business();
	},
	methods:{
		//与办理业务共享数据, 代办理。 
		business(){
			this.bandle = JSON.parse(sessionStorage.getItem('Business'));
		}
	}
}
</script>

<style scoped>

</style>










