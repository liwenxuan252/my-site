
<template>
      <Layout>
          <BlogList />   
          <template #right>
            <BlogType />
          </template>
      </Layout> 
</template>

<script>

import Layout from '@/components/Layout';
import BlogType from './components/BlogType';
import BlogList from './components/BlogList';

export default {
    components:{
      Layout,
      BlogList,
      BlogType,
    },
}
</script>

<style >
</style>