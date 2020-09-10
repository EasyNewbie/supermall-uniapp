<template>
	<view class="back-top" @click="getTop">
		<image src="../../../static/img/commom/top.png" mode=""></image>
	</view>
</template>

<script>
	export default {
		name: 'BackTop',
		methods: {
			getTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			}
		}
	}
</script>

<style scoped>
	.back-top {
		position: fixed;
		right: 10rpx;
		bottom: 100rpx;
		z-index: 60;
	}
	
	.back-top image {
		width: 90rpx;
		height: 90rpx;
	}
</style>
