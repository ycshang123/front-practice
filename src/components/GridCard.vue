<template>
  <div class="card">
    <div class="card__font">{{ obj.subTitle }}</div>
    <div class="card__icons">
      <div v-for="(item, index) in obj.list" :key="index" class="card__icons__item">
        <div class="iconfont" :style="{ color: item.color }" v-html="item.icon"></div>
        <span style="margin-top: 0.02rem">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridCard',
  props: {
    obj: Object
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
@import "../style/index.scss";
.card {
  &__font {
    width: 95%;
    height: .22rem;
    padding-top: .1rem;
    padding-left: 5%;
    font-size: 14px;
    font-weight: bold;
    background-color: white;
  }
  &__icons {
    display: flex;
    flex-wrap: wrap;
    &__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 25%;
      height: .6rem;
      font-size: .1rem;
      background-color: white;
    }
  }
}
</style>
