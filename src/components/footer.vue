<template>
  <!--页脚-->
	<footer class="choice-box">
		<div class="home-btn">
		<a @click="toList">
			<div class="text-style" :class="{green: 1===currentindex}">登录页面</div>
        </a>
		</div>
	</footer>
</template>

<script>

export default {
	name: 'footer',
	data() {
		return {
			totalmess: 0,
			currentindex: 1
		}
	},

	methods: {
		toList: function (){
			this.currentindex = 1;
			this.$router.push({path: '/'});
		}
	}
}
	
</script>

<style scoped>

@import '../../static/css/footer.css'

</style>