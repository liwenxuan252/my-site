<template>
    <div class="father">
        <Layout>
            <template #left>
                <div class="left">
                    左边栏
                </div>
            </template>
            <template #main>
                <div class="main">
                    中间主区域
                </div>
            </template>
            <template #right>
                <div class="right">
                    右边栏
                </div>
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from "@/components/Layout"
export default {
    components:{
        Layout
    }
}
</script>

<style scoped>
    .father{
        width: 60%;
        height: 500px;
        border: 1px solid black;
        box-sizing: border-box;    
        margin: 0 auto;
    }
    .left{
        width: 200px;
        height: 100%;
        background-color:orange;
    }
    .main{
        width: 100%;
        height: 100%;
        background-color:blue;
    }
    .right{
        width: 150px;
        height:100%;
        background-color:orangered;
    }
</style>