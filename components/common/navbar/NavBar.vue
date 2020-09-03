<template>
	<view class="nav-bar">
		<view class="left"><slot name="left"></slot></view>
		<view class="center"><slot name="center"></slot></view>
		<view class="right"><slot name="right"></slot></view>
	</view>
</template>

<script>
</script>

<style>
	.nav-bar{
		display: flex;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
	}
	
	.left, .right{
		width: 150rpx;
		height: 100rpx;
	}
	
	.center{
		flex: 1;
		height: 100rpx;
	}
</style>
