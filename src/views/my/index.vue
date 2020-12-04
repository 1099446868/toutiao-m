<template>
  <div class="my-container">
    <van-cell-group>
      <van-cell
        title="昵称"
        center
      >
        <template #icon>
          <van-image
            width="50"
            height="50"
            round
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </template>
        <template #right-icon>
          <van-button
            size="small"
            round
          >编辑资料</van-button>
        </template>
      </van-cell>
    </van-cell-group>
    <van-grid>
      <van-grid-item text="文字">
        <template #icon>
            <span>123</span>
        </template>
      </van-grid-item>
      <van-grid-item text="文字">
        <template #icon>
            <span>123</span>
        </template>
      </van-grid-item>
      <van-grid-item text="文字">
        <template #icon>
            <span>123</span>
        </template>
      </van-grid-item>
      <van-grid-item text="文字">
        <template #icon>
            <span>123</span>
        </template>
      </van-grid-item>
    </van-grid>
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

<style>
</style>
<style lang="less"></style>
