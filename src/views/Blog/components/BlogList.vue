
<template>
    <div class="BlogList-container" ref="container"  v-loading="isLoading">
        <ul>
            <li v-for="item in data.rows" :key="item.id">
                <div class="thumb" v-if="item.thumb">
                    <router-link :to='{name:"BlogDetail",params:{id:item.id}}'>
                        <img :src="item.thumb" :alt="item.title" :title="item.title" />
                    </router-link>
                </div>
                <div class="main">
                    <router-link :to='{name:"BlogDetail",params:{id:item.id}}'>
                        <h2>{{item.title}}</h2>
                    </router-link>
                    <div class="aside">
                        <span>日期：{{getDate(item.createDate)}}</span>
                        <span>浏览：{{item.scanNumber}}</span>
                        <span>评论：{{item.commentNumber}}</span>
                        <router-link :to="{name:'CategoryBlog',params:{
                            categoryId:item.category.id
                        }}">
                            <span>{{item.category.name}}</span> 
                        </router-link>
                            

                    </div>
                    <div class="desc">
                        {{item.description}}
                    </div>
                </div>

            </li>
        </ul>
        <Pager  v-if="data.total"
                :current="routeInfo.page" 
                :limit="routeInfo.limit" 
                :visibleNumber="10"
                :total="data.total"
                @pageChange="handlePageChange"
        />
    </div>
</template>

<script>
import {getBlog} from '@/api/blog';
import Pager from '@/components/Pager';
import {getDate} from '@/utils/getDate.js';
import fetchData from "@/mixins/fetchData.js";
import mainScroll from '@/mixins/mainScroll.js'
export default {
    mixins:[fetchData({}),mainScroll('container')],
    components:{
      Pager
    },
    computed:{
        routeInfo(){
            const categoryId = +this.$route.params.categoryId || -1;
            const page = +this.$route.query.page || 1;
            const limit = +this.$route.query.limit || 10;
            return {
                categoryId,
                page,
                limit,
            }
        }
    },
    methods:{
        getDate,
        async fetchData() {
            return await getBlog(
                this.routeInfo.page,
                this.routeInfo.limit,
                this.routeInfo.categoryId
            );
        },
        handlePageChange(newPage){
           const query = {
               page:newPage, 
               limit:this.routeInfo.limit
           }
           //在article下 无分类
           if(this.routeInfo.categoryId === -1){
               this.$router.push({
                   name:'Blog',
                   query
               })
           }else{
               //有分类
               this.$router.push({
                name: "CategoryBlog",
                query,
                params: {
                    categoryId: this.routeInfo.categoryId,
                },
            });
           }
        }
    },
    watch:{
        async $route(){
            this.isLoading = true;
            this.$refs.container.scrollTop = 0;
            this.data = await this.fetchData();
            this.isLoading = false
        }
    }

}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
    .BlogList-container{
        line-height: 1.7;
        position: relative;
        padding: 20px;
        overflow-y: scroll;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        scroll-behavior: smooth;
        ul{
            margin: 0;
            padding: 0;
            list-style: none;
            li {
                display: flex;
                padding: 15px 0;
                border-bottom: 1px solid @gray;
                .thumb {
                    flex: 0 0 auto;
                    margin-right: 15px;
                    img {
                        display: block;
                        max-width: 200px;
                        border-radius: 5px;
                    }
                }
                .main {
                    flex: 1 1 auto;
                    h2 {
                        margin: 0;
                    }
                }
                .aside {
                    font-size: 12px;
                    color: @gray;
                    span {
                         margin-right: 15px;
                    }
                }
                .desc {
                    margin: 15px 0;
                    font-size: 14px;
                }
            }
        }
    }
</style>