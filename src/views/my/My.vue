<template>
  <div>
    <div class="wrapper">
      <div class="banner">
        <div class="banner__top">
          <span class="iconfont" style="font-size: 0.3rem"> &#xe699;</span>
          <span class="iconfont" style="font-size: 0.22rem">&#xe78a;</span>
        </div>
        <div class="banner__box">
          <img
            class="banner__box__avatar"
            @click="goLogin"
            :src="
              loginUser.avatar === undefined
                ? 'https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/logo.3qytk12822e0.webp'
                : loginUser.avatar
            "
          />
          <div class="banner__box__font" @click="goLogin" v-if="!loginStatus">去登录</div>
          <div v-else class="banner__box__font">
            {{ loginUser.nickname }}
          </div>
        </div>
      </div>
      <div class="package-list">
        <div class="package-list__item">
          <span class="iconfont" style="font-size: 0.26rem; color: #ff5252">&#xe600;</span>
          我的钱包
        </div>

        <div class="package-list__item">
          <span>{{ loginUser.money === undefined ? '-' : loginUser.money.hotPage }}</span>
          红包
        </div>
        <div class="package-list__item">
          <span>{{ loginUser.money === undefined ? '-' : loginUser.money.coupon }}</span
          >优惠券
        </div>
        <div class="package-list__item">
          <span>{{ loginUser.money === undefined ? '-' : loginUser.money.beans }}</span
          >鲜豆
        </div>
        <div class="package-list__item">
          <span>{{ loginUser.money === undefined ? '-' : loginUser.money.strip }}</span
          >白条
        </div>
      </div>
      <div class="card-item">
        <grid-card :obj="feature" />
        <div class="card-item__font">猜你喜欢</div>
        <div class="card-item__shop">
          <div v-for="(item, index) in list" :key="index">
            <rec-info :obj="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import { mapState } from 'vuex'
import { get } from '../../utils/request'
import GridCard from '@/components/GridCard.vue'
import RecInfo from '@/components/RecInfo.vue'
export default {
  name: 'MyPage',
  data() {
    return {
      feature: {
        subTitle: '功能服务',
        list: [
          {
            title: '我的关注',
            color: '#ef5350',
            icon: '&#xe641;'
          },
          {
            title: '我的评价',
            icon: '&#xe62a;',
            color: '#b39ddb'
          },
          {
            title: '我的地址',
            icon: '&#xe613;',
            color: '#0288d1'
          },
          {
            title: '商家会员',
            icon: '&#xe601;',
            color: '#00e676'
          },
          {
            title: 'V+会员',
            icon: '&#xe8b5;',
            color: '#ffea00'
          },
          {
            title: '签到有惊喜',
            icon: '&#xe615;',
            color: '#e64a19'
          },
          {
            title: '售后退款',
            icon: '&#xe684;',
            color: '#ff7043'
          },
          {
            title: '客服与帮助',
            icon: '&#xe614;',
            color: '#ffc400'
          }
        ]
      },
      list: []
    }
  },
  computed: {
    ...mapState({
      loginUser: (state) => state.loginUser,
      loginStatus: (state) => state.loginStatus
    })
  },
  components: {
    GridCard,
    RecInfo
  },
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    goLogin() {
      router.push('/login')
    },
    init() {
      get('/shop/recommand').then((result) => {
        console.log(result)
        if (result?.code === 200 && result?.data) {
          this.list = result.data.list
        }
      })
      console.log(this.list)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/index.scss";
.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: .5rem;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  width: 100%;
  background-color: $background-color;
}
.banner {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 1.6rem;
  padding: .2rem;
  &__top {
    position: relative;
    display: flex;
    justify-content: end;
    align-items: center;
    height: .1rem;
    color: white;
  }
  &__box {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: .25rem;
    pointer-events: auto;
    &__avatar {
      width: .55rem;
      height: .55rem;
      border-radius: 50%;
    }
    &__font {
      padding-left: .2rem;
      color: $bgColor;
      font-size: 16px;
      font-weight: bold;
    }
  }
}
.banner::before {
  content: "";
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 1.6rem;
  background-image: linear-gradient(to left, #4caf50, #a5d6a7);
  background-size: cover;
  border-radius: 0 0 45% 45%/0 0 100% 100%;
  transform: scaleX(1.5);
}
.package-list {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin-top: .2rem;
  font-size: .12rem;
  font-weight: bold;
  background-color: white;
  border-radius: .1rem;
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: .8rem;
  }
}
.card-item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-top: 2%;
  &__font {
    margin-top: .2rem;
    font-size: .14rem;
    font-weight: bold;
  }
  &__shop {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
