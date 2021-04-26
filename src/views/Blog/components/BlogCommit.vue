<template>
    <div class="Blog-commit-container">
        <MessageArea 
            :title="'评论列表'" 
            :subTitle="`(${data.total})`" 
            :list="data.rows" 
            :isListLoading="isLoading"
            @submit="handleSubmit"
        />
    </div>
</template>

<script>
import MessageArea from '@/components/MessageArea'
import fetchData from '@/mixins/fetchData.js'
import {getCommit} from '@/api/blog.js'
import {postCommit} from '@/api/blog.js'
export default {
    mixins: [fetchData({ total: 0, rows: [] })],
    components:{
        MessageArea
    },
    data(){
        return {
            page:1,
            limit:10
        }
    },
    mounted(){
        this.$bus.$on('mainScroll',this.handleScroll);
    },
    destroyed(){
        this.$bus.$off('mainScroll',this.handleScroll)
    },
    computed:{
        hasMore(){
            return this.data.rows.length < this.data.total;
        }
    },
    methods:{
        async fetchData(){
            return await getCommit({
                params:{
                    page:this.page,
                    limit:this.limit,
                    blogid:this.$route.params.id
                }
            })
        },
        handleScroll(dom){
            if(this.isLoading || !dom){
                return
            }
            const range = 100;
            let dis = Math.abs(dom.scrollHeight - (dom.clientHeight + dom.scrollTop));
            if(dis <= range){
                this.loadingMore()
            }
        },
        async handleSubmit(formData,callback){
            let postMes = await postCommit({
                blogId: this.$route.params.id,
                ...formData,
            });
            this.data.rows.unshift(postMes);
            this.data.total++;
            callback("评论成功")           
        },
        async loadingMore(){
            if(!this.hasMore){
                return 
            }
            this.isLoading = true;
            this.page++;
            const resp = await this.fetchData({});
            
            this.data.rows = this.data.rows.concat(resp.rows);
            this.data.total = resp.total;
            this.isLoading = false;

        }
    }

}
</script>

<style lang="less" scoped>

</style>