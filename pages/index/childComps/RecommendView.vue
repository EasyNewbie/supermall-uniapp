<template>
	<view>
		<view class="recommend">
			<view v-for="(item,key) in recommends" :key="key" class="recommend-item">
				<navigator :url="'/components/content/web-view/web-view?website=' + item.link">
					<image :src="item.image"></image>
					<view>{{item.title}}</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			recommends: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style>
	.recommend {
		display: flex;
		width: 100%;
		text-align: center;
		font-size: 12px;
		
		padding: 15px 0 20px;
		border-bottom: 10px solid #eee;
	}
	
	.recommend-item {
		flex: 1;
	}
	
	.recommend-item image {
		width: 160rpx;
		height: 160rpx;
	}
</style>
