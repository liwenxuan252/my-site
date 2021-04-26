
<template>
    <div class="Menu-container">
        <router-link :to="{name:item.name}" v-for="item in list" :key="item.name" active-class="active"  :exact="item.exact">
            <Icon :type="item.icon" />
            {{item.title}}
        </router-link>
    </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
    components:{
        Icon
    },
    data(){
        return {
            list:[
                {
                    icon:"home",
                    name:"Home",
                    title:"首页",
                    exact:true
                },
                {
                    icon:"note",
                    name:"Blog",
                    title:"文章",
                    exact:false
                },
                {
                    icon:"about",
                    name:"About",
                    title:"关于我",
                    exact:true
                },
                {
                    icon:"code",
                    name:"Project",
                    title:"项目&效果",
                    exact:true
                },
                {
                    icon:"liuYan",
                    name:"Message",
                    title:"留言板",
                    exact:true
                },
            ]
        }
    },
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/global.less";
    .Menu-container{
        width: 100%;
        a{
            padding: 10px  45px;
            color:@gray;
            display: block;
            height: 20px;
            line-height:20px;
            margin: 5px 0px;
            &.active{
                background-color:darken(@words,3%);
            }
            &:hover{
                color:#fff;
                
            }
        }
    }


</style>