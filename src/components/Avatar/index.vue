<template>
    <img :src="url" :style="{width:size + 'px',height:size + 'px'}" alt="" class="Avator-container">

</template>



<script>
export default {
    props:{
        url:{
            type:String,
            require:true
        },
        size:{
            type:String,
            require:true,
            default:"150"
        }
    }
}
</script>



<style lang="less" scoped>
    .Avator-container{
        border-radius: 50%;
        object-fit: cover;
        display: block;
    }

</style>