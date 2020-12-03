<template>
  <div class="login-container">
    <!-- 子路由出口 -->
    <router-view />
    <!--/ 子路由出口 -->
    <van-nav-bar class="app-nav-bar" title="登录 / 注册" left-arrow @click-left="$router.back()"/>
    <!-- 登录表单 -->
    <van-form @submit="onLogin"
    :show-error-message="false"
    :show-error="false"
    :validate-first="true"
    @failed="onFailed">
      <van-field v-model="user.mobile"
      icon-prefix="toutiao"
      left-icon="shouji"
      placeholder="请输入手机号"
      :rules="formRules.mobile"
      />
      <van-field v-model="user.code"
      clearable icon-prefix="toutiao"
      left-icon="yanzhengma"
      placeholder="请输入验证码"
      :rules="formRules.code">
        <template #button>
          <van-button class="send-btn"
          size="mini"
          round
          @click="onSendSms()"
          >发送验证码</van-button>
        </template>
      </van-field>
      <div class='login-btn-wrap'>
        <van-button class='login-btn' type="primary" native-type="submit" block>登录</van-button>
      </div>
    </van-form>
    <!--/ 登录表单 -->
    <div class="default-user-wrap">
      <p>测试账号: 17090086870</p>
      <p>测试密码: 246810</p>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
// import { Toast } from 'vant'

export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      formRules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[1-9]\d{9}$/, message: '手机号格式错误' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码格式错误' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    async onLogin () {
      // Toast.loading({
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true, // 禁用背景点击
        duration: 0 // 展示时长(ms)，值为 0 时，toast 不会消失
      })
      try {
        const res = await login(this.user)
        console.log(res)
        this.$toast.success('登陆成功')
      } catch (err) {
        console.log(err)
        this.$toast.fail('登陆失败')
      }
    },

    onFailed (error) {
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message,
          position: 'top'
        })
      }
    },

    onSendSms () {
      // 发送验证码
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .send-btn {
    width: 76px;
    height: 23px;
    background-color: #ededed;
    .van-button__text {
      font-size: 11px;
      color: #666666;
    }
  }
  .login-btn-wrap {
    padding: 26px 16px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
      .van-button__text {
        font-size: 15px;
      }
    }
  }
  .default-user-wrap {
    width: 80%;
    margin: 0 auto;
    p {
      font-size: 15px;
      color: #c5c5c5;
    }
  }
}
</style>
