<template>
  <div id="app">
    <router-view />

    <nav-bar v-if="isShowNav" />
  </div>
</template>

<script>
import navBar from '@/components/navBar.vue'
export default {
  data() {
    return {
      isShowNav: true,
      // 需要导航栏的路由数组
      showMenuList: ['/', '/index', '/find', '/message', '/my']
    }
  },
  components: {
    navBar
  },
  watch: {
    $route(to, from) {
      if (this.showMenuList.includes(to.path)) {
        this.isShowNav = true
      } else {
        this.isShowNav = false
      }
    }
  }
}
</script>

<style lang="scss"></style>
