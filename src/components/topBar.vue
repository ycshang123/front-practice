<template>
  <div>
    <div class="list_title">
          <span >消息总数：</span><span>10</span>
              <a class="fr">清空所有消息</a>
                <span class="line fr"></span>
                <a class="fr">全部标记为已读</a>
          </div>
        <div class="chat-list">
            <div class="list-box">
              <img class="chat-head" src="../assets/苹果.png" alt="">
                <div class="chat-rig"><p class="title">苹果旗舰店</p>
                    <p class="text">新品上新点击查看...</p>
                </div>
                <div class="chat-time"><p class="time" >星期五</p>
                </div>
            </div>
        </div>
        <div class="chat-list">
            <div class="list-box">
              <img class="chat-head" src="../assets/安卓.png" alt="">
                <div class="chat-rig"><p class="title">安卓旗舰店</p>
                    <p class="text">你好。</p>
                </div>
                <div class="chat-time"><p class="time" >星期四</p>
                </div>
            </div>
        </div>
        <div class="chat-list">
            <div class="list-box">
              <img class="chat-head" src="../assets/1.png" alt="">
                <div class="chat-rig"><p class="title">京东自营旗舰店</p>
                    <p class="text">暂无新消息</p>
                </div>
                <div class="chat-time"><p class="time" >星期二</p>
                </div>
            </div>
        </div>
        <div class="chat-list">
            <div class="list-box">
              <img class="chat-head" src="../assets/数码.png" alt="">
                <div class="chat-rig"><p class="title">数码旗舰店</p>
                    <p class="text">你有一条新消息</p>
                </div>
                <div class="chat-time"><p class="time" >星期日</p>
                </div>
            </div>
        </div>
        <div class="chat-list">
            <div class="list-box">
              <img class="chat-head" src="../assets/乐高.png" alt="">
                <div class="chat-rig"><p class="title">乐高官方旗舰店</p>
                    <p class="text">我想成为你的专属客服</p>
                </div>
                <div class="chat-time"><p class="time" >2022/4/13</p>
                </div>
            </div>
        </div>
        <div class="chat-list">
            <div class="list-box">
              <img class="chat-head" src="../assets/z.png" alt="">
                <div class="chat-rig"><p class="title">zmovert旗舰店</p>
                    <p class="text">暂无新消息</p>
                </div>
                <div class="chat-time"><p class="time" >2022/4/11</p>
                </div>
            </div>
        </div>
        <div class="chat-list">
            <div class="list-box">
              <img class="chat-head" src="../assets/3.png" alt="">
                <div class="chat-rig"><p class="title">炎兴旗舰店</p>
                    <p class="text">对我的服务满意吗</p>
                </div>
                <div class="chat-time"><p class="time" >2022/2/26</p>
                </div>
            </div>
        </div>
        <div class="chat-list">
            <div class="list-box">
              <img class="chat-head" src="../assets/6.png" alt="">
                <div class="chat-rig"><p class="title">虹桥旗舰店</p>
                    <p class="text">请核对订单信息</p>
                </div>
                <div class="chat-time"><p class="time" >2022/1/29</p>
                </div>
            </div>
        </div>
        <div class="chat-list">
            <div class="list-box">
              <img class="chat-head" src="../assets/l.png" alt="">
                <div class="chat-rig"><p class="title">联系旗舰店</p>
                    <p class="text">你有一条店铺消息</p>
                </div>
                <div class="chat-time"><p class="time" >2022/1/14</p>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
export default {
  name: 'topBar',
  props: {
    title: String
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
@import "../style/virables.scss";
.top2{
  float: left;
  font-size: 8px;
}
* {
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: 黑体;
    font-size: 18px;
    text-decoration: none;
    color: black;
    outline: none;
}
.chat-list {
    margin-top:2px;
    float: left;
    width: 100%;
    height: .49rem;
    background-color: #f4f4f4;
}
.chat-list .list-box {
    height: 80px;
    width: 100%;
}
.chat-list .list-box .chat-head{
    float: left;
    height: 50px;
    width: 178px;
}
.chat-list .list-box .chat-rig {
    float: left;
    height: 50px;
    width: 178px;
}
.chat-list .list-box .chat-time{
    float: right;
    height: 100px;
}
.chat-list .list-box.select {
    background-color: #dbdbdb;
}
.chat-list .list-box:hover {
    background-color: #dbdbdb;
}
.chat-list .list-box img.chat-head {
    height: 50px;
    width: 50px;
    border: 1px solid #f4f4f4;
}
.chat-list .list-box .chat-rig .title {
    font-weight: 600;
    font-size: 17px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.chat-list .list-box .chat-rig .text {
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #6C6C6C;
}
.list_title{
    float: right;
    width: 100%;
    margin: 0;
    font-size: 14px;
    color: #3d3d3d;
    margin-bottom: 8px;
    display: block;
    overflow: hidden;
    zoom: 1;
    box-sizing: border-box;
}
.fr{
    float: right;
    display: inline-block;
    color: #4a90e2;
}
.line{
    display: inline-block;
    height: 12px;
    margin: 2px 12px;
    border-right: 1px solid #979797;
}
</style>
