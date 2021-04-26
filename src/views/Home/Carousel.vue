
<template>
    <div class="Carousel-container" ref="container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave"> 
        <div class="img-content" ref="content" :style="imgPosition">
            <ImageLoader @load="this.loadText" :src="carousel.bigImg" :placeholder="carousel.midImg"/> 
        </div>
        <div class="title" ref="title">{{carousel.title}}</div>
        <div class="desc" ref="desc">{{carousel.description}}</div>
    </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'
export default {
    props:["carousel"],
    components:{
        ImageLoader
    },
    data(){
        return {
            titleWidth:0,
            descWidth:0,
            containerSize: null, // 外层容器的尺寸
            innerSize: null,
            mouseX:0,
            mouseY:0
        }
    },
    mounted(){
        this.titleWidth = this.$refs.title.clientWidth;
        this.descWidth = this.$refs.desc.clientWidth;
        
        this.getSize() 
        this.mouseX = this.center.x;
        this.mouseY = this.center.y;
        window.addEventListener("resize", this.setSize);
    },
    destroyed() {
        window.removeEventListener("resize", this.resize);
    },
    methods:{
        loadText(){
            this.$refs.title.style.opacity = 1;
            this.$refs.title.style.width = 0;
            this.$refs.title.clientWidth; //强制渲染一遍                              
            this.$refs.title.style.transition = '2s';
            this.$refs.title.style.width = this.titleWidth + 'px';

            this.$refs.desc.style.opacity = 1;
            this.$refs.desc.style.width = 0;
            this.$refs.desc.clientWidth; //强制渲染一遍                              
            this.$refs.desc.style.transition = '2s 1s';
            this.$refs.desc.style.width = this.descWidth + 'px';


        },
        handleMouseMove(e){
            var rect = this.$refs.container.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY =  e.clientY - rect.top;
   
        },
        getSize(){
            this.containerSize = {
                width: this.$refs.container.clientWidth,
                height: this.$refs.container.clientHeight,
            };

            this.innerSize = {
                width: this.$refs.content.clientWidth,
                height: this.$refs.content.clientHeight,
            };
        },
        handleMouseLeave() {
            this.mouseX = this.center.x;
            this.mouseY = this.center.y;
        },
    },
    computed:{
        imgPosition(){
            if (!this.innerSize || !this.containerSize) {
                return;
            }
            const extraWidth = this.innerSize.width - this.containerSize.width; // 多出的宽度
            const extraHeight = this.innerSize.height - this.containerSize.height; //多出的高度
            const left = (-extraWidth / this.containerSize.width) * this.mouseX;
            const top = (-extraHeight / this.containerSize.height) * this.mouseY;
            return {
                transform: `translate(${left}px, ${top}px)`,
            };
        },
        center() {
            return {
                x: this.containerSize.width / 2,
                y: this.containerSize.height / 2,
            };
        },
    }
}
</script>

<style lang='less' scoped>
@import '~@/styles/var.less';
    .Carousel-container{
        position:relative;
        // background-color:#000;
        width: 100%;
        height: 100%;
        color: #fff;
        overflow: hidden;
        .img-content{
            width: 110%;
            height: 110%;
            position: absolute;
            left: 0;
            top: 0;
            transition: .3s;
            //测试
            // z-index: -1;
        }
        .title{
            position: absolute;
            top: calc(50% + 30px);
            left: 35px;
            font-size: 2em;
        }
        .desc{
            position:absolute;
            top: calc(50% + 80px);
            left: 35px;
            font-size: 1.1em;
            color:lighten(@gray,20%)
        }
        .title,.desc{
            text-shadow:1px 0 0 rgba(0, 0, 0, 0.5),-1px 0 0 rgba(0, 0, 0, 0.5),
            0 1px 0 rgba(0, 0, 0, 0.5),0 -1px 0 rgba(0, 0, 0, 0.5);
            opacity: 0;
            white-space: nowrap;
            overflow: hidden;
            letter-spacing: 2px;
        }
    }
</style>