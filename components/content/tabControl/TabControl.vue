<template>
	<view class="tab-control">
		<view v-for="(item, index) in titles" class="tab-control-item" :key="index" 
		:class="{active: index === currentIndex}" @click="itemClick(index)">
			<span>{{item}}</span>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'TabControl',
		props: {
			titles: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		methods: {
			itemClick(index) {
				this.currentIndex = index;
				this.$emit('tabClick', index);
			}
		}
	}
</script>

<style scoped>
	.tab-control{
		display: flex;
		text-align: center;
		font-size: 15px;
	}
	
	.tab-control-item{
		flex: 1;
		height: 40px;
		line-height: 40px;
	}
	.tab-control-item span {
		padding: 5px;
	}
	
	.active{
		color: #ff5777;
	}
	.active span {
		border-bottom: 3px solid #ff8198;
	}
</style>
