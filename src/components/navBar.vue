<template>
  <div class="docker">
    <div
      v-for="item in menuList"
      :class="{
        docker__item: true
      }"
      :key="item.icon"
    >
      <router-link :to="item.to">
        <div class="iconfont" v-html="item.icon" />
        <div class="docker__title">{{ item.text }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      menuList: [
        {
          icon: '&#xe6b8;',
          text: '首页',
          to: {
            name: 'IndexPage'
          }
        },
        {
          icon: '&#xe618;',
          text: '发现',
          to: {
            name: 'FindPage'
          }
        },
        {
          icon: '&#xe66d;',
          text: '消息',
          to: {
            name: 'MessagePage'
          }
        },
        {
          icon: '&#xe663;',
          text: '我的',
          to: {
            name: 'MyPage'
          }
        }
      ]
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
@import '../style/virables.scss';
.docker {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 0.49rem;
  padding: 0 0.18rem;
  border-top: 0.01rem solid $content-bgColor;
  &__item {
    flex: 1;
    text-align: center;
    a {
      color: $content-fontcolor;
      text-decoration: none;
    }
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    .router-link-active {
      a {
        color: #1fa4fc;
      }
    }
  }
  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
