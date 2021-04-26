<template>
    <div class="father">
        <Empty />
    </div>
</template>

<script>
import Empty from "@/components/Empty"
export default {
    components:{
        Empty
    }
}
</script>

<style scoped>
    .father{
        width: 800px;
        height: 300px;
        border: 1px solid black;
        margin: 10px auto;
        position: relative;
    }
</style>