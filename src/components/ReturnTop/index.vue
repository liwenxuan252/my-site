<template>
    <div v-show="topShow" ref="topContainer" class="return-top-container">top</div>
</template>

<script>
export default {
    data(){
        return {
            topShow:false
        }
    },
    created(){
        this.$bus.$on("mainScroll",this.setScrollTop)
        
    },
    mounted(){
        this.$refs.topContainer.addEventListener('click',this.handleClick)
    },
    destroyed(){
        this.$bus.$off("mainScroll",this.setScrollTop)
        this.$refs.topContainer.removeEventListener('click',this.handleClick)
    },
    methods:{
        setScrollTop(dom){
            if(!dom){
                this.topShow = false
                return
            }
            if(dom.scrollTop > 200){
                this.topShow = true
            }else{
                this.topShow = false
            } 
        },
        handleClick(){
            this.$bus.$emit("setScrollTop",0);
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
    .return-top-container{
        width: 40px;
        height: 40px;
        position: fixed;
        bottom: 50px;
        right:50px;
        line-height: 40px;
        text-align: center;
        border-radius: 50%;
        background-color:@primary;
        color: #fff;
        cursor: pointer;
    }
</style>