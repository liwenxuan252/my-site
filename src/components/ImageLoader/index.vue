<!--
 * @Author: your name
 * @Date: 2021-04-07 20:47:35
 * @LastEditTime: 2021-04-14 21:46:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mysite\src\components\ImageLoader\index.vue
-->
<template>
  <div class="ImageLoader-container">
      <img  :src="placeholder" class="faker">
      <img  :src="src" @load="load" :style="{opacity:opacityValue,transition:duration + 'ms'}" >
  </div>
</template>

<script>

export default {
    data(){
        return {
            originLoad:false
        }
    },
    props:{
        src:{//原始图片路径
            type:String,
            require:true,
        },
        placeholder:{//原始图片加载完成前的占位图片
            type:String,
            require:true,
        },
        duration:{//原始图片加载完成后，切换到原始图经过的毫秒数
            type:Number,
            default:2000
        }
    },
    computed:{
        opacityValue(){
            return this.originLoad ? 1 : 0;
        }
    }
    ,
    methods:{
        load(){
            setTimeout(()=>{
                this.originLoad = true;
                this.$emit("load");
            },this.duration); 
        }
    }
}

</script>

<style scoped lang="less">
    .ImageLoader-container{
        width: 100%;
        height: 100%;
        position: relative;
        img{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height:100%;
            object-fit: cover;
            &.faker{
                filter: blur(2);
            }
        }
    }
</style>