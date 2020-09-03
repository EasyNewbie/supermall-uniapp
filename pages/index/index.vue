<template>
	<view class="content">
		<!-- 这是首页 -->
		<!-- <nav-bar><text slot="center">这是首页</text></nav-bar> -->
		<bw-swiper :swiperList="swiperList" style="width:100%"></bw-swiper>
		<recommend-view :recommends="recommends"></recommend-view>
		<feature-view></feature-view>
	</view>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	import BwSwiper from '../../components/common/bw-swiper/bw-swiper.vue'
	import RecommendView from './childComps/RecommendView.vue'
	import FeatureView from './childComps/FeatureView.vue'
	
	export default {
		data() {
			return {
				banners: [],
				recommends: []
			}
		},
		components: {
			NavBar,
			BwSwiper,
			RecommendView,
			FeatureView
		},
		created() {
			// 获取首页数据
			global.$http.request({
			  url: '/home/multidata',
			  method: 'get',
			}).then(res=>{
				console.log('获取成功', res);
				this.banners = res.data.data.banner.list;
				this.recommends = res.data.data.recommend.list;
			}).catch(err=>{
			  // do something...
			})
		},
		methods: {
			
		},
		computed: {
			swiperList: function() {
				let arrByZM = [];//声明一个空数组来存放数据
				for(let i in this.banners){
					arrByZM.push({img: this.banners[i].image})
				}
				//返回筛选后的数据
				if(arrByZM.length){
					return arrByZM;
				}else{
					return [{img: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"}]
				}
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
</style>
