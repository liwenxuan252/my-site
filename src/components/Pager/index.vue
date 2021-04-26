<template>
    <div class="Pager-container" v-if="allPage>1" >
        <a @click="handleClick(1)" :class="{disabled:current === 1}" >|&lt;&lt;</a>
        <a :class="{disabled:current === 1}" @click="handleClick(current-1)">&lt;&lt;</a>
        <a v-for="(item,index) in number" :key="index" :class="{active:current === item}" @click="handleClick(item)"> {{item}}</a>
        <a :class="{disabled:current === allPage}" @click="handleClick(current+1)">&gt;&gt;</a>
        <a :class="{disabled:current === allPage}" @click="handleClick(allPage)">&gt;&gt;|</a>
    </div>
</template>

<script>
export default {
    props:{
        current:{//当前页码
            type:Number,
            default:1
        },
        total:{//总数据量
            type:Number,
            default:0
        },
        limit:{//页容量
            type:Number,
            default:10
        },
        visiableNumber:{//可见页码数
            type:Number,
            default:10
        }
    },
    computed:{
        allPage(){
            return Math.ceil(this.total / this.limit)
        },
        minNumber(){
            var min = this.current - Math.floor(this.visiableNumber / 2);
            if(min<1){
                min = 1;
            }
            return min;
        },
        maxNumber(){
            var max = this.minNumber + this.visiableNumber -1;
            if(max>this.allPage){
                max = this.allPage
            }
            return max;
        },
        number(){
            var arr = [];
            for(var i = this.minNumber;i<=this.maxNumber;i++){
                arr.push(i);
            }
            return arr;
        },
    },
    methods:{
        handleClick(newPage){
            if(newPage<1){
                newPage = 1;
            }
            if(newPage>this.allPage){
                newPage = this.allPage
            }
            if(newPage == this.current){
                return;
            }
            this.$emit("pageChange",newPage);
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
    .Pager-container{
        display: flex;
        justify-content: center;
        align-content: center;
        margin: 20px 0;
        a{
            margin: 0px 6px;
            color:@primary;
            cursor: pointer;
            &.active{
                color:@words;
                font-weight:bold;
            }
            &.disabled{
                color:@lightWords;
                cursor: not-allowed;
            }
        }
    }
</style>