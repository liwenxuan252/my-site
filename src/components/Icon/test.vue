<template>
  <div class="test-container">
    <div v-for="(item,index) in types" :key="index" class="item">
        <Icon  :type="item" />
        <label class="icon-containe">{{item}}</label>
    </div>
  </div>
</template>

<script>
import Icon,{ types } from './';
export default {
  components: {
    Icon
  },
  data(){
      return {
          types
      }
  }
}
</script>

<style scoped>
    .test-container{
        display: flex;
        justify-content: center;
        margin: 30px auto;
        width:580px;
        flex-wrap: center;
    }
    .item{
        margin: 1em;
        text-align: center;
    }
    .Icon-container{
        display: block;
    }
</style>
