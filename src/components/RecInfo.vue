<template>
  <div class="info">
    <img :src="obj.cover" class="info__img" />
    <div class="info__title">{{ obj.title }}</div>
    <div class="info__price">￥{{ obj.price }}</div>
    <div class="info__shop__detail">
      <img :src="obj.shopCover" class="info__shop__detail__cover" />
      <div class="info__shop__detail__title">
        <span>{{ obj.shopName }}</span>
        <span>{{ obj.freight }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecInfo',
  props: {
    obj: Object
  }
}
</script>

<style scoped lang="scss">
.info {
  display: flex;
  flex-direction: column;
  padding: .1rem;
  margin-top: .1rem;
  background-color: white;
  border-radius: .1rem;
  &__title {
    font-size: 10px;
    font-weight: bold;
  }
  &__price {
    color: #f44336;
    font-size: 10px;
    font-weight: bold;
  }
  &__img {
    width: 1.4rem;
    height: 1.4rem;
  }
  &__shop__detail {
    display: flex;
    align-items: center;
    padding-top: .05rem;
    border-top: .001rem solid #e0e0e0;
    &__cover {
      width: .33rem;
      height: .33rem;
    }
    &__title {
      display: flex;
      flex-direction: column;
      margin-left: .08rem;
    }
  }
}
</style>
