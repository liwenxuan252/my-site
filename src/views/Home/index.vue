
<template>
    <div class="Home-container" ref="container" @wheel="handleWheel" v-loading="loading">
        <ul class="carousel" :style="{marginTop}" @transitionend="showEnd">
          <li v-for="item in data" :key="item.id">
              <Carousel :carousel="item"/>
          </li>
        </ul>
        <div v-show="index>0" class="arrow-up icon" @click="changeIndex(index-1)">
            <Icon type="arrowUp" />
        </div>
        <div v-show="index<data.length-1" class="arrow-down icon" @click="changeIndex(index+1)">
            <Icon type="arrowDown"/>
        </div>
        <ul class="indicator">
          <li v-for="(item,i) in data" :key="item.id" @click="changeIndex(i)" :class="{'active':index === i}"></li>
        </ul>
    </div>
</template>

<script>
import {getBanners} from '@/api/banner'
import Carousel from './Carousel'
import Icon from '@/components/Icon'
import mainScroll from "@/mixins/mainScroll.js"
import {mapState} from 'vuex'
export default {
    mixins:[mainScroll("container")],
    components:{
      Carousel,
      Icon
    },
    data(){
        return {
            index:0,
            clientHeight:0,
            scroll:false,
        }
    },
    created(){
          this.$store.dispatch('banner/fetchDataValue');
    },
    methods:{
      changeIndex(i){
          this.index = i;
      },
      handleWheel(e){
        if(this.scroll){
          return
        }
        if(e.deltaY>5 && this.index < this.data.length -1){
          //向下滚动
            this.index++;
            this.scroll = true;
        }
        if(e.deltaY<-5 && this.index > 0){
          //向上滚动
          this.index--;
          this.scroll = true;
        }
      },
      showEnd(){//渲染结束触发
          this.scroll = false;
      },
      handleResize(){//页面发生变化时候
          this.clientHeight = this.$refs.container.clientHeight;
      },
      async fetchData(){
        return await getBanners();
    },
    },
    mounted(){
        this.clientHeight = this.$refs.container.clientHeight;
        window.addEventListener('resize',this.handleResize);
    },
    destroyed(){
        window.removeEventListener('resize',this.handleResize)
    },
    computed:{
      marginTop(){
        return - this.index * this.clientHeight + 'px';
      },
      ...mapState('banner',['loading','data'])
    }
}

</script>

<style lang='less' scoped>
@import '~@/styles/var.less';
  .Home-container{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    //测试
    // width: 500px;
    // height: 400px;
    // margin: 100px auto;
    // overflow: visible;
    // border: 2px solid red;
  }
  .carousel{
    width: 100%;
    height: 100%;
    margin:0;
    padding:0;
    list-style: none;
    transition: .5s;
    li{
      width: 100%;
      height: 100%;
    }
  }
  .icon{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    color: @lightWords;
    &.arrow-up{
      font-weight: bold;
      top: 25px;
      animation: jump-up 2s infinite;
      @keyframes jump-up{
        0% {
          top:25px;
        }
        50%{
          top:15px;
        }
        100%{
          top:25px;
        }
      }
    }
    &.arrow-down{
      bottom:25px;
      animation: jump-down 2s infinite;
      @keyframes jump-down{
        0% {
          bottom:25px;
        }
        50%{
          bottom:15px;
        }
        100%{
          bottom:25px;
        }
      }
    }
    i{
      font-size: 26px;
    }
  }
  .indicator{
      position:absolute;
      top:50%;
      right: 25px;
      transform: translateY(-50%);
      margin: 0;
      padding: 0;
      list-style:none;
      li{
        width: 7px;
        height: 7px;
        border-radius: 50%;
        border: 1px solid #fff;
        margin: 5px 0px;
        cursor: pointer;
        box-sizing: border-box;
        &.active{
          background-color: #fff;
        }
      }
    }
</style>