<template>
  <div>
    <div class="wrapper">
      <static-part></static-part>
      <!-- 附近店铺 -->
      <nearby-shop></nearby-shop>
    </div>
  </div>
</template>

<script>
import StaticPart from './StaticPart.vue'
import NearbyShop from './NearbyShop.vue'
export default {
  name: 'IndexPage',
  components: {
    StaticPart,
    NearbyShop
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/index.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0.5rem;
  padding: 0 0.18rem 0.1rem 0.18rem;
}
</style>
