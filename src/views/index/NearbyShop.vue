<template>
  <div class="nearoy">
    <h3 class="nearby__title">附近店铺</h3>
    <div v-for="item in list" :key="item._id">
      <shop-info :item="item"></shop-info>
    </div>
  </div>
</template>

<script>
import ShopInfo from '@/components/ShopInfo.vue'
export default {
  name: 'NearbyShop',
  components: {
    ShopInfo
  },
  data() {
    return {
      list: [
        {
          _id: 1,
          name: '沃尔玛',
          imgUrl: 'http://47.96.31.161:9000/vue3/shop1.png',
          sales: 10000,
          expressLimit: 0,
          expressPrice: 5,
          slogan: 'VIP尊享满89元减4元运费券'
        },
        {
          _id: 2,
          name: '山姆会员商店',
          imgUrl: 'http://47.96.31.161:9000/vue3/shop2.png',
          sales: 2000,
          expressLimit: 0,
          expressPrice: 5,
          slogan: '联合利华洗护满10减5'
        },
        {
          _id: 3,
          name: '沃尔玛',
          imgUrl: 'http://47.96.31.161:9000/vue3/shop1.png',
          sales: 10000,
          expressLimit: 0,
          expressPrice: 5,
          slogan: 'VIP尊享满89元减4元运费券'
        },
        {
          _id: 4,
          name: '山姆会员商店',
          imgUrl: 'http://47.96.31.161:9000/vue3/shop2.png',
          sales: 2000,
          expressLimit: 0,
          expressPrice: 5,
          slogan: '联合利华洗护满10减5'
        },
        {
          _id: 5,
          name: '沃尔玛',
          imgUrl: 'http://47.96.31.161:9000/vue3/shop1.png',
          sales: 10000,
          expressLimit: 0,
          expressPrice: 5,
          slogan: 'VIP尊享满89元减4元运费券'
        },
        {
          _id: 6,
          name: '山姆会员商店',
          imgUrl: 'http://47.96.31.161:9000/vue3/shop2.png',
          sales: 2000,
          expressLimit: 0,
          expressPrice: 5,
          slogan: '联合利华洗护满10减5'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/index.scss';
.nearoy {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  a {
    text-decoration: none;
  }
}
</style>
