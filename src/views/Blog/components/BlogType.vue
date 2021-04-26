
<template>
    <div class="blog-type-container" v-loading="isLoading">
        <h2>文章分类</h2>
        <RightList :list="list" @clickdown="handleBlogClick"/>
    </div>
</template>

<script>
import RightList from './RightList'
import fetchData from '@/mixins/fetchData.js'
import {getBlogType} from '@/api/blog'
export default {
    mixins:[fetchData([])],
    components:{
        RightList
    },
    computed:{
        categoryId(){
            return +this.$route.params.categoryId || -1;
        },
        limit(){
            return +this.$route.query.limit || 10;
        },
        list(){
            //总文章数
            var totalArticle = this.data.reduce(
                (a, b) => a + b.articleCount,
                0
            );
            const result = [
                {name:"全部",id:-1,articleCount:totalArticle},
                ...this.data
            ];
            return result.map((item)=> ({
                ...item,
                selected: item.id === this.categoryId,
                aside:`${item.articleCount}篇`
            }))
        }
    },
    methods:{
        async fetchData(){
            return await getBlogType();
        },
        handleBlogClick(item){
            if(item.id === -1){
                const query = {
                    page:1,
                    limit:this.limit
                }
                this.$router.push({
                    name:'Blog',
                    query
                })
            }else{
                this.$router.push({
                    name: "CategoryBlog",
                    params:{
                        categoryId:item.id
                    }
                })
            }
        }
    }
}
</script>

<style scoped lang="less">
    .blog-type-container{
        width: 300px;
        height: 100%;
        overflow-y:auto;
        position: relative;
        box-sizing: border-box;
        padding: 20px;
        h2 {
            font-weight: bold;
            letter-spacing: 2px;
            font-size: 1em;
            margin: 0;
        }
    }
</style>