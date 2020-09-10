// 获取首页数据
export function getHomeMultidata(){
	return global.$http.request({
  url: '/home/multidata',
  method: 'get'
})
} 
//获取首页商品数据
export function getHomeGoods(type, page) {
	return global.$http.request({
  url: '/home/data',
  method: 'get',
	params: {
		type,
		page
	}
})
} 