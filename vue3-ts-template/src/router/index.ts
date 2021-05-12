import { createRouter, createWebHashHistory } from 'vue-router'
import App from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    component: HelloWorld
  }
]
const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
