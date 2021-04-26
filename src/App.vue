
<template>
  <div id="app">
    <Layout>
       <template #left>
          <div class="left">
              <SiteAside />
          </div>
      </template>
      <template #default>
          <router-view></router-view>
      </template>
    </Layout>
    <ReturnTop />
  </div>
</template>

<script>
import SiteAside from '@/components/SiteAside';
import Layout from "@/components/Layout"
import ReturnTop from "@/components/ReturnTop"
export default {
  components:{
    SiteAside,
    Layout,
    ReturnTop
  },
  created(){
    this.$store.dispatch("setting/fetchSettingDate")
  }
}
</script>
<style scoped lang="less">
  #app{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .left{
        width: 250px;
        height: 100%;
        background-color:#000;
    }
  }
</style>