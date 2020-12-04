<template>
  <div class="login-container">
    <van-nav-bar class="app-nav-bar" title="登录 / 注册" left-arrow @click-left="$router.back()"/>
    <!-- 登录表单 -->
    <van-form @submit="onLogin"
    :show-error-message="false"
    :show-error="false"
    :validate-first="true"
    ref="login-form"
    @failed="onFailed">
      <van-field v-model="user.mobile"
      icon-prefix="toutiao"
      left-icon="shouji"
      placeholder="请输入手机号"
      name="mobile"
      center
      :rules="formRules.mobile"
      />
      <van-field v-model="user.code"
      clearable icon-prefix="toutiao"
      left-icon="yanzhengma"
      placeholder="请输入验证码"
      name="code"
      center
      :rules="formRules.code">
        <template #button>
          <van-count-down v-if="isDownCodeShow" :time="1000 * 5" format="ss s" @finish="isDownCodeShow = false"/>
          <van-button v-else class="send-btn"
          size="mini"
          round
          :loading="isSendCodeLodding"
          @click.prevent="onSendSms"
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
import { login, sendSms } from '@/api/user'
// import { Toast } from 'vant'

export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: 17090086870,
        code: 246810
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
      },
      isDownCodeShow: false, // 控制倒计时显示
      isSendCodeLodding: false // 控制lodding显示
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
        const { data } = await login(this.user)
        console.log(data)
        // 用Vuex保存共享数据
        this.$store.commit('setUser', data.data)
        this.$toast.success('登陆成功')
      } catch (err) {
        console.log(err)
        this.$toast.fail('登陆失败')
      }
    },

    onFailed (error) {
      if (error.errors && error.errors[0]) {
        this.$toast({
          message: error.errors[0].message,
          position: 'top'
        })
      }
    },

    async onSendSms () {
      // 校验手机号
      // this.$refs['login-form'].validate('mobile').then(
      //   data => {
      //     console.log(data)
      //     this.onFailed(data)
      //   })
      // 使用 async-await 异步获取回调结果
      try {
        await this.$refs['login-form'].validate('mobile')
        // 先lodding防止网卡了多次点击
        this.isSendCodeLodding = true
        // 发送验证码
        await sendSms(this.user.mobile)
        // 隐藏发送按钮, 显示倒计时
        this.isDownCodeShow = true
      } catch (err) {
        let message = ''
        if (err && err.response && err.response.status === 429) {
          message = '发送太频繁了, 请稍后重试'
        } else if (err.name === 'mobile') {
          message = err.message
        } else {
          message = '发送失败, 请稍后再试'
        }
        this.$toast({
          message: message,
          position: 'top'
        })
      }
      this.isSendCodeLodding = false
      // 发送验证码
      // const sendText = $('.send-btn').find('.van-button__text').text()
      // console.log(sendText)
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
