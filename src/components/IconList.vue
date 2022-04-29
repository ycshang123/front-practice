<template>
  <div>
    <div class="icons">
      <div class="icons__item" v-for="(item, index) in Icons" :key="index">
        <img class="icons__item__img" :src="item.img" alt="" />
        <p class="icons__item__desc">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconList',
  props: {
    Icons: {
      type: Array
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    // display: block;
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
</style>
