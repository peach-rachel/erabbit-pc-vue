<template>
  <nav class="app-topnav">
      <div class="container">
          <ul>
              <template v-if="profile.token">
                  <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{profile.account}}</a></li>
                  <li><a href="javascript:;">退出登陆</a></li>
              </template>
              <template v-else>
                  <li><a href="javascript:;">请先登陆</a></li>
                  <li><a href="javascript:;">免费注册</a></li>
              </template>
              <li><a href="javascript:;">我的订单</a></li>
              <li><a href="javascript:;">会员中心</a></li>
              <li><a href="javascript:;">帮助中心</a></li>
              <li><a href="javascript:;">在线客服</a></li>
              <li><a href="javascript:;"><i class="iconfont icon-phone"></i>手机版</a></li>
           </ul>
      </div>
  </nav>

</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
    name:'AppNavBar',
    setup(){
        const store = useStore()
        const profile = computed(()=> {
            return store.state.user.profile
        })
        return {profile}
    }
}
</script>

<style scoped lang="less">
.app-topnav{
    background-color:#333;
    ul{
        display:flex;
        height:53px;
        justify-content:flex-end;
        align-items: center;
        li{
            a{
                color: #cdcdcd;
                padding:0 15px;;
                display:inline-block;
                i{
                    font-size:14px;
                    margin-right: 2px;
                }
                &:hover{
                    color: @xtxColor;
                }
            }
            ~li{
            a{
                border-left:2px solid #666;
            }
            
        }
        }
        
    }
}
</style>