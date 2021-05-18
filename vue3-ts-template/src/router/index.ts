import { createRouter, createWebHashHistory } from "vue-router"
import App from "vue"

import Layout from '@/layout/index.vue'

const routes = [
  {
    path: "/",
    name:"login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path:"/home",
    component:Layout,
    children:[
      {
        path:"/index",
        name:"Home",
        component:()=>import("@/views/home/index.vue")
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
