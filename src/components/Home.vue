<template>
	<div>
		<router-view></router-view>
		
		<!-- <Footers class="footer"></Footers> -->
	</div>
</template>

<script>
import Footers from './public/FooterNav.vue'
	export default{
		components:{
			Footers
		}
	}
</script>

<style scoped>
.footer{
	z-index: 9999;
}
</style>