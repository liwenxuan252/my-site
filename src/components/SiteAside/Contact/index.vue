<template>
    <div class="Contact-container">
        <ul>
            <li>
                <a :href="data.github" target="_blank">
                    <Icon type="gitHub" />
                    <p>{{data.githubName}}</p>
                </a>
            </li>
            <li>
                <a :href="data.mail">
                    <Icon type="email" />
                    <p>{{data.mail}}</p>
                </a>
            </li>
            <li>
                <a href="tencent://message/?Menu=yes&uin=2840563431&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
                    <Icon type="qq" />
                    <p>{{data.qq}}</p>
                </a>
            </li>
            <li>
                <a href="">
                    <Icon type="weiXin" />
                    <p>{{data.weixin}}</p>
                    <div class="pop">
                        <img src="@/assets/weixinCard.png" alt="">
                    </div>
                </a>
                
            </li>
        </ul>
    </div>
</template>

<script>
import Icon from "@/components/Icon";
import {mapState} from 'vuex'
export default {
    components:{
        Icon
    },
    computed:{
        ...mapState('setting',['data'])
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/global.less";
    .Contact-container{
        width:100%;
        background-color:transparent;
        ul{
            list-style: none;
            padding: 0;
            padding: 20px;
            li{ 
                position: relative;
                color:@lightWords;
                height: 40px;
                line-height: 40px;
                font-size: 14px;
                .Icon-container{
                    font-size:23px
                }
                margin-bottom: 5px;
                a{
                    display: flex;
                    height: inherit;
                    align-items: center;
                    p{
                        margin-left:6px;
                    }
                    &:hover{
                        .pop{
                            transform: scaleY(1)
                        }
                    }
                }
                .pop{ 
                    position: absolute;
                    left: 6px;
                    bottom:38px;
                    width: 130px;
                    height: 130px;
                    transform: scaleY(0); 
                    transform-origin: bottom;
                    transition: .3s;
                    img{
                        width:100%;
                        height: 100%;
                        border-radius: 5px;
                    }
                    &::after{
                        content: "";
                        position: absolute;
                        bottom:-4px;
                        left: 50%;
                        transform: translateX(-50%) rotate(45deg);
                        width: 8px;
                        height: 8px;
                        background: #fff;
                    }
                }
            }
        }
    }
    

</style>