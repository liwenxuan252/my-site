<template>
    <div class="Empty-container">
        <Icon type="empty"/>
        <p>{{text}}</p>
    </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
    props:{
        text:{
            type:String,
            default:"无数据"
        }
    },
    components:{
        Icon
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
    .Empty-container{
        .self-center();
        text-align: center;
        color:@gray;
    }
    .Icon-container{
        font-size:76px;
    }
</style>>

