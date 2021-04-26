<!--
 * @Author: your name
 * @Date: 2021-04-15 21:09:11
 * @LastEditTime: 2021-04-20 18:43:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mysite\src\views\Blog\components\RightList\index.vue
-->


<template>
    <ul class="List-container">
        <li v-for="(item,i) in list" :key="i" >
            <span :class="{active:item.selected}" @click="handleClick(item)">{{item.name}}</span>
            <span :class="{active:item.selected}" @click="handleClick(item)" class="aside">{{item.aside}}</span>
            <RightList :list="item.children" @clickdown="handleClick"/>

        </li>
    </ul>
</template>

<script>
export default {
    name:"RightList",
    props:{
        list:{
            type:Array
        }
    },
    methods:{
        handleClick(item){
            this.$emit('clickdown',item)
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
    .List-container{
        list-style: none;
        padding: 0;
        margin-left: 1em;
        li{
            min-height: 40px;
            line-height: 40px;
            cursor: pointer;
            font-size: 14px;
            span.active{
                color:@warn;
                font-weight: bold;
            }
            span.aside{
                font-size: 12px;
                margin-left: 1em;
                color: @gray;
            }
        }
    }
</style>