<template>
  <!--页脚-->
	<footer class="choice-box">
		<div class="home-btn">
		<a @click="toList">
			<div class="text-style" :class="{green: 1===currentindex}">发现</div>
        </a>
		</div>
		<div class="user-btn">
			<a @click="toMy">
            <div class="text-style" :class="{green: 2===currentindex}">我的</div>
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
		toMy: function (){
			this.currentindex = 2;
			this.$router.push({path: '/usercenter'});
		},

		toList: function (){
			this.currentindex = 1;
			this.$router.push({path: '/list'});
		}
	}
}
	
</script>

<style scoped>

@import '../../static/css/footer.css'

</style>