<template>
  <ul class="Commit-list-container">
    <li v-for="item in list" :key="item.id">
        <div class="avatar">
          <Avatar :url="item.avatar" :size="'44'" />
        </div>
        <div class="content">
          <div class="top">
            <span class="name">{{item.nickname}}</span>
            <span class="time">{{getDate(item.createDate)}}</span>
          </div>
          <div class="bottom">{{item.content}}</div>
        </div>
    </li>
  </ul>
</template>

<script>
import Avatar from "@/components/Avatar"
import {getDate} from "@/utils/getDate.js"
export default {
  components:{
    Avatar
  },
  props:{
      list: {
        type: Array,
        default: () => [], 
      },
  },
  methods:{
    getDate
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.Commit-list-container{
    list-style: none;
    margin: 0;
    padding: 0;
    li{
      display: flex;
      border-bottom: 1px solid lighten(@gray, 20%);
      padding: 15px 0;
      .avatar{
        margin-right: 15px;
      }
      .content{
        flex: 1 1 auto;
        .top{
          display: flex;
          justify-content: space-between;
          .name{
            color: darken(@success, 10%);
            margin-bottom: 10px;
          }
          .time{
            color:@gray;
            font-size: 12px;
          }
        }
        .bottom{
            font-size: 14px;
        }
      }
    }


}
</style>