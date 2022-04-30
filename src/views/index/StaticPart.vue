<template>
  <div>
    <!-- 顶部搜索 -->
    <div class="position">
      <span class="iconfont" style="font-size: 0.18rem">&#xe60a;</span>
      南京工业职业技术大学计算机与软件学院软件工程技术本科专业2021级
      <span class="iconfont position__notice" style="font-size: 0.18rem">&#xe64c;</span>
    </div>

    <!-- 搜索 -->
    <div class="search">
      <span class="iconfont" style="font-size: 0.18rem">&#xe618;</span>
      <span class="search__text">山姆会员商店优惠商品</span>
    </div>

    <div class="banner">
      <img src="https://chl-bucket.oss-cn-hangzhou.aliyuncs.com/md/202204251435492.jpeg" class="banner__img" alt="" />
    </div>
    <!-- icons九宫格区 -->
    <icon-list :Icons="iconList"></icon-list>

    <div class="gap"></div>
  </div>
</template>

<script>
import IconList from '../../components/IconList.vue'
export default {
  components: { IconList },
  name: 'StaticPart',
  props: { IconList },
  data() {
    return {
      iconList: [
        {
          title: '超市便利',
          img: 'https://chl-bucket.oss-cn-hangzhou.aliyuncs.com/icon/icon/%E8%B6%85%E5%B8%82.png'
        },
        {
          title: '菜市场',
          img: 'https://chl-bucket.oss-cn-hangzhou.aliyuncs.com/icon/icon/%E8%8F%9C%E5%B8%82%E5%9C%BA.png'
        },
        {
          title: '水果店',
          img: 'https://chl-bucket.oss-cn-hangzhou.aliyuncs.com/icon/icon/%E6%B0%B4%E6%9E%9C%E5%BA%97.png'
        },
        {
          title: '鲜花绿植',
          img: 'https://chl-bucket.oss-cn-hangzhou.aliyuncs.com/icon/icon/%E9%B2%9C%E8%8A%B1.png'
        },
        {
          title: '医药健康',
          img: 'https://chl-bucket.oss-cn-hangzhou.aliyuncs.com/icon/icon/%E5%8C%BB%E8%8D%AF%E5%81%A5%E5%BA%B7.png'
        },
        {
          title: '家居时尚',
          img: 'https://chl-bucket.oss-cn-hangzhou.aliyuncs.com/icon/icon/%E5%AE%B6%E5%B1%85.png'
        },
        {
          title: '烘焙蛋糕',
          img: 'https://chl-bucket.oss-cn-hangzhou.aliyuncs.com/icon/icon/%E8%9B%8B%E7%B3%95.png'
        },
        {
          title: '签到',
          img: 'https://chl-bucket.oss-cn-hangzhou.aliyuncs.com/icon/icon/%E7%AD%BE%E5%88%B0.png'
        },
        {
          title: '大牌免运',
          img: 'https://chl-bucket.oss-cn-hangzhou.aliyuncs.com/icon/icon/%E5%A4%A7%E7%89%8C%E5%85%8D%E8%BF%90.png'
        },
        {
          title: '红包套餐',
          img: 'https://chl-bucket.oss-cn-hangzhou.aliyuncs.com/icon/icon/%E7%BA%A2%E5%8C%85.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/index.scss";
.position {
  // background: greenyellow;
  @include ellipse;
  position: relative;
  padding: .16rem .16rem .16rem 0;
  color: $content-fontcolor;
  font-size: .16rem;
  &__notice {
    position: absolute;
    right: 0;
    // top: 0.1rem;
    // font-size: 0.2rem;
  }
}
.search {
  margin-bottom: .12rem;
  color: $placeholder-fontcolor;
  line-height: .32rem;
  background-color: $background-color;
  border-radius: .16rem;
  .iconfont {
    display: inline-block;
    padding: 0 .12rem 0 .16rem;
    font-style: .2rem;
  }
  &__text {
    display: inline-block;
    font-size: .14rem;
  }
}
.banner {
  overflow: hidden;
  // hack技巧：预留出高度防抖，(图片高/宽)
  height: 0;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.gap {
  height: .1rem;
  margin: 0 -.18rem;
  background-color: $content-bgColor;
}
</style>
