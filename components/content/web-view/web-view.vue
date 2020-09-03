<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>  
  
<script>  
export default {  
    data() {  
        return {  
            url: null  //要打开的外部链接  
        };  
    },  
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			this.url = option.website
		}  
}
</script>