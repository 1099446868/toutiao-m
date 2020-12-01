/**
 * PostCSS配置文件
 */
module.exports = {
  plugins: {
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 7.1'],
    // },
    'postcss-pxtorem': {
      // 这个值正常情况下按照设计稿来
      // 750的设计稿, 应该写 750 / 10 = 75
      // 375的设计稿, 应该写 375 / 10 = 37.5
      // Vant是基于逻辑像素375写的, 移动开发一般以iphone6/7/8为原型写的
      // 设计稿一般是按照物理像素750写的, 与Vant冲突, 所以必须填37.5, 在测量设计稿的时候取值 / 2
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
