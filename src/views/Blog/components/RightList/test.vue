<!--
 * @Author: your name
 * @Date: 2021-04-15 21:10:12
 * @LastEditTime: 2021-04-20 18:41:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mysite\src\views\Blog\components\RightList\test.vue
-->

<template>
    <RightList :list="list" @clickdown="handleBlogClick" />
</template>

<script>
import RightList from '@/views/Blog/components/RightList'
export default {
    components:{
        RightList
    },
    data(){
        return {
            list:[
                { name: "概述", anchor: "article-md-title-1" },
                {
                    name: "简单请求",
                    anchor: "article-md-title-2",
                    children: [
                    { name: "简单请求的判定", anchor: "article-md-title-3" },
                    { name: "简单请求的交互规范", anchor: "article-md-title-4" },
                    ],
                },
                {
                    name: "需要预检的请求",
                    anchor: "article-md-title-5",
                },
                {
                    name: "附带身份凭证的请求",
                    anchor: "article-md-title-6",
                },
                {
                    name: "一个额外的补充",
                    anchor: "article-md-title-7",
                },
            ],
        }
    },
    methods:{
        handleBlogClick(item){
            console.log(item);
        }
    }
}
</script>

<style>

</style>