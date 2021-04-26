<!--
 * @Author: your name
 * @Date: 2021-04-08 21:03:48
 * @LastEditTime: 2021-04-25 19:47:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mysite\src\components\SiteAside\index.vue
-->
<template>
  <div class="SiteAside-container">
      <div class="avatar"> 
          <Avatar :url="data.avatar"/>
      </div>
      <Menu />
      <Contact />
      <div class="footer">
          {{data.icp}}
      </div>
  </div>
</template>

<script>
import Menu from "@/components/SiteAside/Menu";
import Contact from "@/components/SiteAside/Contact";
import Avatar from "@/components/Avatar";
import { mapState } from "vuex";
export default {
    components:{
        Menu,
        Avatar,
        Contact
    },
    computed: mapState('setting',['data'])
}
</script>

<style scoped>
    .avatar{
        padding-top:10px;
        display: flex;
        justify-content: center;
        margin-bottom:20px;
    }
    .SiteAside-container{
        overflow-x:hidden;
        overflow-y: auto;
    }
    .footer{
        text-align: center;
        color:#bbb;
        margin-bottom:5px;
    }
</style>