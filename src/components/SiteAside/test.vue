<template>
    <div>
        <SiteAside />
    </div>
</template>

<script>
import SiteAside from '@/components/SiteAside';
export default {
    components:{
        SiteAside
    }
}
</script>

<style scoped lang="less">
    .SiteAside-container{
        width: 250px;
        height: 600px;
        background: #000;
        margin: 0 auto;
    }
</style>