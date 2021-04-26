<template>
  <div id="app">
    <h1>App1</h1>
    <Pager :total="total" :current="current" @pageChange="handlePageChange"/>
  </div>
</template>

<script>
import Pager from '@/components/Pager';
export default {
  components: {
    Pager
  },
  data(){
    return {
        total:302,
        current:8,
    };
  },
  methods:{
    handlePageChange(newPage){
      this.current = newPage;
    }
  }
}
</script>

<style lang="less" scoped>
</style>
