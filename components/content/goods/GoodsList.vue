<template>
	<view class="goods-list">
		<goods-list-item v-for="(item,index) in goods" :key="index" 
		:goodsItem="item" class="goods-item"></goods-list-item>
	</view>
</template>

<script>
	import GoodsListItem from './GoodsListItem.vue'
	
	export default {
		name: "GoodsList",
		components: {
			GoodsListItem
		},
		props: {
			goods: {
				type: Array,
				default() {
				return []
				}
			}
		}
	}
</script>

<style>
	.goods-list{
		
	}
	.goods-item {
		display: inline-block;
		width: 48%;
		margin: 0 1%;
	}
</style>
