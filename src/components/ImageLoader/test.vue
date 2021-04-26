
<template>
    <div class="father">
        <ImageLoader src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
            placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
            @load="handleClick"
        />
    </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader';
export default {
    components:{
        ImageLoader
    },
    methods:{
        handleClick(){
            console.log("完成加载了");
        }
    }
}
</script>

<style scoped lang="less">
    .ImageLoader-container{
        width: 100%;
        height: 100%
    }
</style>