<template>
    <div class="Blog-item-container">
        <h1>{{list.title}}</h1>
        <div class="aside">
            <span>日期：{{getDate(list.createDate)}}</span>
            <span>浏览：{{list.scanNumber}}</span>
            <a href="">评论：{{list.commentNumber}}</a>
            <a href="">分类{{list.category.id ? list.category.id:'-1'}}</a>
        </div>
        <div v-html="list.htmlContent" class="markdown-body"></div>
    </div>
</template>

<script>
import {getDate} from '@/utils/getDate.js'
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";
export default {
    props:{
        list:{
            type:Object,
            require:true
        }
    },
    methods:{
        getDate,
    },

}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.aside{
    font-size:12px;
    color:@gray;
    span,a{
        margin-right: 15px;
    }
}
.markdown-body{
    margin: 2em 0;
}
</style>
