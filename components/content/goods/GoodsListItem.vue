<template>
	<view class="goods-item">
		<image :src="goodsItem.show.img"></image>
		<view class="goods-info">
			<p>{{goodsItem.title}}</p>
			<span class="price">{{goodsItem.price}}</span>
			<span class="collect">{{goodsItem.cfav}}</span>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'GoodsListItem',
		props: {
			goodsItem: {
				type: Object,
				default() {
					return {}
				}
			}
		}
	}
</script>

<style>
	.goods-item {
		position: relative;
	  padding-bottom: 40px;
	}
  .goods-item image{
		width: 100%;
	}
	.goods-info {
	  font-size: 12px;
	  position: absolute;
	  bottom: 5px;
	  left: 0;
	  right: 0;
	  overflow: hidden;
	  text-align: center;
	}
	
	.goods-info p {
	  overflow: hidden;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	  margin-bottom: 3px;
	}
	
	.goods-info .price {
	  color: #ff5777;
	  margin-right: 20px;
	}
	
	.goods-info .collect {
	  position: relative;
	}
	
	.goods-info .collect::before {
	  content: '';
	  position: absolute;
	  left: -15px;
	  top: 0;
	  width: 14px;
	  height: 14px;
	  /* background: url("~assets/img/common/collect.svg") 0 0/14px 14px; */
	}
</style>
