import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载全局样式
import './styles/index.less'

// 加载vant组件库
import Vant from 'vant'
// 加载vant样式
import 'vant/lib/index.css'
// 全局注入vant组件

// 加载自动设置rem基准值(html大小)
import 'amfe-flexible'

createApp(App).use(store).use(router).use(Vant).mount('#app')
