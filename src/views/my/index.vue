<template>
  <div class="my-container">
    <van-cell-group class="my-info">
      <van-cell
        class="base-info"
        title="昵称"
        center
        :border="false"
      >
        <template #icon>
          <van-image
            class="avatar"
            round
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </template>
        <template #title>
          <div class="name">昵称</div>
        </template>
        <template #right-icon>
          <van-button
            class="update-btn"
            size="small"
            round
          >编辑资料</van-button>
        </template>
      </van-cell>
      <van-grid class="data-info mb-4" :border="false">
        <van-grid-item class="data-info-item">
          <template #default>
              <div class="count">123</div>
              <div class="text">头条</div>
          </template>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <template #default>
              <div class="count">123</div>
              <div class="text">头条</div>
          </template>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <template #default>
              <div class="count">123</div>
              <div class="text">头条</div>
          </template>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <template #default>
              <div class="count">12322</div>
              <div class="text">头条</div>
          </template>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <van-grid class="nav-grid mb-4" :column-num="2">
      <van-grid-item class="nav-grid-item"
      icon-prefix="toutiao"
      icon="shoucang"
      text="收藏" />
      <van-grid-item class="nav-grid-item"
      icon-prefix="toutiao"
      icon="lishi"
      text="历史" />
    </van-grid>
    <van-cell title="消息通知" is-link to="" />
    <van-cell class="mb-4" title="小智同学" is-link to="" />
    <van-cell class="logout" title="退出登录"/>
  </div>
</template>

<script>
export default {
  name: 'MyIndex',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  methods: {}
}
</script>

<style lang="less">
.my-container {
  .my-info {
    background: url("./banner.png") no-repeat;
    background-size: cover;
    .base-info {
      background-color: unset;
      height: 115px;
      box-sizing: border-box;
      padding-top: 38px;
      padding-bottom: 11px;
      .avatar {
        height: 66px;
        width: 66px;
        border: 1px solid #fff;
        box-sizing: border-box;
        margin-right: 11px;
      }
      .name {
        color: #fff;
        font-size: 15px;
      }
      .update-btn {
        // width: 58px;
        height: 16px;
        font-size: 10px;
        color: #666;
      }
    }
    .data-info {
      .data-info-item {
        height: 65px;
        color: #fff;
        .count {
          font-size: 18px;
        }
        .text {
          font-size: 11px;
        }
      }
    }
    .van-grid-item__content {
      background-color: unset;
    }
  }
  .nav-grid {
    .nav-grid-item {
      height: 70px;
      .toutiao {
        font-size: 22px;
      }
      .toutiao-shoucang {
        color: #eb5253;
      }
      .toutiao-lishi {
        color: #ff9d1d;
      }
      .van-grid-item__text{
        font-size: 14px;
        color: #333;
      }
    }
  }
  .mb-4 {
    margin-bottom: 4px;
  }
  .logout {
    text-align: center;
    color: #d86262;
  }
}
</style>
