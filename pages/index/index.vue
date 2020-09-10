<template>
	<view>
			<!-- 这是首页 -->
			<!-- <nav-bar><text slot="center">这是首页</text></nav-bar> -->
			<bw-swiper :swiperList="swiperList" style="width:100%"></bw-swiper>
			<recommend-view :recommends="recommends"></recommend-view>
			<feature-view></feature-view>
			<tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
			<goods-list :goods="showGoods"></goods-list>
		<back-top v-show="isShowBackTop"></back-top>
	</view>
</template>

<script>
	import { getHomeMultidata,getHomeGoods } from '../../network/home.js'
	
	import NavBar from '../../components/common/navbar/NavBar.vue'
	import BwSwiper from '../../components/common/bw-swiper/bw-swiper.vue'
	import TabControl from '../../components/content/tabControl/TabControl.vue'
	import GoodsList from '../../components/content/goods/GoodsList.vue'
	import BackTop from '../../components/content/backTop/BackTop.vue'
	
	import RecommendView from './childComps/RecommendView.vue'
	import FeatureView from './childComps/FeatureView.vue'
	
	export default {
		data() {
			return {
				banners: [],
				recommends: [],
				goods: {
					'pop': {page: 0, list: []},
					'new': {page: 0, list: []},
					'sell': {page: 0, list: []}
				},
				currentType: 'pop',
				isShowBackTop: false
			}
		},
		components: {
			NavBar,
			BwSwiper,
			TabControl,
			GoodsList,
			BackTop,
			RecommendView,
			FeatureView
		},
		created() {
			//1、请求获取首页数据
			this.getHomeMultidata()
			
			//2、请求首页商品数据
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		onPullDownRefresh() {
			this.getHomeMultidata()
		  this.getHomeGoods('pop')
		  this.getHomeGoods('new')
		  this.getHomeGoods('sell')
		  setTimeout(function () {
		    uni.stopPullDownRefresh();
		  }, 1000);
		},
		onPageScroll (Object) { 
		 this.isShowBackTop = Object.scrollTop > 1000; //实时获取到滚动的值 
		},
		onReachBottom(){//与methods 同级
		 // console.log('页面到底了')
		 this.isShowBackTop = true
		 this.goods[this.currentType].page + 1
		 this.getHomeGoods(this.currentType)
		},
		methods: {
			/**
			 * 事件监听相关方法
			 */
			tabClick (index) {
				switch (index) {
					case 0:
						this.currentType = 'pop'
						break
					case 1:
						this.currentType = 'new'
						break
					case 2:
						this.currentType = 'sell'
						break
				}
			},
			getTop() {
				// uni.pageScrollTo({
				
				// scrollTop: 0,
				
				// duration: 300
				
				// });
				console.log('返回顶部');
			},
			/**
			 * 网络请求相关方法
			 */
			getHomeMultidata() {
				getHomeMultidata().then(res=>{
					// console.log('获取成功', res);
					this.banners = res.data.data.banner.list;
					this.recommends = res.data.data.recommend.list;
				}).catch(err=>{
				  // do something...
				})
			},
			getHomeGoods(type) {
				const page = this.goods[type].page + 1
				getHomeGoods(type, page).then(res => {
					this.goods[type].list.push(...res.data.data.list)
					this.goods[type].page += 1
					// console.log('加载成功');
				}).catch(err=>{
				  // do something...
				})
			}
		},
		computed: {
			swiperList: function() {
				let arrByZM = [];//声明一个空数组来存放数据
				for(let i in this.banners){
					arrByZM.push({img: this.banners[i].image})
				}
				//返回筛选后的轮播图数据
				if(arrByZM.length){
					return arrByZM;
				}else{
					return [{img: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"}]
				}
			},
			showGoods() {
				return this.goods[this.currentType].list
			}
		}
	}
</script>

<style>
/* 	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	} */

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.tab-control {
		position: sticky;
		top: 43px;
		background-color: #fff;
		z-index: 50;
	}
	
</style>
