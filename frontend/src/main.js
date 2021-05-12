import { createApp } from 'vue'
<<<<<<< Updated upstream
=======
import 'element-plus/lib/theme-chalk/index.css'
>>>>>>> Stashed changes
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')
