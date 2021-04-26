<template>
    <div class="father">
        <Menu />
    </div>
</template>

<script>
import Menu from "@/components/Menu"
export default {
    components:{
        Menu
    }
}
</script>

<style>
    .father{
        width: 250px;
        height: 500px;
        background: #000;
        margin: 0 auto;
    }
</style>