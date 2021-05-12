import { createApp } from "vue"
import App from "./App.vue"

import store from "./store"
import router from "./router"
import SvgIcon from "./components/SvgIcon/index.vue"

import ElementPlus from "element-plus"
import "element-plus/lib/theme-chalk/index.css"
const app = createApp(App)
app.component("svg-icon", SvgIcon)
app.use(ElementPlus, { size: "small", zIndex: 3000 })
app.use(store)
app.use(router)
app.mount("#app")
