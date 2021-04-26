<template>
  <div id="app">
    <h1>App1</h1>
    <Avatar url="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3172081488,423381204&fm=11&gp=0.jpg" :size="150"/>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar';
export default {
  components: {
    Avatar
  },
  
}
</script>