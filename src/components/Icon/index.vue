<!--
 * @Author: your name
 * @Date: 2021-04-07 19:11:27
 * @LastEditTime: 2021-04-13 22:30:15
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \mysite\src\components\Icon\index.vue
-->

<template>
    <i class="iconfont Icon-container" :class="finalType"></i>
</template>

<script>
var iconMap = {
    arrowDown:"icon-arrow-down",
    weiXin:"icon-weixin",
    warn:"icon-jinggao",
    qq:"icon-qq",
    liuYan:"icon-liuyan",
    email:"icon-email",
    code:"icon-code",
    info:"icon-fl-xinxi",
    success:"icon-Group-",
    home:"icon-zhuye",
    error:"icon-cuowu",
    empty:"icon-empty",
    gitHub:"icon-github",
    guanBi:"icon-guanbi",
    arrowUp:"icon-shangjiantou-copy", 
    about:"icon-set_about_hov",
    note:"icon-wenzhang_huaban"
}
export const types = Object.keys(iconMap);
export default {
    props:{
        type:{
            type:String,
            require:true
        }
    },
    computed:{
        finalType(){
            return iconMap[this.type]
        }
    }
}
</script>

<style scoped>
@import '//at.alicdn.com/t/font_2470020_qmuszveabe8.css';
</style>

