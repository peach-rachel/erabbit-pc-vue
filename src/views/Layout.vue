<template>
  <!-- 顶部通栏 -->
  <AppNavBar/>
  <!-- 头部组件 -->
  <AppHeader/>
  <!-- 内容容器 -->
  <div class="main">
      <router-view></router-view>
  </div>
  <!-- 底部组件 -->
  <AppFooter/>
</template>

<script>
import AppNavBar from '../components/app-navbar'
import AppHeader from '../components/app-header'
import AppFooter from '../components/app-footer'
export default {
  name: 'Layout',
  components:{AppNavBar,AppHeader,AppFooter},
}
</script>

<style scoped lang="less">

</style>
