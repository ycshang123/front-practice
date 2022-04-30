<template>
  <div>
    <div class="wrapper">
      <img
        src="https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/logo.3qytk12822e0.webp"
        alt=""
        class="wrapper__img"
      />
      <div class="wrapper__input">
        <input type="text" class="wrapper__input__content" placeholder="用户名" v-model="user.phone" />
      </div>
      <div class="wrapper__input">
        <input
          type="password"
          class="wrapper__input__content"
          placeholder="密码"
          v-model="user.password"
          autocomplete="new-password"
          @input="handlePassWord()"
        />
      </div>
      <div class="wrapper__login-button" @click="handleLogin" :class="isActive ? 'wrapper__login-button-active' : ''">
        登录
      </div>
    </div>
    <div class="footer">
      <div class="footer__sub">
        <span>------------------------</span>
        其他登录方式
        <span>------------------------</span>
      </div>
      <div class="footer__icon">
        <div class="footer__icon__item">
          <span class="iconfont" style="color: #4caf50; padding-bottom: 0.03rem">&#xe611;</span>
          微信登录
        </div>
        <div class="footer__icon__item">
          <span class="iconfont" style="color: #ef5350; padding-bottom: 0.03rem">&#xe63d;</span>
          京东登录
        </div>
        <div class="footer__icon__item">
          <span class="iconfont" style="color: #03a9f4; padding-bottom: 0.03rem">&#xe64d;</span>
          QQ登录
        </div>
        <div class="footer__icon__item">
          <span class="iconfont" style="color: #009688; padding-bottom: 0.03rem">&#xe67b;</span>
          短信验证
        </div>
      </div>
      <div class="footer__font">
        <p>未注册过的手机将自动保存为京东账户,</p>
        <p>使用微信登录时也需要输入手机号绑定你的京东账号</p>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import { post } from '../../utils/request'
export default {
  name: 'LoginPage',
  data() {
    return {
      user: {
        phone: '13913457284',
        password: ''
      },
      isActive: false
    }
  },
  methods: {
    handleLogin() {
      if (this.isActive) {
        post('/user/login', {
          phone: this.user.phone,
          password: this.user.password
        }).then((res) => {
          if (res.code === 200 && res.msg === '登录成功') {
            console.log(res.data)
            this.$store.commit('login', res.data)
            this.$store.commit('setStatus', true)
            router.push('/my')
          } else {
            console.log(res.message)
            this.user.password = ''
          }
        })
      }
    },
    handlePassWord() {
      console.log(123)
      if (this.user.password !== '') {
        this.isActive = true
      } else {
        this.isActive = false
      }
      console.log(this.isActive)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/index.scss";
.wrapper {
  position: absolute;
  top: 35%;
  right: 0;
  left: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    width: .66rem;
    height: .66rem;
    margin: 0 auto .4rem auto;
    border-radius: 50%;
  }
  &__input {
    height: .48rem;
    padding: 0 .16rem;
    margin: 0 .4rem .16rem .4rem;
    background: #f9f9f9;
    border: .01rem solid rgba(0, 0, 0, .1);
    border-radius: .06rem;
    &__content {
      width: 100%;
      margin-top: .12rem;
      color: $content-notice-fontcolor;
      font-size: .16rem;
      line-height: .22rem;
      background: none;
      border: none;
      outline: none;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__login-button {
    margin: .32rem .4rem .16rem .4rem;
    color: $bgColor;
    font-size: .16rem;
    line-height: .48rem;
    text-align: center;
    background-color: $search-fontColor;
    box-shadow: 0 .04rem .08rem 0 rgba(224, 224, 224, .5);
    border-radius: 1.6rem;
  }
  &__login-button-active {
    background-color: $btn-bgColor;
  }
  &__login-link {
    color: $content-notice-fontcolor;
    font-size: .14rem;
    text-align: center;
  }
}
.footer {
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-bottom: .3rem;
  &__sub {
    display: flex;
    justify-content: space-around;
    align-content: center;
    color: $search-fontColor;
    font-size: .1rem;
  }

  &__icon {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: .15rem;
    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      margin: .2rem;
      color: $search-fontColor;
      font-size: .1rem;
    }
  }
  &__font {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $search-fontColor;
    font-size: .1rem;
  }
}
</style>
