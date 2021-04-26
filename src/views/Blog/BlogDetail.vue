<template>
    <Layout>
        <div ref="mainContainer" class="main-container" v-loading="isLoading">
            <BlogItem :list="data" v-if="data" />
            <BlogCommit v-if="!this.isLoading"/>
        </div>
        <template #right>
            <div class="right-container" v-loading="isLoading">
                <BlogToc :toc="data.toc" v-if="data"/>
            </div>
        </template>
    </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import BlogItem from './components/BlogItem'
import BlogToc from './components/BlogToc'
import fetchData from '@/mixins/fetchData.js'
import {getOneBlog} from '@/api/blog.js'
import BlogCommit from './components/BlogCommit'
import mainScroll from '@/mixins/mainScroll.js'
import titleController from '@/utils/getTitle.js'
export default {
    mixins:[fetchData(null),mainScroll("mainContainer")],
    components:{
        Layout,
        BlogItem,
        BlogToc,
        BlogCommit
    },
    methods:{
        async fetchData() {
            const resp = await getOneBlog(this.$route.params.id);
            titleController.setRouteTitle(resp.title);
            return resp;
        },
    },
    updated() {
        const hash = location.hash;
        location.hash = "";
        setTimeout(() => {
            location.hash = hash;
        }, 50);
    },
}
</script>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>
