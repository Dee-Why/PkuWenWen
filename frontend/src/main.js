import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import 'element-plus/lib/theme-chalk/index.css'
import axios from 'axios'
// import Message from 'element-plus/lib/el-message/src/message'

const app = createApp(App)
installElementPlus(app)

app.use(store).use(router)
app.config.globalProperties.$http = axios
app.config.globalProperties.$url = 'http://127.0.0.1:8000/PkuWenWen'
// app.config.globalProperties.$message = Message
app.mount('#app')
