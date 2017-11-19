<template>
	<div>
		<div class="usercenter">
            <div class="user">
                <div class="userimg"><img v-bind:src="'../../static/images/' + user.icon"/></div>
                <div class="username"><span>{{user.name}}</span></div>
            </div>
			<div class="myblog-plus">
				&nbsp;&nbsp;&nbsp;我的文章
			</div>
			<div class="myblog-plus mymess-plus">
				&nbsp;&nbsp;&nbsp;我的消息
				<span v-if=" this.$store.state.totalmess > 0 ">
					+{{this.$store.state.totalmess}}
				</span>
			</div>
			<router-link :to="{path: '/'}">
				<div class="myblog-plus mymess-plus">
                    &nbsp;&nbsp;&nbsp;退出登录
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'usercenter',
		data () {
			return {
				user: {},
				url: 'http://localhost:3000/usercenter'
			}
		}
	}
</script>

<style scoped>

@import '../../static/css/usercenter.css'

</style>
