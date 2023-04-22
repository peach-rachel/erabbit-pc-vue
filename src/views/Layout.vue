<template>
  <!-- 顶部通栏 -->
  <AppNavBar/>
  <!-- 头部组件 -->
  <header>头部组件</header>
  <!-- 内容容器 -->
  <div class="main">
      <router-view></router-view>
  </div>
  <!-- 底部组件 -->
  <footer>底部组件</footer>
</template>

<script>
import AppNavBar from '../components/app-navbar'
export default {
  name: 'Layout',
  components:{AppNavBar},
}
</script>

<style scoped lang="less">

</style>
